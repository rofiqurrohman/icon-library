import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IconStyle } from '@/types/icon';
import { useIconLibrary } from '@/contexts/IconLibraryContext';

export const StyleSelector: React.FC = () => {
  const { selectedStyle, setSelectedStyle } = useIconLibrary();

  const styles: { type: IconStyle['type']; label: string; description: string }[] = [
    { type: 'solid', label: 'Solid', description: 'Filled icons' },
    { type: 'line', label: 'Line', description: 'Outlined icons' },
    // { type: 'outlined', label: 'Outlined', description: 'Stroke icons' }
  ];

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-2 text-sm font-medium text-foreground/90'>
        <i className='ic-education-palette-line text-[16px]'></i>
        <span>Style:</span>
      </div>
      <Select value={selectedStyle} onValueChange={(value: IconStyle['type']) => setSelectedStyle(value)}>
        <SelectTrigger className='w-32'>
          <SelectValue placeholder='Select style' />
        </SelectTrigger>
        <SelectContent>
          {styles.map((style) => (
            <SelectItem key={style.type} value={style.type}>
              <div>
                <span className='block font-medium'>{style.label}</span>
                <span className='block text-xs text-muted-foreground'>{style.description}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
