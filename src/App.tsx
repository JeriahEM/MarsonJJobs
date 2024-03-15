import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './Components/NavbarComponent';
import JobOneComponent from './Components/pages/JobOneComponent';
import JobTwoComponent from './Components/pages/JobTwoComponent';
import JobThreeComponent from './Components/pages/JobThreeComponent';
import JobFourComponent from './Components/pages/JobFourComponent';
import JobFiveComponent from './Components/pages/JobFiveComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<JobOneComponent />}/>
        <Route path='/jobtwo' element={<JobTwoComponent />} />
        <Route path='/jobthree' element={<JobThreeComponent />} />
        <Route path='/jobfour' element={<JobFourComponent />} />
        <Route path='/jobfive' element={<JobFiveComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
