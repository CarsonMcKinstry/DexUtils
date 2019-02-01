export default interface ThemeInterface {
  red: string;
  green: string;
  orange: string;
  blue: string;
  pink: string;
  background: string;
  frame: string;
  tabInactive: string;
  editor: string;
  editorActiveLine: string;
  text: string;
  borderRadius: number;
  dropDownHover: string;
  shadows: string[];
}

export const theme: ThemeInterface = {
  green: '#23A356',
  red: '#F0504A',
  orange: '#F49403',
  blue: '#2373CD',
  pink: '#D64292',
  background: 'rgb(9, 20, 28)',
  tabInactive: 'rgb(15, 32, 45)',
  frame: 'rgb(23, 43, 58)',
  editor: '#111D28',
  editorActiveLine: '#172430',
  text: '#ffffff',
  borderRadius: 3,
  dropDownHover: 'rgb(18, 37, 53)',
  shadows: [
    '0',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
};

// #0C141A
// #111D28
// #162633
// #414B55
// #A0A4A9
// #B0B7BC
// #414B55
// #354E5B

// #1d5ca3
