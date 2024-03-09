import {MantineProvider} from '@mantine/core'
import {BrowserRouter as Router, Route, Routes , RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/layiheler",
    element: <Projects/>
  },
  {
    path: "/elaqe",
    element: <Contact/>,
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path:"*",
    element: <Error />
  }
]);


export default function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
