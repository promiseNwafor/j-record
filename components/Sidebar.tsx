'use client';

import links from '@/utils/links';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { LibraryBig } from 'lucide-react';
function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <div className='flex items-center justify-center gap-x-2 w-56 p-2'><LibraryBig size={32} /> <span className='border border-primary rounded-md p-2 text-xl'>J-Record</span></div>
      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? 'default' : 'link'}
            >
              <Link href={link.href} className='flex items-center gap-x-2 '>
                {link.icon} <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
export default Sidebar;
