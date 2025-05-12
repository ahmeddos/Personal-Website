import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden  ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              If you like what you see <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 Let's Connect
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Create stunning scroll animations with ease
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Transform your web experience with smooth and engaging scroll
              animations.
            </p>
          </div>
          </div> 
      </ContainerScroll>
    </div>
  );
}
