import {
  IUser,
  IUserCreateDto,
  IUserUpdateDto,
} from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  constructor() {}
  public async getList(): Promise<IUser[]> {
    return await User.find();
  }
  public async create(dto: IUserCreateDto): Promise<IUser> {
    return await User.create(dto);
  }
  public async getById(userId: string): Promise<IUser | null> {
    return await User.findById(userId);
  }
  public async getByEmail(email: string): Promise<IUser> {
    // @ts-ignore
    return await User.findOne({ email });
  }
  public async updateUser(
    userId: string,
    dto: IUserUpdateDto,
  ): Promise<IUser | null> {
    return await User.findByIdAndUpdate(userId, dto, { new: true });
  }
  public async deleteUser(userId: string): Promise<void> {
    await User.deleteOne({ _id: userId });
  }
}
export const userRepository = new UserRepository();
