import { useCallback, useEffect, useState } from "react";
import * as localForage from "localforage";
import Cookies from "js-cookie";

type UseCookieStorage<V> = [value: V, setValue: (newValue: V) => Promise<void>];

export default function useStateCookie<V>(
  key: string,
  defaultValue: V
): UseCookieStorage<V> {
  const [value, setState] = useState<V>(defaultValue);

  useEffect(() => {
    const value = Cookies.get(key);
    if (value != null) {
      try {
        setState(JSON.parse(value as unknown as string));
      } catch (err) {
        Cookies.remove(key);
      }
    }
  }, [key]);

  const setValue = useCallback(
    async (newValue: V) => {
      setState(newValue);
      Cookies.set(key, JSON.stringify(newValue), { expires: 7 });
    },
    [key]
  );

  return [value, setValue];
}
