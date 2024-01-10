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

  const removeFromPath = (pathArray: any[]) => {
    let cres = { ...resume };
    if (!Array.isArray(pathArray) || pathArray.length === 0) {
      return cres;
    }
    const findRecursively = (obj: any, path: string[]) => {
      if (path.length === 1) {
        delete obj[path[0]];
        return;
      }
      if (!obj[path[0]]) {
        return;
      }
      findRecursively(obj[path[0]], path.slice(1));
    };
    findRecursively(cres, pathArray);
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
    console.log('pathArraypathArraypathArraypathArray', pathArray);
    const idx: any = pathArray.pop();
    if (idx > 0) {
      const pathArr = [...pathArray];
      const lastSection = pathArr[pathArr.length - 1];
      const updatedResume = { ...resume };
      let parentSections = updatedResume;
      for (let i = 0; i < pathArr.length - 1; i++) {
        parentSections = parentSections[pathArr[i]];
      }
      parentSections[lastSection].splice(idx, 1);
      updateResume(updatedResume);
    } else {
      alert("Don't be weird!");
    }
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

  const removeSection = (
    key: string,
    type:
      | 'education'
      | 'experiences'
      | 'projects'
      | 'awards'
      | 'certifications'
      | 'publications'
      | 'references'
  ) => {
    if (window.confirm('Are you sure?')) {
      if (type == 'education') {
        removeFromPath(['education', key]);
      }
      if (type == 'experiences') {
        removeFromPath(['experiences', key]);
      }
      if (type == 'projects') {
        removeFromPath(['projects', key]);
      }
      if (type == 'awards') {
        removeFromPath(['awards', key]);
      }
      if (type == 'certifications') {
        removeFromPath(['certifications', key]);
      }
      if (type == 'publications') {
        removeFromPath(['publications', key]);
      }
      if (type == 'references') {
        removeFromPath(['references', key]);
      }
    }
  };

  return {
    resume,
    saveWithPath,
    addNewInputField,
    removeInputField,
    handleSaveField,
    removeFromPath,
    removeSection,
  };
};
