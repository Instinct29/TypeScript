import React,{useState,useEffect} from 'react'
import Note from './Note'
import Footer from "./Footer"
import CreateArea from "./CreateArea"
import NavBar from '../../components/navBar/NavBar'

const getLocalStorage = () =>{
  let list = localStorage.getItem('Lstorage');
  console.log("This is from List",list)
  if(list){
    return JSON.parse(localStorage.getItem('Lstorage')!) 
  }else{
    return []
  }
}


function App() {
  const [notes, setNotes] = useState(getLocalStorage())
  const addNote =(newNote: any)=>{
    setNotes(
      (prevNote: any) => {
        return ( [...prevNote,newNote])
 
      }
    )
  }

  const deleteNote = (id: any):void => {
    // console.log("delete note was triggered")
    setNotes(
      (prevNotes: any) => {
        return prevNotes.filter((noteItem:any, index: any) => {
          return index !==id;
        })
      }
    )
  }

  const editNote = (id:any) => {
    console.log("Edit is being Triggered",id)
  }

  useEffect(()=>{
  localStorage.setItem("Lstorage", JSON.stringify(notes))

  },[notes])




  return (
    <>
    <NavBar />
    <CreateArea addNote={addNote}/>
    {
      notes.map((note:any,index:any)=>{
        return <Note key={index} id={index} title = {note.title} content = {note.content} deleteNote={deleteNote} editNote={editNote} />
      })
    }
    <Footer />

   
    </>
   
 
  );
}

export default App;
