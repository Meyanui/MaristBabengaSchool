import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center max-w-md px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-6 text-2xl font-semibold text-foreground">{t("notFoundTitle")}</p>
        <p className="mb-8 text-muted-foreground">
          {t("notFoundDescription")}
        </p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
        >
          {t("notFoundReturnHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
