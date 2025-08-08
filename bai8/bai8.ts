type Product = {
    readonly id: string; 
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string; 
};

const aoSoMi: Product = {
    id: 'SP001',
    name: 'Áo sơ mi',
    price: 250000,
};

const quanTay: Product = {
    id: 'SP002',
    name: 'Quần tây',
    price: 400000,
};

const sampleOrder: Order = {
    orderId: '#ORD001',
    customerName: 'Nguyễn Văn A',
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 },
    ],
    note: 'Giao sau 18h',
};

function calculateOrderTotal(order: Order): number {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}

function printOrder(order: Order): void {
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log('Sản phẩm:');

    order.items.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} × ${item.quantity} → ${itemTotal.toLocaleString('vi-VN')} VND`);
    });

    const totalAmount = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${totalAmount.toLocaleString('vi-VN')} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}

printOrder(sampleOrder);