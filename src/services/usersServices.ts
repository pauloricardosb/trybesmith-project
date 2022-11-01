import CreateError from '../helpers/createError';
import { User } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/usersModel';
import userSchema from '../helpers/userSchemas';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async postUsers(user: User): Promise<number> {
    const { error } = userSchema.validate(user);

    if (error) {
      throw new CreateError(422, error.message);
    }

    return this.model.postUsers(user);
  }
}