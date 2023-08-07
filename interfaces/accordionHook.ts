export default interface accordionHook
{
    current:number
    id:number
    handleIsActive:(id:number)=>boolean
    handleUpdating:(id:number,current:number)=>void
}