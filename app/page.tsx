import Hero from "@/components/Hero";
import Hr from "@/components/Hr";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-full bg-background text-primary mx-auto pt-5 lg:pt-20 sm:pt-5">      
      {/* Hero section  */}
      <Hero/>
      <Hr/>

      <Skills/>

      <Journey/>

      <SocialMedia/>

      {/* <LaptopMobileMockup/> */}
      {/* <FollowCursor/> */}
      </section>
    </>
  );
}
