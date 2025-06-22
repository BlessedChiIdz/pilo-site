const{Basket} = require('../models/models')
const ApiError = require("../error/ApiError");
const {post} = require("axios");
cookieParser = require('cookie-parser');
class cassaController{
    async createPayment(req, res) {
        const SHOP_ID = '1111398';
        const SECRET_KEY = 'test_WsdM9iWGMmWkKgQ8PbRbxdQk2CgO26pBO_fhvQu3ZHU';
        const YOOKASSA_API = 'https://api.yookassa.ru/v3/payments';
        try {
            const { amount, description } = req.body;

            const response = await post(
                YOOKASSA_API,
                {
                    amount: {
                        value: amount.toFixed(2),
                        currency: 'RUB',
                    },
                    payment_method_data: {
                        type: 'bank_card',
                    },
                    confirmation: {
                        type: 'redirect',
                        return_url: 'http://localhost:3000/success',
                    },
                    description: description || 'Оплата товара',
                },
                {
                    auth: {
                        username: SHOP_ID,
                        password: SECRET_KEY,
                    },
                    headers: {
                        'Idempotence-Key': Date.now(),
                    },
                }
            );
            res.json({ url: response.data.confirmation.confirmation_url });
        } catch (error) {
            console.error('Ошибка:', error.response?.data || error.message);
            res.status(500).json({ error: 'Ошибка при создании платежа' });
        }
    }

    async webHook(req, res){
        const { event, object } = req.body;

        if (event === 'payment.succeeded') {
            console.log(`Платеж ${object.id} успешен!`);
        }

        res.status(200).end();
    }
}

module.exports = new cassaController()