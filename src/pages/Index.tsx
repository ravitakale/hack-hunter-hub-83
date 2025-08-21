import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickActions />
      <Footer />
    </div>
  );
};

export default Index;
