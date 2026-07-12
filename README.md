# Auraederm Skin Solutions

Auraederm is a polished, single-page dermatology clinic website built with React, Vite, TypeScript, and Tailwind CSS. It presents the clinic’s services, doctor profile, patient outcomes, community initiatives, and contact details in a responsive landing page designed for both desktop and mobile visitors.

## What’s In The App

- Hero carousel with dermatology-focused treatment highlights.
- Doctor profile section with education, experience, expertise, and languages.
- Treatments section with category filtering, service cards, and an FAQ modal.
- Before/after case showcase with interactive before/after toggles.
- Community welfare section describing outreach and public-health work.
- Appointment and enquiry form with inline validation and booking summary.
- Floating call button and sticky navigation for quick clinic access on mobile.

## Project Structure

- `src/App.tsx` wires the full one-page experience together.
- `src/data.ts` holds clinic details, services, testimonials, and other content.
- `src/components/` contains the individual page sections and shared UI pieces.
- `src/assets/images/` stores local clinic images and the clinic logo.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Swiper
- Lucide React icons

## Local Development

**Prerequisite:** Node.js 18 or newer is recommended.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser at the Vite local URL shown in the terminal.

## Build And Preview

- Production build: `npm run build`
- Preview the production build locally: `npm run preview`
- Type-check the project: `npm run lint`
- Remove build output: `npm run clean`

## Content And Behavior Notes

- The appointment form in `src/components/ContactSection.tsx` is currently a front-end interaction that simulates submission state; it does not send data to a backend service.
- Clinic details, service descriptions, timings, and contact links are centralized in `src/data.ts` so content updates stay consistent across the site.
- Some visual assets are loaded from local files in `src/assets/images/`, while the before/after gallery and hero section also use remote images.

## Customizing The Site

- Update clinic information, services, and testimonials in `src/data.ts`.
- Replace the doctor portrait and logo images in `src/assets/images/` if needed.
- Adjust section copy, styling, or layout in the relevant component under `src/components/`.

## Notes

- The repo currently represents a frontend marketing site for the clinic rather than a full appointment-management backend.
- If you later connect the form to an API, update this README with the submission flow and required environment variables.
