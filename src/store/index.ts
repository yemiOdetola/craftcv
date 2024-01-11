import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EditorConfig {
  fontFamily: string;
  fontSize: string;
  theme: string[];
}
type TemplateTypes =
  | null
  | 'amit-pachange'
  | 'coutume'
  | 'jake-ryan'
  | 'thomas-highbaugh'
  | 'odetola-azeez';
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
  layoutDimension: string[];
  resume: any;
  loading: any;
  isCustom: any;
  resumeType: string;
  changeFontFamily: (e: any) => void;
  changeEditorTheme: (e: any) => void;
  updateResume: (e: any) => void;
  updateResumeType: (e: any) => void;
  setIsCustom: (e: any) => void;
  updateCustomLayout: (e: any) => void;
  setLoading: (e: boolean) => void;
  updateLayoutDimension: (e: any) => void;
  actions: Actions;
}

export const useMainStore = create<State>()(
  persist(
    (set: any) => ({
      fontFamily: 'ubuntu',
      fontSize: 'font-sm',
      editorTheme: ['7D4B82', 'B54A71'],
      resume: {},
      resumeType: '',
      customLayout: {},
      loading: false,
      layoutDimension: ['6/12', '6/12'],
      changeFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
      setIsCustom: (isCustom: boolean) => set(() => ({ isCustom })),
      isCustom: false,
      changeEditorTheme: (theme: string[]) =>
        set(() => ({ editorTheme: theme })),
      updateResume: (resume: any) => set(() => ({ resume })),
      updateResumeType: (resumeType: string) => set(() => ({ resumeType })),
      setLoading: (loading: boolean) => set(() => ({ loading })),
      updateCustomLayout: (customLayout: any) => set(() => ({ customLayout })),
      updateLayoutDimension: (layoutDimension: any) =>
        set(() => ({ layoutDimension })),
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
export const useResumeType = () =>
  useMainStore((state: State) => state.resumeType);
export const useLoading = () => useMainStore((state: State) => state.loading);
export const useCustomLayout = () =>
  useMainStore((state: State) => state.customLayout);

export const useLayoutDimension = () =>
  useMainStore((state: State) => state.layoutDimension);

export const useStoreActions = () =>
  useMainStore((state: State) => state.actions);
export const useIsCustom = () => useMainStore((state: State) => state.isCustom);
