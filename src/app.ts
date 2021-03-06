import express, { Request, Response } from 'express';
import { createPdf, errorPdfHtmlTemplate } from './helpers/pdf';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async function (req: Request, res: Response) {
  try {
    const binaryResult = await createPdf();
    // const html = '<h1>Hola</h1>';
    res.setHeader('Content-disposition', 'attachment; filename=report.pdf');
    res.type('pdf').send(binaryResult);
  } catch (err: any) {
    console.log(err);
    res.send(errorPdfHtmlTemplate(err.message));
  }
  // pdfDoc.pipe(fs.createWriteStream('pdfs/tables.pdf'));
  // pdfDoc.end();
});

export default app;
