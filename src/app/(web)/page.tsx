import Cta from "@/components/cta";
import Fact from "@/components/fact";
import Faq from "@/components/faq";
import Games from "@/components/games";
import Hero from "@/components/hero";
import MeetTheExpert from "@/components/meet-the-expert";
import Solution from "@/components/solution";
import TrustedBy from "@/components/trusted-by";
import Why from "@/components/why";

export default function Home() {
  return (
    <>
      <Hero />
      <Fact />
      <Solution />
      <Why />
      <Games />
      <TrustedBy />
      <MeetTheExpert />
      <Faq />
      <Cta />
    </>
  );
}
