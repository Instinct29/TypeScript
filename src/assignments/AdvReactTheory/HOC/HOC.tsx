import React, { useState } from 'react'
import NavBar from '../../../components/navBar/NavBar'

type compProps = {

}


const HOC = () => {
  return (
    <div>
      <NavBar />
      <p>Higher order components are Components which takes input as components and returns a component, it basically wraps extra things according to need</p>
      <HigherOrderComponentRed component={Counter}/>
      <HigherOrderComponentBlue component={Counter} />
      <HigherOrderComponentGreen component={Counter} />
      <Counter /> this one is a normal counter black                       


    </div>
  )
}

function HigherOrderComponentRed(props: any){
      return <div style={{color:"red"}}><props.component /></div>
}

function HigherOrderComponentBlue(props: any){
  return <div style={{color:"blue"}}><props.component /></div>
}

function HigherOrderComponentGreen(props: any){
  return <div style={{color:"green"}}><props.component /></div>
}


function Counter(){
  const [count, setCount] = useState(0)
  return (
    <>
     <h1 style={{textAlign:"center"}}>Likes</h1>
     <div style={{textAlign:"center"}}>
     {count}
     </div>
     <div style={{textAlign:"center"}}>
     <button style={{textAlign:"center", alignItems:"center"}}onClick={()=>{setCount(count+1)}}>Like</button>
     </div>
    </>
  )
}

export default HOC