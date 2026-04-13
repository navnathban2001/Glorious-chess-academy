import Navbar from "@/components/navbar";
import HeroSlider from "@/components/heroslider";
import AboutSection from "@/components/aboutsection";
import CoursesSection from "@/components/coursessection";
import FAQSection from "@/components/faqsection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <CoursesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

