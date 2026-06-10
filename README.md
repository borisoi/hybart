# hyb.art

Static site for Hybrid Arts. Built with Astro, hosted on Netlify, source on GitHub (borisoi/hybart).

## How this site is maintained

Claude does the file work and pushes changes to GitHub; Netlify republishes the live site automatically about a minute after each push. Boris requests changes in chat, reviews the result, and handles the web accounts (Netlify, Buttondown, GoDaddy).

To publish or change anything: tell Claude. To write a blog post: send Claude the text (or a draft); it becomes a markdown file in `src/content/blog/`.

## Structure

| What | Where |
|------|-------|
| Blog posts | `src/content/blog/` (one .md file per post; filename = URL) |
| Testimonials | `src/content/testimonials/` |
| Page text | `src/pages/` (one .astro file per page) |
| Design (colors, type, layout) | `src/styles/global.css` |
| Nav + footer + newsletter form | `src/layouts/Base.astro` |
| Images | `public/images/` (referenced as `/images/...`) |
| Old-URL redirects | `public/_redirects` |
| Netlify build settings | `netlify.toml` |

A blog post file looks like:

```markdown
---
title: "The post title"
date: 2026-07-01
cover: /images/blog/some-image.jpg
excerpt: "One line shown on the blog index page."
---

Post text in markdown.
```

## One-time setup (Boris, in the browser)

1. **Netlify**: log in at app.netlify.com (sign in with GitHub) → Add new site → Import an existing project → GitHub → pick `hybart`. Build settings are auto-detected; click Deploy. You get a preview address like `something.netlify.app`.
2. **Contact form**: Netlify → Site configuration → Forms → Enable form detection. Turn on email notifications under Forms → Notifications after the first deploy.
3. **Newsletter**: create a Buttondown account, tell Claude the username (it goes into the footer form), and import `buttondown-import.csv` (Buttondown → Subscribers → Import).
4. **Images**: run the downloader once while Squarespace is still live: in Terminal, `cd` into the `hybart-content` folder and run `bash fetch-images.sh`; send the resulting `images` folder to Claude (or drop it into the repo's `public/` if comfortable). Claude then swaps all squarespace-cdn addresses for local ones.
5. **Domain** (when the preview looks right): Netlify → Domain management → add `hyb.art` and `www.hyb.art`. At GoDaddy → hyb.art → DNS, set the records Netlify shows and delete the old Squarespace A records (198.185.159.x / 198.49.23.x). HTTPS is automatic. Verify hyb.art/blog/8 and hyb.art/organizations redirect properly.
6. **Last**: cancel Squarespace. The domain stays at GoDaddy untouched.

## Running locally (optional, not required)

With Node.js installed: `npm install` once, then `npm run dev` → http://localhost:4321. Netlify deploy previews make this unnecessary for routine changes.

## Before launch

- [ ] Buttondown username into `src/layouts/Base.astro` (replace `BUTTONDOWN_USERNAME`)
- [ ] Local images replacing squarespace-cdn URLs
- [ ] Review converted blog posts for Squarespace artifacts (some accordions became lists)
- [ ] Wordmark: keep text or swap in a logo
