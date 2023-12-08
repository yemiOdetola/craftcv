import { useMainStore, useResume } from '@/store';

export const useEditorActions = () => {
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
  const addNewInputField = (pathArray: string[]) => {
    const pathArr = [...pathArray];
    pathArr.pop();
    if (!Array.isArray(pathArr) || pathArr.length === 0) {
      return resume;
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
    updateRecursively(resume, pathArr);
    setTimeout(() => {
      const lastSection = pathArr[pathArr.length - 1];
      let parentSections = resume;
      for (let i = 0; i < pathArr.length - 1; i++) {
        parentSections = parentSections[pathArr[i]];
      }
      const newFieldIndex = parentSections[lastSection].length - 1;
      const newFieldRef = document.getElementById(
        `${lastSection}-${newFieldIndex}`
      );
      if (newFieldRef) {
        newFieldRef.focus();
      }
    }, 100);
  };

  const removeInputField = (pathArray: string[]) => {
    const idx: any = pathArray.pop();
    const pathArr = [...pathArray];
    const lastSection = pathArr[pathArr.length - 1];
    const updatedResume = { ...resume };
    let parentSections = updatedResume;
    for (let i = 0; i < pathArr.length - 1; i++) {
      parentSections = parentSections[pathArr[i]];
    }
    parentSections[lastSection].splice(idx, 1);
    updateResume(updatedResume);
    //TODO: set the next input field to be active, if available.
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
    removeInputField,
    handleSaveField,
  };
};
