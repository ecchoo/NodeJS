const axios = require('axios');

const fetch = async () => {
    try {
        const { data } = await axios.put('http://localhost:3000/api/basket/updateCount', {
            productId: 5,
            count: 2
        });

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetch();