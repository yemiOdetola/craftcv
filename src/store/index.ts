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
  theme: string[];
  actions: any;
  // editorConfig: EditorConfig;
  // setEditorConfig: (config: EditorConfig) => void;
};

const useMainStore = create<State>()((set: any) => ({
  fontFamily: "ubuntu",
  fontSize: "font-sm",
  theme: [""],
  actions: {
    setFontFamily: (fontFamily: string) =>
      set(() => ({ fontFamily: fontFamily })),
  },
}));

export const useFontFamily = () =>
  useMainStore((state: State) => state.fontFamily);

export const useActions = () => useMainStore((state) => state.actions);
