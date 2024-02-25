export const USERS_COLUMNS = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        filters: [
            {
                text: 'Admin',
                value: 'admin',
            },
            {
                text: 'User',
                value: 'user',
            },
        ],
        onFilter: (value, record) => record.role == value,
    },
    {
        title: 'Date register',
        dataIndex: 'createdAt',
        key: 'createdAt'
    },
];