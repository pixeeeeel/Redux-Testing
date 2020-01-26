'use strict';
var port = process.env.PORT || 1337;

//Подключение модулей
const express = require("express");

//Создание сервера
const app = express();

app.set('view engine', 'html');
app.set("views", "app/build");
app.engine('html', require('hbs').__express);

//Роуты
app.use(express.static(__dirname + "/app/build"));

//Рендер сайта
app.get("*", function (req, res) {
    res.render('index');
});

//Запуск сервера
app.listen(port);