import { Router } from 'express';
import UsersController from '../controllers/usersControllers';

const users = Router();
const controller = new UsersController();

users.post('/', controller.postUsers);

export default users;