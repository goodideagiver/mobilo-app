export const replacePolishChars = (text: string) => {
  const polishChars: {
    [key: string]: string
  } = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  }

  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => polishChars[char])
    .toUpperCase()
}
