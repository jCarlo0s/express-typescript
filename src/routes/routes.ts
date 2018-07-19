import { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

export class Routes {
    public userController: UserController = new UserController();
    public routes(app): void {
        app.route('/user').get(this.userController.getUsers);
    }
}