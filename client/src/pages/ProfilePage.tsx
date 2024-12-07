import { useUser } from "@/context/UserContext";
import { useAccount } from "@starknet-react/core";

function ProfilePage() {
  const { userData, isTeleInterface } = useUser();
  const { address } = useAccount();

  return (
    <div className="dark:bg-grid-white/[0.02]">
      <div className="w-full max-w-3xl p-4 mx-auto relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white bg-opacity-50">
          Profile Page
        </h1>
        <div className="mt-8 space-y-6">
          {isTeleInterface ? (
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Telegram Data</h2>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={`https://t.me/i/userpic/320/${userData?.username}.jpg`}
                  alt="Profile"
                  className="w-24 h-24 rounded-full shadow-md"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold">{userData?.first_name} {userData?.last_name}</p>
                  <p className="text-sm text-gray-500">@{userData?.username}</p>
                  <p className="text-sm text-gray-500">Language: {userData?.language_code}</p>
                  {userData?.is_premium && (
                    <p className="text-sm text-yellow-500">Premium User</p>
                  )}
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold">Wallet Address</p>
                <p className="text-sm text-gray-500">{address}</p>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Wallet Address</h2>
              <p className="text-sm text-gray-500 mb-4">{address}</p>
              <p className="text-sm text-gray-500">
                Use our Telegram Mini App for a better experience and to view your user data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;