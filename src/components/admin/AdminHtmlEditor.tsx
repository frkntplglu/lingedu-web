import React from "react";

interface AdminHtmlEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

const AdminHtmlEditor: React.FC<AdminHtmlEditorProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 6,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {label}
        </label>
        <span className="text-[11px] uppercase tracking-wide text-gray-400">
          HTML destekleniyor
        </span>
      </div>
      {/* Basit toolbar (sadece görsel, fonksiyonellik yok) */}
      <div className="flex items-center gap-2 px-2 py-1 rounded-t-xl border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <button
          type="button"
          className="px-2 py-1 text-xs rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          &lt;b&gt; Bold
        </button>
        <button
          type="button"
          className="px-2 py-1 text-xs rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          &lt;i&gt; Italic
        </button>
        <button
          type="button"
          className="px-2 py-1 text-xs rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          &lt;ul&gt; Liste
        </button>
      </div>
      <textarea
        className="w-full rounded-b-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder || "<p>HTML içeriğinizi buraya yazın...</p>"}
      />
      <div className="border border-t-0 border-gray-200 dark:border-gray-800 rounded-b-xl bg-gray-50/60 dark:bg-gray-900/60 px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
        Önizleme:
        <div
          className="mt-2 prose prose-sm dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: value || "<p>Önizleme için içerik girin.</p>" }}
        />
      </div>
    </div>
  );
};

export default AdminHtmlEditor;


