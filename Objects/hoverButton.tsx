import * as React from "react";
import { HoverButton } from "@/components/ui/animated-hover-button"; // Adjusted to new button import

// Function to create the button demo
function DemoVariant1() {
  const handleClick = () => {
    alert("Vibrant Red-Pink Button Clicked!");
  };

  return (
    <div className="flex min-h-[200px] items-center justify-center p-4 ">
      <HoverButton
        onClick={handleClick}
        className="px-12 py-5 text-xl"
      >
        Let's Connect!
      </HoverButton>
    </div>
  );
}

export { DemoVariant1 };
