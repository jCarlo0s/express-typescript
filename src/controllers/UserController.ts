import { Request, Response } from 'express';

/**
 * @interface User
 */
interface User {
    firstName: string;
    lastName: string;
    address: string;
    age: number;
}

/**
 * @class UserController
 */
export class UserController {
    public getUsers(req: Request, res: Response) {
        const user: User = {
            firstName: 'juan carlos',
            lastName: 'Andrade',
            address: 'Conocida',
            age: 30
        };
        res.status(200).send(user);
    }
}
