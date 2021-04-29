import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"; //duvida aqui
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string) {
        // verificar se usuario existe
        const userExists = await this.usersRepository.findOne({ email });
        // se existir, retonar user
        if (userExists) {
            return userExists;
        }
        const user = this.usersRepository.create({ email });
        // se não existir, salvar no DB
        await this.usersRepository.save(user);
        return user;
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}
export { UsersService };