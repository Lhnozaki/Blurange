import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../Components/SplashPage';
import DesignSystem from '../Components/DesignSystem';
import Editor from '../Components/EditorComponents/Editor';
import Dashboard from "../Components/DashboardComponents/Dashboard";
import TemplatesList from '../Components/TemplatesList';
import JTemplate1 from '../Components/Templates/JTemplate1';


export const routes = [
  {
    path: '/',
    exact: true,
    component: SplashPage
  },
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem
  },
  {
    path: '/editor',
    exact: true,
    component: Editor
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
  {
    path: '/jtemplate1',
    exact: true,
    component: JTemplate1
  },
  {
    path: '/templates',
    exact: true,
    component: TemplatesList
  }
]

// Create auth routes and render if authorized in the home page
export const authRoutes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem
  },
  {
    path: '/editor',
    exact: true,
    component: Editor
  }
]



const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={`global_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};

export default Routes;
