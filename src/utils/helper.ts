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
  'E57263',
  '42BDBD',
  'D66D93',
  '7D4B82',
  'EACB5F',
  'FFE88A',
  '132729',
  '00DFD6',
  'FF581F',
  'F46B63',
  'BE6263',
  'F7BD80',
  'ED767A',
  'B54A71',
  '565656',
  '050505',
  'd6d6d6',
  'f0f0f0',
  '00e7b4',
  'EAE7E2',
  'CF2B58',
  'B22A50',
  '332520',
  '42342F',
  '16C4C7',
  '9ADBD9',
  'B5CEB9',
  'E0E9D0',
  'D641C7',
  'F2F4F5',
  '40505B',
  '00BFFF',
  // "203340",
  // "5A5133",
  // "8BA987",
  // "6C7767",
  // "4A6266",
  // "0AD1B3",
  // "DC0809",
  // "E4CD00",
  // "050505",
  // "2AACCF",
  // "7FCDDF",
  // "7BE0D0",
  // "FF6F18",
  // "A84B05",
  // "BED891",
  // "203428",
  // "64A1A5",
  // "E3D9BB",
  // "FF003E",
  // "E2AF56",
  // "00B9D7",
  // "00A06E",
  // "D0D7D8",
  // "FFF533",
  // "F14F06",
  // "3D342B",
  // "41A1BF",
  // "419A13",
  // "3FB8AF",
  // "7FC7AF",
  // "DAD8A7",
  // "FF9E9D",
  // "FF3D7F",
  // "CFF09E",
  // "A8DBA8",
  // "79BD9A",
  // "3B8686",
  // "0B486B",
  // "69D2E7",
  // "A7DBD8",
  // "E0E4CC",
  // "F38630",
  // "FA6900",
  // "DC3522",
  // "D9CB9E",
  // "374140",
  // "2A2C2B",
  // "1E1E20",
  // "1abc9c",
  // "2ecc71",
  // "3498db",
  // "9b59b6",
  // "34495e",
  // "f1c40f",
  // "e67e22",
  // "e74c3c",
  // "ecf0f1",
  // "95a5a6",
  // "16a085",
  // "27ae60",
  // "2980b9",
  // "8e44ad",
  // "2c3e50",
  // "f39c12",
  // "d35400",
  // "c0392b",
  // "bdc3c7",
  // "7f8c8d",
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
