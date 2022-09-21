import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname, '../../csv-data.csv');

const results: object[] = [];

class CSVService {
  parse() {
    fs.createReadStream(dir)
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => {
        console.log(results);
      });
    return results;
  }
}

export { CSVService };
