import express from 'express';
import path from 'path';
import fileUpload from 'express-fileupload';
import { routes } from './routes/routes';

const app = express();

const PORT = 3333;

const dir = path.join(__dirname, '../tmp');

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: dir,
    safeFileNames: true,
    preserveExtension: true,
    createParentPath: true,
    debug: true,
  }),
);
app.use(routes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
