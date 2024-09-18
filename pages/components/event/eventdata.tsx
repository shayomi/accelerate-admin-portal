export const eventsData = [
  {
    id: 1,
    name: 'Tech Conference',
    slug: 'tech-conference',
    dateTime: '2024-09-15T09:00:00',
    location: 'New York, NY',
    eventType: 'Conference',
    description:
      'A conference for tech enthusiasts to explore the latest in technology.',
    bannerImage: 'https://example.com/banners/tech-conference.jpg',
    maxAttendees: 200,
    registrationDeadline: '2024-09-10T23:59:59',
    agenda: [
      { time: '09:00 AM', activity: 'Opening Keynote' },
      { time: '11:00 AM', activity: 'Panel Discussion' },
      { time: '01:00 PM', activity: 'Networking Lunch' },
    ],
    speakers: [1, 2],
    sponsors: ['TechCorp', 'InnovateX'],
    relatedCohort: 'Fall 2024',
    registrationFields: ['Name', 'Email', 'Company'],
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'Startup Summit',
    slug: 'startup-summit',
    dateTime: '2024-08-30T10:00:00',
    location: 'San Francisco, CA',
    eventType: 'Summit',
    description:
      'An event for startups to showcase their products and network.',
    bannerImage: 'https://example.com/banners/startup-summit.jpg',
    maxAttendees: 500,
    registrationDeadline: '2024-08-25T23:59:59',
    agenda: [
      { time: '10:00 AM', activity: 'Welcome Speech' },
      { time: '12:00 PM', activity: 'Startup Pitches' },
      { time: '03:00 PM', activity: 'Investor Meetup' },
    ],
    speakers: [3, 4],
    sponsors: ['StartupHub', 'VCFirm'],
    relatedCohort: 'Summer 2024',
    registrationFields: ['Name', 'Email', 'Startup Name'],
    status: 'ongoing',
  },
  {
    id: 3,
    name: 'Developer Meetup',
    slug: 'developer-meetup',
    dateTime: '2024-07-20T14:00:00',
    location: 'Chicago, IL',
    eventType: 'Meetup',
    description:
      'A casual meetup for developers to share knowledge and connect.',
    bannerImage: 'https://example.com/banners/developer-meetup.jpg',
    maxAttendees: 100,
    registrationDeadline: '2024-07-15T23:59:59',
    agenda: [
      { time: '02:00 PM', activity: 'Introduction' },
      { time: '03:00 PM', activity: 'Coding Session' },
      { time: '05:00 PM', activity: 'Happy Hour' },
    ],
    speakers: [1, 3],
    sponsors: ['DevCommunity', 'CodeLabs'],
    relatedCohort: 'Spring 2024',
    registrationFields: ['Name', 'Email', 'GitHub Username'],
    status: 'past',
  },
];
