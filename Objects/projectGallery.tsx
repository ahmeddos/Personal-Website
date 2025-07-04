import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4"

const demoData: Gallery4Props = {
  title: "Projects",
  description:
    "Here are some of the projects I've worked on in a wide variety of domains. These projects taught me one important thing that anything can be learned and adaptibilty is the key to success in an ever-changing tech field.",
  items: [
    {
      id: "Masters",
      title: "Master's Thesis: Explainable AI in Night-Time Object Detection",
      description:
        "Published on IEEE Xplore, This project explores the use of explainable AI techniques to enhance the interpretability of night-time object detection systems, improving safety and reliability in low-visibility conditions.",
      href: "https://ui.shadcn.com",
      image:
        "https://images.unsplash.com/photo-1649608118930-70b0a62cdf62?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Bachelor",
      title: "Bachelor's Thesis: Detecting Breast Cancer using ML",
      description:
        "This project focuses on developing a machine learning model to assist in the early detection of breast cancer, utilizing advanced imaging techniques and data analysis.",
      href: "https://tailwindcss.com",
      image:
        "https://images.unsplash.com/photo-1649346716613-d92f359d0c2c?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Figma",
      title: "Elhaani: A medical appointment scheduling app frontend using Figma",
      description:
        "Learn how Figma's collaborative design features can streamline the development of user-friendly interfaces for complex applications.",
      href: "https://figma.com",
      image:
        "https://images.unsplash.com/photo-1649182784901-48f5f2d40ecc?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "MERN",
      title: "Coursesline: A Full-Stack MERN Application",
      description:
        "Mock up of a coursera like website built using the MERN stack.",
      href: "https://react.dev",
      image:
        "https://images.unsplash.com/photo-1649182785115-eb5bd1c4cd45?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Mips",
      title: "Mips Scheduler: A MIPS Assembly Language Scheduler",
      description:
        "Explore how MIPS assembly language can be utilized to create efficient scheduling algorithms.",
      href: "https://mips.org",
      image:
        "https://images.unsplash.com/photo-1649524858012-803e972ca07e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
