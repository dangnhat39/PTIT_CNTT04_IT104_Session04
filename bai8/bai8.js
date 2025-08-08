var aoSoMi = {
    id: 'SP001',
    name: 'Áo sơ mi',
    price: 250000,
};
var quanTay = {
    id: 'SP002',
    name: 'Quần tây',
    price: 400000,
};
var sampleOrder = {
    orderId: '#ORD001',
    customerName: 'Nguyễn Văn A',
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 },
    ],
    note: 'Giao sau 18h',
};
function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log("\u0110\u01A1n h\u00E0ng: ".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log('Sản phẩm:');
    order.items.forEach(function (item) {
        var itemTotal = item.product.price * item.quantity;
        console.log("- ".concat(item.product.name, " \u00D7 ").concat(item.quantity, " \u2192 ").concat(itemTotal.toLocaleString('vi-VN'), " VND"));
    });
    var totalAmount = calculateOrderTotal(order);
    console.log("T\u1ED5ng c\u1ED9ng: ".concat(totalAmount.toLocaleString('vi-VN'), " VND"));
    if (order.note) {
        console.log("Ghi ch\u00FA: ".concat(order.note));
    }
}
printOrder(sampleOrder);
