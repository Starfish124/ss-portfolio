import Arsenal from "@/components/sections/arsenal";
import Contact from "@/components/sections/contact";
import DaemonShowcase from "@/components/sections/daemon-showcase";
import Decomposition from "@/components/sections/decomposition";
import Impact from "@/components/sections/impact";
import Nav from "@/components/sections/nav";
import Stats from "@/components/sections/stats";
import Systems from "@/components/sections/systems";
import Ticker from "@/components/sections/ticker";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Nav />
      <Decomposition />
      <Ticker />
      <Stats />
      <Systems />
      <DaemonShowcase />
      <Impact />
      <Arsenal />
      <Contact />
    </main>
  );
}
