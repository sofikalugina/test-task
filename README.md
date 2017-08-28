# Project description
My name Sofi. I created this repository to perform the test task to joining the Company 'ЛІГА:ЗАКОН'.

### Business requirements

| Business need 	| Implementation 	| Nuances 	|
|:--------------------------------------------------------------------------------------------------------------------------:	|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| Файловая структура. 	| Для организации файловой структуры данного приложения использовался паттерн стандартной структуры MVC приложения. 	| Декомпозиция по компонентам приложения, представляющим отдельные логические модули является избыточной для столь небольшого приложения. 	|
| Написать приложение на последней версии AngularJS. 	| Использована самая последняя версия фреймворка AngularJS, на момент выполнения тестового задания - 1.6.6 	| - 	|
| - шапка с навигацией(пару ссылок) 	| Реализовано в полной мере. 	| - 	|
| - пару страниц с любым контентом 	| Страница home реализована на основании контента загружаемого из JSON файла при инициализации приложения. 	| - 	|
| - одна страница с формой, и кнопкой "отправить" (вывод данных в консоль) 	| На странице form реализована форма регистрации пользователя с выводом данный в консоль, простой вализацией полей и размещением данных о пользователях в гриде. 	| Имела место идея с сохранением данных о пользователях в localStorage вместо работы, напрямую, с DOM, однако реализация повлекла бы дополнительные затраты времени. 	|
| - использовать ui-router -> abstract стейт, для того что бы сделать дочерние/вложенные стейты с общим controller и resolve 	| Страница articles использует abstract стейт article и дочерние не абстрактные стейты list и :slugName, для вывода списка и одной, выбранной статьи. 	| - 	|
| - использовать на проекте хотя бы по одной штуке(directive, component, service,factory) 	| Описанные технологии реализованы в следующих страницах: 1. directive - на странице form для создания TODO list для каждого пользователя в списке пользователей; 2. component - на странице home, для смены имени пользователя; 3. service - в стейте home для получения данных; 4. factory - в стейте articles для получения данных. 	| - 	|
| - настроить gulp сборку 	| Сборка реализована на основании Gulp. Ниже приведена инструкция для сборки и запуска сервера приложения. 	| В сборщике не реализована uglify для минификации JavaScript кода и minify для минификации css. Это обусловлено отсутствием требований и необходимостью имплементации механизма ng-annotate. 	|

### Tech

I've used a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Gulp] - the streaming build system
* [jQuery] - is a fast, small, and feature-rich JavaScript library...
* [Stylus] - CSS preprocessor

### Installation

Application requires [Node.js] v4+ to run.

Install the dependencies and devDependencies.

```sh
$ cd test-task
$ npm install -d
```

#### Building for source

Generating built and start express server:
```sh
$ gulp start
```

License
----

MIT

   [git-repo-url]: <https://github.com/sofikalugina/test-task>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <https://getbootstrap.com/docs/3.3/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [Stylus]: <http://stylus-lang.com/>