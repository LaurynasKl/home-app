import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import routes from './components/router/Router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Login from './pages/Login';
import Error from './pages/Error';
import { SiteLayout } from './components/layout/SiteLayout';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <SiteLayout />, 
    errorElement: <Error />, 
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.about,
        element: <AboutUs />,
      },
      {
        path: routes.services,
        element: <Services />,
      },
      {
        path: routes.login,
        element: <Login />,
      },
      // {
      //   path: routes.searchCategory,
      //   element: <SelectedCategory />,
      // },
    ]
  }
  
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
