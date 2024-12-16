# Тестовое задание для Mindbox

## Деплой приложения
[Тык](https://drainkid.github.io/mindbox_test/)

## Задача 
Сделайте ToDo-приложение, позволяющее управлять текущим списком дел

Что должно быть в интерфейсе:

Поле для ввода новой задачи

Списки всех задач, невыполненных и выполненных задач (по отдельности)

Требования к коду:

Приложение создано с использованием TypeScript, React и React Hooks

Библиотеки компонент – на ваше усмотрение

Ключевая на ваш взгляд функциональность обязательно покрыта тестами

Проект должен запускаться командой npm i && npm run start

Проект доступен на GitHub Pages/Vercel/etc.


## Запуск приложения локально

npm i

npm run start

## Запуск тестов (e2e)

npm run test:cypress

Скрипт сам запустит dev сервер и тесты, поэтому отдельно сервер поднимать через npm start не требуется

Если нужна визуальная оболочка Cypress:

Поменять в package.json 

"cypress": "cypress run" на "cypress": "cypress open"

