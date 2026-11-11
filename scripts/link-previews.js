// Writes a copy of dist/index.html for each shareable route with its own
// title, description and Open Graph tags. LinkedIn, Slack and other link
// previewers don't run JavaScript, so they only see what is in the HTML.
// Vercel serves these files before the SPA rewrite in vercel.json.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { allProjects } from '../src/data/projects.js';

const SITE = 'https://designbynonso.co.uk';
const DIST = 'dist';
const DEFAULT_IMAGE = '/og/home.jpg';
const DEFAULT_DESCRIPTION =
  'Product Designer in Newcastle, UK. Design systems, B2B SaaS and security UX, from research to handoff.';

const pages = [
  { path: '/', title: 'Chinonso Ezeigbo · Product Designer', description: DEFAULT_DESCRIPTION },
  { path: '/projects', title: 'Projects · Chinonso Ezeigbo', description: 'Selected case studies in SaaS interfaces, design systems, security UX and AI products, from research and audits to handoff.' },
  { path: '/about', title: 'About · Chinonso Ezeigbo', description: DEFAULT_DESCRIPTION },
  { path: '/contact', title: 'Contact · Chinonso Ezeigbo', description: DEFAULT_DESCRIPTION },
  ...allProjects.map((p) => ({
    path: `/projects/${p.id}`,
    title: `${p.title}${p.concept ? ' (concept)' : ''} · Chinonso Ezeigbo`,
    // LinkedIn warns when a description is under 100 characters.
    description:
      p.description.length < 100
        ? `${p.description} A case study by Chinonso Ezeigbo, Product Designer.`
        : p.description,
    image: `/og/${p.id}.jpg`,
    type: 'article',
  })),
];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function render(template, page) {
  const url = SITE + (page.path === '/' ? '/' : page.path);
  const image = SITE + (page.image || DEFAULT_IMAGE);
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${page.type || 'website'}" />`,
    `<meta property="og:site_name" content="Chinonso Ezeigbo" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="627" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ');

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(page.description)}">`)
    .replace('</head>', `    ${tags}\n  </head>`);
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
for (const page of pages) {
  const file = page.path === '/' ? join(DIST, 'index.html') : join(DIST, page.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(template, page));
}
console.log(`link-previews: wrote ${pages.length} pages`);
