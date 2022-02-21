import express from 'express';
import path from 'path';
import { promises as fsPromises } from 'fs';
import resize from '../../services/resize';
// import resize from '../../services/resize';

const resizeEndPoint = express.Router();

resizeEndPoint.get('/', (req, res) => {
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
        resize(fileName, imageWidth, imageHeight, resizedFileName)
          .then(() => {
            res.sendFile(path.resolve(`./assets/thumb/${resizedFileName}`));
          })
          .catch(() => {
            res.status(500);
            res.send("Image doesn't exist in database");
          });
      } else {
        res.sendFile(path.resolve(`./assets/thumb/${resizedFileName}`));
      }
    })
    .catch((err) => {
      res.status(500);
      res.send(`There was an ${err}`);
    });
});

export default resizeEndPoint;
