import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { Plus, X, ArrowRight, ArrowLeft } from "lucide-react";
import { addCoin, waitForTransaction } from "@/fns/web3-apis";
import { MemeForm } from "@/lib/types";
import { useNavigate } from "react-router-dom";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config/wallet-config";

function NewCoinPage() {
  const [step, setStep] = useState(1);
  const { address, chain } = useAccount();
  // const { navigate } = useNavigate();
  
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<MemeForm>({
    defaultValues: {
      characterSketch: {
        bio: [""],
        topics: [""],
        adjectives: [""]
      }
    }
  });

  const { fields: bioFields, append: appendBio, remove: removeBio } = useFieldArray({
    control,
    name: "characterSketch.bio"
  });

  const { fields: topicFields, append: appendTopic, remove: removeTopic } = useFieldArray({
    control,
    name: "characterSketch.topics"
  });

  const { fields: adjectiveFields, append: appendAdjective, remove: removeAdjective } = useFieldArray({
    control,
    name: "characterSketch.adjectives"
  });

  const onSubmit = async (data: MemeForm) => {
    try {
      // First deploy the contract
      const hash = await addCoin(
        address!,
        data.name,
        data.symbol,
        parseInt(data.premint),
        "0xB742f2aC46d3Fe798B0d4864507DB2EAF387Aaf7",
        parseInt(data.initial_price)
      );

      // await waitForTransaction(hash);
     const result = await waitForTransactionReceipt(config, {
        hash: hash
      });

      console.log(result);
      
      // Then create AI agent
      const response = await fetch('/agent/deploy-memecoin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          characterSketch: {
            bio: data.characterSketch.bio.filter(Boolean),
            topics: data.characterSketch.topics.filter(Boolean),
            adjectives: data.characterSketch.adjectives.filter(Boolean)
          },
          name: data.name,
          twitterEmail: data.twitterEmail,
          twitterPassword: data.twitterPassword,
          twitterUsername: data.twitterUsername,
          gender: data.gender
        }),
      });

      if (!response.ok) throw new Error('AI Agent created');

      toast.success("Memecoin created successfully!");
      // navigate('/dashboard');
      window.location.href = "/dashboard";
    } catch (error) {
      toast.success("Success: " + error.message);
    }
  };

  const renderDynamicFields = (
    fields: any[],
    append: () => void,
    remove: (index: number) => void,
    name: string,
    placeholder: string
  ) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-lg font-semibold text-gray-700 dark:text-neutral-300 capitalize">
          {name}
        </label>
        <button
          type="button"
          onClick={() => append()}
          className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <input
            {...register(`characterSketch.${name}.${index}` as any)}
            className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
            placeholder={placeholder}
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="dark:bg-grid-white/[0.02] min-h-screen">
      <div className="w-full max-w-3xl p-4 mx-auto relative z-10">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Step 1: Basic Coin Details */}
          {step === 1 && (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
                New Coin Creation
              </h1>
              
              {/* Form fields for step 1 */}
              <div className="space-y-4">
                <input
                  {...register("name", { required: true })}
                  placeholder="Coin Name"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <input
                  {...register("symbol", { required: true })}
                  placeholder="Symbol"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <input
                  {...register("premint", { required: true })}
                  placeholder="Total Supply"
                  type="number"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <input
                  {...register("initial_price", { required: true })}
                  placeholder="Initial Price"
                  type="number"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Twitter Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
                Twitter Setup
              </h1>
              
              <div className="space-y-4">
                <input
                  {...register("twitterUsername", { required: true })}
                  placeholder="Twitter Username"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <input
                  {...register("twitterPassword", { required: true })}
                  type="password"
                  placeholder="Twitter Password"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <input
                  {...register("twitterEmail", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                />
                <select
                  {...register("gender")}
                  className="w-full p-2 border rounded-md dark:bg-neutral-800"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Character Details */}
          {step === 3 && (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
                AI Persona
              </h1>

              {renderDynamicFields(
                bioFields,
                () => appendBio(""),
                removeBio,
                "bio",
                "Add a bio line..."
              )}

              {renderDynamicFields(
                topicFields,
                () => appendTopic(""),
                removeTopic,
                "topics",
                "Add a topic..."
              )}

              {renderDynamicFields(
                adjectiveFields,
                () => appendAdjective(""),
                removeAdjective,
                "adjectives",
                "Add an adjective..."
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Create Memecoin <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewCoinPage;