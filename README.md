# Angelo Largo — Portfolio Website

Angelo's personal portfolio: a four-page site that shows his work and helps him land developer and development-support jobs, plus freelance projects.

**Live site:** _add your deployed link here (e.g. GitHub Pages, Netlify, Vercel)_

This README is your guide to the site: what each page does, how the brand works, and how to update things yourself. It's plain HTML, CSS and JavaScript, so there's nothing to install or build.

## Contents

- [The pages](#the-pages)
- [Brand kit](#brand-kit)
- [Project files](#project-files)
- [How to update things](#how-to-update-things)
- [Contact form](#contact-form)
- [Run it on your computer](#run-it-on-your-computer)
- [Put it online](#put-it-online)

## The pages

| Page | File | What it's for | What's on it |
| --- | --- | --- | --- |
| Home | `index.html` | First impression | Hero, intro statement, tools marquee, selected work, 60-second video, how you support clients, toolbox |
| Work | `work.html` | Proof of what you can do | Filterable case studies, working style, services |
| About | `about.html` | Who you are | Your story, what you're looking for, toolkit, timeline, video |
| Contact | `contact.html` | Getting the message | Contact form, email, GitHub, location |

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
| Cream | `#F3EEDF` | `--color-cream` | Page background, text on dark |
| Ink | `#1E2214` | `--color-ink` | Main text, borders, hard shadows |
| Paper | `#FBF8F0` | `--color-paper` | Cards, navigation, form fields |
| Sage | `#C8D19C` | `--color-sage` | Soft panels, badges |
| Forest | `#2F3A1C` | `--color-forest` | Footer, dark panels |
| Moss | `#3B4726` | `--color-moss` | Cards on dark panels |
| Pink | `#F2D7DD` | `--color-pink` | Accent cards and stickers |
| Lime | `#B6F24A` | `--color-lime` | The "available" status dot only |

### Fonts

All three are free on Google Fonts and load automatically.

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
└── assets/
    ├── favicon.svg            Logo mark, shown in the browser tab
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

**Swap an image:** replace the file in `assets/` and keep the same name. Project images are 1800 × 1125 pixels (16:10), so stick to that shape to avoid cropping.

**Add a tool or skill:** copy an existing sticker and change its label. `--bg` sets the colour and `--rot` sets the tilt:

```html
<span class="sticker" style="--bg:var(--color-sage);--rot:-2deg">TypeScript</span>
```

**Add a project:**

1. Add the image to `assets/`.
2. In `work.html`, copy a whole `<article class="case ...">` block and update it. Its `data-category` must be `web`, `brand` or `sys` so the filters can find it.
3. In `index.html`, add it to the Selected work grid and update the count in "Selected work (03)".
4. Add it to the timeline in `about.html` if it's a big one.

**Add a new filter:** add a button with a new `data-filter` value in `work.html`, and use that same value as `data-category` on the project.

## Contact form

The form sends through [Formspree](https://formspree.io), so messages go to the email on that Formspree account, not through this site. Messages show which topic the visitor picked, and hidden spam protection is included.

To use a different Formspree form, replace the `action` link on the `<form>` in `contact.html`. After any change, send yourself a real test message from the live site.

## Run it on your computer

Open `index.html` directly in a browser, or start a small local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Put it online

The simplest free option is GitHub Pages:

1. In this repo, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/ (root)`, then save.
4. Wait a few minutes, then copy the link to the top of this README.

Each time you push to `main`, the site updates.

## Contact

- Email: angelo.largo27@gmail.com
- GitHub: [@Anjigoan](https://github.com/Anjigoan)
