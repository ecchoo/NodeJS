export const PRODUCT_COLUMNS = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Composition',
        dataIndex: 'composition',
        key: 'composition',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        filters: [
            {
                text: 'Pizza',
                value: 'pizza',
            },
            {
                text: 'Drink',
                value: 'drink',
            },
            {
                text: 'Sauce',
                value: 'sauce',
            },
            {
                text: 'Dessert',
                value: 'dessert',
            },
        ],
        onFilter: (value, record) => record.category == value,
    },
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo'
    },
];