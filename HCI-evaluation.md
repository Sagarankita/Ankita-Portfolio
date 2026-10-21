# Ankita Sagar — personal profile: HCI design and evaluation

## Aim
Design an interactive profile that presents academic, professional, creative, social, blogging, and project activities with clear navigation and accessible interactions.

## Design approach
Spencer Gabor’s portfolio (https://spencergabor.work/) informed the oversized name, expressive artwork, and project-first composition. A warm-paper and ink-blue palette with restrained rose and honey accents, consistent grid, legible body text, and structured academic information keep this version professional. All project illustrations are original code-based compositions, not project screenshots. Journal entries contain completed first-person reflections written on the profile owner’s behalf. Creative artwork and performance media remain future content.

## Shneiderman’s eight golden rules
The supplied Lect14.pdf, especially pages 10–22, is the primary course reference. Its assignment slide is treated as teaching material, not a separate instruction to analyze Excel.

| Rule | Implementation | Evaluation task |
| --- | --- | --- |
| Consistency | Repeated typography, project layouts, buttons, arrows, spacing, and navigation | Compare all four project interactions |
| Universal usability | Responsive layout, semantic landmarks, skip link, keyboard controls, visible focus, reduced-motion preference | Explore using only keyboard, at mobile size, and at 200% zoom |
| Informative feedback | Pressed filter state, live result count, active page indicator, copy-email success or recovery message | Filter projects and copy the email |
| Closure | Details open in a labeled dialog and have an explicit Close control | Open a project, read it, then close it |
| Error prevention | No pretend message-sending form; real email and verified résumé social URLs; claims grounded in supplied details | Read a journal entry and identify its author |
| Easy reversal | Return to All work; dismiss details using Close, Escape, or backdrop; focus returns to opening control | Filter and reset; open and dismiss a detail |
| User control | No autoplay or scroll takeover; visitor chooses navigation, project, and email action | Navigate directly to the preferred section |
| Low memory load | Visible page names, grouped skills, short summaries, details on demand | Find degree and project technology without memorizing a path |

## Additional HCI principles
- Recognition over recall: clear labels and persistent navigation support familiar actions.
- Progressive disclosure: project details and sample articles appear only when requested.
- Fitts’s law: controls have generous hit areas; repeated project cards are large interactive targets.
- Hick’s law: three project filters and a small set of navigation options keep decisions manageable.
- Norman’s affordances and mapping: conventional buttons, links, arrows, native dialogs, and explicit labels communicate action and outcome.
- Accessibility: semantic headings, descriptive links, labeled dialogs, focus styling, text feedback beyond color, responsive reflow, and reduced motion. These are design provisions, not a claim of certified WCAG conformance.

Primary references: https://www.cs.umd.edu/~ben/goldenrules.html and https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ .

## Usability study protocol
This is a proposed study; no participant data has been invented. Recruit five participants including a novice visitor and someone using keyboard navigation. Ask them to:
1. Find Ankita’s degree and institute.
2. Find the technologies used in GitSage.
3. Show only AI and research projects, then restore all projects.
4. Open and close a project using only the keyboard.
5. Find the résumé and a way to contact Ankita.
6. Open a journal entry and return to the list using the keyboard.

For each task record completion, elapsed seconds, errors, and participant comments. Use completion without assistance as the primary metric. Target at least 90% aggregate task completion, no keyboard-blocking issues, and no confusion between sample and real content. These are proposed success criteria, not measured outcomes. Follow with a 1–5 ease rating and a short interview. Prioritize findings by severity (blocker, major, minor, cosmetic), fix them, and retest.

## Scope and limitations
All résumé facts are user supplied and not independently verified. The résumé remains downloadable as supplied, including its contact details. No real creative-media files have been supplied. No message backend, analytics, or live blog publishing is configured. Real novice-user testing and screen-reader testing remain to be performed. Browser QA results are recorded in the README after execution.

## Multipage revision
Home is limited to an introduction and two project previews. Dedicated Projects, About, Beyond Code, Journal, and Contact pages reduce information density. Shared navigation marks the current page with `aria-current="page"`; breadcrumbs link back to Home. Native links support browser Back/Forward and direct URLs. Static page entries preserve direct refresh on ordinary static hosting.

Urban Health Intelligence System was added using its repository README. Singapore India Hackathon “Top 60” was added using user-supplied wording with the official PDF link; the PDF contents could not be verified because retrieval failed. No event year or association with a particular project is asserted.

Revised usability task: start on Home, find the full Projects page, filter Mobile & systems, inspect Urban Health Intelligence System, and find its source repository. Find the Top 60 recognition on About and locate the official result link. Record navigation errors and whether returning Home is clear.

## Achievements and photo-gallery revision

Recognition has its own clearly labelled navigation item and page, with two concise Home highlights and a link from About. This improves discoverability while keeping the landing page focused. All six supplied recognitions are visible on the dedicated page. Three user-supplied artwork photos replace placeholder imagery. Each has descriptive alternative text and a keyboard-operable enlarged view; Escape closes the dialog and returns focus to its gallery card. One credited dance reference photograph is clearly identified as illustrative of the dance form rather than a photograph of the profile owner.

Browser checks at desktop and 390px mobile confirmed the six recognition cards, three artwork controls, one dance image, no horizontal page overflow, mobile navigation, and image-dialog keyboard reversal. Participant testing remains outstanding.

## Editorial completion
The journal now contains two complete six-paragraph reflections in the profile owner’s voice, with excerpts, author credits, and reading-time labels. Placeholder badges and unfinished copy have been replaced. Content draws on supplied interests and projects without inventing personal events or evaluation results. The credited dance photograph remains identified as a reference image. Fictional numeric dashboard decorations were replaced with descriptive labels. Both article dialogs, paragraph spacing, and Escape dismissal were checked; the production build passed.

## Colourful Y2K revision

The Home page now follows the requested inspiration more directly: a centred name, a fan of tilted artwork and project images, and oversized creative roles. Inner pages use coloured poster headers, checkerboard trim, and vivid image-card frames. Barlow Condensed is used for display text and DM Sans for body copy. Core navigation remains in a consistent place and identifies the current page.

The four fan cards are real links with descriptive accessible names. Hover and keyboard focus bring a card forward. No autoplay, forced scrolling, or loading animation was added. Existing reduced-motion rules suppress motion transitions. Images and details remain accessible through dedicated pages. Desktop, 390px, and 320px Home layouts, mobile Beyond Code, fan-link project navigation, and Escape dismissal were checked. The final production build passed. Participant usability testing remains outstanding.

## Frontend critique and refinement

The visual review identified repeated artwork in the image fan, excessive detail in miniature project mockups, competing blue/purple/lime accents, and overly large flat achievement colour blocks. The revision keeps the approved fan and gallery structures, gives each fan card one distinct subject, unifies the heading accent, removes fluorescent green, and coordinates the project illustrations. Achievements now use note-paper styling with restrained decorative borders and tape details; these are CSS decorations and do not affect reading order. Handwritten text is confined to short secondary reflections while achievement names and descriptions stay in readable display/body fonts.

Desktop inspections covered Home, Projects, Achievements, and Beyond Code. Mobile checks confirmed no horizontal overflow on Home and Achievements, four fan links with one artwork photo, all six achievement notes, and navigation from the globe to the correct project dialog. Escape dismissal passed. Browser styling verified that the surname and creative headline use the same accent colour. Participant testing remains outstanding.

## Journal and colour hierarchy revision

Journal has been redesigned for reading: a notebook page, modest serif titles in sentence case, article previews, an author note and explicit Read buttons. Full articles remain in accessible dialogs with 32px desktop / 28px mobile titles and 16px desktop / 15px mobile reading text. Portfolio display typography remains on the other pages. Most large pastel header backgrounds were replaced by paper tones, reserving colour for actions, illustrations and small accents.

The approved achievement-note layout was preserved. Browser comparison confirmed identical card padding, border widths, corner radii and tape dimensions/rotation before and after the palette-only changes. Journal was checked at desktop, 390px and 320px; both full articles, no horizontal page overflow, Escape dismissal and focus restoration passed. The final production build passed. No participant results are claimed.
