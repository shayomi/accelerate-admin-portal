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

export type Advisor = {
  name: string;
  focusAreas: string[]; // Updated to store multiple focus areas
  companyName: string;
  location: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  image?: string; // Optional image URL or File path
};

// types.ts
export interface Meeting {
  id: string;
  date: string;
  time: string;
  participants: string;
  type: string;
  status: string; 
  summary?: string;
  notes?: string;  
}

export interface Cohort {
  id: string;
  name: string;
  shortName:string;
  startDate: string;
  endDate: string;
  description: string;
  startups: Startup[];
  schedule: string; 
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  status: string;
  contributionDetails: string;
  associatedEntities: string[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
}

// types.ts
export type Author = {
  id: number;
  name: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  category: string;
  content: string; // HTML content
  publicationDate: string;
  externalLink: string;
  excerpt: string;
  featured: boolean;
  authors: Author[];
  status:string;
};

export interface Authors {
  id: number;
  firstName: string;
  lastName: string;
  profilePic: string;
  articles: { id: number; title: string }[]; // Array of article objects with IDs and titles
}