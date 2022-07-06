import React,{Suspense} from 'react'
import NavBar from '../../../components/navBar/NavBar';
// import About from './About';


import {add} from './Math';
import('./Math').then((res)=>{
  console.log("res",res.add(2,3))
})
//This is code splitting for functions
const Aboutz = React.lazy(()=>import('./About'))

const CodeSplitting = () => {
  add(4,3); 
  return (
    <div> 
       <Suspense fallback = {<div> Loading---------</div>} > 
      <NavBar />
          <p>
          Code splitting is a way to split up your code from a large file into smaller code bundles. These can then be requested on demand
         <br />
          - Like here we splitted the code!! how? 
          <br></br>
          - We Imported whole file that is Math but we only used add() function here, we could have used more existed function here!- That is requested on demand
          </p>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <Aboutz/> //code splitting for comonents - for better understanding check code and file folder structure
    </Suspense>
    {/* <About /> */}

    </div>
   
  )
}

export default CodeSplitting