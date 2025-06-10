## Journal Entry – Push 2: Section Scaffolding and About Section

**Date:** June 9, 2025
**Commit Message:** Add About section with placeholder headshot and initial styling

### Description of Work:

- Created the full `index.html` scaffold with all main sections: About, Previous Work, Projects, and Contact.
- Wrote and styled the `About` section using Bootstrap utilities for spacing and alignment.
- Inserted a headshot placeholder image for now, planning to replace with real one once uploaded.
- Added section anchors and Bootstrap classes to ensure responsive layout.
- Linked `styles.css` and `script.js` from `index.html`.
- Laid out `Previous Work` and `Projects` sections with semantic structure and placeholder content.
- Ensured that styles are modular and clear with proper HTML5 structure and consistent naming.

### Challenges:

- Making the one-page layout visually pleasing across all screen sizes took testing with Bootstrap classes.
- Deciding on semantic sectioning between About/Experience/Projects took a few iterations for balance.
- Opted for a simple `.container` structure with Bootstrap grid to manage layout responsiveness.

### Outside Sources Used:

- [Bootstrap 5 Documentation - Grid System](https://getbootstrap.com/docs/5.0/layout/grid/)
- [MDN HTML Sectioning Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- Placeholder image hosted on [Unsplash](https://unsplash.com/)

### Next Steps:

- Flesh out Previous Work and Projects with full descriptions and links
- Begin styling each section independently using `styles.css`
- Start implementing interactivity in `script.js` (form validation, scroll animations, etc.)

**Deployed Site:** _[To be added once deployed]_
**GitHub Repo:** [https://github.com/AlohaJarren/cs563-final-project](https://github.com/AlohaJarren/cs563-final-project)

## Journal Entry – Push 3: Previous Work and Projects Sections

**Date:** June 9, 2025
**Commit Message:** Add Previous Work and Projects sections with content and responsive Bootstrap layout

### Description of Work:

- Fully implemented the "Previous Work" section with structured lists of my academic coursework and industry experience.
- Added the "Projects" section with three project cards. Each card includes a title, description, and GitHub link.
- Used Bootstrap’s grid system and `card` components for responsive layout.
- Ensured visual clarity and clean spacing between sections using `section-padding` and consistent Bootstrap classes.
- Updated `styles.css` to slightly style the cards and emphasize headers, while retaining a minimalist feel.
- Prepared `script.js` for future interaction (e.g., card animations, form validation in next push).

### Challenges:

- Condensing real-world work experience and coursework into scannable, readable formats was a balancing act.
- Ensured cards do not stack awkwardly on smaller screens using `col-lg-4` responsive layout.

### Outside Sources Used:

- [Bootstrap 5 Card Documentation](https://getbootstrap.com/docs/5.3/components/card/)
- [Font Awesome](https://fontawesome.com/) icons for link indicators

### Next Steps:

- Complete the Contact form with mock submission behavior and accessibility-friendly formatting.
- Begin enhancing JavaScript interactivity (form validation + smooth animation).
- Add final visual enhancements like hover effects and semantic footer.

**Deployed Site:** _[To be added once deployed]_
**GitHub Repo:** [https://github.com/AlohaJarren/cs563-final-project](https://github.com/AlohaJarren/cs563-final-project)

## Journal Entry – Push 4: Contact Form and Interactivity

**Date:** June 9, 2025
**Commit Message:** Add functional contact form with minimal aesthetic and mock submission behavior

### Description of Work:

- Implemented the "Contact" section with a clean, minimal form styled in line with Apple/On Running design philosophy.
- The form includes required fields: Name, Email, and Message, with Bootstrap layout for responsiveness.
- Added client-side validation using JavaScript for real-time feedback before mock submission.
- Introduced a modal confirmation dialog for form submission simulation (no backend).
- Ensured accessibility using appropriate labels, aria attributes, and contrast checks.
- Updated styles.css for additional form polish and button consistency.

### Challenges:

- Styling a minimalist form that still feels custom and polished took several iterations.
- Needed to test accessibility using WAVE and Lighthouse, iteratively improving label alignment and contrast.
- Integrated Bootstrap modals and event delegation properly within a single-page design.

### Outside Sources Used:

- [Bootstrap 5 Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Bootstrap Modal Component](https://getbootstrap.com/docs/5.3/components/modal/)
- [WAVE Accessibility Evaluation Tool](https://wave.webaim.org/)

### Next Steps:

- Add semantic metadata, project deployment, and footer enhancements.
- Finalize README.md with full instructions and project links.
- Begin polishing for mobile responsiveness and layout alignment.

**Deployed Site:** _[To be added once deployed]_
**GitHub Repo:** [https://github.com/AlohaJarren/cs563-final-project](https://github.com/AlohaJarren/cs563-final-project)

## Journal Entry – Push 5: Footer, Metadata, and Accessibility Improvements

**Date:** June 9, 2025
**Commit Message:** Add footer with semantic HTML, improve accessibility with metadata and ARIA, pass audit

### Description of Work:

- Created a semantic and visually minimal footer that includes site credit and a GitHub link icon.
- Updated `<head>` of `index.html` with metadata including `<meta name="description">`, `<meta name="author">`, and a favicon placeholder.
- Verified color contrast, form label accessibility, and focus outlines for form fields using WAVE and Lighthouse tools.
- Used ARIA roles where appropriate to aid screen reader navigation, such as `role="form"` and appropriate button labels.
- Ensured all sections and navigation links are reachable via keyboard tabbing and in a logical reading order.
- Styles were also lightly adjusted to maintain spacing consistency across devices and to improve screen reader semantics.

### Challenges:

- Ensuring color contrast compliance required subtle adjustments to the button hover shade and input border colors.
- Added role attributes and form validation states without disrupting styling or layout consistency.
- Navigating Lighthouse's specific recommendations sometimes contradicted Bootstrap’s default setup, so compromises were carefully made.

### Outside Sources Used:

- [MDN: HTML Metadata](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Bootstrap Accessibility Guidelines](https://getbootstrap.com/docs/5.3/getting-started/accessibility/)
- [Font Awesome GitHub Icon](https://fontawesome.com/icons/github)

### Next Steps:

- Push 6 will include full README.md with deployment and source documentation.
- Prepare for final code formatting pass, including HTML/CSS cleanup and ESLint for script.js.
- Record video walkthrough and submit final PDF journal with project URL.

**Deployed Site:** _[To be added once deployed]_
**GitHub Repo:** [https://github.com/AlohaJarren/cs563-final-project](https://github.com/AlohaJarren/cs563-final-project)
