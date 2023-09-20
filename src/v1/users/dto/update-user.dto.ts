import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  /**
   * Name of the user
   * @example 'Carlos Andres'
   */
  @IsNotEmpty()
  name: string;

  /**
   * User email
   * @example 'carlos@luluapi.com'
   */
  @IsNotEmpty()
  email: string;

  /**
   * User password
   * @example '4321'
   */
  @IsNotEmpty()
  password: string;
}
