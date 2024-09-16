import React from "react";

const StartupHighlight = () => {
  return (
    <section className=" bg-[#E3E4E8] hs-dark-mode-active:bg-[#1a1e25] p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center mx-auto gap-4">
          <img
            src="https://via.placeholder.com/250"
            alt="Startup logo"
            className="w-full max-w-[250px] h-auto object-contain rounded-md"
          />

          <div>
            <span className="bg-[#E7D052] hover:bg-[#E7D0524D]/40 text-black text-sm font-medium py-1 px-3 rounded-md">
              Cohort 2024
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md::grid-cols-2 xl:grid-cols-3 items-end gap-4 mt-8">
          <div className="col-span-full sm:col-span-1 bg-[#f9f8ee] rounded-[8px]">
            <div className="p-4">
              <div className="hs-dark-mode-active:!text-black">
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Headquarters:
                </span>
                <span className="font-normal text-black/50 hs-dark-mode-active:!text-black">
                  New York, USA
                </span>
              </div>

              <div className="mt-2">
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Company Size:
                </span>
                <span className="font-normal text-black/50 hs-dark-mode-active:!text-black">
                  50 employees
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-1 bg-[#f9f8ee] rounded-[8px]">
            <div className="p-4">
              <div>
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Email:
                </span>
                <span className="font-normal text-black/50 hs-dark-mode-active:!text-black">
                  info@startup.com
                </span>
              </div>

              <div className="mt-2">
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Website:
                </span>
                <span className="font-normal text-accent hover:underline hs-dark-mode-active:!text-primary">
                  <a href="https://www.startup.com" target="_blank">
                    www.startup.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-1 bg-[#f9f8ee] rounded-[8px]">
            <div className="p-4">
              <div>
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Founded:
                </span>
                <span className="font-normal text-black/50 hs-dark-mode-active:!text-black">
                  2015
                </span>
              </div>

              <div className="mt-2">
                <span className="mr-2 font-semibold hs-dark-mode-active:!text-black">
                  Industry:
                </span>
                <span className="font-normal text-black/50 hs-dark-mode-active:!text-black">
                  Technology, AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupHighlight;
