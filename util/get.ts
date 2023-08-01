import axios,{AxiosResponse} from "axios";
import gettingUrl from "./gettingUrl";
import axiosResponse from "@/types/axiosResponse";
import DGurl from "@/types/DGurl";

export default async function get(type:DGurl,tag:string=""):Promise<axiosResponse>
{
  try
  {
    const res:AxiosResponse= await axios.get(gettingUrl(type,tag))
    return { data: res.data, err: { isErr: false } };  

  }catch(err)
  {
    console.log(err);
    return { data: [], err: { err: err, isErr: true } };
  }
}

