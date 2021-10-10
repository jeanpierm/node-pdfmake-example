import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const docDefinition: TDocumentDefinitions = {
  content: [
    { text: 'Test', style: 'header' },
    {
      style: 'tableExample',
      table: {
        body: [
          ['Hola ', 'Ya vi como generar'],
          ['Emily', 'PDFs'],
        ],
      },
    },
    {
      text: 'Se usa una librería llamada pdfmake',
      style: 'subheader',
    },
    {
      text: 'Según vi es la lib. más popular para este tema con JavaScript, te paso el código fuente de este ejemplo',
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
