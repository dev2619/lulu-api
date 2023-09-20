import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  /**
   * Name of the user
   * @example 'Carlos Andres'
   */
  @IsNotEmpty()
  name: string;
  /**
   * User email for sign in before
   * @example 'carlos@luluapi.com'
   */
  @IsNotEmpty()
  email: string;

  /**
   * User pass for sign in before
   * @example '1234'
   */
  @IsNotEmpty()
  password: string;
}
