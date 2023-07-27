import axios,{AxiosResponse} from "axios";
import gettingUrl from "./gettingUrl";

export default async function get(type:DGurl,tag:string=""):Promise<{data:AxiosResponse|[],err:boolean}>
{
  try
  {
      const res:AxiosResponse= await axios.get(gettingUrl(type,tag))
      return {data:res.data,err:false}  
  }catch(err)
  {
      console.log(err)
      return {data:[],err:true}
  }
}

