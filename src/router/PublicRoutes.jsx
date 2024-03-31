// import { Route} from "react-router-dom"
// import React from "react";
// import LoginPage from '../components/LoginPage';
// import ErrorPage from '../pages/ErrorPage'
// const routes = [
//   {
//       path: '/',
//       element: <LoginPage/>,
//   },
//   {
//       path: '*',
//       element: <ErrorPage />,
//   },
// ];

// const PublicRoutes = (
//     <>
//         {routes.map((route, idx) => (
//             <React.Fragment key={idx}>
//                 <Route path={route.path} element={route.element} />
//             </React.Fragment>
//         ))}
//     </>
// );

// export default PublicRoutes;
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/Dashboard';
import CategoryPage from '../components/CategoryPage';
import AddItems from '../components/addcategory/AddItems';
import Addproblem from '../components/addproblem/Addproblem';
import ProblemList from '../components/addproblem/ProblemList';
import QuestionPage from "../components/QuestionPage";
import AddQuesion from "../components/addquestion/AddQuesion";
import Booking from "../components/Booking";
import ShowPage from "../components/booking/ShowPage";
import Edit from "../components/addcategory/Edit";
import Trialpage from "../components/TrialPage";
import EditStatus from "../components/booking/EditStatus";
import Editproblemlist from "../components/addproblem/Editproblemlist";
import EditQuestion from "../components/addquestion/EditQuestion";
import FramerMotion from "../components/FramerMotion";
import TotalUser from "../components/dashboard/TotalUser";
import TotalAdmin from "../components/dashboard/TotalAdmin";
import TotalWorker from "../components/dashboard/TotalWorker";
// import  ProblemList'../components/addproblem/ProblemList';
const PublicRoutes = () => {
    
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<LoginPage/>}></Route>
            <Route path="/dashboard"element={<Dashboard/>}></Route> 
            <Route path="/CategoryPage"element={<CategoryPage/>}></Route> 
            <Route path="/additems"element={<AddItems/>}></Route>
            <Route path="/addproblem"element={<Addproblem/>}></Route>
            <Route path="/problemlist"element={<ProblemList/>}></Route>
            <Route path="/question"element={<QuestionPage/>}></Route>
            <Route path="/addquestion"element={<AddQuesion/>}></Route>
            <Route path="/booking"element={<Booking/>}></Route>
            <Route path='/showpage'element={<ShowPage/>}></Route>
            <Route path='/edit'element={<Edit/>}></Route>
            <Route path="/trialpage"element={<Trialpage/>}></Route>
            <Route path='editstatus'element={<EditStatus/>}></Route>
            <Route path='/editproblemlist'element={<Editproblemlist/>}></Route>
            <Route path='/editquestion'element={<EditQuestion/>}></Route>
            <Route path='/framermotion'element={<FramerMotion/>}></Route>
            <Route path='/totaluser'element={<TotalUser/>}></Route>
            <Route path='/totaladmin'element={<TotalAdmin/>}></Route>
            <Route path='/totalworker'element={<TotalWorker/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PublicRoutes