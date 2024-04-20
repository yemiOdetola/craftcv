export const getFontFamilyStyle = (fontFamily: string) => {
  switch (true) {
    case fontFamily.includes('ubuntu'):
      return 'text-ubuntu';

    case fontFamily.includes('cabin'):
      return 'text-cabin';

    case fontFamily.includes('cfspaceship'):
      return 'text-spaceship';

    case fontFamily.includes('ronnysiswadi'):
      return 'text-ronnysiswadi';

    case fontFamily.includes('motleyforces'):
      return 'text-motleyforces';

    case fontFamily.includes('sparkystones'):
      return 'text-sparkystones';

    case fontFamily.includes('sunnyspells'):
      return 'text-sunnyspells';

    case fontFamily.includes('glitchgoblin'):
      return 'text-glitchgoblin';
  }
};

const colors = [
  'D66D93',
  '7D4B82',
  '132729',
  'FF581F',
  'ED767A',
  'B54A71',
  '565656',
  '050505',
  'CF2B58',
  'B22A50',
  '332520',
  '42342F',
  'D641C7',
  '40505B',
  '203340',
  '5A5133',
  '8BA987',
  '6C7767',
  '4A6266',
  '050505',
  '2AACCF',
  '419A13',
  'FA6900',
  'DC3522',
  '374140',
  '2A2C2B',
  '1E1E20',
  '2ecc71',
  '3498db',
  '9b59b6',
  '34495e',
];

// Function to shuffle an array randomly
const shuffleArray = (array: string[]): string[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to group colors randomly
export const groupColors = (groupSize: number) => {
  const shuffledColors = shuffleArray(colors);
  const groupedColors: string[][] = [];
  for (let i = 0; i < shuffledColors.length; i += groupSize) {
    groupedColors.push(shuffledColors.slice(i, i + groupSize));
  }
  return groupedColors;
};

export const arraysEqual = (arrayA: string[], arrayB: string[]) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

export const isObjectEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const getInitials = (fullName: string): string => {
  const names = fullName.split(' ');
  const initials = names.map((name) => name.charAt(0).toUpperCase());
  return initials.join('');
};
