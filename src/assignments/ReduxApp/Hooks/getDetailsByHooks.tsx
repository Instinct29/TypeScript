
import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/apiRequest";

interface StateType {
    data:any
  }


 export default (props:any) =>{
    const [detailsById, setDetailsById] = useState<StateType>({data:{}});
    const GetDetailsByHooks = (requestedId: any) => {
        console.log("requested id is ",requestedId)
            return GetDetailsById(requestedId).then((res)=>{
                setDetailsById(res)
            })
        
    
       
    }
    useEffect(()=>{
        GetDetailsByHooks(props);
    },[]);

    return {detailsById}
 }


