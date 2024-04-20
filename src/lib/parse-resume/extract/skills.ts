import { ResumeSectionToLines, ResumeSkills } from '@/lib/types';
import {
  getBulletPointsFromLines,
  getDescriptionsLineIdx,
} from './utils/bullet-points';
import { getSectionLinesByKeywords } from './utils/section-lines';

export const extractSkills = (sections: ResumeSectionToLines) => {
  const lines = getSectionLinesByKeywords(sections, ['skill']);
  const descriptionLineIdx = getDescriptionsLineIdx(lines) ?? 0;
  const descriptionLines = lines.slice(descriptionLineIdx);
  const descriptions = getBulletPointsFromLines(descriptionLines);

  // const featuredSkills = deepClone(initialFeaturedSkills); // hey, this is supposed to be initialized by a resumeSlice
  const featuredSkills: any = [];
  if (descriptionLineIdx !== 0) {
    const featuredSkillLines = lines.slice(0, descriptionLineIdx);
    const featuredSkillsTextItems = featuredSkillLines
      .flat()
      .filter((item) => item.text.trim())
      .slice(0, 6);

    for (let i = 0; i < featuredSkillsTextItems.length; i++) {
      featuredSkills[i].skill = featuredSkillsTextItems[i].text;
    }
  }

  const skills: ResumeSkills = {
    featuredSkills,
    descriptions,
  };

  return { skills };
};
