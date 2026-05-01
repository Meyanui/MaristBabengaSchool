import { Card, CardContent } from "@/components/ui/card";
import computerLab from "@/assets/computer-lab.jpg";
import boardingDorm from "@/assets/boarding-dorm.jpg";
import musicClass from "@/assets/guitars.jpg";
import chapel from "@/assets/chapel.jpg";
import sportsField from "@/assets/sports-field.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import schoolStudents from "@/assets/f12Kids.jpg";
import sportField1 from "@/assets/sport-field-1.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: schoolStudents,
      title: "Our Students",
      description: "Proud students of Marist Bilingual Comprehensive College"
    },
    {
      src: computerLab,
      title: "Computer Laboratory",
      description: "Modern computer facilities for digital learning"
    },
    {
      src: scienceLab,
      title: "Science Laboratory",
      description: "Well-equipped science labs for hands-on experiments"
    },
    {
      src: musicClass,
      title: "Music Programs",
      description: "Students developing musical talents and skills"
    },
    {
      src: boardingDorm,
      title: "Boarding Facilities",
      description: "Safe and comfortable boarding accommodations"
    },
    {
      src: chapel,
      title: "School Chapel",
      description: "Peaceful space for spiritual growth and reflection"
    },
    {
      src: sportsField,
      title: "Sports Activities",
      description: "Physical education and team sports programs"
    },
    {
      src: sportsField,
      title: "Sports Activities",
      description: "Physical education and team sports programs"
    },
    {
      src: sportsField,
      title: "Sports Activities",
      description: "Physical education and team sports programs"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Campus <span className="text-secondary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore life at Marist Bilingual Comprehensive College through our campus facilities and student activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-primary-foreground font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
