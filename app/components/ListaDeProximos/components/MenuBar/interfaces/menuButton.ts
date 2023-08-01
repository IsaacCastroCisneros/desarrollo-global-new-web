import DGurl from '@/types/DGurl'
import {ButtonHTMLAttributes} from 'react'

export default interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
    label:DGurl
    realLabel?:string
}