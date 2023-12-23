import React from 'react';
import {
  Experiences,
  Projects,
  Contact,
  Education,
  Certifications,
  Awards,
  Interests,
  Languages,
  Publications,
  References,
  SoftSkills,
  TechnicalSkills,
} from '@/components/editor/sections';
import { ValidSections } from '@/store/basetemplate';

const components: any = {
  experiences: Experiences,
  projects: Projects,
  contact: Contact,
  education: Education,
  certifications: Certifications,
  awards: Awards,
  interests: Interests,
  languages: Languages,
  publications: Publications,
  references: References,
  'soft skills': SoftSkills,
  'technical skills': TechnicalSkills,
};

export const useSectionRenderer = () => {
  const renderComponent = (name: ValidSections, commonProps: any) => {
    const Component = components[name];
    return <Component {...commonProps} />;
  };
  return {
    renderComponent,
  };
};
