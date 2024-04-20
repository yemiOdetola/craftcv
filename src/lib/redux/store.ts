import { configureStore } from '@reduxjs/toolkit';
import { resumeReducer, settingsReducer, editorReducer } from './slice';

export const makeStore: any = configureStore({
  reducer: {
    resume: resumeReducer,
    settings: settingsReducer,
    editor: editorReducer,
  },
});

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
