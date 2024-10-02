import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import routes from './components/router/Router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Login from './pages/Login';
import Error from './pages/Error';
import { SiteLayout } from './components/layout/SiteLayout';
import VerticalCategoryList from './components/common/category/VerticalCategoryList';
import { UserProvider } from './contexts/UserContext';

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
      {
        path: routes.searchCategory,
        element: <VerticalCategoryList />,
      },
    ]
  }


]);


function App() {

  return (
    <>
      <UserProvider >
        <RouterProvider router={router} />
      </UserProvider >
    </>
  )
}

export default App
