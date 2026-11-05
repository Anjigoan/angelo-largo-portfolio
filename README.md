# Angelo Largo — Portfolio Website

A personal portfolio site built to support my search for an OJT/internship placement in frontend web development.

**Live site:** _add your deployed link here (e.g. GitHub Pages, Netlify, Vercel)_

## About

This site introduces me as a frontend web developer in Cagayan de Oro, shows my work, and gives visitors a simple way to get in touch. I'm open to developer and development-support jobs, and freelance projects are welcome too.

## Features

- Four pages: Home, Work, About and Contact
- Responsive layout that adapts from desktop down to mobile, including a full-screen style mobile menu
- Filterable case studies on the Work page
- Contact form that sends through Formspree, with a visible error if a message fails
- 60-second video intro
- Scroll reveals and playful motion that switch off for visitors who prefer reduced motion
- Built with accessibility in mind: semantic HTML and ARIA attributes on interactive components

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid/Flexbox, no framework)
- Vanilla JavaScript (no dependencies)
- Formspree for contact form delivery

## Project Structure

```
.
├── index.html
├── work.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── assets/
└── README.md
```

The navigation and footer are repeated in each HTML page, so change them in all four.

## Running Locally

No build step or dependencies required. Clone the repo and open `index.html` directly in a browser, or serve it locally:

```bash
# with Python
python3 -m http.server 8000

# then visit
http://localhost:8000
```

## Contact

- Email: angelo.largo27@gmail.com
- GitHub: [@Anjigoan](https://github.com/Anjigoan)

## Status

Actively updated as I complete more projects.
