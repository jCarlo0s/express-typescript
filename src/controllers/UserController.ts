import { Request, Response } from 'express';

interface User {
    name: string;
    age: number;
}

export class UserController {
    public getUsers(req: Request, res: Response) {
        const user: User = {
            name: 'juan',
            age: 30
        };
        res.status(200).send(user);
    } 
}
