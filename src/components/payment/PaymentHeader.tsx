import React from "react";

const PaymentHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-text-main-light dark:text-text-main-dark mb-2">
        Ödemeyi Tamamla
      </h1>
      <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
        Eğitim kaydınızı kesinleştirmek için son adım.
      </p>
    </div>
  );
};

export default PaymentHeader;

