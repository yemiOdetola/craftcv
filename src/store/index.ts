import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { amitpachange } from './resume';

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
  resume: any;
  changeFontFamily: (e: any) => void;
  changeEditorTheme: (e: any) => void;
  updateResume: (e: any) => void;
  actions: Actions;
}

// export const useMainStore = create<State>()(
//   persist(
//     (set, get) => ({
//       fontFamily: 'ubuntu',
//       fontSize: 'font-sm',
//       editorTheme: ['7D4B82', 'B54A71'],
//       actions: {
//         setFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
//         setEditorTheme: (theme: string[]) =>
//           set(() => ({ editorTheme: theme })),
//       },
//     }),
//     {
//       name: 'craftcv',
//     }
//   )
// );

export const useMainStore = create<State>()(
  persist(
    (set: any) => ({
      fontFamily: 'ubuntu',
      fontSize: 'font-sm',
      editorTheme: ['7D4B82', 'B54A71'],
      resume: { ...amitpachange },
      changeFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
      changeEditorTheme: (theme: string[]) =>
        set(() => ({ editorTheme: theme })),
      updateResume: (resume: string) => set(() => ({ resume })),
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

export const useStoreActions = () =>
  useMainStore((state: State) => state.actions);
