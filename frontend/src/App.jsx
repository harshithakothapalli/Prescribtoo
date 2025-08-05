import React from 'react'
import {BrowserRouter as  Router,Routes,ROute} from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import MyProfil from './pages/MyProfil'
import MyAppointment from './pages/MyAppointment'
import './index.css';

const App = () => {
  return (
    /*<div className='mx-4 sm:mx-[10%]'>
      <ROuter>
      <navbar/>
      <Routers>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctor/>}/>
        <Route path='/doctors:/speciality' element={<Doctor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfil/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointment:/docId' element={<Appointment/>}/>
      </Routers>
      </ROuter>
      
    </div>*/
    <div className='text-green-500'>
      TEsting tailwind
    </div>
  );
};

export default App;
