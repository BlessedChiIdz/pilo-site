Интернет магазин на React(front)/Express js(back).
Работа приложения:
Пользователь входит на сайт, ему присваивается id, который сохраняется в cookie, корзина привязана к этому id. Пользователь добавляет товары в корзину, переходит в корзину, вводит номер своего телефона при оформлении заказа, нажимает кнопку оформить и письмо со всей информацией о заказе посылается на мейл консультанта магазина. Т.к. магазин маленький смысла в личном кабинете с заказами не было, как я понял этот сайт нужен что бы люди не стояли в очереди пока заказ собирают а приезжали забирать сразу готовый заказ.

Запуск приложения:
cd front/qwe, npm install, npm start.
cd back, npm install, npm run dev.
Также нужно скачать pgAdmin(windows) или postgreSQL(linux), создать нового пользователя, создать базу данных, и занести данные о пользователе, его пароле, названии БД в файл .end в папке back. SECRET_KEY, DB_PORT,PORT можно оставить без изменений.
При деплое нужно будет поменять DB_HOST на ip вашего сервера.

Stack(front):
Запросы на сервер - axios.
шаблоны - bootstrap.
Навигация по сайту - React router dom.
global state - reactContext + mobx
Доступ к страницам осуществляется посредством токена, есть 2 типа пользователей admin и user, по дефолту все пользователи админы, страница регистрации, авторизации, и админ панель спрятаны, нужно знать url чтобы на них попасть, т.к. это сайт маленького магазина этих мер безопасности вполне достаточно, также можно было делать всех зарегистрированных юзерами а админов добавлять непосредственно в БД. Страница регистрации спрятана т.к. корзина товаров привязывается к cookie, доступ в адимн панель только зарегестрированным пользоватям.

Stack(back):
Работа с БД - express js, хэширование паролей - bcrypt, парс вебтокена - jsonwebtoken, отправка почты - nodemailer, политика единого источника - cors.
