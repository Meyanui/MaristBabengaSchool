import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Marist</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Building on a legacy of excellence in Catholic education worldwide
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Marist Bilingual Comprehensive College is a distinguished Catholic boarding school located in Babenga, a neighborhood in Bonaberi, Douala (Littoral Region, Cameroon), situated on the western side of the city across the Wouri Bridge. It lies along the Douala–Nkongsamba axis, making it accessible via the main Bonaberi road corridor. <p>We are part of the worldwide network of Marist Brothers educational institutions, bringing over 200 years of educational excellence to our students.</p>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our school offers comprehensive education from Form one through Upper Sixth, with both General and Commercial Education tracks. We pride ourselves on our bilingual approach, ensuring students achieve fluency in English and French, with additional Spanish language instruction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a boarding-only institution, we provide a safe, nurturing environment where students can focus on their academic, spiritual, and personal growth under the guidance of dedicated staff who embody Marist values.
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
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire young people to live with Integrity, Compassion and Love, and committed to building a just and transformative society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-accent" size={28} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide holistic Catholic education, developing students intellectually, spiritually, physically, and socially. We nurture their potential with strong moral values and a commitment to service, inspired by the educational philosophy of Saint Marcellin Champagnat.
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">The Marist Brothers</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Marist Brothers (Little Brothers of Mary) were founded by Saint Marcellin Champagnat in France in 1817. Moved by the lack of education for rural children and inspired by his deep faith, Champagnat dedicated his life to providing quality Catholic education to young people, especially those who were poor and marginalized.
              </p>
              <p>
                Today, the Marist Brothers are present in 79 countries across all continents, running schools, colleges, universities, and social welfare programs. The charism of the Marist Brothers emphasizes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Presence - being attentive and available to students</li>
                <li>Simplicity - authentic, humble relationships</li>
                <li>Love of work - dedication and perseverance</li>
                <li>In the way of Mary - gentleness, humility, and love</li>
                <li>Family spirit - creating a welcoming, caring community</li>
              </ul>
              <p>
                Our college proudly carries forward this 200+ year tradition, bringing Marist education to the students of Cameroon and Central Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Heart className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">Faith & Spirituality</h3>
              <p className="opacity-90">
                Nurturing spiritual growth through prayer, sacraments, and service to others
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">Family Spirit</h3>
              <p className="opacity-90">
                Creating a welcoming community where everyone feels valued and supported
              </p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="opacity-90">
                Striving for academic and personal excellence in all endeavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Modern, well-equipped classrooms</li>
                    <li>• ICT/Computer lab</li>
                    <li>• Music room for arts education</li>
                    <li>• Science laboratory</li>
                    <li>• Digital learning platforms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Boarding Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Safe, secure dormitories</li>
                    <li>• Dining hall with nutritious meals</li>
                    <li>• Recreation areas</li>
                    <li>• 24/7 supervision and care</li>
                    <li>• Health and wellness support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spiritual Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Beautiful Space for daily Prayers</li>
                    <li>• Prayer and meditation spaces</li>
                    <li>• Regular spiritual Exercises</li>
                    <li>• Faith formation programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security & Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 24/7 security personnel</li>
                    <li>• Anti‑bullying and discipline structures</li>
                    <li>• Health & counseling rooms</li>
                    <li>• Child protection office</li>
                    <li>• First aid and medical care</li>
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
