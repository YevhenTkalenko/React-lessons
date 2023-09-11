export interface Product {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number,
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Iphone 14 pro',
        description: 'iPhone 14 pro',
        type: 'phone',
        capacity: '200',
        price: 1000,
        image: '/images/Iphone_14_pro.webp'
    },
    {
        id: 2,
        title: 'Iphone 13 pro',
        description: 'iPhone 13 pro',
        type: 'phone',
        capacity: '220',
        price: 900,
        image: '/images/Iphone_13_pro.webp'
    },
    {
        id: 3,
        title: 'Iphone 12 pro',
        description: 'iPhone 12 pro',
        type: 'phone',
        capacity: '200',
        price: 800,
        image: '/images/Iphone_12_pro.webp'
    },
    {
        id: 4,
        title: 'Iphone 11 pro',
        description: 'iPhone 11 pro',
        type: 'phone',
        capacity: '180',
        price: 700,
        image: '/images/Iphone_11_pro.webp'
    },
    {
        id: 5,
        title: 'Iphone 10 pro',
        description: 'iPhone 10 pro',
        type: 'phone',
        capacity: '150',
        price: 600,
        image: '/images/Iphone_10_pro.webp'
    },
    {
        id: 6,
        title: 'Iphone 9 pro',
        description: 'iPhone 9 pro',
        type: 'phone',
        capacity: '100',
        price: 500,
        image: '/images/Iphone_9_pro.webp'
    }

]


export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray 