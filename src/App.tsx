import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProject } from './components/FeaturedProject';
import { CriticalDiscoveries } from './components/CriticalDiscoveries';
import { ArtifactsShowcase } from './components/ArtifactsShowcase';
import { AchievementsSection } from './components/AchievementsSection';
import { FutureRoadmap } from './components/FutureRoadmap';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    document.title = 'Kosisochukwu Maureen Obiekwe — QA Engineer | Future SDET';
    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    ensureMeta(
      'description',
      'QA Engineer and future SDET. A complete quality-engineering case study from the Anvila internship — test planning, API testing, exploratory testing, performance testing, and CI-integrated regression automation.'
    );
    ensureMeta('author', 'Kosisochukwu Maureen Obiekwe');
  }, []);
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white font-body text-charcoal dark:bg-charcoal dark:text-white">
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <JourneyTimeline />
          <SkillsSection />
          <FeaturedProject />
          <CriticalDiscoveries />
          <ArtifactsShowcase />
          <AchievementsSection />
          <FutureRoadmap />
          <PhilosophySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}