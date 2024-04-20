import { useEffect } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStore, RootState, makeStore } from './store';
import { deepMerge } from '../utils';
import { initialResumeState, setResume } from './slice/resume';
import { Settings, initialSettings, setSettings } from './slice/settings';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from './localstorage';
import { Resume } from '@/lib/types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();


export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = makeStore.subscribe(() => {
      saveStateToLocalStorage(makeStore.getState());
    });
    return unsubscribe;
  }, []);
};

export const useSetInitialStore = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const state = loadStateFromLocalStorage();
    if (!state) {
      return;
    }
    if (state.resume) {
      const mergedResumeState = deepMerge(
        initialResumeState,
        state.resume
      ) as Resume;
      dispatch(setResume(mergedResumeState));
    }
    if (state.settings) {
      const mergedSettingsState = deepMerge(
        initialSettings,
        state.settings
      ) as Settings;
      dispatch(setSettings(mergedSettingsState));
    }
  }, []);
};
