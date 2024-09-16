"use client";

const StartupFounders = () => {
  return (
    <section className="p-6">
      <h5 className="mb-5 font-medium text-xl">Founders</h5>

      <div className="flex flex-col gap-6 flex-wrap">
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/p1.png"
            alt="Founder"
            className="w-12 h-12 object-cover object-top rounded-full"
          />

          <div>
            <div className="flex items-center">
              <span className="text-sm font-semibold  hs-dark-mode-active:text-white">
                John Doe
              </span>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank">
                <img
                  src="/assets/images/linkedin-colored.svg"
                  alt="LinkedIn Logo"
                  className="w-5 h-5 inline ml-1"
                />
              </a>
            </div>

            <div>
              <span className="text-black/50 text-sm font-normal hs-dark-mode-active:text-white">
                Chief Executive Officer
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/images/p1.png"
            alt="Founder"
            className="w-12 h-12 object-cover object-top rounded-full"
          />

          <div>
            <div className="flex items-center">
              <span className="text-sm font-semibold  hs-dark-mode-active:text-white">
                Jane Smith
              </span>
              <a href="https://www.linkedin.com/in/janesmith" target="_blank">
                <img
                  src="/assets/images/linkedin-colored.svg"
                  alt="LinkedIn Logo"
                  className="w-5 h-5 inline ml-1"
                />
              </a>
            </div>

            <div>
              <span className="text-black/50 text-sm font-normal  hs-dark-mode-active:text-white">
                Chief Technology Officer
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/images/p1.png"
            alt="Founder"
            className="w-12 h-12 object-cover object-top rounded-full"
          />

          <div>
            <div className="flex items-center">
              <span className="text-sm font-semibold  hs-dark-mode-active:text-white">
                Michael Lee
              </span>
              <a href="https://www.linkedin.com/in/michaellee" target="_blank">
                <img
                  src="/assets/images/linkedin-colored.svg"
                  alt="LinkedIn Logo"
                  className="w-5 h-5 inline ml-1"
                />
              </a>
            </div>

            <div>
              <span className="text-black/50 text-sm font-normal  hs-dark-mode-active:text-white">
                Chief Marketing Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupFounders;
