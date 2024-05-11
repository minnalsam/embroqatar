import React from "react";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { t,i18n } = useTranslation();

  return (
    <div className="flex justify-end bg-blue-500 px-6">
      <button  onClick={()=>i18n.changeLanguage("en")} className="mx-2 px-5 py-1 rounded-md hover:bg-indigo-600 hover:text-white">
        En
      </button>
      <div className="text-xl">/</div>
      <button onClick={()=>i18n.changeLanguage("ar")} className="mx-2 px-5 py-1 rounded-md hover:bg-indigo-600 hover:text-white">
        العرب
      </button>
      {/* <div>
        <h1>{t("hello")}</h1>
        <p>{t("welcome")}</p>
      </div> */}
    </div>
  );
};

export default Topbar;
