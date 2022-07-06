import React from 'react'
import NavBar from '../../../components/navBar/NavBar';
const AdvReact = () => {
  return (
    <>
        <NavBar /> 
        <div className='container'>
          <h2 className='l'>Questions</h2>
          <ol>
            <li className='l'>Code Splitting ?</li>
            <li className='l'>Error-Boundary ?</li>
            <li className='l'>Context ?</li>
            <li className='l'>Refs and DOM ?</li>
            <li className='l'>Strict Mode ?</li>
            <li className='l'>Type checking with prop types ?</li>
            <li className='l'>Higher order components ?</li>
            <li className='l'>Forwarding Refs ?</li>
          </ol>
          <h2 className='l'>Answers</h2>

          <div className='division'>
          <a className='link link-primary test' href='/codesplitting'>Code Splitting</a>
          <a className='link link-secondary test' href='/index'>Error-Boundary</a>
          <a className='link link-primary test' href='/context'>Context</a>
          <a className='link link-secondary test' href='/refsdom'>Refs-Dom</a>
          <a className='link link-primary test' href='/strictmode'>StrictMode</a>
          <a className='link link-secondary test' href='/typechecking'>TypeChecking</a>
          <a className='link link-primary test' href='/hoc'>HigherOrderComponents</a>
          <a className='link link-secondary test' href='/forwardingref'>ForwardingRefs</a>
          </div>


        </div>
        
    </>
    

  )
}

export default AdvReact