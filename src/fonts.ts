import * as vfsFonts from 'pdfmake/build/vfs_fonts';

export const Roboto = {
  normal: Buffer.from(vfsFonts.pdfMake.vfs['Roboto-Regular.ttf'], 'base64'),
  bold: Buffer.from(vfsFonts.pdfMake.vfs['Roboto-Medium.ttf'], 'base64'),
  italics: Buffer.from(vfsFonts.pdfMake.vfs['Roboto-Italic.ttf'], 'base64'),
  bolditalics: Buffer.from(
    vfsFonts.pdfMake.vfs['Roboto-MediumItalic.ttf'],
    'base64'
  ),
};
