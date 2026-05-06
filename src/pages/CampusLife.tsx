import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Heart, Utensils, Shield, Clock, Users } from "lucide-react";
import boardingDorm from "@/assets/boarding-dorm.jpg";
import chapel from "@/assets/chapel.jpg";
import sportsField from "@/assets/sports-field.jpg";

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Life</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            A home away from home where students thrive in a supportive, faith-filled community
          </p>
        </div>
      </section>

      {/* Boarding Life Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Life at Marist</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a boarding-only school, we provide a complete living and learning environment where students are cared for 24/7. Our campus is designed to be a safe, nurturing home where students can focus on their academic, spiritual, and personal growth surrounded by peers and caring staff who share the Marist values.
            </p>
          </div>

          {/* Featured Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={boardingDorm} 
                alt="Boarding Dormitories"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Comfortable Dormitories</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={chapel} 
                alt="School Chapel"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Spiritual Life</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={sportsField} 
                alt="Sports Activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">Sports & Recreation</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Home className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Comfortable Dormitories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Well-maintained, secure dormitories provide a comfortable living space where students feel at home. Supervised by dedicated staff who ensure safety and well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Utensils className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Nutritious Meals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Three balanced meals daily prepared in our dining hall. Menus designed to provide the nutrition growing students need for academic success and physical health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Shield className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Safety & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 security personnel, controlled campus access, and comprehensive safety protocols ensure students are protected at all times.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Heart className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  First aid facilities on campus with staff trained in medical care. Regular health check-ups and immediate attention to student health needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Users className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Family Spirit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Marist family spirit creates a welcoming, supportive community where every student feels valued, known, and cared for by both staff and peers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Clock className="w-10 h-10 mb-3 text-accent" />
                <CardTitle>Structured Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Daily routine balances academics, meals, recreation, study time, and rest—helping students develop discipline and good habits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">A Typical Day</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">5:30 AM</div>
                    <div className="text-muted-foreground">Wake up & morning preparations</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">6:30 AM</div>
                    <div className="text-muted-foreground">Morning prayer & Mass</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">7:00 AM</div>
                    <div className="text-muted-foreground">Breakfast</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">7:30 AM</div>
                    <div className="text-muted-foreground">Assembly</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">8:00 AM</div>
                    <div className="text-muted-foreground">Classes begin</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">10:40 AM</div>
                    <div className="text-muted-foreground">Morning break</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">1:50 PM</div>
                    <div className="text-muted-foreground">Lunch</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">2:20 PM</div>
                    <div className="text-muted-foreground">Siesta</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">3:15 PM</div>
                    <div className="text-muted-foreground">preps</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">4:30 PM</div>
                    <div className="text-muted-foreground">Sports & recreation time</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">6:00 PM</div>
                    <div className="text-muted-foreground">Evening Prayer</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">7:00 PM</div>
                    <div className="text-muted-foreground">Supper & Study Time</div>
                  </div>
                  <div className="flex gap-4 pb-3 border-b">
                    <div className="font-semibold w-32 flex-shrink-0">9:30 PM</div>
                    <div className="text-muted-foreground">End of Preps</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-semibold w-32 flex-shrink-0">9:45 PM</div>
                    <div className="text-muted-foreground">Lights out</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Conduct */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Student Conduct & Values</h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Living the Marist Spirit</CardTitle>
                <CardDescription>
                  Our expectations for student behavior reflect Marist values
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Students at Marist College are expected to embody the values of respect, responsibility, and compassion. We foster a culture of:
                  </p>
                  <ul className="space-y-2 list-disc list-inside pl-4">
                    <li>Respect for self, others, and property</li>
                    <li>Honesty and integrity in all activities</li>
                    <li>Responsibility for academic work and personal behavior</li>
                    <li>Service to others and the community</li>
                    <li>Simplicity and humility in daily life</li>
                    <li>Active participation in school life and activities</li>
                  </ul>
                  <p>
                    Clear rules and guidelines help maintain a peaceful, productive environment where all students can thrive. Discipline is firm but loving, in the spirit of Marcellin Champagnat.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spiritual Life */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Spiritual Life</h2>
            <p className="text-xl opacity-95 mb-8">
              Faith is at the heart of life at Marist. Students grow spiritually through:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Daily Prayer</h3>
                <p className="text-sm opacity-90">
                  Morning and evening prayers together as a school community, fostering a prayerful atmosphere.
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Mass & Sacraments</h3>
                <p className="text-sm opacity-90">
                  Regular celebration of Mass in our chapel, confession, and other sacramental opportunities.
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Retreats</h3>
                <p className="text-sm opacity-90">
                  Annual retreats for reflection, spiritual growth, and deepening faith.
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Service Projects</h3>
                <p className="text-sm opacity-90">
                  Opportunities to serve others and live out Gospel values through community outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Recreation & Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sports</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Football</li>
                    <li>• Basketball</li>
                    <li>• Athletics</li>
                    <li>• Indoor games</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arts & Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Music performances</li>
                    <li>• Drama & theater</li>
                    <li>• Cultural celebrations</li>
                    <li>• Art exhibitions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Debate club</li>
                    <li>• Science club</li>
                    <li>• Language clubs</li>
                    <li>• Prayer groups</li>
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

export default CampusLife;
