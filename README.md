# Angelo Largo — Portfolio Website

Angelo's personal portfolio: a four-page site that shows his work and helps him land developer and development-support jobs, plus freelance projects.

**Live site:** [angelo-largo-portfolio.vercel.app](https://angelo-largo-portfolio.vercel.app)

This README is your guide to the site: what each page does, how the brand works, and how to update things yourself. It's plain HTML, CSS and JavaScript, so there's no build step.

## Contents

- [The pages](#the-pages)
- [Brand kit](#brand-kit)
- [Project files](#project-files)
- [How to update things](#how-to-update-things)
- [Contact form](#contact-form)
- [SEO and AI](#seo-and-ai)
- [Run it on your computer](#run-it-on-your-computer)
- [Publishing](#publishing)

## The pages

| Page | Address | File | What it's for | What's on it |
| --- | --- | --- | --- | --- |
| Home | `/` | `index.html` | First impression | Hero, intro statement, tools marquee, selected work, 60-second video, how you support clients, toolbox |
| Work | `/work` | `work.html` | Proof of what you can do | Filterable case studies, working style, services |
| About | `/about` | `about.html` | Who you are | Your story, what you're looking for, toolkit, timeline, video |
| Contact | `/contact` | `contact.html` | Getting the message | Contact form, email, GitHub, location |

Every page shares the same navigation and footer.

**Projects featured:** Flirt-It, Personal brand identity, and MDO-XCCA Collection System. MDO-XCCA is under an NDA, so keep its screenshot redacted and don't add a live link or code.

## Brand kit

The brand is friendly, creative and trustworthy, not corporate. Its idea is **"peak & spark"**, with the tagline **Think. Build. Repeat.**

### Logo

The mark is an A and an L drawn in one continuous stroke, with a tangerine spark where the A's crossbar would be.

- **The line:** the A's right leg runs on into a baseline and becomes the L.
- **The spark:** it stands for the idea, and it matches the full stop in the wordmark.
- **The shape:** it reads as a peak, a code caret or a cursor. Rounded joins keep it friendly.

The wordmark is written **angelo** *largo*. in lowercase: "angelo" in bold Bricolage Grotesque, "largo" in Instrument Serif Italic, and a tangerine full stop.

Copy this SVG whenever you need the logo. It's also saved as `assets/favicon.svg`, with slightly thicker lines for small sizes.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="28" fill="#1E2214"/>
  <path d="M20 74 L42 26 L64 74 H80" fill="none" stroke="#F3EEDF" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="42" cy="58" r="7.5" fill="#FF6A2B"/>
</svg>
```

Change the colours to suit the background:

| Background | Line | Spark |
| --- | --- | --- |
| Ink tile (default) | Cream | Tangerine |
| Cream tile | Ink | Tangerine |
| Olive | Cream | Tangerine |
| Tangerine | Ink | Cream |
| Ink, no tile | Sage | Tangerine |

At very small sizes, such as 16px, thicken the line and drop the spark so the mark stays clear.

### Colours

These are defined at the top of `styles.css`, so change them there and the whole site updates.

| Name | Hex | CSS variable | Used for |
| --- | --- | --- | --- |
| Olive | `#4E5B31` | `--color-olive` | Home hero, accent text |
| Tangerine | `#FF6A2B` | `--color-orange` | Main buttons, highlights |
| Deep tangerine | `#B93C0A` | `--color-orange-text` | Orange text on cream, so it stays readable |
| Soft tangerine | `#FFB38A` | `--color-orange-soft` | Orange text on olive |
| Cream | `#F3EEDF` | `--color-cream` | Page background, text on dark |
| Ink | `#1E2214` | `--color-ink` | Main text, borders, hard shadows |
| Paper | `#FBF8F0` | `--color-paper` | Cards, navigation, form fields |
| Sage | `#C8D19C` | `--color-sage` | Soft panels, badges |
| Forest | `#2F3A1C` | `--color-forest` | Footer, dark panels |
| Moss | `#3B4726` | `--color-moss` | Cards on dark panels |
| Pink | `#F2D7DD` | `--color-pink` | Accent cards and stickers |
| Lime | `#B6F24A` | `--color-lime` | The "available" status dot only |

### Fonts

All three are free Google Fonts under the SIL Open Font License. They live in `assets/fonts/`, so the site loads them itself.

| Font | Used for |
| --- | --- |
| **Bricolage Grotesque** | Headings, body text, buttons |
| **Instrument Serif Italic** | One or two emphasised words in a heading |
| **Caveat** | Handwritten side notes, written in lowercase |

### Look and voice

- **Shapes:** pill buttons, big rounded corners, 2px ink borders and solid offset shadows instead of soft ones.
- **Personality:** slightly tilted stickers and cards, handwritten notes, spinning sparkles and hover animations.
- **Writing:** first person, plain and warm. Say what you did and what happened, and avoid jargon.

## Project files

```
.
├── index.html       Home
├── work.html        Work
├── about.html       About
├── contact.html     Contact
├── styles.css       All styling, with brand colours and fonts at the top
├── script.js        Mobile menu, project filters, contact form, cursor effect
├── vercel.json      Removes .html from page addresses
├── robots.txt       Tells crawlers they're welcome and where the sitemap is
├── sitemap.xml      List of pages for search engines
├── llms.txt         Plain-text summary of the site for AI tools
└── assets/
    ├── fonts/                 Site fonts
    ├── *.webp                 Compressed images that the pages load
    ├── *.avif                 Extra-small hero and poster images for modern browsers
    ├── intro.vtt              Captions for the video
    ├── favicon.svg            Logo mark, shown in the browser tab
    ├── apple-touch-icon.png   Icon for iPhone home screens
    ├── angelo-hero.png        Cut-out portrait for the Home hero
    ├── angelo-peace.jpg       Small photo inside the Home statement
    ├── angelo-poster.jpg      Poster on the About page
    ├── project-flirt-it.jpg   Flirt-It image
    ├── project-brand.jpg      Brand identity image, also the link preview image
    ├── project-mdo-xcca.jpg   Redacted MDO-XCCA image
    ├── intro.mp4              60-second video
    ├── intro-poster.jpg       Video thumbnail
    └── hero-workspace.JPG     Old hero photo, no longer used and safe to delete
```

## How to update things

**Change text:** open the page's HTML file, search for the words, and edit them.

**Change a menu item, email address or footer text:** the navigation and footer are copied into every page, so update all four HTML files. Your editor's "find in files" makes this quick. Check the footer's © year each January too.

**Link between pages:** use clean addresses like `/work`, never `work.html`.

**Swap an image:** pages load the `.webp` files in `assets/`, in more than one size, and the large `.jpg` and `.png` files are for social previews and schema. Make a new image in the same shape (project images are 16:10), convert it to WebP at the same sizes (plus AVIF for the hero and About poster), for example with [Squoosh](https://squoosh.app), and keep the same file names. Stay at quality 85 or higher so images remain sharp. Keep images small, because they have the biggest effect on PageSpeed.

**Change the video:** update `intro.vtt` so its captions match, plus the `transcript` in the schema on the Home and About pages.

**Add a tool or skill:** copy an existing sticker and change its label. `--bg` sets the colour and `--rot` sets the tilt:

```html
<span class="sticker" style="--bg:var(--color-sage);--rot:-2deg">TypeScript</span>
```

**Add a project:**

1. Add the image to `assets/`.
2. In `work.html`, copy a whole `<article class="case ...">` block and update it. Its `data-category` must be `web`, `brand` or `sys` so the filters can find it.
3. In `index.html`, add it to the Selected work grid and update the count in "Selected work (03)".
4. Add it to the timeline in `about.html` if it's a big one.
5. Add it to the schema in `work.html` and to `llms.txt`. See [SEO and AI](#seo-and-ai).

**Add a new filter:** add a button with a new `data-filter` value in `work.html`, and use that same value as `data-category` on the project.

## Contact form

The form sends through [Formspree](https://formspree.io), so messages go to the email on that Formspree account, not through this site. Messages show which topic the visitor picked, and hidden spam protection is included.

To use a different Formspree form, replace the `action` link on the `<form>` in `contact.html`. After any change, send yourself a real test message from the live site.

## SEO and AI

Every page already has a unique title (50–60 characters), a description (120–160 characters), one H1, a canonical link, social sharing tags and schema.

- **Schema** is the `<script type="application/ld+json">` block near the top of each page. It tells search engines and AI tools who you are, what you've built and what you offer. Only state things that are true and also on the page.
- **`llms.txt`** is a plain-text summary of you and your work for AI tools.
- **`sitemap.xml`** lists every page, and `robots.txt` points crawlers to it.

**When you add or change content:** update the page, then the matching schema and `llms.txt`. If you add a page, give it its own title, description, canonical link and schema, and add it to `sitemap.xml`.

**When you update a page:** change its `lastmod` date in `sitemap.xml` and its `dateModified` in the schema.

**If the site moves to a custom domain:** replace `angelo-largo-portfolio.vercel.app` everywhere. It appears in all four HTML files, `sitemap.xml`, `robots.txt` and `llms.txt`.

**Check your work:**

- [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org) for schema
- [Google Search Console](https://search.google.com/search-console) to submit `sitemap.xml` and see how Google indexes the site

## Run it on your computer

Clean page addresses need a small local server, so double-clicking `index.html` won't work. You'll need [Node.js](https://nodejs.org). From this folder, run:

```bash
npx serve
```

Then open the address it prints.

## Publishing

The site is hosted on [Vercel](https://vercel.com). Each time you push to `main`, Vercel publishes the update. Old addresses like `/work.html` redirect to `/work` automatically.

## Contact

- Email: angelo.largo27@gmail.com
- GitHub: [@Anjigoan](https://github.com/Anjigoan)
