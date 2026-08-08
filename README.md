Fixes to my “Styled_Responsive_Portfolio” page.

Accessibility fixes

- I added a descriptive `alt` attribute to the profile image so screen-reader users can understand its content.
- I removed the unmatched closing paragraph tag from the About page to correct the HTML structure.
- I added a “Skip to main content” link on all three pages so keyboard users can bypass repeated navigation.
- I added `aria-current="page"` to the active navigation link so assistive technology identifies the current page.
- I changed the site title from a repeated `h1` to a styled paragraph and gave each page one clear main `h1`.
- I changed the bright blue color from `#60A5FA` to `#245B9E`.
- I added proper labels, autocomplete attributes, fieldsets, legends, instructions, and required-field indicators to the contact form.
- I added accessible form errors using `aria-invalid`, `aria-describedby`, live error messages, and focus movement to the first invalid field.
- I kept error identification from relying on color alone by combining red borders, written messages, and focus behavior.
- I added semantic section labels with heading relationships to make page regions easier to navigate.
- I added a descriptive link to the Projects page instead of leaving “Visit my Projects page” as plain text.

Color contrast

The main text color `#1F2937` on white has a contrast ratio of approximately 14.7:1, white on navy `#173B70` is approximately 11.1:1, white on the revised blue `#245B9E` is approximately 6.7:1, and navy on gold `#FFD166` is approximately 7.7:1; these combinations pass WCAG AA for normal text.

Gestalt principles

- Proximity: I used consistent spacing and grid gaps to visually group each heading with its related project, skill, contact information, or form fields.
- Similarity: I gave all project, skill, and contact cards matching backgrounds, borders, padding, and rounded corners so users recognize them as related content.
- Common region: I placed related form fields inside bordered fieldsets to show that contact details and message details belong to separate groups.

Accessible contact form

The About & Contact page includes labeled name, email, subject, and message fields, uses fieldsets and legends for grouping, and presents accessible text-based validation errors when required information is missing or invalid.

Testing

After uploading these files, run WAVE separately on `index.html`, `projects.html`, and `about.html`, and confirm that the Errors and Contrast Errors categories both show zero.

