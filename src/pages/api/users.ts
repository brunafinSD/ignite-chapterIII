import { NextApiRequest, NextApiResponse } from 'next'

export default function getUsers(request: NextApiRequest, response: NextApiResponse){
    const users = [
        { id: 1, nome: 'Bruna'},
        { id: 1, nome: 'Tiago'},
        { id: 1, nome: 'Elia'},
        { id: 1, nome: 'Paulo'},
    ]

    return response.json(users);
}