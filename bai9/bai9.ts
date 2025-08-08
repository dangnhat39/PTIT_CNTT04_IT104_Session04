
type Product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
  note?: string; 
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
};

type Invoice = {
  invoiceId: string;
  orders: Order[];
  createdAt: Date;
};


const aoSoMi: Product = { id: 'P01', name: 'Áo sơ mi', price: 250000 };
const quanJean: Product = { id: 'P02', name: 'Quần jean', price: 400000 };
const vayHoa: Product = { id: 'P03', name: 'Váy hoa', price: 700000 };

const sampleInvoice: Invoice = {
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



function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}


function calculateInvoiceTotal(invoice: Invoice): number {
  return invoice.orders.reduce((total, order) => {
    return total + calculateOrderTotal(order);
  }, 0);
}


function getUnpaidOrders(invoice: Invoice): Order[] {
  return invoice.orders.filter(order => !order.isPaid);
}

function printInvoice(invoice: Invoice): void {
  const formattedDate = invoice.createdAt.toISOString().split('T')[0];
  
  console.log(`HÓA ĐƠN: ${invoice.invoiceId} - Ngày tạo: ${formattedDate}`);
  console.log(`--------------------`);
  console.log(``);

  invoice.orders.forEach(order => {
    console.log(`ĐƠN HÀNG: ${order.orderId} - ${order.customerName}`);

    order.items.forEach(item => {
      const itemTotal = item.product.price * item.quantity;
      let itemString = `- ${item.product.name} × ${item.quantity} → ${itemTotal.toLocaleString('vi-VN')} VND`;
      if (item.note) {
        itemString += ` (note: ${item.note})`;
      }
      console.log(itemString);
    });

    const orderTotal = calculateOrderTotal(order);
    console.log(``);
    console.log(`Tổng đơn: ${orderTotal.toLocaleString('vi-VN')} VND`);
    console.log(`Trạng thái: ${order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'}`);
    console.log(`\n--------------------`);
  });

  const invoiceTotal = calculateInvoiceTotal(invoice);
  console.log(`\n>> Tổng cộng hóa đơn: ${invoiceTotal.toLocaleString('vi-VN')} VND`);
}
console.log("--- BẮT ĐẦU IN HÓA ĐƠN ---");
printInvoice(sampleInvoice);
console.log("\n--- KẾT THÚC IN HÓA ĐƠN ---\n");


console.log("--- DANH SÁCH ĐƠN HÀNG CHƯA THANH TOÁN ---");
const unpaid = getUnpaidOrders(sampleInvoice);
console.log(unpaid);