import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate, Link, Outlet } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Employee/Dashboard";
import Referrals from "./Components/Employee/Referrals";
import Suggestions from "./Components/Employee/Suggestions";
import UpcomingEvents from "./Components/Employee/UpcomingEvents";
import Corporate from "./Components/Standards/Corporate";
import SocialPolicy from "./Components/Standards/SocialPolicy";
import EmailSignature from "./Components/Standards/EmailSignature";
import StandardPolicy from "./Components/Standards/Corporate/StandardPolicy";
import FlatIcons from "./Components/Standards/Corporate/FlatIcons";
import PartnerLogos from "./Components/Standards/Corporate/PartnerLogos";
import CorporateLogos from "./Components/Standards/Corporate/CorporateLogos";
import VirtualMettings from "./Components/Standards/Corporate/VirtualMettings";
import SocialShares from "./Components/Standards/Corporate/SocialShares";
import Others from "./Components/Standards/Corporate/Others";
import LiabraryAssets from "./Components/Resources/LiabraryAssets";
import InternalDepot from "./Components/Resources/InternalDepot";
import IdeaHub from "./Components/Resources/IdeaHub";
import Certifications from "./Components/Resources/Certifications";
import Documents1 from "./Components/Standards/Corporate/Documents1";
import Documents from "./Components/Resources/Documents";
import Mtalk from "./Components/Your Apps/Mtalk";
import Blog from "./Components/Your Apps/Blog";
import Employee from "./Components/Employee/Employee";
import Standards from "./Components/Standards/Standards";
import Resources from "./Components/Resources/Resources";
import YourApps from "./Components/Your Apps/YourApps";
import Hierarchy from './Components/Employee/Hierarchy';
import Example from "./Components/Screen1";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css"; 

function App() {
  return (
    <div className="App1">
      {/* <Example></Example> */}


      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="home" element={<Navbars />}>
        <Route path="" element={<Navigate to="employee" replace />} />

          <Route path="employee" element={<Employee />}>
            <Route path="" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="upcomingEvents" element={<UpcomingEvents />} />
            <Route path="hierarchy" element={<Hierarchy />} />
          </Route>

          <Route path="Standards" element={<Standards />}>
          <Route path="" element={<Navigate to="corporate" replace />} />
            <Route path="corporate" element={<Corporate />}>
            <Route path="" element={<Navigate to="partnerLogos" replace />} />
              <Route path="standardPolicy" element={<StandardPolicy />} />
              <Route path="flatIcons" element={<FlatIcons />} />
              <Route path="partnerLogos" element={<PartnerLogos />} />
              <Route path="corporateLogos" element={<CorporateLogos />} />
              <Route path="documents" element={<Documents1 />} />
              <Route path="virtualMettings" element={<VirtualMettings />} />
              <Route path="socialShares" element={<SocialShares />} />
              <Route path="others" element={<Others />} />
            </Route>

            <Route path="socialPolicy" element={<SocialPolicy />} />
            <Route path="emailSignature" element={<EmailSignature />} />
          </Route>

          <Route path="resources" element={<Resources />}>
          <Route path="" element={<Navigate to="liabraryAssets" replace />} />
            <Route path="liabraryAssets" element={<LiabraryAssets />} />
            <Route path="internalDepot" element={<InternalDepot />} />
            <Route path="documents" element={<Documents />} />
            <Route path="ideaHub" element={<IdeaHub />} />
            <Route path="certifications" element={<Certifications />} />
          </Route>

          <Route path="yourApps" element={<YourApps />}>
          <Route path="" element={<Navigate to="mtalk" replace />} />
            <Route path="mtalk" element={<Mtalk />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
