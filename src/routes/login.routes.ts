import express from 'express'
import { LoginController } from '../controller/login.controller'

export class LoginRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {

        this.router.post('/login', async (req, res, next) => {
            try {
                var response = await new LoginController().login(req.body);
                res.status(200).json({
                    token_key: response.tokey_key,
                    message: response.message
                }).end();
            } catch (err) {
                next(err);
            }

        });
    }
}
export const LoginRoutesApi = new LoginRoutes().router;