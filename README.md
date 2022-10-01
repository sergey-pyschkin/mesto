# Проект "Место"
Проект выполнен на платформе "Яндекс практикум" в рамках спринта №4 и представляет собой сайт, куда можно добавлять фотографии, удалять их и ставить лайки.
***
## Структура сайта
Семантически сайт подеоен на несколько блоков и секций:
1. __Блок header__ - шапка сайта;
2. __Блок content__ - Основное содержимое страницы, который, в свою очередь, состоит из нескольких секций:
  * __Секция profile__  - профайл пользователя;
  * __Секция places__ - карточки, загруженные пользователями;
 3. __Блок footer__ - подвал сайта.
***
## Функционал проекта
### 1. Организация файлов в проекте
Проект создан по методологии БЭМ, аайловая структура в реализована по схеме Nested:
* Каталог block - содержит блоки проекта, модификаторы и элементы;
* Каталог images - содержит изображения, используемые в проекте;
* Каталог page - содержит страницы сайта;
* Каталог vendor - содержит сторонние CSS файлы.
* Каталог scripts - содержит js файлы.

### 2. Используемые технологии
Все элементы страницы хранятся в родительском блоке `page` Контент идет по сетке. В проекте используется файл _Normalize.css_.

В проекте используются бесплатный шрифт `Inter` от дизайнеров «Фигмы».

Для реализации изменения прозрачности ссылок при наведении на них курсора мыши используются свойства `opacity` и `transition`.

Сайт адаптирован под мобильные устройства в диапазоне разрешений от `320px` до `1280px`. При разрешении выше  `1280px` внешний вид сайта не меняется.

В блоках profile__info и places используется двумерная grid-сетка.

### 3. Планы по доработке
1. Реализовать работу кнопки like;
2. Реализовать добавление сгенерированного контента пользователями;
3. Реализовать подключение к серверу

### 4. Ссылка проекта на GitHub
[MESTO](https://sergey-pyschkin.github.io/mesto/)
# mesto
# mesto
