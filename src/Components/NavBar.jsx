import NavLinks from "./NavLinks";
import { useState } from "react"
import { Menu,X } from "lucide-react"

export default function NavBar() {

  const [menuOpen,setMenuOpen]=useState(false);

  const toggleNavBar=()=>{
    setMenuOpen(!menuOpen);
  }

  return (
    <>
        <div className='bg-white flex justify-between items-center flex-wrap' >
            <img src='/images/logo.png'></img>

            <div className='hidden md:flex gap-3 pr-10 items-center font-semibold'>
                <NavLinks/>
            </div>

            <div className="md:hidden">
              <button onClick={toggleNavBar}>{menuOpen?<X/>:<Menu/>}</button>
            </div>
            
            {menuOpen && (
              <div className="md:hidden flex flex-col items-center justify-center w-full gap-2">
                <NavLinks />
              </div>
            )}

        </div>

    </>
  )
}
