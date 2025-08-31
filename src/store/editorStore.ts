import { LastDeletedElementInfo } from "@/types/editor";
import {create} from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const name = "editorStore";

type commonVoid<T> = (arg: T) => void;

type StoreType = {
  publishedURL: string[];
  setPublishedURL: commonVoid<string>;

  isRehydrated: boolean;
  setIsRehydrated: commonVoid<boolean>;

  // state to track the last deleted element for restoration
  lastDeletedElementInfo: LastDeletedElementInfo | null;
  setLastDeletedElementInfo: commonVoid<LastDeletedElementInfo | null>;
};

export const useEditorStore = create<StoreType>()(
  persist(
    (set) => ({
      publishedURL: [],
      setPublishedURL: (key) =>
        set((state) => ({
          publishedURL: [key, ...state.publishedURL],
        })),

      isRehydrated: false,
      setIsRehydrated: (value) => set({ isRehydrated: value }),

      lastDeletedElementInfo: null,
      setLastDeletedElementInfo: (value) => set({ lastDeletedElementInfo: value }),
    }),

    {
      name,
      partialize: (state) => ({
        publishedURL: state.publishedURL,
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
  console.error("Failed to access storage:", error);
  useEditorStore?.setState(useEditorStore?.getInitialState());
  void useEditorStore?.persist?.rehydrate();
}
