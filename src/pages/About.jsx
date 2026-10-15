import PageHeader from '../components/sections/PageHeader';
import AboutBio from '../components/sections/AboutBio';
import EduExp from '../components/sections/EduExp';
import SkillsSection from '../components/sections/SkillsSection';
import VisionMission from '../components/sections/VisionMission';
import ClientsPartners from '../components/sections/ClientsPartners';
import CallToAction from '../components/sections/CallToAction';

export default function About() {
  return (
    <div className="w-full bg-[var(--bg)] min-h-screen text-[var(--white)]">
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
