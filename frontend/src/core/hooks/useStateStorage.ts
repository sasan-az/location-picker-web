import { useCallback, useEffect, useState } from "react";
import * as localForage from "localforage";

type UseStateStorage<V> = [value: V, setValue: (newValue: V) => Promise<void>];

export default function useStateStorage<V>(
  key: string,
  defaultValue: V
): UseStateStorage<V> {
  const [value, setState] = useState<V>(defaultValue);

  useEffect(() => {
    localForage.getItem(key).then((store) => {
      if (store != null) {
        try {
          setState(JSON.parse(store as unknown as string));
        } catch (err) {
          localForage.removeItem(key).then((res) => {});
        }
      }
    });
  }, [key]);

  const setValue = useCallback(
    async (newValue: V) => {
      setState(newValue);
      await localForage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, setValue];
}
