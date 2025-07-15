import jsPDF from 'jspdf';
import { portfolioData } from '../data/portfolioData';

export function generateResume() {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let yPosition = margin;

  const primaryColor = '#000000';

  const addSectionDivider = () => {
    pdf.setDrawColor(200);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 5;
  };

  const checkNewPage = (heightNeeded: number) => {
    if (yPosition + heightNeeded >= pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
  };

  const addText = (text: string, x: number, y: number, width: number, lineHeight: number): number => {
    const lines = pdf.splitTextToSize(text, width);
    pdf.text(lines, x, y);
    return y + lines.length * lineHeight;
  };

  // ====== HEADER ======
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(primaryColor);
  pdf.text(portfolioData.personal.name.toUpperCase(), margin, yPosition);
  yPosition += 8;

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(portfolioData.personal.title, margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  const contactLine = `${portfolioData.personal.email} | ${portfolioData.personal.phone} | ${portfolioData.personal.location}`;
  pdf.text(contactLine, margin, yPosition);
  yPosition += 5;

  const socialLine = `LinkedIn: ${portfolioData.personal.linkedin} | GitHub: ${portfolioData.personal.github}`;
  pdf.text(socialLine, margin, yPosition);
  yPosition += 10;

  addSectionDivider();

  // ====== SUMMARY ======
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROFESSIONAL SUMMARY', margin, yPosition);
  yPosition += 6;

  pdf.setFontSize(10);
  yPosition = addText(portfolioData.summary, margin, yPosition, contentWidth, 10);
  yPosition += 5;

  addSectionDivider();

  // ====== SKILLS ======
  checkNewPage(40);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('CORE COMPETENCIES', margin, yPosition);
  yPosition += 6;

  const allSkills = [
    ...portfolioData.skills.frontend.map(skill => skill.name),
    ...portfolioData.skills.backend.map(skill => skill.name),
    ...portfolioData.skills.concepts.map(skill => skill.name),
  ];

  const skillsPerColumn = Math.ceil(allSkills.length / 3);
  const columnWidth = contentWidth / 3;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');

  for (let i = 0; i < allSkills.length; i++) {
    const column = Math.floor(i / skillsPerColumn);
    const row = i % skillsPerColumn;
    const xPos = margin + (column * columnWidth);
    const yPos = yPosition + (row * 4);
    pdf.text(`• ${allSkills[i]}`, xPos, yPos);
  }

  yPosition += (skillsPerColumn * 4) + 5;
  addSectionDivider();

  // ====== EXPERIENCE ======
  checkNewPage(60);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
  yPosition += 8;

  portfolioData.experience.forEach((exp, index) => {
    checkNewPage(35);

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(exp.title.toUpperCase(), margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(10);
    pdf.text(`${exp.company}, ${exp.location}`, margin, yPosition);
    const dateWidth = pdf.getTextWidth(exp.period);
    pdf.text(exp.period, pageWidth - margin - dateWidth, yPosition);
    yPosition += 6;

    pdf.setFont('helvetica', 'normal');
    exp.description.forEach(desc => {
      checkNewPage(8);
      yPosition = addText(`• ${desc}`, margin + 5, yPosition, contentWidth - 5, 10);
    });

    if (exp.skills.length > 0) {
      checkNewPage(8);
      pdf.setFont('helvetica', 'italic');
      yPosition = addText(`Key Technologies: ${exp.skills.join(', ')}`, margin + 5, yPosition, contentWidth - 5, 9);
    }

    if (index < portfolioData.experience.length - 1) {
      yPosition += 5;
    }
  });

  yPosition += 5;
  addSectionDivider();

  // ====== EDUCATION ======
  checkNewPage(40);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('EDUCATION', margin, yPosition);
  yPosition += 8;

  portfolioData.education.forEach((edu, index) => {
    checkNewPage(20);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(edu.degree.toUpperCase(), margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${edu.school}, ${edu.location}`, margin, yPosition);
    const dateWidth = pdf.getTextWidth(edu.period);
    pdf.text(edu.period, pageWidth - margin - dateWidth, yPosition);
    yPosition += 5;

    if (edu.gpa) {
      pdf.text(`GPA: ${edu.gpa}`, margin + 5, yPosition);
      yPosition += 4;
    }

    if (index < portfolioData.education.length - 1) {
      yPosition += 3;
    }
  });

  yPosition += 5;
  addSectionDivider();

  // ====== CERTIFICATIONS ======
  if (portfolioData.certifications?.length > 0) {
    checkNewPage(30);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CERTIFICATIONS', margin, yPosition);
    yPosition += 8;

    portfolioData.certifications.forEach(cert => {
      checkNewPage(12);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`• ${cert.title}`, margin, yPosition);
      yPosition += 4;

      pdf.setFont('helvetica', 'normal');
      pdf.text(`  ${cert.issuer}, ${cert.date}`, margin, yPosition);
      yPosition += 6;
    });

    addSectionDivider();
  }

  // ====== PROJECTS ======
  checkNewPage(50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('KEY PROJECTS', margin, yPosition);
  yPosition += 8;

  const featuredProjects = portfolioData.projects.filter(project => project.featured);

  featuredProjects.forEach((project, index) => {
    checkNewPage(25);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(project.title.toUpperCase(), margin, yPosition);
    yPosition += 5;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    yPosition = addText(`• ${project.description}`, margin, yPosition, contentWidth, 10);

    pdf.setFont('helvetica', 'italic');
    const techText = `Technologies: ${project.technologies.join(', ')}`;
    yPosition = addText(techText, margin + 5, yPosition, contentWidth - 5, 9);

    if (index < featuredProjects.length - 1) {
      yPosition += 3;
    }
  });

  // ====== ADDITIONAL INFORMATION ======
  if (yPosition < pageHeight - 40) {
    yPosition += 5;
    addSectionDivider();

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ADDITIONAL INFORMATION', margin, yPosition);
    yPosition += 6;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');

    const languagesText = `Languages: ${portfolioData.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(', ')}`;
    yPosition = addText(languagesText, margin, yPosition, contentWidth, 10);

    if (portfolioData.achievements?.length > 0) {
      yPosition += 2;
      const achievementText = `Awards: ${portfolioData.achievements.map(ach => `${ach.title} - ${ach.organization} (${ach.date})`).join(', ')}`;
      yPosition = addText(achievementText, margin, yPosition, contentWidth, 10);
    }
  }

  // ====== SAVE PDF ======
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `${portfolioData.personal.name.replace(/\s+/g, '_')}_Resume_${currentDate}.pdf`;
  pdf.save(filename);
}
