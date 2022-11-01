import { Request, Response } from 'express';
import generateToken from '../helpers/token';
import UserService from '../services/usersServices';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public postUsers = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    await this.service.postUsers({ username, classe, level, password });

    const token = generateToken(username);

    res.status(201).json({ token });
  };
}