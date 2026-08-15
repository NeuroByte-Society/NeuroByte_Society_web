# NeuroByte Society Website

Official website for **NeuroByte Society**, a student community where neuroscience meets AI, curiosity meets code, and ideas turn into projects.

## Overview

This site introduces the club, highlights its mission, and links to the main community channels:

- LinkedIn: https://www.linkedin.com/company/neurobyte-society
- GitHub: https://github.com/NeuroByte-Society
- Instagram: https://www.instagram.com/neurobyte_society/
- YouTube: https://www.youtube.com/@neurobyte-society

The site includes a custom logo in the browser tab, a branded dark/violet visual style, and a responsive landing page built with the Next.js App Router.

## Features

- Hero section with club positioning and call-to-action buttons
- Mission, programs, and join sections
- Social links for LinkedIn, GitHub, Instagram, and YouTube
- Custom favicon using the club logo
- Responsive layout for desktop and mobile

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Local Development

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
yarn dev      # Start the local development server
yarn lint     # Run ESLint
yarn build    # Create a production build
yarn start    # Start the production server
```

## Project Structure

```text
src/
	app/
		layout.tsx     # Root layout, metadata, favicon, shared shell
		page.tsx       # Home page
		about/page.tsx # About page
		globals.css    # Global styles and theme
	components/
		Navbar.tsx     # Top navigation with logo
		Footer.tsx     # Site footer with social links
public/
	logo.jpg        # Club logo used in the site and browser tab
```

## Deployment

This project is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

If you want a custom domain later, add it from the Vercel project settings.

## Editing Content

- Update the main homepage in `src/app/page.tsx`
- Update the branding and metadata in `src/app/layout.tsx`
- Update the top navigation in `src/components/Navbar.tsx`
- Update the footer links in `src/components/Footer.tsx`

## Notes

- The logo is stored in `public/logo.jpg`.
- Browser tab branding is configured through Next.js metadata in the root layout.
