import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Laptop, Music, GraduationCap, Users } from "lucide-react";
import computerLab from "@/assets/computer-lab.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import musicClass from "@/assets/music-class.jpg";

const Programs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Comprehensive education that prepares students for success in academics and life
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Curriculum</h2>
            <p className="text-lg text-muted-foreground">
              We offer two comprehensive educational tracks designed to meet diverse student interests and career goals, all delivered in our bilingual learning environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mb-4 text-accent" />
                <CardTitle className="text-2xl">General Education</CardTitle>
                <CardDescription>
                  Comprehensive academic program covering sciences, humanities, and languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mathematics & Sciences</li>
                  <li>• Literature & Languages</li>
                  <li>• Social Studies & History</li>
                  <li>• Physical Education</li>
                  <li>• Religious Education</li>
                  <li>• Preparation for national exams (GCE)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-accent" />
                <CardTitle className="text-2xl">Commercial Education</CardTitle>
                <CardDescription>
                  Business-focused curriculum preparing students for commerce and entrepreneurship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accounting & Bookkeeping</li>
                  <li>• Business Studies</li>
                  <li>• Economics</li>
                  <li>• Commerce & Entrepreneurship</li>
                  <li>• Computer Applications for Business</li>
                  <li>• Preparation for commercial certifications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            What Makes Our Programs Special
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Globe className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Bilingual Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All students achieve fluency in both English and French through our comprehensive bilingual approach. Classes are taught in both languages to ensure true mastery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Spanish Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students receive instruction in Spanish, adding a third international language to their skillset and opening doors to global opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Laptop className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Digital Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Initiation to virtual learning and comprehensive computer skills training prepare students for the digital age and future careers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Music className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Music Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our dedicated music program develops students' artistic talents and appreciation for the arts through both theory and performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Faith Formation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Religious education and spiritual development are integrated throughout our curriculum, forming students of strong moral character.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond academics, we focus on developing leadership, responsibility, teamwork, and the Marist values of simplicity and humility.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Facilities Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img 
                src={computerLab} 
                alt="Computer Laboratory"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Modern Computer Labs</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img 
                src={scienceLab} 
                alt="Science Laboratory"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Science Laboratories</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
              <img 
                src={musicClass} 
                alt="Music Class"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Music Programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Academic Departments</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sciences Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive science education including Physics, Chemistry, Biology, and Mathematics. Our well-equipped laboratories provide hands-on learning experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Languages & Humanities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    English, French, Spanish, Literature, History, and Geography programs that develop critical thinking, communication skills, and cultural awareness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Business, Accounting, Economics, and Entrepreneurship courses that prepare students for careers in commerce and business management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ICT & Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Computer literacy, programming basics, digital tools, and technology applications for academic and professional success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arts & Music</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Music theory and performance, visual arts, and creative expression programs that nurture students' artistic talents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Beyond the Classroom</h2>
            <p className="text-xl opacity-95 mb-8">
              Education at Marist extends beyond academics. Students participate in clubs, sports, music performances, spiritual activities, and community service projects that develop well-rounded character and leadership skills.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Clubs & Societies</h3>
                <p className="text-sm opacity-90">Debate, science, drama, and more</p>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Sports Activities</h3>
                <p className="text-sm opacity-90">Football, athletics, and team sports</p>
              </div>
              <div className="bg-primary-foreground/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Spiritual Life</h3>
                <p className="text-sm opacity-90">Prayer groups, retreats, and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
