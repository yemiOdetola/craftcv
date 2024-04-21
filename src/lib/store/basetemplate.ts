export type ValidSections =
  // | 'user'
  // | 'about'
  | 'contact'
  | 'education'
  | 'experiences'
  | 'projects'
  | 'certifications'
  | 'awards'
  | 'soft skills'
  | 'technical skills'
  | 'interests'
  | 'languages'
  | 'publications'
  | 'references';

export const basetemplate: any = {
  user: {
    id: 'user',
    fullname: '',
    title: '',
  },
  about: {
    id: 'about',
    title: '',
    summary: '',
  },
  contact: {
    id: 'contact',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    github: '',
  },
  education: {
    education0: {
      id: 'education0',
      award: '',
      school: '',
      gradyear: '',
      gp: '',
    },
  },
  experiences: {
    experiences0: {
      id: 'experiences0',
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      responsibilities: [''],
    },
  },
  projects: {
    projects0: {
      id: 'projects0',
      title: '',
      description: '',
      url: '',
      tech: '',
    },
  },
  certifications: {
    certifications0: {
      id: 'certifications0',
      name: '',
      from: '',
      to: '',
      description: '',
    },
  },
  // achievements: {
  //   achievements0: {
  //     name: '',
  //     from: '',
  //     to: '',
  //     description: '',
  //   },
  // },
  awards: {
    awards0: {
      id: 'awards0',
      title: '',
      year: '',
      institution: '',
      description: '',
    },
  },
  'soft skills': {
    id: 'skills',
    skillset: [''],
  },
  'technical skills': {
    id: 'skills',
    skillset: [''],
  },
  interests: [''],
  languages: [''],
  publications: {
    publications0: {
      id: 'publications0',
      type: '',
      title: '',
      authors: '',
      description: '',
    },
  },
  references: {
    references0: {
      name: '',
      relationship: '',
      contacts: [],
    },
  },
};
