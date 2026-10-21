# Ankita Sagar — React portfolio

A responsive portfolio built with React and Vite, with separate Home, Projects, About, Beyond Code, Journal, and Contact pages. Includes project filters, accessible native detail dialogs, a résumé download, email copy with feedback, a mobile navigation menu, creative-interest panels, and complete first-person journal articles.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Personalize

- Profile copy, projects, and journal articles: `src/main.jsx`.
- Colors, layout, and responsive styles: `src/style.css`.
- Replace the original résumé: `public/resume.pdf`.
- Artwork photos and the credited dance reference image are in `public/images/`.
- Add project-specific repository URLs when supplied. Urban Health Intelligence System links directly to its repository. Other projects link to the verified GitHub profile until their individual URLs are supplied.

No backend is required. Contact opens a visitor’s email app; it does not silently send messages. No analytics or stored visitor data.

## HCI and QA

See the accompanying HCI evaluation document for principles, study tasks, and honest limitations. A build and browser verification record is added after checks complete.

### Verification performed

- Production Vite build passed.
- Browser checked at 1280px desktop and 390px mobile; neither produced horizontal page overflow.
- AI filter returned two projects; project dialog rendered the correct details.
- Escape dismissed the native dialog and returned focus to its project button.
- Mobile menu opened, navigating to About closed it, and email copy displayed success feedback.
- No application errors observed in the browser console.

Real participant testing, a full screen-reader audit, and formal WCAG conformance testing remain outstanding.

## Multipage structure

Home contains the introduction and two project previews only. Detailed content lives at `/projects/`, `/about/`, `/beyond-code/`, `/journal/`, and `/contact/`. The build exports an `index.html` for each route so static hosting supports direct visits and refreshes without a rewrite rule. Upload the contents of `dist/` to a static host.

## Newly supplied content

Urban Health Intelligence System uses the public repository description and README: https://github.com/Sagarankita/Urban-Health-Intelligence-System . The portfolio describes project functionality; it makes no claim of production adoption or clinical validation. Its card illustration is conceptual, not a screenshot.

Singapore India Hackathon recognition is worded “Top 60,” as supplied by Ankita. The official result PDF could not be retrieved in this environment, so no year, rank within 60, selection stage, or connection to a particular project has been inferred. The About page links to the supplied official result URL for readers to consult.

### Update verification

Production multipage build passed. Direct navigation and refresh of the built About page, the Top 60 text and source URL, mobile navigation to Beyond Code at 390px, the new mobile-project filter, repository link, dialog Escape closure, and restoration of all four projects were checked in-browser.

## Achievements and creative gallery update

- Dedicated `/achievements/` page is linked from the main navigation, Home, and About. It contains the six résumé/user-supplied recognitions. Home shows only two highlights.
- Beyond Code contains three original artwork photos supplied by Ankita. HEIC files were decoded, resized, and exported as browser-compatible JPEGs; the artwork itself was not altered. Gallery buttons open accessible enlarged-image dialogs.
- A single reference dance photograph is included and is explicitly not presented as Ankita. Photo: Karthik Rangappa, “Barathanatyam dancer,” via Wikimedia Commons, CC BY 2.0. Source: https://commons.wikimedia.org/wiki/File:Barathanatyam_dancer.jpg . License: https://creativecommons.org/licenses/by/2.0/ . Original image preserved; browser scales its display.
- Desktop and 390px mobile checks confirmed six achievement cards, three artwork controls, one dance image, no horizontal page overflow, a working mobile menu, and artwork-dialog Escape closure with focus restoration.

## Finished profile copy

The two journal entries are now complete first-person reflections written on Ankita’s behalf, based on her supplied interests and projects. Sample/draft badges and unfinished visitor-facing copy have been replaced. No publication history, interviews, project adoption figures, or personal experiences were invented. Dance-image attribution remains visible. Project illustration metrics were replaced with descriptive labels rather than fictional results. Both article dialogs and the production build were checked.

## Visual identity

Warm paper with ink-blue text and controls, restrained dusty rose and honey accents, and subtle pale-blue surfaces. Shared accent colours tie the Home name, creative headline, navigation and illustrations together. Barlow Condensed remains the poster/display font for the portfolio pages; DM Sans handles controls and descriptions. The Journal uses smaller Georgia serif titles and body reading text with Caveat confined to short handwritten details.

Journal now has a paper-sheet layout, margin rule, author sidebar, entry previews and explicit Read buttons. Both existing full articles remain available in a quieter reading dialog. The Achievements page preserves its approved tape, inset borders, paper-note shape and layout; only the palette changed. Before/after browser checks confirmed identical padding, border width, corner radius, tape width/height and tape rotation.

Verification: production build, desktop Journal/reading view, 390px and 320px Journal layouts without horizontal overflow, both full article dialogs, Escape dismissal with focus return, and palette review across Home, Achievements and Beyond Code.
