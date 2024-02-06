import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import { ErrorPage } from './Error-page/ErrorPage.jsx'



// create router first way
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>,
//       },
    
//       {
//          path:"about",
//          element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//create router with second way

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
     <Route 
     loader={githubInfoLoader}     //call loader to fetch api
     path='github' element={<Github/>}/>
     
  </Route>
  
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
