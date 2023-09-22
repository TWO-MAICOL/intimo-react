 
    export const ProductService = {
        getProductsData() {
            return [
                 
                              
                 
               
                {
                    id: '1011',
                    code: '4920nnc2d',
                    name: ' GATOS',
                    description: 'Product Description',
                    image: 'green-earbuds.jpg',
                    price: 89,
                    category: 'Electronics',
                    quantity: 23,
                    inventoryStatus: 'Disponible',
                    rating: 4
                },
                {
                    id: '1012',
                    code: '250vm23cc',
                    name: '   Green',
                    description: 'Product Description',
                    image: 'green-t-shirt.jpg',
                    price: 49,
                    category: 'Clothing',
                    quantity: 74,
                    inventoryStatus: 'Disponible',
                    rating: 5
                },
                {
                    id: '1013',
                    code: 'fldsmn31b',
                    name: '  Grey  ',
                    description: 'Product Description',
                    image: 'grey-t-shirt.jpg',
                    price: 48,
                    category: 'Clothing',
                    quantity: 0,
                    inventoryStatus: 'Agotado',
                    rating: 3
                },
                {
                    id: '1014',
                    code: 'waas1x2as',
                    name: 'PIPI RED',
                    description: 'Product Description',
                    image: 'headphones.jpg',
                    price: 175,
                    category: 'Electronics',
                    quantity: 8,
                    inventoryStatus: 'Disponible',
                    rating: 5
                },
                {
                    id: '1015',
                    code: 'vb34btbg5',
                    name: '  Light Green ',
                    description: 'Product Description',
                    image: 'light-green-t-shirt.jpg',
                    price: 49,
                    category: 'Clothing',
                    quantity: 34,
                    inventoryStatus: 'Agotado',
                    rating: 4
                },
                {
                    id: '1016',
                    code: 'k8l6j58jl',
                    name: '  Lime Band',
                    description: 'Product Description',
                    image: 'lime-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 12,
                    inventoryStatus: 'Agotado',
                    rating: 3
                },
                {
                    id: '1017',
                    code: 'v435nn85n',
                    name: '  Mini  ',
                    description: 'Product Description',
                    image: 'mini-speakers.jpg',
                    price: 85,
                    category: 'Clothing',
                    quantity: 42,
                    inventoryStatus: 'Disponible',
                    rating: 4
                },
                {
                    id: '1018',
                    code: '09zx9c0zc',
                    name: '  Painted  ',
                    description: 'Product Description',
                    image: 'painted-phone-case.jpg',
                    price: 56,
                    category: 'Accessories',
                    quantity: 41,
                    inventoryStatus: 'Disponible',
                    rating: 5
                },
                {
                    id: '1019',
                    code: 'mnb5mb2m5',
                    name: '  Pink  ',
                    description: 'Product Description',
                    image: 'pink-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 63,
                    inventoryStatus: 'Agotado',
                    rating: 4
                },
                {
                    id: '1020',
                    code: 'r23fwf2w3',
                    name: '  Purse',
                    description: 'Product Description',
                    image: 'pink-purse.jpg',
                    price: 110,
                    category: 'Accessories',
                    quantity: 0,
                    inventoryStatus: 'Agotado',
                    rating: 4
                },
                {
                    id: '1021',
                    code: 'pxpzczo23',
                    name: '  Purple  ',
                    description: 'Product Description',
                    image: 'purple-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 6,
                    inventoryStatus: 'Disponible',
                    rating: 3
                },
                {
                    id: '1022',
                    code: '2c42cb5cb',
                    name: '  LILA  ',
                    description: 'Product Description',
                    image: 'purple-gemstone-necklace.jpg',
                    price: 45,
                    category: 'Accessories',
                    quantity: 62,
                    inventoryStatus: 'Agotado',
                    rating: 4
                },
                {
                    id: '1023',
                    code: '5k43kkk23',
                    name: '  T-GREEN',
                    description: 'Product Description',
                    image: 'purple-t-shirt.jpg',
                    price: 49,
                    category: 'Clothing',
                    quantity: 2,
                    inventoryStatus: 'Disponible',
                    rating: 5
                },
                {
                    id: '1024',
                    code: 'lm2tny2k4',
                    name: '    miguelito',
                    description: 'Product Description',
                    image: 'shoes.jpg',
                    price: 64,
                    category: 'Clothing',
                    quantity: 0,
                    inventoryStatus: 'Disponible',
                    rating: 1
                },
                 
                 
                 
            ];
        },

        

       
        getProducts() {
            return Promise.resolve(this.getProductsData());
        },

       
    };

    