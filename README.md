# Norma Luna Healthcare website

Vite, React, TypeScript and Tailwind CSS site for a healthcare-coordination service. Norma Luna connects patients with providers; treating clinicians make clinical decisions.

## Run locally

```sh
npm ci
npm run dev
npm run build
```

## Dental landing page

`/specialities/dental` is the dental entry point for website and ad visitors. It is implemented in `src/pages/DentalLanding.tsx` and mounted before the generic `/specialities/:id` route in `src/App.tsx`. Existing speciality, header and footer links continue to use the same URL.

The page introduces treatment categories, the coordination process and common planning questions. Its primary enquiry link opens a prefilled WhatsApp chat; calling and the contact page are alternatives. It does not collect or submit medical records, promise a price or book a clinical appointment. The browser title and description are updated on the client; server-rendered social previews still use the shared `index.html` metadata.

Before launching dental ads, confirm the target treatment and geography, review all clinical and provider statements with the business, verify that the WhatsApp number is monitored, and verify the enquiry journey on the deployed site. The existing `/appointment` and `/contact` forms use FormSubmit independently of this landing page.
