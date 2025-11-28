import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const { data: session } = useSession();

  // Загружаем избранные при входе
  useEffect(() => {
    if (session?.user?.id) {
      loadFavorites();
    } else {
      setFavorites([]);
    }
  }, [session]);

  const loadFavorites = async () => {
    try {
      const response = await fetch('/api/favorites');
      if (response.ok) {
        const data = await response.json();
        setFavorites(data);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const addToFavorites = async (item) => {
    if (!session) return false;

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        await loadFavorites();
        return true;
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
    return false;
  };

  const removeFromFavorites = async (itemId) => {
    if (!session) return false;

    try {
      const response = await fetch('/api/favorites', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });

      if (response.ok) {
        await loadFavorites();
        return true;
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
    return false;
  };

  const isFavorite = (itemId) => {
    return favorites.some(fav => fav.itemId === itemId);
  };

  const toggleFavorite = async (item) => {
    if (!session) return false;

    if (isFavorite(item.id)) {
      return await removeFromFavorites(item.id);
    } else {
      return await addToFavorites({
        itemId: item.id,
        type: item.type,
        name: item.name,
        description: item.description,
        image: item.image,
        details: item.details,
        addedAt: new Date().toISOString(),
      });
    }
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite,
      hasUser: !!session
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);