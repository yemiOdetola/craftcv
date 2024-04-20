import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Editor {
  editorSettings: {
    fontFamily: string;
    fontSize: string;
    editorTheme: string;
    customLayout: any;
    layoutDimension: string[];
    resume: any;
    loading: any;
    isCustom: any;
    resumeType: string;
  };
  resume: any;
}

export type EditorSettings = keyof Editor['editorSettings'];
export type Resume = any;

export const DEFAULT_THEME_COLOR = '#38bdf8';
export const DEAFULT_FONT_FAMILY = 'ubuntu';
export const DEFAULT_FONT_SIZE = '11';
export const DEFAULT_FONT_COLOR = '#171717';

export const initialSettings: Editor = {
  editorSettings: {
    editorTheme: DEFAULT_THEME_COLOR,
    fontFamily: DEAFULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    resume: {},
    resumeType: '',
    isCustom: false,
    customLayout: {},
    loading: false,
    layoutDimension: ['6/12', '6/12'],
  },
  resume: {},
};

export const settingsSlice = createSlice({
  name: 'editor',
  initialState: initialSettings,
  reducers: {
    changeEditorSettings: (
      draft: any,
      action: PayloadAction<{ field: EditorSettings; value: string }>
    ) => {
      const { field, value } = action.payload;
      draft[field] = value;
    },
    updateResume: (draft: any, action: PayloadAction<{ field: Resume }>) => {
      console.log('ACTION PAYLOAD-updateResume', action.payload);
    },
    setSettings: (draft, action: PayloadAction<Editor>) => {
      return action.payload;
    },
  },
});

export const { changeEditorSettings, setSettings } = settingsSlice.actions;

export const useSettings = (state: RootState) => state.editor.editorSettings;
export const useResume = (state: RootState) => state.editor.resume;
export const useEditorSettings = (state: RootState) =>
  state.editor.editorSettings;

export default settingsSlice.reducer;
