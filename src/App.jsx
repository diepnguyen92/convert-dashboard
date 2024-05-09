
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/admin/Home';
import Layout from './pages/admin/Layout';
import Walet from './pages/admin/Walet';
import Notfound from './pages/admin/Notfound.jsx'
import Profile from './pages/admin/Profile';
import Setting from './pages/admin/Setting';
import Transation from './pages/admin/Transation';

const App = () => {
  return (
 <BrowserRouter>
 <Routes>

    <Route path='/dashboad' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/dashboad/Walet' element= {<Walet />}/>
    <Route path='*' element = {<Notfound /> }/>
    <Route path='/dashboad/Profile' element={<Profile />}/>
    <Route path='/dashboad/Setting' element={<Setting />}/>
    <Route path='/dashboad/Transation' element ={<Transation />}/>
    </Route>

 </Routes>
 
 </BrowserRouter>
  );
};

export default App
// patjh quy định đường dẫn hiển thị component
// element quy định component hiển thị