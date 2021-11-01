export interface TitleProps {
  text: string;
  textSize: 'l' | 'm' | 's';
  textStyle: 'normal' | 'italic';
  link?: string;
  click?: Function;
}

export interface ParagraphProps {
  text: string[];
  color: string;
}

export interface ImageProps {
  images: string[];
  width: string;
  height: string;
}

export interface Link {
  text: string;
  link: string;
}

export interface LinkProps {
  links: Link[];
}

export interface Iframe {
  link: string;
  width: string;
  height: string;
}

export interface IframeProps {
  iframes: Iframe[];
}

export interface Audio {
  audio: string;
}

export interface AudioProps {
  audios: Audio[];
}
