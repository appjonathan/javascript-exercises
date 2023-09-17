'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)


  return (

    
    <nav className='navbar flex justify-between items-center p-4 shadow-md'>
      <Link href="/" className='flex items-center gap-2'>
        <Image
          src="/lazymail.svg"
          alt='Lazymail Logo'
          width={60}
          height={60}
          className='object-contain sm:flex hidden'
        />
        <p className='sm:block text-3xl font-satoshi font-semibold text-black tracking-wide uppercase'>Lazymail</p>
      </Link>

     {/* Desktop Nav*/}
      <div className="sm:flex hidden space-x-4">
        <Link href='/login' className='black_btn'>Login/Profil</Link>
        <Link href='/prices' className='black_btn'>Preise</Link>
        <Link href='/contact' className='black_btn'>Kontakt</Link>
      </div>

      {/* Mobile Nav */}
      <div className='sm:hidden flex relative'>
        <div className='flex'>
          <Image
            src="/lazymail.svg"
            alt='profile'
            width={60}
            height={60}
            onClick={() => setToggleDropdown((prev) => !prev)}
            className='rounded-full'
          />
        {toggleDropdown && (
                  <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] min-w-[120px] backdrop-blur  flex flex-col gap-2 justify-end items-center'>
                    <Link
                      href="/login"
                      className='black_btn'
                      onClick={() => setToggleDropdown(false)}
                    >
                      Login/Profil
                    </Link>
                    <Link
                      href="/prices"
                      className='black_btn'
                      onClick={() => setToggleDropdown(false)}
                    >
                      Preise
                    </Link>
                    <Link
                      href="/contact"
                      className='black_btn'
                      onClick={() => setToggleDropdown(false)}
                    >
                      Kontakt
                    </Link>
                  
                  </div>
                )}
        </div>
      </div>

    </nav>
  )
}

export default Nav