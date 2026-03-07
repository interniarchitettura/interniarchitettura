import fs from 'fs';
import path from 'path';

export type ImageDimensions = { w: number; h: number };

export function getWebPDimensions(publicPath: string): ImageDimensions {
  const filePath = path.join(process.cwd(), 'public', publicPath);
  const buf = fs.readFileSync(filePath);

  const chunk = buf.toString('ascii', 12, 16);

  if (chunk === 'VP8 ') {
    return {
      w: buf.readUInt16LE(26) & 0x3fff,
      h: buf.readUInt16LE(28) & 0x3fff,
    };
  }

  if (chunk === 'VP8L') {
    const bits = buf.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }

  if (chunk === 'VP8X') {
    return {
      w: (buf[24] | (buf[25] << 8) | (buf[26] << 16)) + 1,
      h: (buf[27] | (buf[28] << 8) | (buf[29] << 16)) + 1,
    };
  }

  return { w: 1920, h: 1280 };
}

export function getImagesDimensions(paths: string[]): ImageDimensions[] {
  return paths.map(p => getWebPDimensions(p));
}
