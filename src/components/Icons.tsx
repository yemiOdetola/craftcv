import {
  PiLinkedinLogoBold,
  PiChatCenteredTextDuotone,
  PiPhoneCallDuotone,
  PiGithubLogoDuotone,
  PiGlobeSimple,
  PiRecordBold,
  PiFileHtmlDuotone,
  PiAtomDuotone,
} from 'react-icons/pi';

export const getIconByType = (type: string) => {
  const lctype: any = type.toLowerCase();
  switch (true) {
    case lctype.includes('email'):
      return <PiChatCenteredTextDuotone size={16} />;

    case lctype.includes('phone'):
      return <PiPhoneCallDuotone size={16} />;

    case lctype.includes('linkedin'):
      return <PiLinkedinLogoBold size={16} />;

    case lctype.includes('website'):
      return <PiGlobeSimple size={16} />;

    case lctype.includes('git'):
      return <PiGithubLogoDuotone size={16} />;

    case lctype.includes('html'):
      return <PiFileHtmlDuotone size={16} />;

    case lctype.includes('react'):
      return <PiAtomDuotone size={16} />;
    default:
      return <PiRecordBold size={16} />;
  }
};
