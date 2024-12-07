import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewCoinPage() {
  const [step, setStep] = useState(1);
  const [isCloning, setIsCloning] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    reset();
    setStep(1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="dark:bg-grid-white/[0.02]">
      <div className="w-full max-w-3xl p-4 mx-auto relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white bg-opacity-50">
          New Coin Creation
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Memecoin Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Symbol
                  </label>
                  <input
                    type="text"
                    {...register("symbol", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Premint (Total Supply)
                  </label>
                  <input
                    type="number"
                    {...register("premint", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Twitter Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Username
                  </label>
                  <input
                    type="text"
                    {...register("twitterUsername", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("twitterPassword", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                    Email ID
                  </label>
                  <input
                    type="email"
                    {...register("twitterEmail", { required: true })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Persona Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mr-2">
                    Clone a Persona
                  </label>
                  <input
                    type="checkbox"
                    {...register("isCloning")}
                    onChange={() => setIsCloning(!isCloning)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                {isCloning ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                      Twitter Profile URL
                    </label>
                    <input
                      type="text"
                      {...register("twitterProfileUrl", { required: true })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
                      Character Sketch
                    </label>
                    <textarea
                      {...register("characterSketch", { required: true })}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                      rows={5}
                    />
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default NewCoinPage;
