import React from "react";


export type Founder = {
    name: string;
    role: string;
    linkedin: string;
    image: string;
  };
  
  export type Startup = {
    id: string;
    companyName: string;
    industry: string;
    cohort: string;
    founders: Founder[];
    description: string;
    pitchVideoLink: string;
    companyLogo: string;
    companyEmail: string;
    website: string;
    location: {
      city: string;
      country: string;
    };
    companySize: number;
    fundraisingAmount: number;
    valuation: number;
    industries: string[];
    founded: number;
    pitchDeckLink: string;
    calendlyLink: string;
    status: string;
  };

// types.ts
export type Industry = {
  id: number; 
  name: string;
  slug?: string;
  startupIds: number[]; 
};

