export const ROUTES = {
  HOME: '/',
  SOLUTIONS: '/solutions',
  CASE_STUDIES: '/case-studies',
  INSIGHTS: '/insights',
  COMPANY: '/company',
};

export const ROUTE_CONFIG = [
  {
    path: ROUTES.HOME,
    element: 'Home',
    title: 'Home',
    description: 'Aiestra - Human-Centered AI Solutions'
  },
  {
    path: ROUTES.SOLUTIONS,
    element: 'SolutionsPage',
    title: 'Solutions',
    description: 'AI Solutions and Services'
  },
  {
    path: `${ROUTES.SOLUTIONS}/:solutionId`,
    element: 'SolutionsPage',
    title: 'Solution Details',
    description: 'AI Solution Details'
  },
  {
    path: ROUTES.CASE_STUDIES,
    element: 'CaseStudies',
    title: 'Case Studies',
    description: 'Success Stories and Case Studies'
  },
  {
    path: ROUTES.INSIGHTS,
    element: 'Insights',
    title: 'Insights',
    description: 'AI Insights and Blog'
  },
  {
    path: ROUTES.COMPANY,
    element: 'Company',
    title: 'Company',
    description: 'About Aiestra'
  }
];
