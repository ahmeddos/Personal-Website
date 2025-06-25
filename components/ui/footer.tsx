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
import { MagneticSocialLinksDemo } from "@/Objects/socials";

function Footer() {
  return (
    <div className="w-full py-0 lg:pt-40">
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
              text="Contact me"
              initialStyle="'wght' 400, 'slnt' 0"
              hoverStyle="'wght' 900, 'slnt' -10"
            />
          </h1>
          <div className="flex gap-2 flex-col">
            <h2 className="mt-3 text-left text-3xl italic">
            
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Email: ahmedmit54@gmail.com<br />
              Phone number (Germany): +49-15-225381616<br />
              Phone number(Egypt): +20-10-29223696<br />
               </p>
          </div>
        </div>
        <div className="w-full max-w-full px-6">
          <MagneticSocialLinksDemo />
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export { Footer };
