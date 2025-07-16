import React from 'react';
import { SearchBar } from './SearchBar';
import { StyleSelector } from './StyleSelector';

export const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between gap-4 whitespace-nowrap'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10'>
              {/* <Palette size={24} className='text-primary' /> */}
              <i className='ic-education-palette-line text-[24px]'></i>
            </div>
            <div>
              <h1 className='text-xl font-bold text-foreground'>Icon</h1>
              <p className='text-xs text-muted-foreground'>open-source icons</p>
            </div>
          </div>

          <div className='w-full'>
            <SearchBar />
          </div>
          <div className=''>
            <StyleSelector />
          </div>
        </div>
      </div>
    </header>
  );
};
