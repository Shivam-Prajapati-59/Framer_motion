export interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal website to showcase my projects, blogs, and resume.",
    src: "keychaincrypto.png",
    link: "https://myportfolio.com",
    color: "#6C63FF",
  },
  {
    title: "Weather App",
    description:
      "A simple React app that displays weather data using the OpenWeather API.",
    src: "keychaincrypto.png",
    link: "https://weatherapp.com",
    color: "#00BFFF",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with Socket.io and Node.js.",
    src: "keychaincrypto.png",
    link: "https://chatterbox.com",
    color: "#FF6B6B",
  },
  {
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce store with cart, checkout, and payment integration.",
    src: "keychaincrypto.png",
    link: "https://mystore.com",
    color: "#20C997",
  },
  {
    title: "Blog Platform",
    description:
      "A content management platform where users can create, edit, and publish blog posts.",
    src: "keychaincrypto.png",
    link: "https://myblogplatform.com",
    color: "#FD7E14",
  },
];
