import React, { useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

type TestimonialStatus = "APPROVED" | "PENDING";

interface AdminTestimonial {
  id: number;
  fullname: string;
  job: string;
  comment: string;
  createdAt: string;
  status: TestimonialStatus;
}

const initialTestimonials: AdminTestimonial[] = [
  {
    id: 1,
    fullname: "Ayşe K.",
    job: "Öğrenci",
    comment: "Speaking Club sayesinde konuşma özgüvenim ciddi şekilde arttı.",
    createdAt: "2025-01-01",
    status: "APPROVED",
  },
  {
    id: 2,
    fullname: "Mehmet T.",
    job: "Mühendis",
    comment: "IELTS dersleri çok sistematik ve sınava yönelikti, hedef skora ulaştım.",
    createdAt: "2025-01-05",
    status: "PENDING",
  },
];

const statusLabel: Record<TestimonialStatus, string> = {
  APPROVED: "Onaylı",
  PENDING: "Onay Bekliyor",
};

const statusClass: Record<TestimonialStatus, string> = {
  APPROVED:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  PENDING:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
};

const AdminTestimonialsPage: React.FC = () => {
  const [items, setItems] = useState<AdminTestimonial[]>(initialTestimonials);

  const handleToggleApprove = (id: number) => {
    setItems((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "APPROVED" ? "PENDING" : "APPROVED" }
          : t
      )
    );
  };

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <Head>
        <title>Admin - Öğrenci Yorumları</title>
      </Head>
      <AdminLayout>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Öğrenci Yorumları
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Öğrenci yorumlarını ve başarı hikayelerini yönetin.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 text-sm font-semibold transition">
            <span className="material-icons-outlined text-sm">add</span>
            Yeni Referans (UI)
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 flex flex-col justify-between"
            >
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
                “{t.comment}”
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.fullname}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t.job}
                  </div>
                  <div className="mt-1">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${statusClass[t.status]}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {statusLabel[t.status]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleApprove(t.id)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <span className="material-icons-outlined text-xs">
                      {t.status === "APPROVED" ? "undo" : "check_circle"}
                    </span>
                    {t.status === "APPROVED" ? "Onayı Kaldır" : "Onayla"}
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-red-50 dark:hover:bg-red-900/30 text-red-500"
                  >
                    <span className="material-icons-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminTestimonialsPage;


