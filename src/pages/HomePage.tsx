import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import RecentContests from '../components/RecentContests';
import ExampleContest from '../components/ExampleContest';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <HowItWorks />
      <Benefits />
      <Features />
      <RecentContests />
      <ExampleContest />
      <Testimonials />
      <Pricing />
    </>
  );
}