import { IsNotEmpty } from 'class-validator';

export class Login {
  /**
   * Username (email)
   * @example 'carlos@luluapi.co'
   */
  @IsNotEmpty()
  username: string;
  /**
   * User password
   * @example '1234'
   */
  @IsNotEmpty()
  password: string;
}
