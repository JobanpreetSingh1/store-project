import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));

export const ALLOWED_CATEGORIES = {
    All: 'All Products',    
    Men: 'Men\'s Clothing',
    Women:'Women\'s Clothing',
}
export const appRoutes = [
  {
    path: '/',
    element: <Home />,
  },
 
];