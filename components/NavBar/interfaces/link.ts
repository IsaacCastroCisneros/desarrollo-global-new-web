import { LinkProps } from "next/link";

export default interface link extends LinkProps
{
    label:string,
    target?:string,
}