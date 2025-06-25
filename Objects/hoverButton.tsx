import * as React from "react";
import { HoverButton } from "@/components/ui/animated-hover-button";

function DemoVariant1() {
  const externalUrl = "https://www.linkedin.com/in/ahmed-mitwalli-652972243/"; // Replace with your actual URL

  return (
    <div className="flex min-h-[200px] items-center justify-center p-4">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <HoverButton className="px-12 py-5 text-xl">
          Let's Connect!
        </HoverButton>
      </a>
    </div>
  );
}

export { DemoVariant1 };

