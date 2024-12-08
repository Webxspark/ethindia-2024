import LandingNav from "@/components/core/landing-nav";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ArrowRight, Bot, Coins, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className=" bg-black overflow-hidden">
      <LandingNav />
      
      {/* Hero Section */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black ">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-gray-400  to-gray-50 text-2xl md:text-3xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Meme Coins Made Simple.<br />
          <span className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text">
            AI Agents Made Legendary.
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-xl text-neutral-400 text-center mt-6">
          Your one-stop solution for creating viral memecoins with AI-powered social presence. 
          No coding required, just pure meme magic.
        </p>
        <Link to="/dashboard" className="mt-8 group">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
            Launch App
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </BackgroundLines>

      {/* Features Grid */}
      <div className="py-8 px-4 md:px-8 bg-black/80">
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-12">
          Why Choose <span className="text-purple-500">dank.fun</span>?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 hover:from-purple-950 hover:to-neutral-950 transition-all duration-300">
              <div className="text-purple-500 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="pt-6 pb-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Own Memecoin?
          </h3>
          <p className="text-neutral-400 mb-8 text-lg">
            Join the revolution and let AI handle your memecoin's social presence
          </p>
          <Link to="/dashboard">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Bot size={32} />,
    title: "AI-Powered Social Presence",
    description: "Let our AI agents handle your memecoin's Twitter presence with viral-worthy content"
  },
  {
    icon: <Coins size={32} />,
    title: "One-Click Deployment",
    description: "Create and deploy your memecoin in minutes with our simplified interface"
  },
  {
    icon: <Twitter size={32} />,
    title: "Automated Marketing",
    description: "Your coin's social media presence runs 24/7 without any manual intervention"
  }
];

const stats = [
  { value: "100K+", label: "Memecoins Created" },
  { value: "50M+", label: "Total Volume" },
  { value: "24/7", label: "AI Support" },
  { value: "10K+", label: "Active Users" }
];

export default LandingPage;