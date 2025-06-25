"use client"

import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import Image from "next/image"

const images = [
  {
    title: "Moonbeam",
    thumbnail: "https://images.unsplash.com/photo-1749651340707-b70936a3437d?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cursor",
    thumbnail: "https://images.unsplash.com/photo-1749651340913-45ba2d5261d0?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rogue",
    thumbnail: "https://images.unsplash.com/photo-1749651340944-4ac71fad61f6?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Editorially",
    thumbnail: "https://images.unsplash.com/photo-1749651340727-48ce5d19cfe0?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Editrix AI",
    thumbnail: "https://images.unsplash.com/photo-1749651340888-84451a36b211?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Moonbeam 2",
    thumbnail: "https://images.unsplash.com/photo-1749651340677-f9db32306157?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cursor 2",
    thumbnail: "https://images.unsplash.com/photo-1749651340839-5b1ff6c64bdb?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rogue 2",
    thumbnail: "https://images.unsplash.com/photo-1749651340669-53865b2a5860?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Editorially 2",
    thumbnail: "https://images.unsplash.com/photo-1749652270081-27b83080ba2d?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const velocity = [1, -1]

function ScrollVelocityDemo() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-5 py-20 lg:py-40">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {images.map(({ title, thumbnail }) => (
              <div
                key={title}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
        <ScrollVelocity velocity={5}>SOME OF MY FAVORITE WORK</ScrollVelocity>
      </div>
    </div>
  )
}

export { ScrollVelocityDemo }