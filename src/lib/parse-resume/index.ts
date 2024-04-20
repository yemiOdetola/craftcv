import { extractResumeFromSections } from './extract';
import { groupLinesIntoSections } from './group-sections';
import { groupTextItemsIntoLines } from './group-text';
import { readPdf } from './read-pdf';

export const parseResumeFromPdf = async (fileUrl: string) => {
  const textItems = await readPdf(fileUrl);
  const lines = await groupTextItemsIntoLines(textItems);
  const sections = await groupLinesIntoSections(lines);
  const resume = await extractResumeFromSections(sections);
  return resume;
};
