import Film from "@/components/Film";
import Header from "@/components/Header";
import { Benefits, Bio, Blog, Faq, Footer, Hero, Pricing, Process } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Film />
        <Bio />
        <Benefits />
        <Blog />
        <Process />
        <Pricing />
        <Faq />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
