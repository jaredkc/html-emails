import { resolve } from 'path';
import path from 'path';
import glob from 'glob';

import handlebars from 'vite-plugin-handlebars';

export default {
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, 'src', '*.html')),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
};