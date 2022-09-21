import { Router } from 'express';
import { CSVService } from '../services/CSVService';
import { uploadCSV } from '../middlewares/uploadCSV';

const routes = Router();

const csvService = new CSVService();

routes.get('/', (req, res) => {
  return res.json('Hello world!');
});

routes.post('/csv/upload', uploadCSV, (req, res) => {
  return res.status(200).json('File created successfully');
});

routes.get('/csv/parse', (req, res) => {
  csvService.parse();
  return res
    .status(200)
    .json({ response: 'data can be seen in the application logger' });
});

export { routes };
