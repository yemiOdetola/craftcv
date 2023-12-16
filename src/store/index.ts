import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EditorConfig {
  fontFamily: string;
  fontSize: string;
  theme: string[];
}

interface Actions {
  changeFontFamily: (e: any) => void;
  changeEditorTheme: (e: any) => void;
}
interface State {
  // editorConfig: EditorConfig;
  fontFamily: string;
  fontSize: string;
  editorTheme: string[];
  customLayout: any;
  resume: any;
  changeFontFamily: (e: any) => void;
  changeEditorTheme: (e: any) => void;
  updateResume: (e: any) => void;
  updateCustomLayout: (e: any) => void;
  actions: Actions;
}

export const useMainStore = create<State>()(
  persist(
    (set: any) => ({
      fontFamily: 'ubuntu',
      fontSize: 'font-sm',
      editorTheme: ['7D4B82', 'B54A71'],
      resume: {},
      customLayout: {},
      changeFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
      changeEditorTheme: (theme: string[]) =>
        set(() => ({ editorTheme: theme })),
      updateResume: (resume: string) => set(() => ({ resume })),
      updateCustomLayout: (customLayout: any) => set(() => ({ customLayout })),
      actions: {
        changeFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
        changeEditorTheme: (theme: string[]) =>
          set(() => ({ editorTheme: theme })),
      },
    }),
    {
      name: 'craftcv',
    }
  )
);

export const useFontFamily = () =>
  useMainStore((state: State) => state.fontFamily);

export const useEditorTheme = () =>
  useMainStore((state: State) => state.editorTheme);

export const useResume = () => useMainStore((state: State) => state.resume);
export const useCustomLayout = () =>
  useMainStore((state: State) => state.customLayout);

export const useStoreActions = () =>
  useMainStore((state: State) => state.actions);
