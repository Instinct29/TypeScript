import React,{FC, useState} from 'react'

type compProps = {
    addNote: any
}

const CreateArea: FC<compProps> = ({addNote}) => {
    const [note, setNote] = useState({
        title:"",
        content:""
    })

const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
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


const handleSubmit = (e:React.ChangeEvent<HTMLInputElement>):void =>{

    addNote(note)
    e.preventDefault();
    
}

return (
    <div >
        <form className='create-note '>
            <input  value={note.title} name = "title" type="text" placeholder='Title' onChange={handleChange}/>
            <textarea value={note.content} name="content" placeholder='Content' onChange = {(e:any)=>handleChange(e)}></textarea>
            <button onClick={(e:any)=>handleSubmit(e)}>Add</button>


        </form>
    </div>
  )

}
 
  

export default CreateArea