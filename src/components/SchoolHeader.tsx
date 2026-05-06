import logo from "@/assets/logo.png";
import { useI18n } from "@/i18n/I18nContext";

const SchoolHeader = () => {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-to-r from-primary via-primary to-navy py-6 border-b-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Marist Bilingual Comprehensive College Logo" 
              className="h-20 w-20 md:h-24 md:w-24 bg-background p-2 rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-2xl md:text-6xl font-bold text-primary-foreground">
                <span className="text-secondary">MARIST</span>
              </h1>
              <p className="text-primary-foreground/90 text-sm md:text-base font-medium mt-2">
                {t("schoolHeaderSubtitle")}
              </p>
            </div>
          </div>

          {/* School Description */}
          <div className="text-center md:text-right max-w-4xl">
            <p className="text-primary-foreground/95 text-sm md:text-base font-medium leading-relaxed">
              {t("schoolHeaderDescription")}
            </p>
            <p className="text-primary-foreground/80 text-xs md:text-sm mt-2">
              {t("schoolHeaderMotto")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHeader;
