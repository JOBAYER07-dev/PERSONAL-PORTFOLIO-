import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import GitHubStats from '@/components/GitHubStats';
import Experience from '@/components/Experience';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Experience/>
      <GitHubStats />
    </>
  );
}
