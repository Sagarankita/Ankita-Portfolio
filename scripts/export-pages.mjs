import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
const html=readFileSync('dist/index.html','utf8');
const pages={achievements:['Achievements','Hackathon recognition, academic milestones, and open-source contributions by Ankita Sagar.'],projects:['Projects','Explore Ankita Sagar’s engineering projects, including Urban Health Intelligence System, Parichay, Exoplanet Detection, and GitSage.'],about:['About','Education, achievements, and experience of Ankita Sagar.'],'beyond-code':['Beyond code','Painting, drawing, decoration, Bharatanatyam, and singing.'],journal:['Journal','Personal reflections on creativity, dance, design, and engineering by Ankita Sagar.'],contact:['Contact','Get in touch with Ankita Sagar.']};
for(const [route,[title,description]] of Object.entries(pages)){
 mkdirSync(`dist/${route}`,{recursive:true});
 writeFileSync(`dist/${route}/index.html`,html.replace(/<title>.*?<\/title>/,`<title>${title} — Ankita Sagar</title>`).replace(/<meta name="description" content="[^"]*"\/>/,`<meta name="description" content="${description}"/>`));
}
writeFileSync('dist/404.html',html);
console.log('Exported six separate page entries and a 404 page.');
