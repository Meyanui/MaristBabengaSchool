import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormData {
  // Personal Information
  fullName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  homeAddress: string;
  
  // Academic Background
  currentSchool: string;
  currentGrade: string;
  mathsScore: string;
  englishScore: string;
  languagesSpoken: string;
  
  // Additional Information
  extracurricularActivities: string;
  sportsClubs: string;
  communityService: string;
  personalStatement: string;
  
  // Parent/Guardian Information
  parentName: string;
  parentOccupation: string;
  parentPhone: string;
  parentEmail: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const getSavedFormData = (): FormData => {
    const saved = sessionStorage.getItem("applicationFormData");
    if (!saved) {
      return {
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        homeAddress: '',
        currentSchool: '',
        currentGrade: '',
        mathsScore: '',
        englishScore: '',
        languagesSpoken: '',
        extracurricularActivities: '',
        sportsClubs: '',
        communityService: '',
        personalStatement: '',
        parentName: '',
        parentOccupation: '',
        parentPhone: '',
        parentEmail: '',
        emergencyContact: '',
        emergencyPhone: '',
      };
    }

    try {
      return JSON.parse(saved) as FormData;
    } catch {
      return {
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        homeAddress: '',
        currentSchool: '',
        currentGrade: '',
        mathsScore: '',
        englishScore: '',
        languagesSpoken: '',
        extracurricularActivities: '',
        sportsClubs: '',
        communityService: '',
        personalStatement: '',
        parentName: '',
        parentOccupation: '',
        parentPhone: '',
        parentEmail: '',
        emergencyContact: '',
        emergencyPhone: '',
      };
    }
  };

  const [formData, setFormData] = useState<FormData>(getSavedFormData);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreview = () => {
    sessionStorage.setItem("applicationFormData", JSON.stringify(formData));
    navigate("/application-form/review");
  };

  const handleDownload = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const lineHeight = 18;
    let y = 60;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("MARIST BILINGUAL COMPREHENSIVE COLLEGE", pageWidth / 2, y, { align: "center" });
    y += 24;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Babenga - Bonaberi, Douala, Cameroon", pageWidth / 2, y, { align: "center" });
    y += 14;
    doc.text("Tel: +237 677 085 479 | Email: admissions@maristbabenga.cm", pageWidth / 2, y, { align: "center" });
    y += 8;
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 28;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("APPLICATION FORM FOR ADMISSION - FORM ONE", margin, y);
    y += 22;

    const drawSection = (title: string, fields: Array<[string, string]>) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(title, margin, y);
      y += 18;

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");

      fields.forEach(([label, value]) => {
        const content = `${label}: ${value || "____________________________"}`;
        const lines = doc.splitTextToSize(content, pageWidth - margin * 2);
        if (y + lines.length * lineHeight > doc.internal.pageSize.getHeight() - margin) {
          doc.addPage();
          y = margin;
        }
        doc.text(lines, margin, y);
        y += lines.length * lineHeight;
      });
      y += 12;
    };

    drawSection("SECTION 1: PERSONAL INFORMATION", [
      ["Full Name", formData.fullName],
      ["Date of Birth", formData.dateOfBirth],
      ["Email Address", formData.email],
      ["Phone Number", formData.phone],
      ["Home Address", formData.homeAddress],
    ]);

    drawSection("SECTION 2: ACADEMIC BACKGROUND", [
      ["Current School", formData.currentSchool],
      ["Current Grade/Form", formData.currentGrade],
      ["Mathematics Score", formData.mathsScore],
      ["English Score", formData.englishScore],
      ["Languages Spoken", formData.languagesSpoken],
    ]);

    drawSection("SECTION 3: ADDITIONAL INFORMATION", [
      ["Extracurricular Activities", formData.extracurricularActivities],
      ["Sports & Clubs", formData.sportsClubs],
      ["Community Service", formData.communityService],
      ["Personal Statement", formData.personalStatement],
    ]);

    drawSection("SECTION 4: PARENT/GUARDIAN INFORMATION", [
      ["Parent/Guardian Name", formData.parentName],
      ["Occupation", formData.parentOccupation],
      ["Phone", formData.parentPhone],
      ["Email", formData.parentEmail],
      ["Emergency Contact", formData.emergencyContact],
      ["Emergency Phone", formData.emergencyPhone],
    ]);

    doc.setFontSize(10);
    doc.text(`Application Date: ${new Date().toLocaleDateString()}`, margin, y);
    const fileName = `Marist_Application_${formData.fullName ? formData.fullName.replace(/\s+/g, "_") : "Form"}_${Date.now()}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Form</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Complete your application to join Marist Bilingual Comprehensive College
          </p>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Section 1: Personal Information */}
            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" size={28} />
                  Section 1: Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+237 XXX XXX XXX"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="homeAddress">Home Address *</Label>
                    <Textarea
                      id="homeAddress"
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your complete home address"
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Academic Background */}
            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" size={28} />
                  Section 2: Academic Background
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentSchool">Current School Name *</Label>
                      <Input
                        id="currentSchool"
                        name="currentSchool"
                        value={formData.currentSchool}
                        onChange={handleInputChange}
                        placeholder="Name of your current school"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentGrade">Current Grade/Form *</Label>
                      <Input
                        id="currentGrade"
                        name="currentGrade"
                        value={formData.currentGrade}
                        onChange={handleInputChange}
                        placeholder="e.g., Form 2, Class 6"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="mathsScore">Mathematics Score (Latest) *</Label>
                      <Input
                        id="mathsScore"
                        name="mathsScore"
                        value={formData.mathsScore}
                        onChange={handleInputChange}
                        placeholder="e.g., 85%"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="englishScore">English Score (Latest) *</Label>
                      <Input
                        id="englishScore"
                        name="englishScore"
                        value={formData.englishScore}
                        onChange={handleInputChange}
                        placeholder="e.g., 80%"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="languagesSpoken">Languages Spoken *</Label>
                    <Input
                      id="languagesSpoken"
                      name="languagesSpoken"
                      value={formData.languagesSpoken}
                      onChange={handleInputChange}
                      placeholder="e.g., English, French, Spanish"
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Additional Information */}
            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" size={28} />
                  Section 3: Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="extracurricularActivities">Extracurricular Activities & Interests</Label>
                    <Textarea
                      id="extracurricularActivities"
                      name="extracurricularActivities"
                      value={formData.extracurricularActivities}
                      onChange={handleInputChange}
                      placeholder="Describe your extracurricular activities and interests"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="sportsClubs">Sports & Clubs Participation</Label>
                    <Textarea
                      id="sportsClubs"
                      name="sportsClubs"
                      value={formData.sportsClubs}
                      onChange={handleInputChange}
                      placeholder="List any sports teams or clubs you participate in"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="communityService">Community Service Experience</Label>
                    <Textarea
                      id="communityService"
                      name="communityService"
                      value={formData.communityService}
                      onChange={handleInputChange}
                      placeholder="Describe any community service projects you've participated in"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="personalStatement">Personal Statement *</Label>
                    <Textarea
                      id="personalStatement"
                      name="personalStatement"
                      value={formData.personalStatement}
                      onChange={handleInputChange}
                      placeholder="Tell us why you want to join Marist and what you hope to achieve"
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Parent/Guardian Information */}
            <Card className="mb-6 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" size={28} />
                  Section 4: Parent/Guardian Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentOccupation">Occupation</Label>
                      <Input
                        id="parentOccupation"
                        name="parentOccupation"
                        value={formData.parentOccupation}
                        onChange={handleInputChange}
                        placeholder="Job title/profession"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="+237 XXX XXX XXX"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        name="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="parent.email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="+237 XXX XXX XXX"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Required Documents Info */}
            <Card className="mb-8 border-2 bg-muted/50">
              <CardHeader>
                <CardTitle>Important: Required Documents at Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Birth Certificate (certified copy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Academic Records (last two years of school reports)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Medical Records (health check-up report and vaccination certificate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Passport Photo (4x6 cm color photo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>Character Reference (from current school principal or teacher)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Download & Submit CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Review before Download</h3>
              <p className="mb-6 opacity-95">Review all details in the preview before generating your downloadable PDF application.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={handlePreview}
                >
                  <Download className="mr-2" size={20} />
                  Review Details
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact Admissions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;
