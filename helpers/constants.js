const userData = [{
    name: 'John',
    id: 1,
    address: "Blueberry str",
    orders: [{
        id: 1,
        name: 'Cinnamon candy'
    },
        {
            id: 2,
            name: 'Raspberry candy'
        },
        {
            id: 3,
            name: 'Coffee candy'
        }
    ]
},
    {
        name: 'Mike',
        id: 2,
        address: "Apple str",
        orders: [{
            id: 4,
            name: 'Cinnamon candy'
        },
            {
                id: 6,
                name: 'Coffee candy'
            }
        ]
    },
    {
        name: 'Alex',
        id: 3,
        address: "Maple str",
        orders: [{
            id: 8,
            name: 'Cinnamon candy'
        },
            {
                id: 10,
                name: 'Raspberry candy'
            },
        ]
    }
];

const userFields = ['name', 'address', 'orders'];


module.exports = { userData, userFields };