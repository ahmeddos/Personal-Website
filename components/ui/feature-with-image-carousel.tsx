import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BoldOnHover from "./bold-on-hover";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
  <div className="container mx-auto">
    <div
      className={cn(
        "rounded-3xl backdrop-blur-xl bg-[rgba(43,55,80,0.2)] shadow-2xl transition-all duration-300",
        "hover:shadow-lg hover:translate-y-1", // Optional hover effects
        "p-10 lg:p-16"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
        <div className="flex gap-6 flex-col items-start">
        <h1 className="mt-6 text-left text-5xl italic">
        <BoldOnHover
              text="About me"
              initialStyle="'wght' 400, 'slnt' 0"
              hoverStyle="'wght' 900, 'slnt' -10"
            />
          </h1>
          <div className="flex gap-2 flex-col">
            <h2 className="mt-3 text-left text-3xl italic">
            
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              -- Hey, I'm Ahmed Mitwalli, consider me a person fascinated with technology and great design. I see it as a form of interactive art with the user at the center of it all. I am currently pursuing a master's degree in computer engineering, specializing in machine learning and eXplainable AI. My goal is to create innovative solutions that enhance user experiences and push the boundaries of what's possible with technology.
               When I am not an engineer, I am a photographer and a videographer who loves to capture the world around us as it is. 
            </p>
          </div>
        </div>
        <div className="w-full max-w-full px-8">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 1 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6 opacity-90">
                    <Image
                  src={`/test.png`} // adjust the path & file type
                  alt={`Screenshot ${index + 1}`}
                  width={800}
                  height={650}
                  className="rounded-md object-cover w-full h-full"
                />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export { Feature };
