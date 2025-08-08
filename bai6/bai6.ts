type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};

const listProduct: Product[] = [
    {
        id: 'SP001',
        name: 'Áo sơ mi',
        price: 300000,
        category: {
            id: 'CAT01',
            name: 'Thời trang nam'
        },
        discount: 20
    },
    {
        id: 'SP002',
        name: 'Quần Jean',
        price: 500000,
        category: {
            id: 'CAT01',
            name: 'Thời trang nam'
        }
    },
    {
        id: 'SP003',
        name: 'Giày thể thao',
        price: 850000,
        category: {
            id: 'CAT02',
            name: 'Giày dép'
        },
        discount: 15
    }
];

function getFinalPrice(product: Product): number {
    if (product.discount && product.discount > 0) {
        const finalPrice = product.price * (1 - product.discount / 100);
        return finalPrice;
    }
    return product.price;
}

function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);

    console.log(`-------------------------`);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString('vi-VN')} VND`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString('vi-VN')} VND`);
    console.log(`Danh mục: ${product.category.name}`);
}

console.log("DANH SÁCH THÔNG TIN SẢN PHẨM:");
listProduct.forEach(product => {
    printProductInfo(product);
});