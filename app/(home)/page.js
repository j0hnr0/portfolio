import NavBar from '@/app/(home)/_components/sections/NavBar';
import Hero from '@/app/(home)/_components/sections/Hero';
import About from '@/app/(home)/_components/sections/About';
import Footer from '@/app/(home)/_components/sections/Footer';
import SectionHeader from '@/app/(home)/_components/ui/SectionHeader';

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
        <section id="work" className="min-h-screen py-20 px-6 bg-bg-card">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader title="Projects" />
            <p className="text-text-secondary">Project cards coming soon</p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader title="Education" />
            <p className="text-text-secondary">Education content coming soon</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-bg-card">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader title="Contact" />
            <p className="text-text-secondary">Contact content coming soon</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
