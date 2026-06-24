import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const base = (site ?? new URL('https://hyb.art/')).origin;

  const statics = ['/', '/art', '/music', '/consulting', '/blog', '/about', '/faq', '/contact', '/what-is-hybrid-art'];
  const art = (await getCollection('art')).map((p) => `/art/${p.id}`);
  const music = (await getCollection('music')).map((p) => `/music/${p.id}`);
  const blog = (await getCollection('blog')).map((p) => `/blog/${p.id}`);
  const consulting = (await getCollection('testimonials')).map((t) => `/consulting/${t.id}`);

  const paths = [...statics, ...art, ...music, ...blog, ...consulting];
  const loc = (u) => (u === '/' ? `${base}/` : `${base}${u}`);

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((u) => `  <url><loc>${loc(u)}</loc></url>`).join('\n') +
    '\n</urlset>\n';

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
