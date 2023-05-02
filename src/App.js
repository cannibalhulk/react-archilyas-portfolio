import {MantineProvider} from '@mantine/core'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog.js'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'
import './App.css';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} exact /> 
          <Route  path="/layiheler" element={<Projects/>}/> 
          <Route  path="/elaqe" element={<Contact/>}/>
          <Route  path="/blog" element={<Blog/>} />
          <Route  path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
