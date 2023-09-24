import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { Public } from 'src/v1/auth/decorators/public.decorator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Public()
  @Get()
  @HealthCheck()
  check() {
    //   THis is useful for check status of external services
    //       return this.health.check([
    //     () =>
    //       this.http.responseCheck(
    //         'my-external-service',
    //         'https://my-external-service.com',
    //         (res) => res.status === 204,
    //       ),
    //   ]);

    return this.health.check([
      () => this.http.pingCheck('database-docs', 'https://planetscale.com/'), // Check external links or services
      () =>
        this.disk.checkStorage('storage', {
          path: '/',
          // path: 'C:\\',
          thresholdPercent: 0.5,
        }), // the path could be C:\\ in windows and / on linux
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024), // This example would return an unhealthy response code in case your process does have more than 150MB allocated.
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024), //RSS is the Resident Set Size and is used to show how much memory is allocated to that process and is in RAM
    ]);
  }
}
