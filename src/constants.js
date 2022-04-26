export const USERS = [
    {
        isAdmin: true,
        email: 'admin@test.ru',
        password: 'admin123',
        username: 'Администратор'
    },
    {
        isAdmin: false,
        email: 'user@test.ru',
        password: 'user123',
        username: 'Юзверь'
    }
];
export const ARTICLES = [
    {
        approved: true,
        title: 'Заголовок 1',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://foto-konkursy.ru/wp-content/uploads/samaya-krasivaya-strana-2019-120.jpg',
        date: new Date(Date.now() - 100000000)
    },
    {
        approved: true,
        title: 'Заголовок 2',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://st.depositphotos.com/2001755/2633/i/600/depositphotos_26334881-stock-photo-beautiful-landscape.jpg',
        date: new Date(Date.now() - 200000000)
    },
    {
        approved: true,
        title: 'Заголовок 3',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTw9jBgobd849n38_1-lprUfYj6hQu3b5tA&usqp=CAU',
        date: new Date(Date.now() - 300000000)
    },
    {
        approved: true,
        title: 'Заголовок 4',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/43158/04-lashkov-fyodor-osennee-ozero-tumanly-kel-dombay-kavkaz.jpg?itok=uszrbmNe',
        date: new Date(Date.now() - 400000000)
    },
    {
        approved: false,
        title: 'Заголовок 5',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://foto-konkursy.ru/wp-content/uploads/samaya-krasivaya-strana-2019-120.jpg',
        date: new Date(Date.now() - 500000000)
    },
    {
        approved: false,
        title: 'Заголовок 6',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus autem praesentium blanditiis tenetur nemo, non veritatis laboriosam iure nulla! Suscipit ab minima delectus, nihil ipsam voluptates praesentium? Magni, vero quaerat. Voluptates praesentium? Magni, vero quaerat.`,
        thumb: 'https://na-dache.pro/uploads/posts/2021-05/1621549205_21-p-foto-krasivaya-dacha-v-gorakh-21.jpg',
        date: new Date(Date.now() - 600000000)
    }
];