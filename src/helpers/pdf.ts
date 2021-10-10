import PdfPrinter from 'pdfmake';
import { docDefinition } from '../doc';
import { Roboto } from '../fonts';

export const createPdf = async (): Promise<Buffer> => {
  const printer = new PdfPrinter({ Roboto });
  const pdfDoc = printer.createPdfKitDocument(docDefinition);

  return new Promise((resolve, reject) => {
    try {
      const chunks: Uint8Array[] = [];
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDoc.end();
    } catch (err) {
      reject(err);
    }
  });
};

export const errorPdfHtmlTemplate = (error: string): string => `
<h2>There was an error displaying the PDF document.</h2>
Error message: ${error}`;
