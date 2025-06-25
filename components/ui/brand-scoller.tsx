"use client";
 
import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";
import { FaFigma, FaJava } from "react-icons/fa";
import { SiJavascript,SiTensorflow, SiPytorch, SiDatastax, SiKeras, SiMongodb  } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { FaAws } from "react-icons/fa6";

export const BrandScroller = () => {
  return (
    <>
       <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee min-w-max"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <AiOutlinePython size={24} />
                <p className="text-lg font-semibold opacity-80">Python</p>
              </div>
              <div className="flex items-center w-28 gap-5">
                <FaFigma size={24} />
                <p className="text-lg font-semibold opacity-80">Figma</p>
              </div>
              <div className="flex items-center w-30 gap-3">
                <SiJavascript size={24} />
                <p className="text-lg font-semibold opacity-80">JavaScript</p>
              </div>

              <div className="flex items-center w-28 gap-6">
                <FaAws size={24} />
                <p className="text-lg font-semibold opacity-80">AWS</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <RiNextjsLine size={24} />
                <p className="text-lg font-semibold opacity-80">Next.JS</p>
              </div>
              <div className="flex items-center w-31 gap-3">
                <SiTensorflow size={24} />
                <p className="text-lg font-semibold opacity-80">Tensorflow</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <SiPytorch size={24} />
                <p className="text-lg font-semibold opacity-80">Pytorch</p>
              </div>
               <div className="flex items-center w-28 gap-3">
                <SiDatastax size={24} />
                <p className="text-lg font-semibold opacity-80">DataStax</p>
              </div>
               <div className="flex items-center w-28 gap-3">
                <SiKeras size={24} />
                <p className="text-lg font-semibold opacity-80">Keras</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <SiMongodb size={24} />
                <p className="text-lg font-semibold opacity-80">MongoDB</p>
                </div>
            </div>
          ))}
      </div>
    </>
  );
};
 
export const BrandScrollerReverse = () => {
  return (
    <>
       <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap))] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
              key={i}
            >
              <div className="flex items-center w-28 gap-3">
                <BsSpotify size={24} />
                <p className="text-lg font-semibold opacity-80">Spotify</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsYoutube size={24} />
                <p className="text-lg font-semibold opacity-80">YouTube</p>
              </div>
              <div className="flex items-center w-28 gap-3">
                <BsAmazon size={24} />
                <p className="text-lg font-semibold opacity-80">Amazon</p>
              </div>

              <div className="flex items-center w-28 gap-3">
                <BsGoogle size={24} />
                <p className="text-lg font-semibold opacity-80">Google</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};