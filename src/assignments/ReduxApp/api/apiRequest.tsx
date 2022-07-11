import axios from "axios";




export async function AxiosRequest(url: string,method: string,headers: { "content-Type": string; },params: {}){

     return params?axios({
        url:url, 
        method:method,
        headers:headers,
        data:params,
        timeout:1000
      }) :
     axios({
        url:url, 
        method:method,
        headers:headers,
        data:{},
        timeout:1000
    });
}

//for Creating and Reading the Data here we are using "GET"
const GetApiDetails = ()=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details","GET",headers,{})
};

//For Posting the data into server
const PostApiDetails = (data: { name?: string; email?: string; phone?: string; country?: string; })=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details","POST",headers,data)
};

//For getting the whole data
const GetDetailsById = (id: string)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"GET",headers,{})
};

//for updating the Data

const UpdateApiDetails = (data: {},  id: string)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"PUT",headers,data)
};



const DeleteApiDetails = (id: string)=>{
    const headers = {
        "content-Type" : "application/json"
    }
    return AxiosRequest("http://localhost:3000/details/"+id,"DELETE",headers,{})
};



export {GetApiDetails, PostApiDetails, GetDetailsById, UpdateApiDetails, DeleteApiDetails} ;






