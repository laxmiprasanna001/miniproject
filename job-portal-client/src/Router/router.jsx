import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import About from "../Pages/About/About";
import CreateJob from "../Pages/CreateJob/CreateJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import SalaryPage from "../Pages/SalaryPage/SalaryPage";
import UpdateJob from "../Pages/UpdateJobs/UpdateJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from './../components/Login/Login';
import Register from "../components/Login/register";
import Protected from './../components/Protected/Protected';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Protected/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/post-job' element={<CreateJob/>}/>
        <Route path='/my-job' element={<MyJobs/>}/>
        <Route path='/salary' element={<SalaryPage/>}/>
        <Route path='/edit-job/:id' element={<UpdateJob/>} loader={({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)}/>
        <Route path='/job/:id' element={<JobDetails/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Route>  
  )
);

export default router;


// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App/>,
//       children: [
//         {path: '/',element: <Home/>},
//         {path: '/post-job',element: <CreateJob/>},
//         {path: '/my-job',element: <MyJobs/>},
//         {path: '/salary',element: <SalaryPage/>},
//         {path: '/edit-job/:id',element: <UpdateJob/>, loader:({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)},
//         {path: "/login", element: <Login/>},
//         {path: "/register", element: <Register/>},
//         {path: '/job/:id', element:<JobDetails/>}
//       ]
//     },