import { getCustomRepository } from 'typeorm';
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class UserCreateService {

    async execute({ name, email, admin }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email não é valido");
        }
        const userAlreadyExists = await userRepositories.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("Email ja cadastrado");
        }

        const user = userRepositories.create({
            name,
            email,
            admin
        });

        await userRepositories.save(user);

        return user;
    }

}

export { UserCreateService };