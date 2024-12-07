import NavBar from "@/components/core/navbar";
import { BackgroundLines } from "@/components/ui/background-lines";

function LandingPage() {
  return (
    <div className="h-screen bg-black">
      <NavBar />
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Build Stunning <br />
          Memecoins Yourself.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>
    </div>
  );
}

export default LandingPage;