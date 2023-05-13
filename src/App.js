
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import VenueHome from './venueComponent/VenueHome/venueHome';
import Navbar from './component/navigation/navbar';
import VenueDescription from './venueComponent/Description/description';
import MakeupHome from './makeupComponent/MakeupHome/makeupHome';
import MakeupDescription from './makeupComponent/makeupDescription/makeupDescription';
import PanditHome from './panditComponent/PanditHome/panditHome';
import PanditDescription from './panditComponent/panditDescription/panditDescription';
import UserSignIn from './component/user/SignIn/user-signin';
import PhotographerHome from './photographerComponent/photographerHome/photographerHome';


function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/venue" element={<VenueHome />} />
      <Route path='/venue-detail' element={<VenueDescription />} />
      <Route path="/makeup Artist" element={<MakeupHome/>} />
      <Route path='/makeup-detail' element={<MakeupDescription/>} />
      <Route path="/pandit" element={<PanditHome/>} />
      <Route path='/pandit-details' element={<PanditDescription />} />
      <Route path='/user/signIn' element={<UserSignIn />}></Route>
      <Route path='/photographer' element={<PhotographerHome/>}/>

    </Routes>
  </>

}

export default App;
