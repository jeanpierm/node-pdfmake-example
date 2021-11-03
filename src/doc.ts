import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const docDefinition: TDocumentDefinitions = {
  content: [
    { text: 'Test', style: 'header' },
    {
      style: 'tableExample',
      table: {
        body: [
          ['1. Hola ', '3. De cómo generar'],
          ['2. Este es un ejemplo', '4. PDFs'],
        ],
      },
    },
    {
      text: 'La librería se llama pdfmake',
      style: 'subheader',
    },
    {
      text: 'Es la librería más popular para esta cuestión con JavaScript',
    },
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    tableExample: {
      margin: [0, 5, 0, 15],
    },
  },
};
