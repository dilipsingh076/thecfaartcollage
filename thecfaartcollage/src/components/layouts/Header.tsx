'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import InstitutionalNavbar from './InstitutionalNavbar';
import { getMenuData } from '../../services/api/menu.service';
import { MenuData } from '../../types/api';

export default function Header() {
  const [menuData, setMenuData] = useState<MenuData>({ primary: [], secondary: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu data from API using the service
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);
        const data = await getMenuData();
        setMenuData(data);
      } catch (err) {
        console.error('Error fetching menu data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <header>
      <InstitutionalNavbar menuItems={menuData.secondary} isLoading={isLoading} error={error} />
      <Navbar menuItems={menuData.primary} secondaryMenuItems={menuData.secondary} isLoading={isLoading} error={error} />
    </header>
  );
}