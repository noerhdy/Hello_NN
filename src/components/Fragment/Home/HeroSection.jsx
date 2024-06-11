import { marqImage } from "@/constants";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <section className="mx-4 mt-12 ">
      <div className="grid grid-cols-4 ">
        <div className="col-start-1 col-end-4 mb-2 ">
          <h2>Project</h2>
          <p>
            Disclaimer!, this is just a portfolio project, so not a real
            project.
          </p>
        </div>
      </div>
      {/* Board */}
      <div className="my-2 grid grid-cols-4 drop-shadow h-full rounded-md py-6  bg-gray-100 dark:bg-zinc-900">
        <div className="col-start-1 place-content-center text-center">
          hello
        </div>
        <div className="col-span-3">
          <Marquee pauseOnClick={false} autoFill speed={20}>
            {marqImage.map((item, i) => (
              <div
                key={i}
                className="flex max-w-[120px] overflow-hidden rounded-md space-x-2"
              >
                <img
                  className="group rounded-md grayscale overflow-hidden max-w-[100px] mx-1 img brightness-50 ease-in-out duration-500 bg-center hover:filter-none bg-cover "
                  src={item.image}
                ></img>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
