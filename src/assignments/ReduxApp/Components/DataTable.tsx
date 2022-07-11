
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {getData, deleteData} from "../Redux/Actions/getDataActionType";

const DataTable = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch<any>(getData());

    },[dispatch])
    const data = useSelector((state:any)=>state.finalData.data)

    const navigate = useNavigate();

   

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
    navigate("/")

  }
    
    
  return (
    <div>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Country</th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>

    </tr>
  </thead>
  <tbody>
    {
        data.map((eachData: { id: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null   | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; phone: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; country: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>{
            return(
                <tr key={nanoid()}>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.country}</td>
                <td><Link to={`/edit/${eachData.id}`}><span className="material-icons">edit</span></Link></td>
                <td><span className="material-icons text-danger"  onClick={()=>dispatch<any>(deleteData(eachData.id))}>delete</span></td>
               </tr>
            )      
        })
    }
 
  </tbody>
</table>

<button onClick={()=>changeHandler} type="button" className="btn btn-primary">Back</button>

        



    </div>
  )
}

export default DataTable




               













function nanoid(): React.Key | null | undefined {
  throw new Error('Function not implemented.');
}
   // const fetchData = async () => {
   //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
    //         console.log("This is the error",err)
    //     })
