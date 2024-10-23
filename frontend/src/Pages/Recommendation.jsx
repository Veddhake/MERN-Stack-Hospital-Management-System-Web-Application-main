import React, { useContext } from "react";
import Hero from "../components/Hero";
import RecommendationForm from "../components/RecommendationForm";
import AppointmentForm from "../components/AppointmentForm";

const Recommendation = () => {
  return (
    <>
      <Hero
        title={"Get our Recommendations | Somaiya WeCare Medical Institute"}
        imageUrl={"/about.png"}
      />

      <RecommendationForm />

    </>
  );
};

export default Recommendation;
