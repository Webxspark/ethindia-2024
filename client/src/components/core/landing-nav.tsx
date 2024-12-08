import { Bot, Skull, Rocket, Party, Sparkles } from "lucide-react";

const LandingNav = () => {
  return (
    <div className="fixed top-0 w-screen bg-black flex items-center justify-center px-10 z-10 py-6 bg-transparant border-b-2">
      <div className="flex items-center gap-2">
        <div className="text-4xl mx-2 font-mono font-black bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          dank.fun
        </div>
        <Sparkles 
          className="h-8 w-8 text-purple-500 hover:text-pink-500 transition-all duration-300 hover:rotate-12" 
        />
      </div>
    </div>
  );
};

export default LandingNav;