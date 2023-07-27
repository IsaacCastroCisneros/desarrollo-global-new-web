import axios,{AxiosResponse} from "axios"
import gettingUrl from "./gettingUrl"

export default async function post(type:DGurl,data:any)
{
  try
  {
    const res:AxiosResponse= await axios.post(gettingUrl(type),data)
    console.log(res.data)
  }
  catch
  {

  }
}