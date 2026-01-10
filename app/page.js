import NavBar from '@/_components/NavBar';
import Hero from '@/_components/Hero';
import Footer from '@/_components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-bg text-text">
        {/* Hero Section */}
        <Hero />

        {/* About Section - Bento Grid */}
        <section id="about" className="min-h-screen py-20 px-6">
          <div className="max-w-350 mx-auto">
            <h2 className="text-3xl font-bold mb-8">About</h2>
            <p className="text-text-secondary">Bento grid coming soon</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="min-h-screen py-20 px-6 bg-bg-card">
          <div className="max-w-350 mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <p className="text-text-secondary">Project cards coming soon</p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-350 mx-auto">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <p className="text-text-secondary">Education content coming soon</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-bg-card">
          <div className="max-w-350 mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <p className="text-text-secondary">Contact content coming soon</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
