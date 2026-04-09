import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, DollarSign, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2026/2027</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Join our community of learners. Applications open now for all classes.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-semibold text-lg mb-1">Special Interview Date</p>
              <p>Saturday, July 4th, 2026 • 8:30 AM - 12:00 Noon</p>
              <p className="text-sm mt-2">Regular interviews: Wednesdays & Saturdays, 9:00 AM - 12:00 Noon (June - August 2026)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Admission Overview</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Boarding-Only School</p>
                      <p className="text-muted-foreground">All students live on campus in our safe, nurturing boarding facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Available Classes</p>
                      <p className="text-muted-foreground">Form 1, Form 2, Form 3</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Education Tracks</p>
                      <p className="text-muted-foreground">General Education and Commercial Education programs available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
              <FileText className="text-accent" />
              Application Requirements
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Documents Needed</CardTitle>
                <CardDescription>Please prepare the following documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Birth Certificate</span>
                      <p className="text-sm text-muted-foreground">Photocopy of student's birth certificate</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Academic Report Card</span>
                      <p className="text-sm text-muted-foreground">Most recent academic report from previous school</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Baptism Card</span>
                      <p className="text-sm text-muted-foreground">Required for Catholic students only</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-semibold">Interview Fee</span>
                      <p className="text-sm text-muted-foreground">3,500 FCFA (non-refundable)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
              <DollarSign className="text-accent" />
              Fee Structure 2026/2027
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Total Annual Fee: 610,000 FCFA</CardTitle>
                <CardDescription>Payment can be made in three instalments as shown below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Instalment</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">1st Instalment</td>
                        <td className="py-3 px-4">350,000 FCFA</td>
                        <td className="py-3 px-4">July 20, 2026</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">2nd Instalment</td>
                        <td className="py-3 px-4">200,000 FCFA</td>
                        <td className="py-3 px-4">December 10, 2026</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold">3rd Instalment</td>
                        <td className="py-3 px-4">60,000 FCFA</td>
                        <td className="py-3 px-4">February 1, 2027</td>
                      </tr>
                      <tr className="bg-muted font-bold">
                        <td className="py-3 px-4">TOTAL</td>
                        <td className="py-3 px-4">610,000 FCFA</td>
                        <td className="py-3 px-4">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>Tuition fees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>Boarding accommodation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>All meals (breakfast, lunch, Supper)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>Textbooks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>School uniforms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>Basic school supplies</span>
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
              <Calendar className="text-accent" />
              Important Dates
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Application Period</p>
                      <p className="text-muted-foreground">June - August 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Regular Interview Days</p>
                      <p className="text-muted-foreground">Every Wednesday & Saturday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 12:00 Noon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b bg-secondary/10 -mx-6 px-6 py-4 rounded">
                    <Calendar className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">Special Interview Date</p>
                      <p className="font-semibold text-secondary">Saturday, July 5th, 2026</p>
                      <p className="text-sm text-muted-foreground">8:30 AM - 12:00 Noon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="font-semibold text-lg">First Payment Deadline</p>
                      <p className="text-muted-foreground">July 20, 2026</p>
                      <p className="text-sm text-muted-foreground">350,000 FCFA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Take the first step toward joining the Marist family. Contact our admissions office today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Admissions</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Application Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
