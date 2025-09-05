'use client';
import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";


interface Props {
  path:string;
  text:string
}
export const ActiveLink = ({path,text}:Props) => {
  const pathName= usePathname()
  console.log(pathName);
  
  return (
   <Link 
   href={path} key={path} 
   className={`${style.links} ${ (pathName === path) && style['activeLink']}`}>
    {text}  
    </Link>
  )
}
