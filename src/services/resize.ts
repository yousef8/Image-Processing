import sharp from 'sharp';

function resize(
  fileName: string,
  width: number,
  height: number,
  resizedFileName: string
): Promise<sharp.OutputInfo> {
  return sharp(`./assets/full/${fileName}`)
    .resize({ width: width, height: height })
    .toFile(`./assets/thumb/${resizedFileName}`);
}

export default resize;
