import StartPage from './pages/StartPage/StartPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import IncorrectPath from './pages/NotFoundPage/IncorrectPath';

const routes = [
  {
    path: '/',
    exact: true,
    component: StartPage,
  },
  {
    path: '/movies/:id',
    component: DetailsPage,
  },
  {
    path: '/search',
    component: StartPage,
  },
  {
    path: '/404',
    component: IncorrectPath,
  },
];

export default routes;
