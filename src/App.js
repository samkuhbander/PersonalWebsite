import './css/App.css';
import Home from './home';
import Experience from './experience';
import Project from './projects';
import Contact from './contact'
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </main>
    
  );
}

export default App;
