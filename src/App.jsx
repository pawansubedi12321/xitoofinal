import { BrowserRouter } from 'react-router-dom'
import './App.css'
import React, { createContext, useEffect, useState } from 'react';
import PublicRoutes from './router/PublicRoutes';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
export const UserContext = createContext();
function App() {
  const[clicked,setclicked]=useState("dash");
  const[name,setname]=useState("");//this name is set on category page.jsx
  
 
  return (
    <>
    <UserContext.Provider value={{clicked,setclicked,name,setname}}>
    <QueryClientProvider client={queryClient}>
      {/* <h1>{`Hello ${clicked}!`}</h1> */}
      {/* {
        console.log("this i ssfadfasfdaf"+clicked)
      } */}
      <PublicRoutes/>
      </QueryClientProvider>
      
    </UserContext.Provider>
   
  
    {/* <LoginPage/> */}
    </>
  )
}

export default App
