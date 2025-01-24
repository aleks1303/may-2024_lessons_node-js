import { ApiError } from "../errors/api-error";
import {
  IUser,
  IUserCreateDto,
  IUserUpdateDto,
} from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }
  public async create(dto: IUserCreateDto): Promise<IUser> {
    await this.isEmailUnique(dto.email);
    const password = await passwordService.hashPassword(dto.password);
    return await userRepository.create({ ...dto, password });
  }
  public async getUserById(userId: string): Promise<IUser> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }
  public async updateUser(
    userId: string,
    dto: IUserUpdateDto,
  ): Promise<IUser | null> {
    // if (!dto.name || dto.name.length < 3) {
    //   throw new ApiError(
    //     "Name is required and should be minimum 3 symbols",
    //     400,
    //   );
    // }
    // if (!dto.email || !dto.email.includes("@") || dto.email.length < 3) {
    //   throw new ApiError("Email is required", 400);
    // }
    // if (!dto.password || dto.password.length < 8) {
    //   throw new ApiError(
    //     "Password is required and should be minimum 8 symbols",
    //     400,
    //   );
    // }
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return await userRepository.updateUser(userId, dto);
  }
  public async deleteUser(userId: string): Promise<any> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    await userRepository.deleteUser(userId);
  }

  private async isEmailUnique(email: string): Promise<void> {
    const user = await userRepository.getByEmail(email);
    if (user) {
      throw new ApiError("Email is already in use", 409);
    }
  }
}
export const userService = new UserService();
