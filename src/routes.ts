import { Router } from "express";
import { SettingsController } from "./constrollers/SettingsController";
import { UsersController } from "./constrollers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };