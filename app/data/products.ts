export type Product = {
  id: number;
  title: string;
  name: string;
  image: string;
  type: string,
  mrp: string;
  color: {image: string}[];
};
export const products: Product[] = [
    {
        id:1,
        title: "Pegasus",
        name: "Nike Pegasus Trial 5 GORE-TEX",
        image: '/images/product1.avif',
        type: "Men's Waterproof Trail-Running Shoes",
        mrp: '₹ 15 995.00',
        color: [
            {image: '/images/product1.1.avif'},
            {image: '/images/product1.2.avif'},
            {image: '/images/product1.3.avif'}
        ] 
    },
    {
        id:2,
        title: "Juniper",
        name: "Nike Juniper Trail 2 GORE-TEX",
        image: '/images/product2.avif',
        type: "Men's Waterproof Trail-Running Shoes",
        mrp: '₹ 10 295.00',
        color: [
            {image: '/images/product2.1.avif'}
        ]
    },
    {
        id:3,
        title: "Pegasus",
        name: "Nike Pegasus Trail 5 GORE-TEX",
        image: '/images/product1.avif',
        type: "Women's Waterproof Trail-Running Shoes",
        mrp: '₹ 15 995.00',
        color: [
            {image: '/images/product3.1.avif'},
            {image: '/images/product3.2.avif'},
            {image: '/images/product3.3.avif'},
        ]
    },
    {
        id:4,
        title: "Pegasus",
        name: "Nike Pegasus Trail 5",
        image: '/images/product4.avif',
        type: "Women's Trail-Running Shoes",
        mrp: '₹ 12 795.00',
        color: [
            {image: '/images/product4.1.avif'},
            {image: '/images/product4.2.avif'},
            {image: '/images/product4.3.avif'},
            {image: '/images/product4.4.avif'},
        ]
    },
    {
        id:5,
        title: "Zegama",
        name: "Nike Zegama 2",
        image: '/images/product5.avif',
        type: "Men's Trail-Running Shoes",
        mrp: '₹ 16 995.00',
        color: [
            {image: '/images/product5.1.avif'},
            {image: '/images/product5.2.avif'},
            {image: '/images/product5.3.avif'},
            {image: '/images/product5.4.avif'},
        ]
    },
    {
        id:6,
        title: "Air Jordan",
        name: "Air Jordan 1 Low SE",
        image: '/images/product6.avif',
        type: "Men's Shoes",
        mrp: '₹ 11 495.00',
        color: []
    },
    {
        id:7,
        title: "Air Force",
        name: "Air Force 1'07 RealTree",
        image: '/images/product7.avif',
        type: "Men's Shoes",
        mrp: '₹ 10 795.00',
        color: []
    },
    {
        id:8,
        title: "Nike Duck",
        name: "Nike Duck Low Retro Premium",
        image: '/images/product8.avif',
        type: "Shoes",
        mrp: '₹ 11 895.00',
        color: []
    },
    {
        id:9,
        title: "Nike Duck",
        name: "Nike Duck Low Retro Limited",
        image: '/images/product9.avif',
        type: "Shoes",
        mrp: '₹ 11 895.00',
        color: []
    },
    {
        id:10,
        title: "Air Jordan",
        name: "Air Jordan 1 Low OG",
        image: '/images/product10.avif',
        type: "Men's Shoes",
        mrp: '₹ 12 795.00',
        color: []
    },
    {
        id:11,
        title: "Nike",
        name: "Nike Total 90",
        image: '/images/product11.avif',
        type: "Men's Shoes",
        mrp: '₹ 9 695.00',
        color: [
            {image: '/images/product11.1.avif'},
            {image: '/images/product11.2.avif'},
            {image: '/images/product11.3.avif'},
        ]
    },
    {
        id:12,
        title: "Air Max",
        name: "Nike Air Max Plus VII",
        image: '/images/product12.avif',
        type: "Men's Shoes",
        mrp: '₹ 16 995.00',
        color: []
    },
    {
        id:13,
        title: "Air Jordan",
        name: "Air Jordan 1 Retro High OG 'Pro Green",
        image: '/images/product13.avif',
        type: "Women's Shoes",
        mrp: '₹ 16 995.00',
        color: [
            {image: '/images/product13.1.avif'},
            {image: '/images/product13.2.avif'},
        ]
    },
    {
        id:14,
        title: "Shox TL",
        name: "Nike Shox TL",
        image: '/images/product14.avif',
        type: "Men's Shoe",
        mrp: '₹ 15 995.00',
        color: []
    },
    {
        id:15,
        title: "Air Force",
        name: "Nike Air Force 1'07 LV8",
        image: '/images/product15.avif',
        type: "Men's Shoe",
        mrp: '₹ 11 895.00',
        color: []
    },
    {
        id:16,
        title: "Air Max Plus",
        name: "Nike Air Max Plus",
        image: '/images/product16.avif',
        type: "Men's Shoe",
        mrp: '₹ 14 995.00',
        color: [
            {image: '/images/product16.1.avif'},
            {image: '/images/product16.2.avif'},
            {image: '/images/product16.3.avif'},
            {image: '/images/product16.4.avif'},
        ]
    },
    {
        id:17,
        title: "Air Force",
        name: "Nike Air Force 1'07 LV8",
        image: '/images/product17.avif',
        type: "Men's Shoe",
        mrp: '₹ 10 795.00',
        color: [
            {image: '/images/product17.1.avif'},
        ]
    },
    {
        id:18,
        title: "Gato LV8",
        name: "Nike Gato LV8",
        image: '/images/product18.avif',
        type: "Men's Shoe",
        mrp: '₹ 9 695.00',
        color: []
    },
    {
        id:19,
        title: "Air Force",
        name: "Nike Air Force 1'07 LV8",
        image: '/images/product19.avif',
        type: "Men's Shoes",
        mrp: '₹ 10 795.00',
        color: []
    },
    {
        id:20,
        title: "Air Jordan",
        name: "Air Jordan MVP",
        image: '/images/product20.avif',
        type: "Men's Shoe",
        mrp: '₹ 12 630.00',
        color: [
            {image: '/images/product20.1.avif'},
            {image: '/images/product20.2.avif'},
            {image: '/images/product20.3.avif'},
            {image: '/images/product20.4.avif'},
        ]
    },
];