
import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Homepage from '@/components/Homepage';
import Skills from '@/components/Skills';
import Footer from '@/components/footer';
import About from '@/components/About';
import Spacing from '@/components/Spacing';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <Homepage />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Spacing />
      <Footer />
      
    </main>
  );
}