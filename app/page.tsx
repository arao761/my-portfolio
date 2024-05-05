
import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Homepage from '@/components/Homepage';
import Skills from '@/components/Skills';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <Homepage />
      <Experience />
      <Awards />
      <Skills />
      <Footer />
      
    </main>
  );
}