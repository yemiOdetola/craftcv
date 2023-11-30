import { create } from "zustand";
import { shallow } from "zustand/shallow";

type EditorConfig = {
  fontFamily: string;
  fontSize: string;
  theme: string[];
};

type State = {
  fontFamily: string;
  fontSize: string;
  editorTheme: string[];
  actions: any;
  // editorConfig: EditorConfig;
  // setEditorConfig: (config: EditorConfig) => void;
};

const useMainStore = create<State>()((set: any) => ({
  fontFamily: "ubuntu",
  fontSize: "font-sm",
  editorTheme: ["7D4B82", "B54A71"],
  actions: {
    setFontFamily: (fontFamily: string) => set(() => ({ fontFamily })),
    setEditorTheme: (theme: string[]) => set(() => ({ editorTheme: theme })),
  },
}));

export const useFontFamily = () =>
  useMainStore((state: State) => state.fontFamily);

export const useEditorTheme = () =>
  useMainStore((state: State) => state.editorTheme);

export const useStoreActions = () => useMainStore((state) => state.actions);
