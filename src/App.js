import {MantineProvider} from '@mantine/core'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog.js'
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
          <Route  path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
