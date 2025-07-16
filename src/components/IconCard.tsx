import React from 'react';
import { Icon, IconStyle } from '@/types/icon';
import { cn } from '@/lib/utils';

interface IconCardProps {
  icon: Icon;
  selectedStyle: IconStyle['type'];
  onIconClick: (icon: Icon) => void;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, onIconClick }) => {
  // const currentStyle = icon.styles.find((s) => s.type === selectedStyle) || icon.styles[0];
  // const IconComponent = currentStyle.component;

  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105',
        'w-[100px] h-[100px] bg-[#f5f5f5]'
      )}
      onClick={() => onIconClick(icon)}
    >
      <div className='flex flex-col h-full'>
        <div className='flex-1 flex items-center justify-center'>
          <span className='text-[40px]'>
            <i className={`ic-${icon.name}`}></i>
          </span>
        </div>
        <div className='bg-[#ddd] mt-auto'>
          <pre className='text-xs text-[#666] truncate'>{icon.name}</pre>
        </div>
      </div>
    </div>
  );
};
