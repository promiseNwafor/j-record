import Image from 'next/image';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LibraryBig } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
      <div className='flex items-center justify-center gap-x-2 w-56 p-2'><LibraryBig size={32} /> <span className='border border-primary rounded-md p-2 text-xl'>J-Record</span></div>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            J-<span className='text-primary'>Record</span>
          </h1>
          <p className='leading-loose max-w-md mt-4 '>
          Streamline Your Job Search, Track Your Progress, and Achieve Your Career Goals
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className='hidden lg:block ' />
      </section>
    </main>
  );
}
