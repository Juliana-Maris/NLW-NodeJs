import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/Settingsrepository";

const routes = Router();

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository);
    // para criar objeto dentro de uma tabela
    const settings = settingsRepository.create({
        chat,
        username
    })
    await settingsRepository.save(settings);
    return response.json(settings);
})

export { routes }