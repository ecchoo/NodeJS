const axios = require('axios');

const fetch = async () => {
    // try {
    //     const { data } = await axios.post('http://localhost:3000/api/auth/login', {
    //         name: 'test',
    //         password: 'password',
    //         email: 'test@test.test'
    //     });
    //     console.log(data)
    // } catch (error) {
    //     console.error(error);
    // }

   const res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}$/.test('481516234204Ww!')
   console.log(res)
};

fetch();