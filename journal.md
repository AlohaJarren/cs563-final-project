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
