import { useMainStore, useResume } from '@/store';

export const useResumeActions = () => {
  const resume = useResume();
  const { updateResume } = useMainStore();
  const sectionKeys = Object.keys(resume);

  const saveWithPath = (pathArray: any[], newValue: any) => {
    let cres = { ...resume };
    if (!Array.isArray(pathArray) || pathArray.length === 0) {
      return cres;
    }
    const updateRecursively = (obj: any, path: string[], value: string) => {
      if (path.length === 1) {
        obj[path[0]] = value;
        return;
      }
      if (!obj[path[0]]) {
        obj[path[0]] = {};
      }
      updateRecursively(obj[path[0]], path.slice(1), value);
    };
    updateRecursively(cres, pathArray, newValue);
    updateResume(cres);
  };

  const addNewInputField = (rms: any, pathArray: string[]) => {
    if (!Array.isArray(pathArray) || pathArray.length === 0) {
      return rms;
    }
    const updateRecursively = (obj: any, path: string[]) => {
      if (path.length === 1) {
        obj[path[0]].push('');
        return;
      }
      if (!obj[path[0]]) {
        obj[path[0]] = {};
      }
      updateRecursively(obj[path[0]], path.slice(1));
    };
    updateRecursively(rms, pathArray);
    setTimeout(() => {
      const newFieldIndex =
        rms.experiences.experience0.responsibilities.length - 1;
      const newFieldRef = document.getElementById(
        `responsibility-${newFieldIndex}`
      );
      if (newFieldRef) {
        newFieldRef.focus();
      }
    }, 100);
    //TODO onSave(editedText);
  };

  const handleSaveField = (
    section: (typeof sectionKeys)[number],
    fieldId: string,
    value: any
  ) => {
    let cloneResume = { ...resume };
    let currentField = cloneResume[section][fieldId];
    if (typeof currentField == 'string') {
      cloneResume[section][fieldId] = value;
    } else if (typeof value === 'object' && !Array.isArray(currentField)) {
      cloneResume[section][fieldId] = value;
    }
    updateResume(cloneResume);
  };

  return {
    resume,
    saveWithPath,
    addNewInputField,
    handleSaveField,
  };
};
