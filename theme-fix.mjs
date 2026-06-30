import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Backgrounds
    content = content.replace(/bg-\[\#0f172a\](\/\d+)?/g, 'bg-card');
    content = content.replace(/bg-\[\#090b14\](\/\d+)?/g, 'bg-card');
    content = content.replace(/\bbg-slate-900(\/\d+)?\b/g, 'bg-card');
    content = content.replace(/\bbg-slate-800(\/\d+)?\b/g, 'bg-card');
    content = content.replace(/\bbg-black(\/\d+)?\b/g, 'bg-card');
    
    // Borders
    content = content.replace(/\bborder-white\/(\d+)\b/g, 'border-border');
    
    // Gradients
    content = content.replace(/\bfrom-slate-800\b/g, 'from-slate-100');
    content = content.replace(/\bto-black\b/g, 'to-slate-200');

    // Specific text colors that were missed
    content = content.replace(/\btext-white\b/g, 'text-foreground');
    content = content.replace(/\btext-white\/(\d+)\b/g, 'text-foreground/$1');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
