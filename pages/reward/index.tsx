// @ts-nocheck
/*
  This example requires some changes to your config:
  
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  
*/
import { Fragment, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ArrowDownRightIcon, ArrowsUpDownIcon, BellIcon, ChevronRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import BTC from "../../assets/logos/bitcoin-color-icon.svg";
import ETH from "../../assets/logos/ethereum-eth.svg";
import Image from "next/image";

const tokens = [
  {
    id: 1,
    name: "ETH",
    icon: ETH,
  },
  {
    id: 2,
    name: "nQNT",
    icon: ETH,
  },
  {
    id: 3,
    name: "BTC",
    icon: BTC,
  },
  {
    id: 4,
    name: "QNT",
    icon: ETH,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const cryptoBalance = 6048.543;
  const stakeAmountRef = useRef();
  const [stake_amount, SetStakeAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", stake_amount);
  };
  const [stakeQuivalent_in_USD, setStakeQuivalentInUSD] = useState(0);
  useEffect(() => {
    const equivalent = stake_amount * 530.396;
    setStakeQuivalentInUSD(equivalent);
  }, [stake_amount]);

  const Select = ({ nQNT }) => {
    const [selected, setSelected] = useState(nQNT ? tokens[1] : tokens[0]);
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <button
              onClick={() => {
                stakeAmountRef.current.value = cryptoBalance;
                SetStakeAmount(cryptoBalance);
              }}
              className="bg-black p-2 text-[10px] text-white text-center rounded-full mr-2"
            >
              MAX
            </button>

            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default border-l border-gray-300 py-2 pl-3 pr-10 text-left shadow-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm">
                <span className="flex items-center">
                  <Image
                    src={selected.icon}
                    alt="icon"
                    className={`h-6 w-6 flex-shrink-0 rounded-full ${
                      selected.name === "nQNT" && "hue-rotate-180"
                    }`}
                  />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {tokens.map((token) => (
                    <Listbox.Option
                      key={token.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={token}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <Image
                              src={token.icon}
                              alt="icon"
                              className={classNames(
                                token.name === "nQNT" && "hue-rotate-180",
                                "h-6 w-6 flex-shrink-0 rounded-full"
                              )}
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block"
                              )}
                            >
                              {token.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
  };

  return (
    <>
      <div className="mx-auto mt-5 grid glassmorphic max-w-3xl grid-cols-1 py-6 sm:rounded-lg sm:px-6 lg:max-w-5xl ">
        <section
          className="space-y-6 lg:col-span-2 lg:col-start-1"
          aria-labelledby="stake-form"
        >
          <div className="bg-white text-black p-2 lg:p-10 shadow sm:rounded-lg min-h-[70vh]">
            <div className="flex flex-col sm:flex-row  justify-between ">
              <div>
                <div className="relative shadow-md rounded-xl px-5 lg:px-8 py-8 flex flex-col items-center justify-around">
                  <div className=" round w-[30%] h-20 border-r-2 border-black absolute top-0" />
                  <div className="rounded-tl-full rounded-full  w-[50%] h-32 border-l-4 absolute top-0" />
                  <div className="bg-black flex items-center justify-center border-2 mt-20 border-spacing-4 border-gray-400 rounded-full w-20 h-20 ">                 
                    <SparklesIcon className="text-white w-10 h-10" />
                  </div>
                  <h1 className="text-gray-600 text-sm">Your rewards</h1>
                  <h2 className="text-3xl font-bold">563.233</h2>

                  <div className="flex justify-between bg-gray-100 mt-10  py-4 px-6 rounded-xl shadow-md gap-5 lg:gap-24 w-full">
                    <div className=" text-start">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-black " />
                        <h1 className="font-semibold text-xs">Available</h1>
                      </div>
                      <span className="font-bold text-xl inline">233 CRPT</span>
                      <p className="text-gray-600 text-sm">$544.343</p>
                    </div>

                    <div className=" text-end ">
                      <div className="flex items-center gap-2 justify-end">
                        <h1 className="font-semibold text-xs">Staked</h1>
                        <div className="h-2 w-2 bg-black " />
                      </div>
                      <h2 className="font-bold text-xl inline">233 CRPT</h2>
                      <p className="text-gray-600 text-sm">$544.343</p>
                    </div>
                    
                  </div>

                  <div className="flex justify-between items-center mt-10 py-5 px-3 gap-5 w-full">
                    <div className="flex  items-center gap-3">
                      <div className="h-4 w-4 bg-black rounded-full flex items-center justify-center" ><BellIcon className="text-white w-3 h-3"/> </div>
                      <div>
                        <h1 className="font-semibold text-xs">Updates</h1>
                        <h2 className="font-bold text-xs">Nuxt, Premium...</h2>
                      </div>
                    </div>

                    <div className=" flex justify-between gap-2 items-center ">
                      <p className="text-gray-600 text-xs inline">6 orders</p>
                      <ChevronRightIcon className="w-3 h-3 text-black font-bold"/>
                    </div>
                  </div>
                </div>
                <button className="flex mt-10 w-full justify-center bg-black text-white rounded-lg  py-4 px-12">
                  Stake
                </button>
              </div>

              <div>
                <div className="flex flex-col items-center shadow-sm pb-20 w-full pr-40 mt-14 sm:mt-0">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center h-6 w-6 bg-black rounded-full" >
                      <BellIcon className="text-white h-4 w-4" />
                    </div>
                    <h1 className="text-5xl font-bold">CRPT</h1>
                  </div>
                  <p className="font-semibold">Ethereum</p>
                </div>

               {/* emptydiv */}
               <div className="w-80 h-60 lg:w-[25rem] lg:h-[23rem] bg-gray-100 my-5 " />

                <div className="flex justify-between items-center gap-2  bg-gray-100 rounded-lg shadow-sm py-4 px-2 lg:px-8 w-full">
                  <div className="flex  items-center justify-center h-6 w-6 bg-black rounded-full border-4 border-white" >
                    <BellIcon className="text-white h-3 w-3" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xs text-gray-600">
                      Total Balance
                    </h1>
                    <h2 className="font-bold text-sm">$16,937,800.76</h2>
                    <p className="text-gray-600 text-xs">1,237,3679</p>
                  </div>
                  <div className="flex justify-between gap-2 lg:gap-5">
                    <button className="text-xs font-bold shadow-md px-7 lg:px-10 py-2 rounded-lg bg-white text-black">
                      Buy
                    </button>
                    <button className="text-xs font-bold shadow-md  px-7 lg:px-10 py-2 rounded-lg bg-white text-black">
                      Receive
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
