import { ApiError } from "../errors/api-error";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";

class AuthService {
  public async signIn(dto: any): Promise<any> {
    const user = await userRepository.getByEmail(dto.email);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("Incorrect email or password", 401);
    }
  }
}
export const authService = new AuthService();
