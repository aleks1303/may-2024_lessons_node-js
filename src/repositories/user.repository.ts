import { IUser, IUserDto } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await User.find();
  }
  public async create(dto: IUserDto): Promise<IUser> {
    return await User.create(dto);
  }
  public async getById(userId: string): Promise<IUser | null> {
    return await User.findById(userId);
  }
  public async updateUser(userId: string, dto: IUserDto): Promise<any> {}
  public async deleteUser(userId: string): Promise<void> {}
}
export const userRepository = new UserRepository();
