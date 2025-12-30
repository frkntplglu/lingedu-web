import React, { useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminHtmlEditor from "@/components/admin/AdminHtmlEditor";

interface AdminFaq {
  id: number;
  question: string;
  category: string;
  order: number;
}

const initialFaqs: AdminFaq[] = [
  { id: 1, question: "Dersler online mı yüz yüze mi?", category: "Genel", order: 1 },
  { id: 2, question: "Speaking Club grupları kaç kişilik?", category: "Speaking Club", order: 2 },
  { id: 3, question: "IELTS kursu kaç hafta sürüyor?", category: "IELTS", order: 3 },
];

const AdminFaqPage: React.FC = () => {
  const [faqs, setFaqs] = useState<AdminFaq[]>(initialFaqs);
  const [sortAsc, setSortAsc] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newCategory, setNewCategory] = useState("Genel");
  const [newOrder, setNewOrder] = useState<number>(faqs.length + 1);
  const [newAnswerHtml, setNewAnswerHtml] = useState("<p>Cevap içeriğini buraya yazın.</p>");

  const sortedFaqs = [...faqs].sort((a, b) =>
    sortAsc ? a.order - b.order : b.order - a.order
  );

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    const nextId = Math.max(...faqs.map((f) => f.id)) + 1;
    setFaqs([
      ...faqs,
      {
        id: nextId,
        question: newQuestion || "Yeni soru",
        category: newCategory,
        order: newOrder || faqs.length + 1,
      },
    ]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Admin - Sık Sorulan Sorular</title>
      </Head>
      <AdminLayout>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sık Sorulan Sorular
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ziyaretçilerin en çok merak ettiği soruları yönetin.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/30 transition"
          >
            <span className="material-icons-outlined text-sm">add</span>
            Yeni Soru Ekle
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
            <span>{faqs.length} kayıt</span>
            <button
              onClick={() => setSortAsc((prev) => !prev)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>Sıra</span>
              <span className="material-icons-outlined text-xs">
                {sortAsc ? "south" : "north"}
              </span>
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/60">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Soru
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Kategori
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Sıra
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-600 dark:text-gray-300">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {sortedFaqs.map((faq) => (
                <tr key={faq.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/40">
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {faq.category}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {faq.order}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <span className="material-icons-outlined text-xs">edit</span>
                      Düzenle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ekleme Modalı */}
        {isModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Yeni Soru Ekle
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <span className="material-icons-outlined text-xl">close</span>
                </button>
              </div>
              <form onSubmit={handleAddFaq} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Soru
                    </label>
                    <input
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      placeholder="Soru başlığı"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Kategori
                    </label>
                    <select
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                    >
                      <option>Genel</option>
                      <option>Speaking Club</option>
                      <option>IELTS</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Sıra
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      value={newOrder}
                      onChange={(e) => setNewOrder(Number(e.target.value))}
                    />
                  </div>
                </div>

                <AdminHtmlEditor
                  label="Cevap"
                  value={newAnswerHtml}
                  onChange={setNewAnswerHtml}
                />

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/30"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default AdminFaqPage;


