import React, { useState } from 'react';
import { IconCard } from './IconCard';
import { IconModal } from './IconModal';
import { useIconLibrary } from '@/contexts/IconLibraryContext';
import { Icon, IconStyle } from '@/types/icon';

interface IconGridProps {
  categoryIcons?: Icon[];
}

export const IconGrid: React.FC<IconGridProps> = ({ categoryIcons }) => {
  const { filteredIcons: iconsToDisplay, selectedStyle, searchQuery, loading } = useIconLibrary();
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [selectedIconStyle, setSelectedIconStyle] = useState<IconStyle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use categoryIcons if provided, otherwise use filteredIcons from context
  // const iconsToDisplay = categoryIcons || filteredIcons;

  const handleIconClick = (icon: Icon) => {
    setSelectedIcon(icon);
    // setSelectedIconStyle(style);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedIcon(null);
    setSelectedIconStyle(null);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
      </div>
    );
  }

  if (iconsToDisplay.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-16 text-center'>
        <i className='ic-search-search-warning-line text-[48px]'></i>
        <h3 className='text-lg font-medium text-foreground mb-2'>No icons found</h3>
        <p className='text-muted-foreground max-w-md'>
          {searchQuery
            ? `No icons match your search "${searchQuery}". Try different keywords.`
            : 'No icons available in this category.'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-2'>
        {iconsToDisplay.map((icon) => (
          <IconCard key={icon.id} icon={icon} selectedStyle={selectedStyle} onIconClick={handleIconClick} />
        ))}
      </div>

      <IconModal icon={selectedIcon} isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};
