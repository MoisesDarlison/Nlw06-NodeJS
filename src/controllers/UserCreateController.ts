import { Request, Response } from 'express';
import { UserCreateService } from '../services/UserCreateService';

class UserCreateController {
    async handle(request: Request, response: Response) {

        const { name, email, admin } = request.body;

        const createUserService = new UserCreateService();

        const user = await createUserService.execute({ name, email, admin });

        return response.status(201).json(user);
    }

}

export { UserCreateController }