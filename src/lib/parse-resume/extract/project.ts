import { ResumeProject } from '../../types';
import { isBold } from '../group-sections';
import { FeatureSet, ResumeSectionToLines } from '../../types';
import {
  getBulletPointsFromLines,
  getDescriptionsLineIdx,
} from './utils/bullet-points';
import { DATE_FEATURE_SETS, getHasText } from './utils/calendar';
import { getTextWithHighestFeatureScore } from './utils/scoring-system';
import { getSectionLinesByKeywords } from './utils/section-lines';
import { divideSectionIntoSubsections } from './utils/sub-section';

export const extractProject = (sections: ResumeSectionToLines) => {
  const projects: ResumeProject[] = [];
  const projectScores = [];
  const lines = getSectionLinesByKeywords(sections, ['project']);
  const subsections = divideSectionIntoSubsections(lines);

  for (const subsectionLines of subsections) {
    const descriptionLineIdx = getDescriptionsLineIdx(subsectionLines) ?? 1;

    const subsectionInfoTextItems = subsectionLines
      .slice(0, descriptionLineIdx)
      .flat();

    const [date, dateScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      DATE_FEATURE_SETS
    );

    const PROJECT_FEATURE_SET: FeatureSet[] = [
      [isBold, 2],
      [getHasText(date), -4],
    ];

    const [project, projectScore] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      PROJECT_FEATURE_SET,
      false
    );

    const descriptionsLines = subsectionLines.slice(descriptionLineIdx);
    const descriptions = getBulletPointsFromLines(descriptionsLines);

    projects.push({ project, date, descriptions });
    projectScores.push({
      projectScore,
      dateScores,
    });
  }

  return { projects, projectScores };
};
