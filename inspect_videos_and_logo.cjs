const fs = require('fs');

const html4 = fs.readFileSync('page_blank-4.html', 'utf8');

// Find all video occurrences
const videoRegex = /(?:https?:\/\/video\.wixstatic\.com\/video\/[^\s"'>]+|103928_[a-z0-9]+)/gi;
const matches = Array.from(html4.matchAll(videoRegex)).map(m => m[0]);
console.log('Video regex matches in blank-4:', Array.from(new Set(matches)));

// Find all instances of "video" in html4
const videoBlocks = Array.from(html4.matchAll(/<wix-video\b([^>]*?)>([\s\S]*?)<\/wix-video>/gi)).map(m => m[0]);
console.log('wix-video tags count:', videoBlocks.length);
if (videoBlocks.length > 0) {
  console.log('wix-video sample:', videoBlocks[0].substring(0, 500));
}

// Find logo
for (const p of ['home', 'about', 'blank-1', 'get-involved']) {
  const h = fs.readFileSync('page_' + p + '.html', 'utf8');
  const imgTags = Array.from(h.matchAll(/<img\b([^>]*?)>/gi)).map(m => m[1]);
  imgTags.forEach(img => {
    if (img.toLowerCase().includes('logo') || img.toLowerCase().includes('alpha') || img.toLowerCase().includes('site')) {
      console.log('Found potential logo in', p, img);
    }
  });
}
