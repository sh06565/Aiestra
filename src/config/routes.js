export const ROUTES = {
  HOME: '/',
  SOLUTIONS: '/solutions',
  SERVICES: '/services',
  INDUSTRIES: '/industries',
  INSIGHTS: '/insights',
  CONTACT: '/contact',
};

export const ROUTE_CONFIG = [
  {
    path: ROUTES.HOME,
    element: 'Home',
    title: 'Home',
    description: 'Aiestra - AI Voice Agent Services'
  },
  {
    path: ROUTES.SOLUTIONS,
    element: 'SolutionsPage',
    title: 'Solutions',
    description: 'AI Voice Agent Service Suites'
  },
  {
    path: `${ROUTES.SOLUTIONS}/:solutionId`,
    element: 'SolutionsPage',
    title: 'Solution Details',
    description: 'AI Voice Agent Solution Details'
  },
  {
    path: ROUTES.SERVICES,
    element: 'Services',
    title: 'Services',
    description: 'Implementation, Development, and Support Services'
  },
  {
    path: ROUTES.INDUSTRIES,
    element: 'Industries',
    title: 'Industries',
    description: 'Industry-Specific AI Voice Solutions'
  },
  {
    path: ROUTES.INSIGHTS,
    element: 'Insights',
    title: 'Insights',
    description: 'AI Voice Technology Insights and Best Practices'
  },
  {
    path: ROUTES.CONTACT,
    element: 'Contact',
    title: 'Contact',
    description: 'Get in Touch - AI Voice Agent Consultation'
  }
];
