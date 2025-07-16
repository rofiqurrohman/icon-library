export interface Icon {
  id: string | undefined;
  name: string;
  category: string;
  style: string;
  code: string | undefined;
}

export interface IconStyle {
  type: 'solid' | 'line' | 'outlined';
  className?: string;
  component?: any;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  iconCount: number;
}

export interface IconLibraryContextType {
  icons: Icon[];
  categories: string[];
  selectedCategory?: string;
  selectedStyle: IconStyle['type'];
  searchQuery: string;
  setSelectedCategory?: (category: string) => void;
  setSelectedStyle: (style: IconStyle['type']) => void;
  setSearchQuery: (query: string) => void;
  filteredIcons: Icon[];
  loading: boolean;
}
