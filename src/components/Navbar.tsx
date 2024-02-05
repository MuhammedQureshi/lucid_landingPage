import React from 'react'

import Logo from '@/../public/logo.svg';
import Link from 'next/link';

function Navbar() {

    const routes = [
        { href: '#', label: 'Air' },
        { href: '#', label: 'Gravity' }, 
        { href: '#', label: 'Experience' }, 
        { href: '#', label: 'Shop' }, 
    ]
  return (
    <nav className='absolute inset-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0'>
        <Logo className='w-60' />
        <div className='flex gap-6'>
            {routes.map(route => (
                <Link key={route.href} href={route.href}>
                    {route.label}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar