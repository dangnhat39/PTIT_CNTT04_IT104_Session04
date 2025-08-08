var listProduct = [
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
function getFinalPrice(product) {
    if (product.discount && product.discount > 0) {
        var finalPrice = product.price * (1 - product.discount / 100);
        return finalPrice;
    }
    return product.price;
}
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("-------------------------");
    console.log("T\u00EAn: ".concat(product.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price.toLocaleString('vi-VN'), " VND"));
    console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice.toLocaleString('vi-VN'), " VND"));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
}
console.log("DANH SÁCH THÔNG TIN SẢN PHẨM:");
listProduct.forEach(function (product) {
    printProductInfo(product);
});
