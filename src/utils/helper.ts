export const getFontFamilyStyle = (fontFamily: string) => {
  switch (true) {
    case fontFamily.includes("ubuntu"):
      return "text-ubuntu";

    case fontFamily.includes("cabin"):
      return "text-cabin";

    case fontFamily.includes("cfspaceship"):
      return "text-spaceship";

    case fontFamily.includes("swansea"):
      return "text-swansea";

    case fontFamily.includes("clear"):
      return "text-clearsans";

    case fontFamily.includes("charger"):
      return "text-charger";
  }
};


