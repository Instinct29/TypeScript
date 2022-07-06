import React,{useState} from 'react'

type compProps = {
    addNote: any
}

const CreateArea = (props:compProps) => {
    const [note, setNote] = useState({
        title:"",
        content:""
    })

const handleChange:any = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const {name, value} = e.target;
    setNote(
        (prevNote)=>{
            return {
                ...prevNote,
                [name] : value
            }
        }
    )
}


const handleSubmit:any = (e:React.ChangeEvent<HTMLInputElement>):void =>{

    props.addNote(note)
    e.preventDefault();
    
}

return (
    <div >
        <form className='create-note '>
            <input  value={note.title} name = "title" type="text" placeholder='Title' onChange={handleChange}/>
            <textarea value={note.content} name="content" placeholder='Content' onChange = {handleChange}></textarea>
            <button onClick={handleSubmit}>Add</button>


        </form>
    </div>
  )

}
 
  

export default CreateArea