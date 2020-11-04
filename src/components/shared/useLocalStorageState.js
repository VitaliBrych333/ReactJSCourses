import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    return String(defaultValue);
  });

  useEffect(() => {
    const value = window.localStorage.getItem(key);
    if (value && value !== '') {
      setState(value);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
