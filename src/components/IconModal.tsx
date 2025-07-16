import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Icon } from '@/types/icon';
import { toast } from 'sonner';
// import { useToast } from '@/hooks/use-toast';

interface IconModalProps {
  icon: Icon | null;
  isOpen: boolean;
  onClose: () => void;
}

export const IconModal: React.FC<IconModalProps> = ({ icon, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  // const { toast } = useToast();

  if (!icon) return null;

  // const IconComponent = style.component;
  const iconCode = `<i class="ic-${icon.name}"></i>`;

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success('Copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy!');
    }
  };

  const handleDownload = () => {
    // In a real app, this would download the actual icon file
    toast('Download started', {
      description: `Downloading ${icon.name} icon`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader className='hidden'>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Icon Preview */}
          <div className='flex flex-col items-center gap-2 justify-center'>
            <div className='flex items-center justify-center bg-[#f5f5f5] w-[100px] h-[100px]'>
              <span className='text-[40px]'>
                <i className={`ic-${icon.name}`}></i>
              </span>
            </div>
            <div className='flex items-center'>
              <pre className='text-xs text-[#666]'>{icon.name}</pre>
              <Button size='icon' variant='ghost' className='h-7 w-7 p-0 ml-2' onClick={() => handleCopy(icon.name)}>
                {copied ? (
                  <i className='ic-add-remove-delete-bold-check-line text-[12px]' />
                ) : (
                  <i className='ic-edit-formatting-copy-line text-[12px]' />
                )}
              </Button>
            </div>
          </div>

          {/* Code Section */}
          <div className='space-y-3'>
            <h4 className='font-medium text-sm text-foreground/90'>HTML Code</h4>
            <div className='relative'>
              <pre className='p-3 bg-muted rounded-lg text-sm border'>{iconCode}</pre>
              <Button
                size='sm'
                variant='outline'
                className='absolute right-2 top-2 h-7 w-7 p-0'
                onClick={() => handleCopy(iconCode)}
              >
                {copied ? (
                  <i className='ic-add-remove-delete-bold-check-line text-[12px]' />
                ) : (
                  <i className='ic-edit-formatting-copy-line text-[12px]' />
                )}
              </Button>
            </div>

            {/* <div>{iconCode}</div> */}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3'>
            <Button onClick={() => handleCopy(iconCode)} className='flex-1'>
              <i className='ic-edit-formatting-copy-line text-[16px] mr-2' />
              Copy Code
            </Button>
            <Button onClick={handleDownload} variant='outline' className='flex-1'>
              <i className='ic-upload-download-download-line text-[16px] mr-2' />
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
