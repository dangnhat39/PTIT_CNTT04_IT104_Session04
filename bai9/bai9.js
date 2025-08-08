var aoSoMi = { id: 'P01', name: 'Áo sơ mi', price: 250000 };
var quanJean = { id: 'P02', name: 'Quần jean', price: 400000 };
var vayHoa = { id: 'P03', name: 'Váy hoa', price: 700000 };
var sampleInvoice = {
    invoiceId: '#INV001',
    createdAt: new Date('2024-05-14'),
    orders: [
        {
            orderId: '#ORD001',
            customerName: 'Nguyễn Văn A',
            deliveryAddress: '123 Đường ABC, Quận 1, TP. HCM',
            isPaid: true,
            items: [
                { product: aoSoMi, quantity: 2 },
                { product: quanJean, quantity: 1 },
            ],
        },
        {
            orderId: '#ORD002',
            customerName: 'Trần Thị B',
            deliveryAddress: '456 Đường XYZ, Quận 2, TP. HCM',
            isPaid: false,
            items: [
                { product: vayHoa, quantity: 1, note: 'size M' },
            ],
        },
    ],
};
function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
    }, 0);
}
function calculateInvoiceTotal(invoice) {
    return invoice.orders.reduce(function (total, order) {
        return total + calculateOrderTotal(order);
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(function (order) { return !order.isPaid; });
}
function printInvoice(invoice) {
    var formattedDate = invoice.createdAt.toISOString().split('T')[0];
    console.log("H\u00D3A \u0110\u01A0N: ".concat(invoice.invoiceId, " - Ng\u00E0y t\u1EA1o: ").concat(formattedDate));
    console.log("--------------------");
    console.log("");
    invoice.orders.forEach(function (order) {
        console.log("\u0110\u01A0N H\u00C0NG: ".concat(order.orderId, " - ").concat(order.customerName));
        order.items.forEach(function (item) {
            var itemTotal = item.product.price * item.quantity;
            var itemString = "- ".concat(item.product.name, " \u00D7 ").concat(item.quantity, " \u2192 ").concat(itemTotal.toLocaleString('vi-VN'), " VND");
            if (item.note) {
                itemString += " (note: ".concat(item.note, ")");
            }
            console.log(itemString);
        });
        var orderTotal = calculateOrderTotal(order);
        console.log("");
        console.log("T\u1ED5ng \u0111\u01A1n: ".concat(orderTotal.toLocaleString('vi-VN'), " VND"));
        console.log("Tr\u1EA1ng th\u00E1i: ".concat(order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'));
        console.log("\n--------------------");
    });
    var invoiceTotal = calculateInvoiceTotal(invoice);
    console.log("\n>> T\u1ED5ng c\u1ED9ng h\u00F3a \u0111\u01A1n: ".concat(invoiceTotal.toLocaleString('vi-VN'), " VND"));
}
console.log("--- BẮT ĐẦU IN HÓA ĐƠN ---");
printInvoice(sampleInvoice);
console.log("\n--- KẾT THÚC IN HÓA ĐƠN ---\n");
console.log("--- DANH SÁCH ĐƠN HÀNG CHƯA THANH TOÁN ---");
var unpaid = getUnpaidOrders(sampleInvoice);
console.log(unpaid);
