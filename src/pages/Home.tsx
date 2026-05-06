import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Globe, BookOpen, Calendar, Phone, Image as ImageIcon } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import heroImage from "@/assets/hero-schoo.jpg";
import schoolStudents from "@/assets/side.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import boardingDorm from "@/assets/boarding-dorm.jpg";
import chapel from "@/assets/chapel.jpg";
import sportsField from "@/assets/sports-field.jpg";
import scienceLab from "@/assets/Lab.jpeg";
import musicClass from "@/assets/Music1.jpeg";
import backGround from "@/assets/background 2.jpg";
import { useEffect, useRef, useState } from "react";

// Hero images for slideshow with slow zoom effect
const heroImages = [
  { src: heroImage, alt: "School Building" },
  { src: schoolStudents, alt: "Students" },
  { src: computerLab, alt: "Computer Lab" },
  { src: chapel, alt: "Chapel" },
  { src: sportsField, alt: "Sports Field" },
  { src: scienceLab, alt: "Science Lab" },
  { src: musicClass, alt: "Music Class" },
  { src: backGround, alt: "Background Image" }
];

const Home = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const video = videoRef.current;
    const fallback = fallbackRef.current;

    if (video && fallback) {
      // Check if video can play
      const checkVideoLoad = () => {
        if (video.readyState >= 2) {
          // Video loaded successfully
          video.style.display = 'block';
          fallback.style.display = 'none';
        } else {
          // Video failed to load, show fallback
          video.style.display = 'none';
          fallback.style.display = 'block';
        }
      };

      video.addEventListener('loadeddata', checkVideoLoad);
      video.addEventListener('error', () => {
        video.style.display = 'none';
        fallback.style.display = 'block';
      });

      // Fallback after 3 seconds if video doesn't load
      setTimeout(() => {
        if (video.style.display !== 'block') {
          video.style.display = 'none';
          fallback.style.display = 'block';
        }
      }, 3000);

      return () => {
        video.removeEventListener('loadeddata', checkVideoLoad);
        video.removeEventListener('error', () => {});
      };
    }
  }, []);

  // Slow zoom slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Change every 8 seconds for slow transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slow Zoom Slideshow */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Images with Slow Zoom Effect */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 2000ms ease-in-out, transform 8000ms ease-in-out',
              transform: currentSlide === index ? 'scale(1.15)' : 'scale(1)',
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t("homeHeroTitle1")} <span className="text-secondary">{t("homeHeroTitle2")}</span>
            <br />{t("homeHeroTitle3")}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
            {t("homeHeroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg" onClick={() => handleNavigation("/admissions")}>
              {t("homeApplyNow")}
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm shadow-lg" onClick={() => handleNavigation("/contact")}>
              {t("homeContactAdmissions")}
            </Button>
          </div>
        </div>
      </section>

      {/* Important Announcement */}
      <section className="bg-secondary text-secondary-foreground py-4 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Calendar className="flex-shrink-0 animate-pulse text-accent" size={24} />
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <p className="font-black text-xl inline-block text-secondary-foreground">
                  {t("homeSpecialInterviewDate")} &nbsp;&nbsp;&nbsp;&nbsp;
                  {t("homeSpecialInterviewDate")} &nbsp;&nbsp;&nbsp;&nbsp;
                  {t("homeSpecialInterviewDate")}
                </p>
              </div>
            </div>
            <Calendar className="flex-shrink-0 animate-pulse text-accent" size={24} />
          </div>
        </div>
        {/* Animated border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent animate-border-flow"></div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {t("homeWhyChoose")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardAcademicExcellenceTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardAcademicExcellenceDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardBilingualEducationTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardBilingualEducationDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardBoardingFacilityTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardBoardingFacilityDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardMaristValuesTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardMaristValuesDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardModernFacilitiesTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardModernFacilitiesDescription")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>{t("homeCardGlobalNetworkTitle")}</CardTitle>
                <CardDescription>
                  {t("homeCardGlobalNetworkDescription")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("homeCTATitle")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            {t("homeCTASubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => handleNavigation("/admissions")}> 
              {t("homeViewRequirements")}
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => handleNavigation("/contact")}> 
              <Phone className="mr-2" size={20} />
              {t("homeCallAdmissions")}
            </Button>
            <a
              href="/application-form"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground bg-transparent px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground hover:text-primary"
            >
              {t("homeViewApplicationForm")}
            </a>
          </div>
        </div>
      </section>

      {/* Mission Brief */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t("homeMissionTitle")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("homeMissionDescription")}
            </p>
            <Button onClick={() => handleNavigation("/about")}> 
              {t("homeLearnMoreAboutUs")}
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("homeGalleryTitle")} <span className="text-secondary">{t("homeGalleryHighlight")}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t("homeGalleryLifeDescription")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={schoolStudents} 
                alt={t("homeOurStudents")}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">{t("homeOurStudents")}</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={computerLab} 
                alt={t("homeComputerLab")}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">{t("homeComputerLab")}</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={boardingDorm} 
                alt={t("homeBoardingFacilities")}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">{t("homeBoardingFacilities")}</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={chapel} 
                alt={t("homeSchoolChapel")}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">{t("homeSchoolChapel")}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => handleNavigation("/gallery")}>
              <ImageIcon className="mr-2" size={20} />
              {t("homeGalleryViewFullGallery")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
