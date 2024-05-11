import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        {t("About_title")}
      </h1>
    </div>
  );
};

export default About;
