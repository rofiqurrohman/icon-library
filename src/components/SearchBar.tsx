import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useIconLibrary } from '@/contexts/IconLibraryContext';

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useIconLibrary();

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className='relative'>
      <i className='ic-search-filter-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground' />
      <Input
        placeholder='Search icons...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='pl-10 pr-10 h-11 bg-background/60 backdrop-blur-sm border-border/50 focus:border-primary/20'
      />
      {searchQuery && (
        <Button
          variant='ghost'
          size='sm'
          className='absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted'
          onClick={handleClear}
        >
          {/* <X size={14} /> */}
          <i className='ic-add-remove-delete-cross-line text-[12px]' />
        </Button>
      )}
    </div>
  );
};
