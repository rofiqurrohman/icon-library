import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { IconLibraryContextType, Icon, IconStyle } from '@/types/icon';

const IconLibraryContext = createContext<IconLibraryContextType | undefined>(undefined);

export const useIconLibrary = () => {
  const context = useContext(IconLibraryContext);
  if (!context) {
    throw new Error('useIconLibrary must be used within an IconLibraryProvider');
  }
  return context;
};

interface IconLibraryProviderProps {
  children: React.ReactNode;
}

export const IconLibraryProvider: React.FC<IconLibraryProviderProps> = ({ children }) => {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<IconStyle['type']>('solid');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // console.log('selected style', selectedStyle);
    setLoading(true);
    fetch(`/data/icon-font-${selectedStyle}.json`)
      .then((res) => res.json())
      .then((data) => {
        const result = Object.entries(data).map(([name, code]) => {
          const parts = name.split('-');
          return {
            id: code?.toString(),
            name,
            style: parts[parts.length - 1], // ambil bagian belakang
            category: parts[0], // ambil bagian depan
            code: code?.toString(),
          };
        });
        // console.log(result);
        setIcons(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedStyle]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(icons.map((icon) => icon.category)));
    return ['All', ...unique];
  }, [icons]);

  const filteredIcons = useMemo(() => {
    return icons.filter((icon) => {
      const matchSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSearch;
    });
  }, [icons, searchQuery]);

  const value = useMemo(
    () => ({
      icons,
      categories,
      filteredIcons,
      loading,
      searchQuery,
      setSearchQuery,
      selectedStyle,
      setSelectedStyle,
    }),
    [icons, filteredIcons, loading, searchQuery, categories, selectedStyle]
  );

  return <IconLibraryContext.Provider value={value}>{children}</IconLibraryContext.Provider>;
};
