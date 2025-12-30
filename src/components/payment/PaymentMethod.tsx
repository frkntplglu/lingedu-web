import React, { useState } from "react";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
          2
        </div>
        <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
          Ödeme Yöntemi
        </h2>
      </div>

      <div className="space-y-4">
        {/* Kredi / Banka Kartı */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
              <span className="font-semibold text-text-main-light dark:text-text-main-dark">
                Kredi / Banka Kartı ile Öde
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-gray-400 text-xl">
                credit_card
              </span>
              <span className="material-icons-outlined text-gray-400 text-xl">
                camera_alt
              </span>
            </div>
          </label>

          {paymentMethod === "card" && (
            <div className="mt-6 space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                  htmlFor="cardName"
                >
                  Kart Üzerindeki İsim
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white uppercase"
                  id="cardName"
                  placeholder="AD SOYAD"
                  type="text"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                  htmlFor="cardNumber"
                >
                  Kart Numarası
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                    maxLength={19}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-icons-outlined text-gray-400 text-xl">
                      credit_card
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="expiryDate"
                  >
                    Son Kullanma Tarihi
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                    id="expiryDate"
                    placeholder="AA/YY"
                    type="text"
                    maxLength={5}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="cvc"
                  >
                    CVC / CVV
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="cvc"
                      placeholder="123"
                      type="text"
                      maxLength={4}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 text-sm">
                        help_outline
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark pt-2">
                <span className="material-icons-outlined text-gray-400 text-lg">
                  lock
                </span>
                <span>
                  Ödemeniz 256-bit SSL sertifikası ile şifrelenerek korunmaktadır.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Havale / EFT */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="transfer"
                checked={paymentMethod === "transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
              <span className="font-semibold text-text-main-light dark:text-text-main-dark">
                Havale / EFT ile Öde
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-gray-400 text-xl">
                account_balance
              </span>
            </div>
          </label>

          {paymentMethod === "transfer" && (
            <div className="mt-6 space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              {/* Ziraat Bankası */}
              <div className="border-l-4 border-green-600 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-white text-xl">
                      account_balance
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main-light dark:text-text-main-dark">
                      Ziraat Bankası
                    </h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      IBAN: TR33 0001 0009 9901 4444 5555 01
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted-light dark:text-text-muted-dark">
                    Hesap Adı:
                  </span>
                  <span className="font-semibold text-text-main-light dark:text-text-main-dark">
                    LingEdu Dil Eğitim Danışmanlık Ltd. Şti.
                  </span>
                </div>
              </div>

              {/* İş Bankası */}
              <div className="border-l-4 border-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-white text-xl">
                      account_balance
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main-light dark:text-text-main-dark">
                      Türkiye İş Bankası
                    </h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      IBAN: TR64 0006 4000 0011 2345 6789 01
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-text-muted-light dark:text-text-muted-dark">
                    Hesap Adı:
                  </span>
                  <span className="font-semibold text-text-main-light dark:text-text-main-dark">
                    LingEdu Dil Eğitim Danışmanlık Ltd. Şti.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark pt-2">
                <span className="material-icons-outlined text-gray-400 text-lg">
                  info
                </span>
                <span>
                  Havale/EFT işleminizden sonra dekontu{" "}
                  <a href="mailto:info@lingedudil.com" className="text-primary hover:underline">
                    info@lingedudil.com
                  </a>{" "}
                  adresine göndermeniz gerekmektedir.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

