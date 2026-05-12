import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";

interface FormData {
  fullName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  homeAddress: string;
  currentSchool: string;
  currentGrade: string;
  mathsScore: string;
  englishScore: string;
  languagesSpoken: string;
  extracurricularActivities: string;
  sportsClubs: string;
  communityService: string;
  personalStatement: string;
  parentName: string;
  parentOccupation: string;
  parentPhone: string;
  parentEmail: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const emptyFormData: FormData = {
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

const ApplicationReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const stateData = (location.state as { formData?: FormData })?.formData;
    if (stateData) {
      sessionStorage.setItem("applicationFormData", JSON.stringify(stateData));
      setFormData(stateData);
      return;
    }

    const saved = sessionStorage.getItem("applicationFormData");
    if (saved) {
      try {
        setFormData(JSON.parse(saved) as FormData);
        return;
      } catch {
        // ignore invalid saved data
      }
    }

    navigate("/application-form", { replace: true });
  }, [location.state, navigate]);

  const handleRevert = () => {
    navigate("/application-form");
  };

  const handleDownload = async () => {
    if (!formData) return;
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

  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg font-medium">Loading review details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">Review Application</p>
            <h1 className="text-4xl font-bold">Confirm Your Details</h1>
            <p className="mt-3 text-base text-muted-foreground">Please review every section carefully before downloading your application PDF.</p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div><strong>Full Name:</strong> {formData.fullName || "Not provided"}</div>
              <div><strong>Date of Birth:</strong> {formData.dateOfBirth || "Not provided"}</div>
              <div><strong>Email:</strong> {formData.email || "Not provided"}</div>
              <div><strong>Phone:</strong> {formData.phone || "Not provided"}</div>
              <div className="sm:col-span-2"><strong>Home Address:</strong> {formData.homeAddress || "Not provided"}</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Academic Background</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div><strong>Current School:</strong> {formData.currentSchool || "Not provided"}</div>
              <div><strong>Current Grade/Form:</strong> {formData.currentGrade || "Not provided"}</div>
              <div><strong>Mathematics Score:</strong> {formData.mathsScore || "Not provided"}</div>
              <div><strong>English Score:</strong> {formData.englishScore || "Not provided"}</div>
              <div className="sm:col-span-2"><strong>Languages Spoken:</strong> {formData.languagesSpoken || "Not provided"}</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><strong>Extracurricular Activities:</strong> {formData.extracurricularActivities || "Not provided"}</div>
              <div><strong>Sports & Clubs Participation:</strong> {formData.sportsClubs || "Not provided"}</div>
              <div><strong>Community Service:</strong> {formData.communityService || "Not provided"}</div>
              <div><strong>Personal Statement:</strong> {formData.personalStatement || "Not provided"}</div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Parent / Guardian Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <div><strong>Name:</strong> {formData.parentName || "Not provided"}</div>
              <div><strong>Occupation:</strong> {formData.parentOccupation || "Not provided"}</div>
              <div><strong>Phone:</strong> {formData.parentPhone || "Not provided"}</div>
              <div><strong>Email:</strong> {formData.parentEmail || "Not provided"}</div>
              <div><strong>Emergency Contact:</strong> {formData.emergencyContact || "Not provided"}</div>
              <div><strong>Emergency Phone:</strong> {formData.emergencyPhone || "Not provided"}</div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleRevert}
            >
              <ArrowLeft className="mr-2" size={18} />
              Edit Details
            </Button>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={handleDownload}
            >
              <Download className="mr-2" size={20} />
              Confirm & Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
