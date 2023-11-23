import Image from "next/image";
import HomeImage from 'public/home.jpg'
import Hero from "@/components/hero";

export default function Home() {
  return (
     <Hero
      imgData={HomeImage}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  )
}
