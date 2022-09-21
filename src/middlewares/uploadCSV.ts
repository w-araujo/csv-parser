import { Request, Response, NextFunction } from 'express';

function uploadCSV(req: Request, res: Response, next: NextFunction) {
  // @ts-ignore
  const file = req.files.csvFile;
  try {
    if (!file) {
      return 'csv file not found';
    }
    next();
    console.log(file);
    return { file };
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export { uploadCSV };
