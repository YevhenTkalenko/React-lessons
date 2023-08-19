interface Product {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Iphone 14 pro',
        description: 'iPhone 14 pro',
        type: 'phone',
        capacity: '200',
        price: 1000
    },
    {
        id: 2,
        title: 'Iphone 13 pro',
        description: 'iPhone 13 pro',
        type: 'phone',
        capacity: '220',
        price: 900
    },
    {
        id: 3,
        title: 'Iphone 12 pro',
        description: 'iPhone 12 pro',
        type: 'phone',
        capacity: '200',
        price: 800
    },
    {
        id: 4,
        title: 'Iphone 11 pro',
        description: 'iPhone 11 pro',
        type: 'phone',
        capacity: '180',
        price: 700
    },
    {
        id: 5,
        title: 'Iphone 10 pro',
        description: 'iPhone 10 pro',
        type: 'phone',
        capacity: '150',
        price: 600
    },
    {
        id: 6,
        title: 'Iphone 9 pro',
        description: 'iPhone 9 pro',
        type: 'phone',
        capacity: '100',
        price: 500
    }

]

export default productsArray 