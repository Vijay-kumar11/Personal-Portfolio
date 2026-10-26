# Personal Portfolio

A responsive personal portfolio website built with React and Vite to showcase my projects, skills, and contact information.

## Overview

This portfolio serves as a personal landing page for presenting technical work, background, and contact details. It is designed to help recruiters and hiring managers quickly understand my skillset, project experience, and professional interests.

## Purpose

The project highlights my work as a full-stack developer and frontend developer by showcasing:
- my background and interests
- the technologies I work with
- project examples
- contact details for potential opportunities

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- EmailJS

## Implemented Sections

The application includes the following sections, based on the actual source files:

- Home section with profile summary and call-to-action buttons
- About section with education and focus information
- Skills section
- Projects section
- Contact section with a working email form using EmailJS
- Footer
- Navigation bar

## Project Structure

```text
Personal-Portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── public assets (such as Vijay.png if present in the local clone)
```

## Features

- Responsive portfolio layout
- About, skills, projects, and contact sections
- Project showcase cards
- Email form integration through EmailJS
- GitHub and LinkedIn links
- Resume download button in the home section

## Prerequisites

- Node.js
- npm

## Installation

```bash
git clone https://github.com/Vijay-kumar11/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

## Run Locally

```bash
npm run dev
```

This starts the Vite development server. Open the local URL shown in the terminal to view the portfolio.

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Skills Demonstrated

This project demonstrates:
- React component-based architecture
- Frontend UI design and layout building
- JavaScript-based interactivity
- Responsive web design
- Portfolio presentation for personal branding
- Form handling with EmailJS integration

## Notes

- The project currently uses EmailJS in the contact form; the actual service keys are stored in the client code and should not be recreated or exposed in documentation.
- No verified live deployment URL was found in the repository contents, so no live demo link is included here.

## Author

Vijay Kumar

GitHub: https://github.com/Vijay-kumar11
LinkedIn: https://linkedin.com/in/vijaykumar-k123

## Project Status

Completed as a personal portfolio project for showcasing technical projects and professional profile information.
