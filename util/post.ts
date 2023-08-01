import axios,{AxiosResponse} from "axios"
import gettingUrl from "./gettingUrl"
import axiosResponse from "@/types/axiosResponse";
import DGurl from "@/types/DGurl";

export default async function post(type:DGurl,data:any):Promise<axiosResponse>
{
  const config = {
    headers: { "Content-Type": "multipart/form-data" }
  };

  try
  {
    const res:AxiosResponse= await axios.post(gettingUrl(type),data,config)
    return {data:res.data,err:{isErr:false}}
  }
  catch(err)
  {
    console.log(err)
    return {data:[],err:{err:err,isErr:true}}
  }
}