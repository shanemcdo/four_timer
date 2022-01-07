const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');
const STATIC_DIR = path.join(__dirname,  'static');
const file_dir = 'html';
const files = [
    'index.html',
];
const target_dir = 'target';

nunjucks.configure(file_dir, {
    autoescape: true,
});
for(file of files){
    fs.writeFile(
        path.join(target_dir, file), 
        nunjucks.render(file),
        (err) => {
            if(err) console.error('Could not write file: %s', err);
        }
    );
}
