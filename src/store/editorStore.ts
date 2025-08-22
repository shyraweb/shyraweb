import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const name = "editorStore";

type commonVoid<T> = (arg: T) => void;

type StoreType = {
  publishedURL: string;
  publishedTitle: string;

  setPublishedURL: commonVoid<string>;
  setPublishedTitle: commonVoid<string>;

  isRehydrated: boolean;
  setIsRehydrated: commonVoid<boolean>;
};

export const useEditorStore = create<StoreType>()(
  persist(
    (set) => ({
      publishedURL: "",
      publishedTitle: "Home",

      setPublishedURL: (key) => set({ publishedURL: key }),
      setPublishedTitle: (key) => set({ publishedTitle: key }),

      isRehydrated: false,
      setIsRehydrated: (value) => set({ isRehydrated: value }),
    }),

    {
      name,
      partialize: (state) => ({
        publishedURL: state.publishedURL,
        publishedTitle: state.publishedTitle,
      }),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setIsRehydrated(true);
        };
      },
      storage: createJSONStorage(() => localStorage, {
        reviver(_key, value) {
          try {
            const storedvalue = JSON.parse(decodeURIComponent(atob(value as string)));
            return storedvalue;
          } catch {
            return {
              state: {
                visitorId: "",
              },
              version: 0,
            };
          }
        },
        replacer(_key, value) {
          return btoa(encodeURIComponent(JSON.stringify(value)));
        },
      }),
    }
  )
);

// Handle storage fallback (for SSR or other failures)
try {
  void useEditorStore?.persist?.getOptions().storage?.getItem(name);
} catch (error) {
  useEditorStore?.setState(useEditorStore?.getInitialState());
  void useEditorStore?.persist?.rehydrate();
}
