import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import { useI18n } from "@/i18n/I18nContext";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      contactSchema.parse(data);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: t("messageSentTitle"),
          description: t("messageSentDescription"),
        });
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contactTitle")}</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            {t("contactIntro")}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="text-accent" />
                    {t("phoneNumbers")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="tel:+237651703107" className="block text-lg hover:text-accent transition-colors">
                    +237 677 847 634
                  </a>
                  <a href="tel:+2376777085480" className="block text-lg hover:text-accent transition-colors">
                    +237 677 085 480
                  </a>
                  <a href="tel:+237671730604" className="block text-lg hover:text-accent transition-colors">
                    +237 677 043 896
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="text-accent" />
                    {t("emailAddress")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:principalmaristbabenga@gmail.com" 
                    className="text-lg hover:text-accent transition-colors"
                  >
                    maristbcc@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="text-accent" />
                    {t("location")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Babenga – Bonaberi<br />
                    Douala, Cameroon
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-accent" />
                    {t("admissionsOfficeHours")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-2">
                    <strong>{t("juneAugust")}</strong>
                  </p>
                  <p className="text-muted-foreground">
                    {t("officeDays")}<br />
                    {t("officeTime")}
                  </p>
                  <p className="mt-4 font-semibold text-secondary">
                    {t("specialInterviewDate")}<br />
                    {t("interviewDetails")}<br />
                    {t("interviewTime")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Facebook className="text-accent" />
                    {t("followUs")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://www.facebook.com/maristdouala/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    <Facebook size={20} />
                    Marist Bilingual Comprehensive College
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>{t("sendUsMessage")}</CardTitle>
                  <CardDescription>
                    {t("sendUsMessageDescription")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("fullName")}</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="John Doe" 
                        required 
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t("emailAddressPlaceholder")}</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="adam@example.com" 
                        required 
                        maxLength={255}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phoneNumber")}</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        placeholder="+237 6XX XXX XXX" 
                        maxLength={20}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("subject")}</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        placeholder="Admissions Inquiry" 
                        required 
                        maxLength={200}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("message")}</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us how we can help you..." 
                        rows={6}
                        required 
                        maxLength={2000}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("sending") : t("sendMessage")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t("visitOurCampus")}</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-background rounded-lg p-12 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">{t("maristCollege")}</h3>
                  <p className="text-muted-foreground mb-4">
                    Babenga – Bonaberi, Douala, Cameroon
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("visitCampusText")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
