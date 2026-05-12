import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, DollarSign, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n/I18nContext";

const Admissions = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20 animate-pulse">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 animate-bounce">{t("admissionsTitle")}</h1>
          <p className="text-xl font-bold opacity-95 max-w-2xl mx-auto">
            {t("admissionsHeroSubtitle")}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-secondary text-secondary-foreground py-6 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="flex-shrink-0 mt-1 animate-spin" size={24} />
            <div>
              <p className="font-black text-lg mb-1">{t("admissionsSpecialInterview")}</p>
              <p className="font-bold">{t("admissionsSpecialInterviewDesc")}</p>
              <p className="text-sm font-semibold mt-2">{t("admissionsInterviewsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6 text-foreground">{t("admissionsOverviewTitle")}</h2>
            <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 animate-fade-in-delay-1">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">{t("admissionsBoardingOnly")}</p>
                      <p className="text-muted-foreground font-semibold">{t("admissionsBoardingOnlyDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 animate-fade-in-delay-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">{t("admissionsAvailableClasses")}</p>
                      <p className="text-muted-foreground font-semibold">{t("admissionsAvailableClassesDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 animate-fade-in-delay-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">{t("admissionsEducationTracks")}</p>
                      <p className="text-muted-foreground font-semibold">{t("admissionsEducationTracksDesc")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted animate-slide-in-left">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-foreground flex items-center gap-2">
              <FileText className="text-accent animate-pulse" />
              {t("admissionsRequirementsTitle")}
            </h2>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">{t("admissionsDocumentsNeeded")}</CardTitle>
                <CardDescription className="font-semibold">{t("admissionsDocumentsNeededDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 animate-fade-in-delay-1">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">{t("admissionsBirthCertificate")}</span>
                      <p className="text-sm text-muted-foreground font-semibold">{t("admissionsBirthCertificateDesc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">{t("admissionsAcademicReport")}</span>
                      <p className="text-sm text-muted-foreground font-semibold">{t("admissionsAcademicReportDesc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">{t("admissionsBaptismalCard")}</span>
                      <p className="text-sm text-muted-foreground font-semibold">{t("admissionsBaptismalCardDesc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">{t("admissionsInterviewFee")}</span>
                      <p className="text-sm text-muted-foreground font-semibold">{t("admissionsInterviewFeeDesc")}</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-background animate-slide-in-right">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-foreground flex items-center gap-2">
              <DollarSign className="text-accent animate-pulse" />
              {t("admissionsFeeStructureTitle")}
            </h2>
            
            <Card className="mb-6 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">{t("admissionsTotalAnnualFee")}</CardTitle>
                <CardDescription className="font-semibold">{t("admissionsPaymentInstalments")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-black">{t("admissionsInstalment")}</th>
                        <th className="text-left py-3 px-4 font-black">{t("admissionsAmount")}</th>
                        <th className="text-left py-3 px-4 font-black">{t("admissionsDeadline")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b animate-fade-in-delay-1">
                        <td className="py-3 px-4 font-black">{t("admissionsFirstInstalment")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsFirstInstalmentAmount")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsFirstInstalmentDate")}</td>
                      </tr>
                      <tr className="border-b animate-fade-in-delay-2">
                        <td className="py-3 px-4 font-black">{t("admissionsSecondInstalment")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsSecondInstalmentAmount")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsSecondInstalmentDate")}</td>
                      </tr>
                      <tr className="border-b animate-fade-in-delay-3">
                        <td className="py-3 px-4 font-black">{t("admissionsThirdInstalment")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsThirdInstalmentAmount")}</td>
                        <td className="py-3 px-4 font-bold">{t("admissionsThirdInstalmentDate")}</td>
                      </tr>
                      <tr className="bg-muted font-black animate-pulse">
                        <td className="py-3 px-4">{t("admissionsTotal")}</td>
                        <td className="py-3 px-4">{t("admissionsTotalAmount")}</td>
                        <td className="py-3 px-4">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">{t("admissionsWhatsIncluded")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 animate-fade-in-delay-1">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">{t("admissionsTuitionFees")}</span>
                      </li>
                      <li className="flex items-center gap-2 animate-fade-in-delay-2">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">{t("admissionsBoardingAccommodation")}</span>
                      </li>
                      <li className="flex items-center gap-2 animate-fade-in-delay-3">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">All meals (breakfast, lunch, Supper)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 animate-fade-in-delay-1">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">Textbooks</span>
                      </li>
                      <li className="flex items-center gap-2 animate-fade-in-delay-2">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">School uniforms</span>
                      </li>
                      <li className="flex items-center gap-2 animate-fade-in-delay-3">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">Basic school supplies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-muted animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-foreground flex items-center gap-2">
              <Calendar className="text-accent animate-pulse" />
              Important Dates
            </h2>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b animate-fade-in-delay-1">
                    <Calendar className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div className="flex-1">
                      <p className="font-black text-lg">Application Period</p>
                      <p className="text-muted-foreground font-bold">June - August 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b animate-fade-in-delay-2">
                    <Calendar className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div className="flex-1">
                      <p className="font-black text-lg">Regular Interview Days</p>
                      <p className="text-muted-foreground font-bold">Every Wednesday & Saturday</p>
                      <p className="text-sm text-muted-foreground font-semibold">9:00 AM - 12:00 Noon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b bg-secondary/10 -mx-6 px-6 py-4 rounded animate-pulse">
                    <Calendar className="text-secondary flex-shrink-0 mt-1 animate-spin" size={20} />
                    <div className="flex-1">
                      <p className="font-black text-lg">Special Interview Date</p>
                      <p className="font-black text-secondary">Saturday, June 6th, 2026</p>
                      <p className="text-sm text-muted-foreground font-semibold">8:00 AM - 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 animate-fade-in-delay-3">
                    <Calendar className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div className="flex-1">
                      <p className="font-black text-lg">First Payment Deadline</p>
                      <p className="text-muted-foreground font-bold">June 20, 2026</p>
                      <p className="text-sm text-muted-foreground font-semibold">350,000 FCFA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground animate-slide-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4 animate-bounce">Ready to Apply?</h2>
          <p className="text-xl font-bold mb-8 opacity-95 max-w-2xl mx-auto">
            Take the first step toward joining the Marist family. Contact our admissions office today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse hover:scale-105 transition-transform duration-300" onClick={() => handleNavigation("/contact")}>
              Contact Admissions
            </Button>
            <a
              href="/application-form"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground bg-transparent px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground hover:text-primary animate-pulse hover:scale-105 duration-300"
            >
              {t("homeViewApplicationForm")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
