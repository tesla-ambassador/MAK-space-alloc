import React from "react";
import AboutLanding from "@/components/layout/AboutLanding";
import AboutContent from "@/components/misc/AboutContent";
import Team from "@/components/misc/Team";

export default function Home() {
  return (
    <div>
      <AboutLanding />
      <AboutContent />
      <Team />
    </div>
  );
}
