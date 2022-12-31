import { createWriteStream, readdirSync } from 'fs';
import juice from 'juice';

const files = readdirSync('./dist');

files.map((file) => {
  if (file.endsWith('.html')) inlineCss(`dist/${file}`);
});

function inlineCss(file) {
  juice.juiceFile(file, {}, function (err, html) {
    if (err) {
      console.log(err);
      return;
    };
    var writeStream = createWriteStream(file);
    writeStream.write(html);
  });

  console.log(`CSS inlined for ${file}`);
}
