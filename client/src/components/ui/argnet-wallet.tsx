import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { Power } from "lucide-react";

export default function ArgnetWallet() {
  const { connect, connectors } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const formattedAddress = address
    ? `${address.slice(0, 3)}...${address.slice(-2)}`
    : "";

  return (
    <div>
      {/* <div>Connect Wallet</div> */}

      {address ? (
        <div className="flex items-center justify-center gap-2 bg-orange-500 px-4 py-2 rounded-xl">
          <span className="text-sm font-semibold text-gray-700 dark:text-white">
            {formattedAddress}
          </span>
          <button
            onClick={() => disconnect()}
            className="p-2 rounded-full bg-orange-600 hover:bg-red-600 text-white"
          >
            <Power size={16} />
          </button>
        </div>
      ) : (
        connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({connector})}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Connect {connector.id}
          </button>
        ))
      )}
    </div>
  );
}
