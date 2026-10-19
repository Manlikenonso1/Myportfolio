import PageHeader from '../components/sections/PageHeader';
import AboutBio from '../components/sections/AboutBio';
import EduExp from '../components/sections/EduExp';
import SkillsSection from '../components/sections/SkillsSection';
import VisionMission from '../components/sections/VisionMission';
import ClientsPartners from '../components/sections/ClientsPartners';
import CallToAction from '../components/sections/CallToAction';
import SEO from '../components/ui/SEO';

export default function About() {
  return (
    <div className="w-full bg-[var(--bg)] min-h-screen text-[var(--white)]">
      <SEO 
        title="About · Chinonso Ezeigbo" 
        description="Learn more about Chinonso Ezeigbo, a Product Designer with an MSc in Cyber Security from Aston University, building accessible, secure, and intuitive digital products." 
      />
      <PageHeader title="About Me" breadcrumbText="About Me" />
      <AboutBio />
      <EduExp />
      <SkillsSection />
      <VisionMission />
      <ClientsPartners />
      <CallToAction />
    </div>
  );
}
