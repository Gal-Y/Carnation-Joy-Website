# Project Learnings: Carnation Joy Website

This document summarizes the lessons and knowledge gained during the development of the Carnation Joy website.

## Table of Contents

1. [General Learnings](#general-learnings)
2. [HTML and CSS](#html-and-css)
3. [JavaScript](#javascript)
4. [Challenges and Solutions](#challenges-and-solutions)
5. [Best Practices](#best-practices)
6. [Future Improvements](#future-improvements)

## General Learnings

- Setting up a project directory structure effectively helps keep files organized and manageable.
- Using a local server (`python -m http.server`, or VS Code's Live Server) is essential for proper testing, especially for components like footers loaded via JavaScript.

## HTML and CSS

### CSS Organization

- Learned the importance of splitting CSS files into smaller, logical sections (`header.css`, `footer.css`, etc.) to maintain modularity.
- Used `.btn` class for default button styles and added specific classes for variations to avoid redundancy.

### Footer Integration

- Integrated the footer using the `fetch` API to keep code reusable across multiple pages. This improves maintainability.

## JavaScript

### Dynamic Content Loading

- Used the `fetch` API to dynamically load footer content, which improved reusability across the website.

## Challenges and Solutions

### Image Overflow Issue

- Faced a horizontal overflow issue after modifying the header image. Resolved it by adjusting padding and removing elements that exceeded the container width.

### Carousel Layout Issue

- The carousel section wasn’t displaying correctly when sliding across. Fixed it by ensuring elements were sized consistently and added better margin and padding for readability.

## Best Practices

- Modularize CSS to keep each section manageable.
- Use semantic HTML tags (e.g., `<section>`, `<footer>`, `<header>`) for better structure and accessibility.
- Keep reusable components like headers and footers in separate files to make maintenance easier.

## Future Improvements

- **Enhance Responsiveness**: Some sections still need better responsiveness for small screen sizes.
- **Use SCSS**: Consider using a CSS pre-processor like SCSS to manage styles more efficiently.
- **Accessibility Enhancements**: Add ARIA labels and roles to improve accessibility.

## Final Thoughts

Documenting learnings helps reinforce knowledge and provides a reference for similar future projects.
