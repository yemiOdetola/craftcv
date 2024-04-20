import { extractEducation } from './education';
import { extractProfile } from './profile';
import { extractProject } from './project';
import { extractSkills } from './skills';
import { extractWorkExperience } from './experience';
import { ResumeSectionToLines, Resume } from '../../types';

export const extractResumeFromSections = (
  sections: ResumeSectionToLines
): Resume => {
  const { profile } = extractProfile(sections);
  const { educations } = extractEducation(sections);
  const { workExperiences } = extractWorkExperience(sections);
  const { projects } = extractProject(sections);
  const { skills } = extractSkills(sections);

  return {
    profile,
    educations,
    workExperiences,
    projects,
    skills,
    custom: {
      descriptions: [],
    },
  };
};
