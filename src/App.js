import {MantineProvider} from '@mantine/core'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Projects from './components/Projects'
import ProjectSingle from './components/ProjectSingle'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} exact /> 
          <Route  path="/layiheler" element={<Projects/>}/> 
          <Route  path="/layiheler/:slug" element={<ProjectSingle/>}/> 
          <Route  path="/elaqe" element={<Contact/>}/> 
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
