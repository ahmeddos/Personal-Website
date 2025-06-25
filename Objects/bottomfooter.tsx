import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden  ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Like what you see? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                 Let's Connect
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-left justify-center w-full h-full">
              <h2 className="text3xl font-bold text-black dark:text-white">
              Email: ahmedmit54@gmail.com <br />
              Phone Number (Germany): +49 15225381616 <br />
              Phone Number (Egypt): +20 1029223696 <br />
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                Email: ahmedmit54@gmail.com <br />
              Phone Number (Germany): +49 15225381616 <br />
              Phone Number (Egypt): +20 1029223696 <br />
            </p>
          </div>
          </div> 
      </ContainerScroll>
    </div>
  );
}
