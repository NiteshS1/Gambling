import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubHeader from "./components/header/SubHeader";
import Dashboard from './components/Dashboard';
// import DownlineList from './components/DownlineList';
import MyAccount from './components/MyAccount';
// import MyReport from './components/MyReport';
import BetList from './components/BetList';
import MarketAnalysis from './components/MarketAnalysis';
// import Banking from './components/Banking';
import Commission from './components/Commission';
import PasswordHistory from './components/PasswordHistory';
import RestoreUser from './components/RestoreUser';
import Logout from './components/login/Logout'; 
import Login from './components/login/Login'
import MainHeader from './components/header/MainHeader';
import MasterBanking from './components/banking/MasterBanking';
import UserBanking from './components/banking/UserBanking';
import Downline from './components/report/Downline';
import Event from './components/report/Event';
import AccountStatement from './components/account/AccountStatement';
import MyProfile from './components/account/MyProfile';
import ActivityLog from './components/account/ActivityLog';
import UserDownline from './components/downline/UserDownline';
import MasterDownline from './components/downline/MasterDownline';

function App() {
  return (
    <Router>
      <MainHeader />
      <SubHeader />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/downline-list" element={<DownlineList />} /> */}
        <Route path="/user-downline" element={<UserDownline />} />
        <Route path="/master-downline" element={<MasterDownline />} />
        <Route path="/my-account" element={<MyAccount />} >
          <Route index element={<MyProfile />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="accountStatement" element={<AccountStatement />} />
          <Route path="activityLog" element={<ActivityLog />} />
        </Route>
        {/* <Route path="/my-report" element={<MyReport />} /> */}
        <Route path="/event" element={<Event />} />
        <Route path="/downline" element={<Downline />} />
        <Route path="/betlist" element={<BetList />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        {/* <Route path="/banking" element={<Banking />} /> */}
        <Route path="/user" element={<UserBanking />} />
        <Route path="/master" element={<MasterBanking />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/password-history" element={<PasswordHistory />} />
        <Route path="/restore-user" element={<RestoreUser />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
