import NavBar from '@/app/(home)/_components/sections/NavBar';
import Hero from '@/app/(home)/_components/sections/Hero';
import About from '@/app/(home)/_components/sections/About';
import Projects from '@/app/(home)/_components/sections/Projects';
import Education from '@/app/(home)/_components/sections/Education';
import Contact from '@/app/(home)/_components/sections/Contact';
import Footer from '@/app/(home)/_components/sections/Footer';

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-bg text-text">
        {/* Hero Section */}
        <Hero />

        {/* About Section - Bento Grid */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
