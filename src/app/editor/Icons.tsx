import { PiLinkedinLogoBold, PiChatCenteredTextDuotone, PiPhoneCallDuotone, PiGithubLogoDuotone, PiGlobeSimple, PiRecordBold, PiFileHtmlDuotone, PiAtomDuotone } from "react-icons/pi";

export const getIconByType = (type: string) => {
  const lctype: any = type.toLowerCase();
  switch (true) {
    case lctype.includes('email'):
      return <PiChatCenteredTextDuotone size={22} />;

    case lctype.includes('phone'):
      return <PiPhoneCallDuotone size={22} />;

    case lctype.includes('linkedin'):
      return <PiLinkedinLogoBold size={22} />;

    case lctype.includes('website'):
      return <PiGlobeSimple size={22} />;

    case lctype.includes('git'):
      return <PiGithubLogoDuotone size={22} />;

    case lctype.includes('html'):
      return <PiFileHtmlDuotone size={22} />;

    case lctype.includes('react'):
      return <PiAtomDuotone size={22} />;

    default:
      return <PiRecordBold size={22} />;
  }
}


