import React, { useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

type PaymentMethod = "HAVALE" | "KREDI_KARTI";
type OrderStatus = "ODEME_BEKLIYOR" | "ODENDI" | "IPTAL_EDILDI";

interface AdminOrder {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  variantName: string;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
}

const initialOrders: AdminOrder[] = [
  {
    id: 1,
    fullname: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    phone: "+90 555 123 45 67",
    address: "Beşiktaş, İstanbul",
    variantName: "Speaking Club - Akşam Grubu",
    paymentMethod: "KREDI_KARTI",
    status: "ODEME_BEKLIYOR",
    createdAt: "2025-01-10 14:32",
  },
  {
    id: 2,
    fullname: "Elif K.",
    email: "elif@example.com",
    phone: "+90 532 987 65 43",
    address: "Çankaya, Ankara",
    variantName: "IELTS Özel Ders (1:1)",
    paymentMethod: "HAVALE",
    status: "ODENDI",
    createdAt: "2025-01-09 10:15",
  },
  {
    id: 3,
    fullname: "Mert D.",
    email: "mert@example.com",
    phone: "+90 544 222 33 44",
    address: "Bornova, İzmir",
    variantName: "Speaking Club - Hafta Sonu",
    paymentMethod: "KREDI_KARTI",
    status: "IPTAL_EDILDI",
    createdAt: "2025-01-08 09:20",
  },
];

const paymentLabel: Record<PaymentMethod, string> = {
  HAVALE: "Havale / EFT",
  KREDI_KARTI: "Kredi Kartı",
};

const paymentClass: Record<PaymentMethod, string> = {
  HAVALE:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  KREDI_KARTI:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

const statusLabel: Record<OrderStatus, string> = {
  ODEME_BEKLIYOR: "Ödeme Bekliyor",
  ODENDI: "Ödendi",
  IPTAL_EDILDI: "İptal Edildi",
};

const statusClass: Record<OrderStatus, string> = {
  ODEME_BEKLIYOR:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  ODENDI:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  IPTAL_EDILDI:
    "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const AdminOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<AdminOrder[]>(initialOrders);

  const handleChangeStatus = (id: number, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  return (
    <>
      <Head>
        <title>Admin - Siparişler</title>
      </Head>
      <AdminLayout>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Siparişler
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Müşteri siparişlerini, ödeme durumlarını ve kullanılan paketleri
              görüntüleyin.
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            Toplam {orders.length} sipariş
          </span>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/60">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Müşteri
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Ürün / Variant
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Ödeme Şekli
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Sipariş Durumu
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Tarih
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-600 dark:text-gray-300">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900/40 align-center"
                >
                  <td className="px-4 py-3 w-1/4">
                    <div className="text-gray-900 dark:text-gray-100 font-medium text-lg">
                      {order.fullname}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {order.email}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {order.phone}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 max-w-none">
                      {order.address}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                    {order.variantName}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-[12px] font-medium ${paymentClass[order.paymentMethod]}`}
                    >
                      
                      {paymentLabel[order.paymentMethod]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-[12px] font-medium ${statusClass[order.status]}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {statusLabel[order.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {order.createdAt}
                  </td>
                  <td className="px-4 py-3 text-right space-y-2">
                    <div className="relative inline-block ">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleChangeStatus(
                            order.id,
                            e.target.value as OrderStatus
                          )
                        }
                        className="appearance-none w-full pr-7 pl-2 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 !text-[14px]  text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="ODEME_BEKLIYOR">Ödeme Bekliyor</option>
                        <option value="ODENDI">Ödendi</option>
                        <option value="IPTAL_EDILDI">İptal Edildi</option>
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-1.5 flex items-center text-gray-400 text-xs">
                        <span className="material-icons-outlined text-[16px]">
                          expand_more
                        </span>
                      </span>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOrdersPage;


