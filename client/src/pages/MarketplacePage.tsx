import { useEffect, useState } from "react";
import { fetchUserCoins } from "@/fns/web3-apis";
import { useAccount } from "wagmi";
import { Bot, Coins, Twitter, Activity, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { UserCoin } from "@/fns/web3-apis";

function MarketplacePage() {
  const [userCoins, setUserCoins] = useState<UserCoin[]>([]);
  const { address } = useAccount();

  useEffect(() => {
    const fetchCoins = async () => {
      if (address) {
        const coins = await fetchUserCoins(address);
        setUserCoins(coins);
      }
    };
    fetchCoins();
  }, [address]);

  const getStatusIcon = (status: number) => {
    switch (status) {
      case 0:
        return <Activity className="text-yellow-500" />;
      case 1:
        return <CheckCircle className="text-green-500" />;
      case 2:
        return <XCircle className="text-red-500" />;
      default:
        return <AlertCircle className="text-gray-500" />;
    }
  };

  return (
    <div className="dark:bg-grid-white/[0.02] min-h-screen">
      <div className="w-full max-w-7xl mx-auto p-4 pt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white bg-opacity-50 mb-12">
          Your Meme Empire
        </h1>

        {userCoins.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userCoins.map((coin, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 hover:from-purple-950 hover:to-neutral-950 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-purple-500">
                    <Coins size={32} className="group-hover:rotate-12 transition-transform" />
                  </div>
                  {getStatusIcon(coin.status)}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{coin.name}</h3>
                
                <div className="space-y-2">
                  <p className="text-neutral-400 text-sm flex items-center gap-2">
                    <span className="font-semibold">Supply:</span>
                    {coin.premintSupply.toString()}
                  </p>
                  
                  <p className="text-neutral-400 text-sm flex items-center gap-2">
                    <span className="font-semibold">Address:</span>
                    <span className="text-xs">
                      {`${coin.coinAddress.slice(0, 6)}...${coin.coinAddress.slice(-4)}`}
                    </span>
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800 flex justify-between items-center">
                  <div className="flex gap-2">
                    <Bot size={20} className="text-purple-500" />
                    <Twitter size={20} className="text-blue-500" />
                  </div>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-sm transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-neutral-400">No memecoins found. Create your first one!</p>
            <button className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Create Memecoin
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketplacePage;