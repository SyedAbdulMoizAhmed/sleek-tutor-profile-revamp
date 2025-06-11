
import { useState } from "react";
import TutorHero from "../components/TutorHero";
import TutorStats from "../components/TutorStats";
import TutorSkills from "../components/TutorSkills";
import TutorBooking from "../components/TutorBooking";
import TutorReviews from "../components/TutorReviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TutorHero />
      <TutorStats />
      <TutorSkills />
      <TutorBooking />
      <TutorReviews />
    </div>
  );
};

export default Index;
