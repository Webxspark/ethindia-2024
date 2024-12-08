import { AppName } from "@/config/consts";

const SignUpComp = () => {
  return (
    <div className="dark:bg-grid-white/[0.02]">
      <div className="w-full max-w-3xl p-4 mx-auto relative z-10">
        <h1 className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white bg-opacity-50">
          Welcome to {AppName}!
        </h1>
        <div className="h-[50dvh] flex items-center justify-center">
          <h1 className="text-2xl font-bold animate-pulse">
            Creating you an account...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
