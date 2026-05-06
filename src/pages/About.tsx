import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Shield } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

const About = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutTitle")}</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            {t("aboutSubtitle")}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t("aboutWhoWeAreTitle")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t("aboutWhoWeArePara1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t("aboutWhoWeArePara2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutWhoWeArePara3")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="text-accent" size={28} />
                  {t("aboutVisionTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t("aboutVisionText")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-accent" size={28} />
                  {t("aboutMissionTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t("aboutMissionText")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Marist Brothers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t("aboutMaristBrothersTitle")}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t("aboutMaristBrothersPara1")}
              </p>
              <p>
                {t("aboutMaristBrothersPara2")}
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>{t("aboutMaristPrinciple1")}</li>
                <li>{t("aboutMaristPrinciple2")}</li>
                <li>{t("aboutMaristPrinciple3")}</li>
                <li>{t("aboutMaristPrinciple4")}</li>
                <li>{t("aboutMaristPrinciple5")}</li>
              </ul>
              <p>
                {t("aboutMaristBrothersPara3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("aboutCoreValuesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Heart className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">{t("aboutCoreValueFaith")}</h3>
              <p className="opacity-90">
                {t("aboutCoreValueFaithText")}
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">{t("aboutCoreValueFamilySpirit")}</h3>
              <p className="opacity-90">
                {t("aboutCoreValueFamilySpiritText")}
              </p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">{t("aboutCoreValueExcellence")}</h3>
              <p className="opacity-90">
                {t("aboutCoreValueExcellenceText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">{t("aboutOurFacilitiesTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("aboutAcademicInfrastructureTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>{t("aboutAcademicInfrastructureItem1")}</li>
                    <li>{t("aboutAcademicInfrastructureItem2")}</li>
                    <li>{t("aboutAcademicInfrastructureItem3")}</li>
                    <li>{t("aboutAcademicInfrastructureItem4")}</li>
                    <li>{t("aboutAcademicInfrastructureItem5")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("aboutBoardingFacilitiesTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>{t("aboutBoardingFacilitiesItem1")}</li>
                    <li>{t("aboutBoardingFacilitiesItem2")}</li>
                    <li>{t("aboutBoardingFacilitiesItem3")}</li>
                    <li>{t("aboutBoardingFacilitiesItem4")}</li>
                    <li>{t("aboutBoardingFacilitiesItem5")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("aboutSpiritualLifeTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>{t("aboutSpiritualLifeItem1")}</li>
                    <li>{t("aboutSpiritualLifeItem2")}</li>
                    <li>{t("aboutSpiritualLifeItem3")}</li>
                    <li>{t("aboutSpiritualLifeItem4")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("aboutSecuritySafetyTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>{t("aboutSecuritySafetyItem1")}</li>
                    <li>{t("aboutSecuritySafetyItem2")}</li>
                    <li>{t("aboutSecuritySafetyItem3")}</li>
                    <li>{t("aboutSecuritySafetyItem4")}</li>
                    <li>{t("aboutSecuritySafetyItem5")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
