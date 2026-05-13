import React from "react";
import { PiHouseBold, PiWarningCircleBold } from "react-icons/pi";
import { IoArrowBack, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section>
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-[120px] font-bold text-[#191C1F] mb-4">404</h1>

          <h2 className="text-3xl font-bold text-[#191C1F] mb-4">
            Oops! Səhifə tapılmadı
          </h2>

          <p className="text-[#5F6C72] text-lg mb-10">
            Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti
            olaraq istifadədən çıxarılmış ola bilər. Ana səhifəyə qayıdaraq
            axtarışınıza davam edə bilərsiniz.
          </p>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FA8232] text-white font-bold rounded-sm hover:bg-[#e0722b] transition-all uppercase text-sm"
          >
            <PiHouseBold size={20} />
            Ana Səhifə
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Error404;