
export enum SectionAlignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export interface StoryChapter {
  id: string;
  act: number;
  title: string;
  subtitle: string;
  content: string;
  alignment: SectionAlignment;
  visualType: 'image' | 'quote' | 'ui' | 'process';
  visualUrl?: string;
}
