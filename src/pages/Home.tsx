import React from 'react';
import { IconGrid } from '@/components/IconGrid';

export const Home: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-12'>
        {/* Page Header */}
        {/* <div className='text-center space-y-4'>
          <h1 className='text-3xl font-bold text-foreground'>Modern Icon</h1>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Browse and copy beautiful icons for your projects. Click any icon to get the HTML code.
          </p>
        </div> */}

        <div>
          <IconGrid />
        </div>
      </div>
    </div>
  );
};
