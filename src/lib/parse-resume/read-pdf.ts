// import { TextItem, TextItems } from '../types';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export async function readPdf(pdfUrl: string): Promise<any[]> {
  const loadingTask = pdfjs.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;
  let textItems = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    await page.getOperatorList();
    const commonObjs = page.commonObjs;

    const pageTextItems = textContent.items.map((item: any) => {
      const {
        str: text,
        dir,
        transform,
        fontName: pdfFontName,
        ...otherProps
      } = item;

      const x = transform[4];
      const y = transform[5];

      const fontObj = commonObjs.get(pdfFontName);
      const fontName = fontObj.name;

      const newText = text.replace(/--/g, '-');

      const newItem = {
        ...otherProps,
        fontName,
        text: newText,
        x,
        y,
      };

      return newItem;
    });

    textItems.push(...pageTextItems);
  }
  return textItems;
}

// const readPdfObsolete = async (fileUrl: string): Promise<TextItems> => {
//   const pdffile = await pdfjs.getDocument(fileUrl).promise;
//   let textItems = [];

//   for (let i = 1; i <= pdffile.numPages; i++) {
//     const page = await pdffile.getPage(i);
//     const textContent = await page.getTextContent();

//     await page.getOperatorList();
//     const commonObjs = page.commonObjs;

//     const pageTextItems = textContent.items.map((item: any) => {
//       const {
//         str: text,
//         dir,
//         transform,
//         fontName: pdfFontName,
//         ...otherProps
//       } = item;

//       const x = transform[4];
//       const y = transform[5];

//       const fontObj = commonObjs.get(pdfFontName);
//       const fontName = fontObj.name;

//       const newText = text.replace(/--/g, '-');

//       const newItem = {
//         ...otherProps,
//         fontName,
//         text: newText,
//         x,
//         y,
//       };

//       return newItem;
//     });

//     textItems.push(...pageTextItems);
//   }

//   const isEmptySpace = (textItem: TextItem) =>
//     !textItem.hasEOL && textItem.text.trim() === '';

//   textItems = textItems.filter((textItem) => !isEmptySpace(textItem));

//   return textItems;
// };

export async function extractTextFromPDF(pdfUrl: string): Promise<string> {
  const loadingTask = pdfjs.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;

  let fullText = '';
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    fullText += pageText + '\n';
  }

  return fullText;
}
