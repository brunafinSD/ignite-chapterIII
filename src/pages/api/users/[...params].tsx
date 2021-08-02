import { NextApiRequest, NextApiResponse } from 'next'

export default function getUsers(request: NextApiRequest, response: NextApiResponse){
    const params = request.query;

    console.log(params);

    const users = [
        { id: 1, nome: 'Bruna'},
        { id: 2, nome: 'Tiago'},
        { id: 3, nome: 'Elia'},
        { id: 4, nome: 'Paulo'},
    ]

    return response.json(users);
}