import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Lifecycle from "@/components/Lifecycle";
import Modules from "@/components/Modules";
import Motion from "@/components/Motion";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Roles from "@/components/Roles";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Motion />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Lifecycle />
        <Features />
        <Showcase />
        <Roles />
        <Modules />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
