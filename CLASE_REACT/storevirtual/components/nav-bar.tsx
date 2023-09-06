import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '../styles/NavBar.module.css'

const NavBar = ()=>{

  const currentRoute = usePathname();
  const linkhref='flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-amber-600 duration-300';
  const activeStyle = linkhref+' text-black bg-amber-300';
  const inactiveStyle=  linkhref+' text-white';
  
 

  return (
        <nav className={styles.active}>
        <Link href='/' className={(currentRoute ==='/') ? activeStyle : inactiveStyle }> HOME</Link>
        <Link href='/about' className={(currentRoute ==='/about') ? activeStyle : inactiveStyle }> ABOUT</Link>
        <Link href='/contact' className={(currentRoute ==='/contact') ? activeStyle : inactiveStyle }> CONTACT</Link>
        </nav>
  );

}