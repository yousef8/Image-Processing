import express from 'express';
import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

const resize = express.Router();

resize.get('/', (req, res) => {
  const imageWidth: number = parseInt(req.query.width as string);
  const imageHeight: number = parseInt(req.query.height as string);
  const fileName: string = req.query.filename as string;
  const imageNameWithOutExt = fileName.slice(0, fileName.lastIndexOf('.'));

  const extension: string = (fileName as string).slice(
    (fileName as string).lastIndexOf('.')
  );

  const resizedFileName = `${imageNameWithOutExt}-resized(${imageWidth}×${imageHeight})${extension}`;

  let alreadyExist = false;

  fsPromises
    .readdir('./assets/thumb')
    .then((files: string[]) => {
      for (const file of files) {
        if (file === resizedFileName) {
          alreadyExist = true;
        }
      }
      return alreadyExist;
    })
    .then((alreadyExist) => {
      if (!alreadyExist) {
        console.log(`image ${typeof imageWidth} * ${typeof imageHeight}`);
        sharp(`./assets/full/${fileName}`)
          .resize({ width: imageWidth, height: imageHeight })
          .toFile(`./assets/thumb/${resizedFileName}`)
          .then(() => {
            res.sendFile(path.resolve(`./assets/thumb/${resizedFileName}`));
          })
          .catch((err) => {
            res.send(`There was an ${err}`);
          });
      } else {
        res.sendFile(path.resolve(`./assets/thumb/${resizedFileName}`));
      }
    })
    .catch((err) => {
      res.send(`There was an ${err}`);
    });
});

export default resize;
