import { SetStateAction, useState } from "react";

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = useState(
    JSON.stringify(localStorage.getItem(item) ?? "")
  );

  const updateLocalStorage = (newValue: SetStateAction<string>) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
