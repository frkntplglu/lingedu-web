import React, { useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminHtmlEditor from "@/components/admin/AdminHtmlEditor";
import { Course, CourseVariant } from "@/services";

interface AdminCourse extends Course {
  variants: CourseVariant[];
}

const mockCourses: AdminCourse[] = [
  {
    id: "1",
    title: "Speaking Club",
    slug: "speaking-club-aylik",
    mini_desc: "Haftalık konuşma pratiği ile akıcılığını artır.",
    description: "Speaking Club detaylı açıklama.",
    created_at: "2025-01-01",
    variants: [],
  },
  {
    id: "2",
    title: "IELTS Hazırlık",
    slug: "ielts",
    mini_desc: "Band skorunu yükseltmek için kapsamlı IELTS programı.",
    description: "IELTS kursu detaylı açıklama.",
    created_at: "2025-01-02",
    variants: [],
  },
];

const AdminCoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<AdminCourse[]>(mockCourses);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<AdminCourse | null>(null);

  // Course modal state
  const [courseTitle, setCourseTitle] = useState("");
  const [courseSlug, setCourseSlug] = useState("");
  const [courseMiniDesc, setCourseMiniDesc] = useState("");
  const [courseDescription, setCourseDescription] = useState("<p>Kurs açıklamasını buraya yazın.</p>");

  // Variant modal state
  const [variants, setVariants] = useState<CourseVariant[]>([
    { id: "tmp-1", title: "", course_id: "", price: undefined, capacity: undefined, description: "", start_date: "" },
  ]);

  const openCourseModal = () => {
    setCourseTitle("");
    setCourseSlug("");
    setCourseMiniDesc("");
    setCourseDescription("<p>Kurs açıklamasını buraya yazın.</p>");
    setIsCourseModalOpen(true);
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse: AdminCourse = {
      id: String(Date.now()),
      title: courseTitle || "Yeni Kurs",
      slug: courseSlug || "yeni-kurs",
      mini_desc: courseMiniDesc,
      description: courseDescription,
      created_at: new Date().toISOString(),
      variants: [],
    };
    setCourses((prev) => [...prev, newCourse]);
    setIsCourseModalOpen(false);
  };

  const openVariantModal = (course: AdminCourse) => {
    setSelectedCourse(course);
    setVariants([
      {
        id: "tmp-1",
        title: "",
        course_id: course.id || "",
        price: undefined,
        capacity: undefined,
        description: "",
        start_date: "",
      },
    ]);
    setIsVariantModalOpen(true);
  };

  const handleVariantChange = (index: number, field: keyof CourseVariant, value: any) => {
    setVariants((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addVariantRow = () => {
    setVariants((prev) => [
      ...prev,
      {
        id: `tmp-${prev.length + 1}`,
        title: "",
        course_id: selectedCourse?.id || "",
        price: undefined,
        capacity: undefined,
        description: "",
        start_date: "",
      },
    ]);
  };

  const handleSaveVariants = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    setCourses((prev) =>
      prev.map((c) =>
        c.id === selectedCourse.id ? { ...c, variants: variants } : c
      )
    );
    setIsVariantModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Admin - Kurslar</title>
      </Head>
      <AdminLayout>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Kurslar
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ana kursları ve paket/variant yapılarını yönetin.
            </p>
          </div>
          <button
            onClick={openCourseModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/30 transition"
          >
            <span className="material-icons-outlined text-sm">add</span>
            Yeni Kurs
          </button>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/60">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Başlık
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Slug
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-300">
                  Variant Sayısı
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-600 dark:text-gray-300">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900/40"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {course.title}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {course.slug}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {course.variants.length}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                      <span className="material-icons-outlined text-xs">edit</span>
                      Düzenle
                    </button>
                    <button
                      onClick={() => openVariantModal(course)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-primary hover:bg-primary/10"
                    >
                      <span className="material-icons-outlined text-xs">
                        view_agenda
                      </span>
                      Variant Ekle/Düzenle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kurs Ekle Modal */}
        {isCourseModalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-3xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Yeni Kurs Ekle
                </h2>
                <button
                  onClick={() => setIsCourseModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <span className="material-icons-outlined text-xl">close</span>
                </button>
              </div>
              <form onSubmit={handleAddCourse} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Başlık
                    </label>
                    <input
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      value={courseTitle}
                      onChange={(e) => setCourseTitle(e.target.value)}
                      placeholder="Kurs başlığı"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Slug
                    </label>
                    <input
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      value={courseSlug}
                      onChange={(e) => setCourseSlug(e.target.value)}
                      placeholder="speaking-club-aylik"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Kısa Açıklama
                    </label>
                    <input
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                      value={courseMiniDesc}
                      onChange={(e) => setCourseMiniDesc(e.target.value)}
                      placeholder="Listelemede gösterilecek kısa açıklama"
                    />
                  </div>
                </div>

                <AdminHtmlEditor
                  label="Detaylı Açıklama"
                  value={courseDescription}
                  onChange={setCourseDescription}
                />

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsCourseModalOpen(false)}
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

        {/* Variant Modal */}
        {isVariantModalOpen && selectedCourse && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 w-full max-w-4xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Variantlar - {selectedCourse.title}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Birden fazla paket/variant ekleyebilirsiniz.
                  </p>
                </div>
                <button
                  onClick={() => setIsVariantModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <span className="material-icons-outlined text-xl">close</span>
                </button>
              </div>

              <form onSubmit={handleSaveVariants} className="space-y-4">
                {variants.map((variant, index) => (
                  <div
                    key={variant.id || index}
                    className="border border-gray-200 dark:border-gray-800 rounded-2xl p-4 space-y-3 bg-gray-50/60 dark:bg-gray-900/60"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Variant #{index + 1}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300">
                          Başlık
                        </label>
                        <input
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                          value={variant.title}
                          onChange={(e) =>
                            handleVariantChange(index, "title", e.target.value)
                          }
                          placeholder="Örn. Grup Dersi"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300">
                          Fiyat (₺)
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                          value={variant.price ?? ""}
                          onChange={(e) =>
                            handleVariantChange(
                              index,
                              "price",
                              Number(e.target.value)
                            )
                          }
                          placeholder="4500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300">
                          Kapasite
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                          value={variant.capacity ?? ""}
                          onChange={(e) =>
                            handleVariantChange(
                              index,
                              "capacity",
                              Number(e.target.value)
                            )
                          }
                          placeholder="6"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300">
                          Başlangıç Tarihi
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                          value={variant.start_date ?? ""}
                          onChange={(e) =>
                            handleVariantChange(
                              index,
                              "start_date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>

                    <AdminHtmlEditor
                      label="Variant Açıklaması"
                      value={variant.description || ""}
                      onChange={(html) =>
                        handleVariantChange(index, "description", html)
                      }
                      rows={4}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addVariantRow}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/60"
                >
                  <span className="material-icons-outlined text-xs">add</span>
                  Yeni Variant Satırı Ekle
                </button>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsVariantModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-md shadow-primary/30"
                  >
                    Variantları Kaydet
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

export default AdminCoursesPage;


