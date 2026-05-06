import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">
              {t("footerSchoolName")}
            </h3>
            <p className="text-sm opacity-90 mb-4">
              {t("footerSchoolDescription")}
            </p>
            <p className="text-sm opacity-90">
              {t("footerGlobalNetwork")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footerQuickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleLinkClick("/about")} className="text-sm hover:text-secondary transition-colors text-left">
                  {t("about")}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/admissions")} className="text-sm hover:text-secondary transition-colors text-left">
                  {t("admissions")}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/programs")} className="text-sm hover:text-secondary transition-colors text-left">
                  {t("programs")}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/campus-life")} className="text-sm hover:text-secondary transition-colors text-left">
                  {t("campusLife")}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/contact")} className="text-sm hover:text-secondary transition-colors text-left">
                  {t("contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footerContactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t("footerAddress")}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <div className="flex flex-col">
                  <span>+237 677 84 76 34</span>
                  <span>+237 677 08 54 80</span>
                  <span>+237 677 04 38 96</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:principalmaristbabenga@gmail.com" className="hover:text-secondary transition-colors">
                  maristbcc@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Facebook size={16} className="flex-shrink-0" />
                <a href="https://www.facebook.com/maristdouala/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  {t("footerFollowFacebook")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>{new Date().getFullYear()} {t("footerCopyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
