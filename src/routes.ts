import { Request, Response } from 'express'
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: "Moisés Junior",
        email: "nem.moises@hotmail.com",
        password: "password",
        children: [{
            name: "Nenhum",
            rg: "34.387.319-3"
        }]
    });

    return response.json(user);
}   