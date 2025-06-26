"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoVariant1 } from "@/Objects/hoverButton";
import { BrandScroller } from "./brand-scoller";



function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Computer Engineer", "ML Engineer", "UX Designer", "Videographer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col pt-20">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Ahmed Mitwalli</span>
              <span className="relative flex w-auto max-w-none justify-center overflow-hidden text-center whitespace-nowrap md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              A master's student in computer engineering with a passion for machine learning and AI. 
            </p>
            <div className="pb-15">
                <DemoVariant1 />
              </div>
          </div>
          
          <BrandScroller/>
          
         
      
        </div>
      </div>
    </div>
    
  );
}

export { Hero };
