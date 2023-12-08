import { Routes,Route } from 'react-router-dom';
import Home from "../src/pages/home";
import UserLogin from '../src/Login/UserLogin';
import Companylogin from '../src/Login/CompanyLogin';
import Companysignup from '../src/signup/Companysignup';
import Usersignup from '../src/signup/Usersignup';
import Mifotrasignup from '../src/signup/Mifotrasignup';
import Mifotralogin from '../src/Login/Mifotralogin';
import Userdashboard from '../src/service/Userdashboard';
import Mifotradashboard from '../src/service/Mifotradashboard';
import Companydashboard from '../src/service/Companydashboard';
import Reportingproblem from '../src/service/Reportingproblem';
import Registeredcompany from '../src/service/Registeredcompany';
import Registereduser from '../src/service/Registereduser';
import Reportedproblem from '../src/service/Reportedproblem';
import Companyrelatedproblem from '../src/service/Companyrelatedproblem';
// import Systemreport from '../src/service/Systemreport';


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='userlogin' element={<UserLogin/>}/>
        <Route path='usersignup' element={<Usersignup/>}/>
        <Route path='companylogin' element={<Companylogin/>}/>
        <Route path='companysignup' element={<Companysignup/>}/>
        <Route path='mifotralogin' element={<Mifotralogin/>}/>
        <Route path='mifotrasignup' element={<Mifotrasignup/>}/>
        <Route path='userdashboard' element={<Userdashboard/>}/>
        <Route path='mifotradashboard' element={<Mifotradashboard/>}/>
        <Route path='companydashboard' element={<Companydashboard/>}/>
        <Route path='reportingproblem' element={<Reportingproblem/>}/>
        <Route path='registeredcompany' element={<Registeredcompany/>}/>
        <Route path='registereduser' element={<Registereduser/>}/>
        <Route path='reportedproblem' element={<Reportedproblem/>}/>
        <Route path='companyrelatedproblem' element={<Companyrelatedproblem/>}/>
        {/* <Route path='systemreport' element={<Systemreport/>}/> */}
        
        
        
  
      </Routes>
    </div>
  );
}

export default App;
