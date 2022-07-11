import { actionTypes } from "../Constants/actionTypes";
import {GetApiDetails, PostApiDetails, DeleteApiDetails} from "../../api/apiRequest";

export const getData = () => {
    return async function(dispatch: (arg0: { type: string; payload: any; }) => void) {
        return GetApiDetails().then((res)=>{
            dispatch(
                {
                    type : actionTypes.GET_DATA,
                    payload : res.data
                })
             })
             }
            };

export const postData = (request: { name: string; email: string; phone: string; country: string; }) => {
    return async function(dispatch: (arg0: { type: string; payload: boolean; }) => void) {
        
        return PostApiDetails(request).then((res)=>{
            dispatch(
                {
                    type : actionTypes.POST_DATA,
                    payload : true
                })
             })
             }
            };


export const deleteData = (id: any) =>{
    return function (dispatch: (arg0: { type: string; payload: boolean; }) => void) {
        dispatch(
            {
                type:actionTypes.DELETE_DETAILS,
                payload: false
            });
    return DeleteApiDetails(id).then((res)=>{
        dispatch({
            type: actionTypes.DELETE_DETAILS,
            payload: true,
        })
    })
    }
}         
            