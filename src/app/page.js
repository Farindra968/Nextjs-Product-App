import HeroSlider from "@/components/home/HeroSlider";
import ServicesInfo from "@/components/home/ServicesInfo";

export default function Home() {
  return (
    <section className="h-full dark:bg-gray-800">
      
      <div className="py-5 px-2 md:px-0 ">
        <HeroSlider />
      </div>
      <div className="max-w-screen-xl mx-auto py-10 px-2 md:px-0 ">
        <ServicesInfo/>
      </div>
    </section>
  );
}
