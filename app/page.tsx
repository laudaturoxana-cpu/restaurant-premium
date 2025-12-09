import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EventsSection from '@/components/EventsSection';
import LocationSection from '@/components/LocationSection';
import ReservationSection from '@/components/ReservationSection';
import DeveloperSignature from '@/components/DeveloperSignature';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section - Full Screen */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Menu Section with Tabs */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Experience Cards */}
      <ExperienceSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Private Events */}
      <EventsSection />

      {/* Location with Map */}
      <LocationSection />

      {/* Reservation Form */}
      <ReservationSection />

      {/* Developer Signature - Prominent */}
      <DeveloperSignature />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
