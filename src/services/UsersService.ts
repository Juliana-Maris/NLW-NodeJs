import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        // verificar se usuario existe
        const userExists = await usersRepository.findOne({
            email
        })
        // se existir, retonar user
        if (userExists) {
            return userExists;
        }
        const user = usersRepository.create({
            email
        });
        // se não existir, salvar no DB
        await usersRepository.save(user);
        return user;
    }
}

export { UsersService };