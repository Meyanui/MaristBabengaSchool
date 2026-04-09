import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Globe, BookOpen, Calendar, Phone, Image as ImageIcon } from "lucide-react";
import heroImage from "@/assets/hero-schoo.jpg";
import schoolStudents from "@/assets/school-students.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import boardingDorm from "@/assets/boarding-dorm.jpg";
import chapel from "@/assets/chapel.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Welcome to <span className="text-secondary">Marist Bilingual</span>
            <br />Comprehensive College
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto">
            Excellence in Catholic Education • Building Future Leaders • Boarding School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">Apply Now for 2026/2027</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Announcement */}
      <section className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Calendar className="flex-shrink-0" size={24} />
          <p className="font-semibold text-lg">
            Special Interview Date: July 5th, 2026 • 8:30 AM - 12:00 Noon
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Marist College?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Academic Excellence</CardTitle>
                <CardDescription>
                  General and Commercial Education with emphasis on quality learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Bilingual Education</CardTitle>
                <CardDescription>
                  Fluency in English & French with Spanish language mastery
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Boarding Facility</CardTitle>
                <CardDescription>
                  Safe, secure, and nurturing boarding environment with complete care
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Marist Values</CardTitle>
                <CardDescription>
                  Catholic education rooted in Marist Brothers tradition since 1817
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Modern Facilities</CardTitle>
                <CardDescription>
                  Computer labs, music rooms, chapel, and comprehensive boarding facilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Part of Marist Brothers presence in 79 countries worldwide
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Admissions open for Classes ONLY. Interview fee: 3,500 FCFA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">View Requirements</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                <Phone className="mr-2" size={20} />
                Call: +237 677 085 479
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Brief */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Marist Bilingual Comprehensive College, we are committed to providing quality Catholic education that develops the whole person—intellectually, spiritually, physically, and socially. Following the charism of Saint Marcellin Champagnat, we nurture young minds to become compassionate leaders who serve their communities with integrity and excellence.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Campus <span className="text-secondary">Life</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the vibrant community and facilities at Marist College
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={schoolStudents} 
                alt="Our Students"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">Our Students</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={computerLab} 
                alt="Computer Lab"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">Computer Lab</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={boardingDorm} 
                alt="Boarding Facilities"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">Boarding Facilities</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-square group">
              <img 
                src={chapel} 
                alt="School Chapel"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary-foreground font-semibold text-lg">School Chapel</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/gallery">
                <ImageIcon className="mr-2" size={20} />
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
