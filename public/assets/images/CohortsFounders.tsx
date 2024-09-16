import { Typography } from "@/components/ui/typography";

const CohortsFounders = ({ founders }: any) => {
  return (
    <section>
      <Typography variant="h5" className="mb-5 font-medium">
        Founders
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {founders?.map((founder: any, index: number) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={founder?.attributes?.photo?.data?.attributes?.url}
              alt="Founder"
              className="w-12 h-12 object-cover object-top rounded-full"
            />

            <div>
              <div className="">
                <Typography variant="smallText" className="inline">
                  {`${founder?.attributes?.firstName} ${founder?.attributes?.lastName}`}
                </Typography>
                <a href={founder?.attributes?.linkedinURL} target="_blank">
                  <img
                    src="/images/linkedin-colored.svg"
                    alt="LinkedIn Logo"
                    className="w-5 h-5 inline ml-1"
                  />
                </a>
              </div>

              <div>
                <Typography
                  variant="smallText"
                  className="text-black/50 font-normal"
                >
                  {founder?.attributes?.jobTitle}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CohortsFounders;
