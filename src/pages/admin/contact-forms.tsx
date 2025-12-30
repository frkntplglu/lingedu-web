import React, { useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

// PENDING = Yanıt Bekliyor (default)
type ContactStatus = "PENDING" | "CONTACTED" | "LOST" | "EARNED";

interface AdminContactForm {
  id: number;
  fullname: string;
  email: string;
  subject: string;
  createdAt: string;
  status: ContactStatus;
  message: string;
}

const initialForms: AdminContactForm[] = [
  {
    id: 1,
    fullname: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    subject: "IELTS Özel Ders Hakkında Bilgi",
    createdAt: "2025-01-10 14:32",
    status: "PENDING",
    message:
      "Merhaba, IELTS özel dersleri hakkında detaylı bilgi almak istiyorum. Hedefim overall 7.0 bandına ulaşmak. Mevcut seviyem B2 civarında. Ders günleri ve saatleri hakkında bilgi verebilir misiniz?",
  },
  {
    id: 2,
    fullname: "Elif K.",
    email: "elif@example.com",
    subject: "Speaking Club Seviye ve Saat Bilgisi",
    createdAt: "2025-01-09 10:15",
    status: "EARNED",
    message:
      "Speaking Club için uygun seviye aralığı nedir? Hafta içi akşam gruplarına katılmak istiyorum. Kontenjan ve ücret bilgisi paylaşabilir misiniz?",
  },
  {
    id: 3,
    fullname: "Mert D.",
    email: "mert@example.com",
    subject: "Kurumsal Eğitim Talebi",
    createdAt: "2025-01-08 09:20",
    status: "LOST",
    message:
      "Şirketimiz için kurumsal IELTS hazırlık eğitimi düşünüyoruz. En az 10 kişilik bir grup için teklif alabilir miyiz? Online / hibrit seçenekleriniz var mı?",
  },
];

const statusLabel: Record<ContactStatus, string> = {
  PENDING: "Yanıt Bekliyor",
  CONTACTED: "İletişime Geçildi",
  LOST: "Kaybedildi",
  EARNED: "Müşteri Oldu",
};

const statusBadgeClass: Record<ContactStatus, string> = {
  PENDING:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  CONTACTED:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  LOST: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  EARNED:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

const AdminContactFormsPage: React.FC = () => {
  const [forms, setForms] = useState<AdminContactForm[]>(initialForms);
  const [selectedForm, setSelectedForm] = useState<AdminContactForm | null>(
    initialForms[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (form: AdminContactForm) => {
    setSelectedForm(form);
    setIsModalOpen(true);
  };

  const handleChangeStatus = (id: number, status: ContactStatus) => {
    setForms((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status } : f))
    );
    if (selectedForm && selectedForm.id === id) {
      setSelectedForm({ ...selectedForm, status });
    }
  };

  return (
    <>
      <Head>
        <title>Admin - İletişim Formları</title>
      </Head>
      <AdminLayout>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              İletişim Formları
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Site üzerinden gelen iletişim taleplerini görüntüleyin ve durumlarını
              güncelleyin.
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            Toplam {forms.length} form
          </span>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/60">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  İsim
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  E-posta
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Konu
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Tarih
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Durum
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-600 dark:text-gray-300">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {forms.map((form) => (
                <tr
                  key={form.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900/40"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {form.fullname}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {form.email}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300 max-w-xs truncate">
                    {form.subject}
                  </td>
                  <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs">
                    {form.createdAt}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${statusBadgeClass[form.status]}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {statusLabel[form.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <div className="inline-block relative align-middle">
                      <select
                        value={form.status}
                        onChange={(e) =>
                          handleChangeStatus(
                            form.id,
                            e.target.value as ContactStatus
                          )
                        }
                        className="appearance-none pr-6 pl-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[11px] text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="EARNED">EARNED</option>
                        <option value="LOST">LOST</option>
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-gray-400 text-xs">
                        <span className="material-icons-outlined text-[14px]">
                          expand_more
                        </span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(form)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-primary hover:bg-primary/10"
                    >
                      <span className="material-icons-outlined text-xs">
                        visibility
                      </span>
                      Görüntüle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detay Modalı */}
        {isModalOpen && selectedForm && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedForm.fullname}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedForm.email} • {selectedForm.createdAt}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <span className="material-icons-outlined text-xl">close</span>
                </button>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Durum
                  </div>
                  <div className="relative inline-block">
                    <select
                      value={selectedForm.status}
                      onChange={(e) =>
                        handleChangeStatus(
                          selectedForm.id,
                          e.target.value as ContactStatus
                        )
                      }
                      className="appearance-none pr-7 pl-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="EARNED">EARNED</option>
                      <option value="LOST">LOST</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400 text-xs">
                      <span className="material-icons-outlined text-[16px]">
                        expand_more
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Konu
                  </div>
                  <div>{selectedForm.subject}</div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    Mesaj
                  </div>
                  <p className="leading-relaxed whitespace-pre-line">
                    {selectedForm.message}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default AdminContactFormsPage;


