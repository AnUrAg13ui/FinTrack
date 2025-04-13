import { SignedOut, SignInButton, UserButton, SignedIn} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href="/">
          <Image  
          src="/fintrack.jpg" alt=' FinTrack Logo' height={60} width={200}
          className='h-12 w-auto object-contain rounded'
          / >
        </Link>


        
        <div className='flex items-center space-x-4 '>
          <SignedIn>
            <Link href="/dashboard">
            <Button variant="outline" className="text-black hover:bg-black  hover:text-white  cursor-pointer ">
              <LayoutDashboard size={18} />
              <span className="hidden md:inline">Dashboard</span>
            </Button>
            </Link>

            <Link href="/transaction/create">
            <Button variant="outline" className="text-black hover:bg-black  hover:text-white  cursor-pointer flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Add Transaction</span>
            </Button>
            </Link>

          </SignedIn>
        
        <SignedOut>
      <SignInButton forceRedirectUrl='/dashboard'>
      <Button variant="outline" className="hover:bg-black  hover:text-white  cursor-pointer">Login</Button>

      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton  appearance={{
        elements: {
          avatarBox: "w-20 h-20",
        },
      }} />
    </SignedIn>
    </div>
    </nav>
  </div>
  );
};

export default Header;