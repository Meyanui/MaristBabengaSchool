import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, DollarSign, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admissions = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20 animate-pulse">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 animate-bounce">Admissions 2026/2027</h1>
          <p className="text-xl font-bold opacity-95 max-w-2xl mx-auto">
            Join our community of learners. Applications open now for FORM ONE Only.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-secondary text-secondary-foreground py-6 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="flex-shrink-0 mt-1 animate-spin" size={24} />
            <div>
              <p className="font-black text-lg mb-1">Special Interview Date</p>
              <p className="font-bold">Saturday, June 6th, 2026 • 8:00 AM - 11:00 Noon</p>
              <p className="text-sm font-semibold mt-2">Regular interviews: Wednesdays & Saturdays, 9:00 AM - 12:00 Noon (June - August 2026)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background animate-slide-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6 text-foreground">Admission Overview</h2>
            <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 animate-fade-in-delay-1">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">Boarding-Only School</p>
                      <p className="text-muted-foreground font-semibold">All students live on campus in our safe, nurturing boarding facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 animate-fade-in-delay-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">Available Classes</p>
                      <p className="text-muted-foreground font-semibold">Form 1, Form 2, Form 3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 animate-fade-in-delay-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <p className="font-black">Education Tracks</p>
                      <p className="text-muted-foreground font-semibold">General Education and Commercial Education programs available</p>
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
              Application Requirements
            </h2>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">Documents Needed</CardTitle>
                <CardDescription className="font-semibold">Please prepare the following documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 animate-fade-in-delay-1">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">Birth Certificate</span>
                      <p className="text-sm text-muted-foreground font-semibold">Photocopy of student's birth certificate</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">Academic Report Card</span>
                      <p className="text-sm text-muted-foreground font-semibold">Most recent academic report from previous school</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">Baptismal Card</span>
                      <p className="text-sm text-muted-foreground font-semibold">Required for Catholics only</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-delay-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1 animate-bounce" size={20} />
                    <div>
                      <span className="font-black">Interview Fee</span>
                      <p className="text-sm text-muted-foreground font-semibold">3,500 FCFA (non-refundable)</p>
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
              Fee Structure 2026/2027
            </h2>
            
            <Card className="mb-6 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">Total Annual Fee: 610,000 FCFA</CardTitle>
                <CardDescription className="font-semibold">Payment can be made in three instalments as shown below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-black">Instalment</th>
                        <th className="text-left py-3 px-4 font-black">Amount</th>
                        <th className="text-left py-3 px-4 font-black">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b animate-fade-in-delay-1">
                        <td className="py-3 px-4 font-black">1st Instalment</td>
                        <td className="py-3 px-4 font-bold">350,000 FCFA</td>
                        <td className="py-3 px-4 font-bold">June 20, 2026</td>
                      </tr>
                      <tr className="border-b animate-fade-in-delay-2">
                        <td className="py-3 px-4 font-black">2nd Instalment</td>
                        <td className="py-3 px-4 font-bold">200,000 FCFA</td>
                        <td className="py-3 px-4 font-bold">December 07, 2026</td>
                      </tr>
                      <tr className="border-b animate-fade-in-delay-3">
                        <td className="py-3 px-4 font-black">3rd Instalment</td>
                        <td className="py-3 px-4 font-bold">60,000 FCFA</td>
                        <td className="py-3 px-4 font-bold">February 1, 2027</td>
                      </tr>
                      <tr className="bg-muted font-black animate-pulse">
                        <td className="py-3 px-4">TOTAL</td>
                        <td className="py-3 px-4">610,000 FCFA</td>
                        <td className="py-3 px-4">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-black">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 animate-fade-in-delay-1">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">Tuition fees</span>
                      </li>
                      <li className="flex items-center gap-2 animate-fade-in-delay-2">
                        <CheckCircle2 className="text-accent animate-bounce" size={18} />
                        <span className="font-bold">Boarding accommodation</span>
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
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold animate-pulse hover:scale-105 transition-transform duration-300">
              Download Application Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
