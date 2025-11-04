import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillTreeSection from '@/components/SkillTreeSection'
import ContactSection from '@/components/ContactSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
