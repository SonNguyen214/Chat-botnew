/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChatbotConfig extends CSSStyle {
  token: string;
  u_id: string;
  idApp?: string | number; // optional app id
  greeting?: string;
  theme?: "light" | "dark";
  fabIcon?: string; // icon bubble
  botAvatar?: string; // avatar bot
  botName?: string;
  primaryColor?: string;
  headerStyle?: Partial<CSSStyle>; // CSS cho header
  chatWindowStyle?: Partial<CSSStyle>; // CSS cho message body
  footerStyle?: {
    inputStyle?: Partial<CSSStyle>;
    iconStyle?: Partial<CSSStyle>;
    width?: string | number;
    height?: string | number;
    fontSize?: number;
    borderRadius?: number;
    background?: string;
    color?: string;
    padding?: string | number;
    [key: string]: any;
  }; // CSS cho input + button
  bubbleStyle?: Partial<CSSStyle>; // CSS cho FAB bubble
  autoShowDelay?: number;
  fontFamily?: string;
  botDescription?: string;
  openPopup?: any;
  closePopup?: any;
}

interface CSSStyle {
  width?: string | number;
  height?: string | number;
  fontSize?: number;
  borderRadius?: number;
  background?: string;
  color?: string;
  padding?: string | number;
  [key: string]: any;
}

export interface Message {
  from: "user" | "bot" | "botLoading" | "date";
  text: string;
  timeStamp: string;
}
