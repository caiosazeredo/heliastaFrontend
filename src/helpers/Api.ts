import axios from 'axios'


const BASEAPI = 'http://localhost:3001';


const Api = {
    login: async (email: string, password: string) => {
        /* const res = await axios.post(`${BASEAPI}/signin`, {
            email,
            password
        })
        return res.data */
        console.log(email, password)
        if(email === 'xexeo@cos.ufrj.br' && password === '123456'){
            let user = {
                id: 123456,
                name: 'Xexeo',
                email: 'xexeo@cos.ufrj.br',
                password: '123456',
                token: 'ufysgefjikneaflkdne'
            }
            return user
        }else{
            return { error: "Email e/ou senha incorretos!\nPor favor, tente novamente." }
        }
    },
    validateToken: async (token: string) => {
        /* const res = await axios.post(`${BASEAPI}/validateToken`, {
            token
        })
        return res.data */
        console.log(token)
        if(token === 'ufysgefjikneaflkdne'){
            let user = {
                id: 123456,
                name: 'Xexeo',
                email: 'xexeo@cos.ufrj.br',
                password: '123456',
                token: 'ufysgefjikneaflkdne'
            }
            return user
        }else{
            return { error: 'Erro de comunicação com o banco de dados.' }
        }
    }
}


export default () => Api