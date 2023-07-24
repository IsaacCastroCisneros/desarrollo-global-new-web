import {ButtonHTMLAttributes} from 'react'

export default interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
    label:string
}