/// <reference lib="dom" />
import { BufferOptions, TableLayout, TDocumentDefinitions, TFontDictionary } from '../interfaces';

export let vfs: TFontDictionary;
export let fonts: TFontDictionary;
export let tableLayouts: TableLayout;

export function createPdf(
    documentDefinitions: TDocumentDefinitions,
    tableLayouts?: TableLayout,
    fonts?: TFontDictionary,
    vfs?: TFontDictionary,
): TCreatedPdf;

export interface TCreatedPdf {
    download(cb?: () => void, options?: BufferOptions): void;
    download(defaultFileName: string, cb?: () => void, options?: BufferOptions): void;

    getBlob(cb: (result: Blob) => void, options?: BufferOptions): void;
    getBase64(cb: (result: string) => void, options?: BufferOptions): void;
    getBuffer(cb: (result: Buffer) => void, options?: BufferOptions): void;
    getDataUrl(cb: (result: string) => void, options?: BufferOptions): void;
    getStream(options?: BufferOptions): PDFKit.PDFDocument; // minimal version 0.1.41
    open(options?: BufferOptions, win?: Window | null): void;
    print(options?: BufferOptions, win?: Window | null): void;
}

export as namespace pdfMake;
