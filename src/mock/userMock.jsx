import Mock from '../utils/Mock'


Mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'erikasato',
        'email': 'erikasato@erikasato.com.br',
        'avatar': 'src/images/avatars/img.jpg'
    }
})

Mock.onPost('/api/home/login').reply((config) => {
  
    const {email, password} = JSON.parse(config.data)    //json.parse pegará o config(que é uma string/json) e irá transformar em um obj com duas propriedades: email e password
  
    if (email !== 'erikasato@erikasato.com.br' || password !== 'admin') {
        return [400, {message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Erika Sato',
        username: 'erikasato',
        email: 'erikasato@erikasato.com.br',
        avatar: 'src/images/avatars/img.jpg'
    }
    return [200, {user}]
})