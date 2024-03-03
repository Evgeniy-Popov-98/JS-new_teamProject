      Доброго дня командо) Напишу робота яка ще залишається для нашого сайту (щоб було не соромно виставити на LinkeDin)
      
1) ~~Збереження теми сайту при переході на наступну сторінку або при перевантаженні сторінки~~ (Виконано)
2) Якоря на на секції книг (Щоб при натисканні на категорію одразу переводило на початок секції з книгами)
3) ~~Сортування та підсвічування списку категорій (Цім вже занята Анета)~~ (Виконано)
4) Модальне вікно авторизації користувача 
5) Фікс положень елементів в мобільному меню (блок з авторизацією користувача занадто низько), плюс додати блок виходу з аккаунта (якщо юзер авторизувався то замінити на блок виходу)
6) Додати до проекту бібліотеку для авторизації користувача
7) Зробити пагінацію для сторінки шопінг лист 
8) Додати відображення кількості книг в шопін листі (вкрав ідею але вона дуже гарна щоб не додати її до себе)
9) Доробити елементи які використовуються користувачем інтерактивними (Щоб можна було переходити і натискати їх через клавіатуру)
10) Почистити код та покращити написання його (Видалити стилі, класи які не використовуються або повторюються, покращити написання js)
  

        Запроси на сервер виконуються через файл api-books.js 
Для цього потрібно інпортувати функцію getBooks. Ця функція має два аргеммента: 
ebdpoints - потрібен для отримання списку категорій, або топ книг, або отримати книгу по ID. category - цей аргумент потрібен при запиті за певною категорією книг 
  
    Приклад 1:
     ```{main.js} {let endpoints = 'category-list'; 
    const test1 = await getBooks(endpoints);}```    
    Отримаємо масив об'єктів де будуть всі наявні категорії книг 
    
    Приклад 2:
    ```{main.js} {let endpoints = 'category'; 
    let category = 'Audio Fiction'; 
    const test4 = await
    getBooks(endpoints, category); }```
    Отримуємо масив об'єктів книг з однієї категорії
