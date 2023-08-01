export default function noNegativeNum(value:string)
{
    if(Number(value)<0)
    {              
       const resul = value.substring(0,1);
       return resul
    }
    return value
}