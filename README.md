# Trump Towers Pune — Frontend

The frontend application for the **Trump Towers Pune** luxury residential development, showcasing its residences, amenities, location, galleries, and branded living experience.

- **Live Website:** https://trumptowerspune.netlify.app/
- **Repository:** https://github.com/rohitdevc/trump-towers-pune-frontend

## Overview

Trump Towers Pune is a luxury residential development located in Kalyani Nagar, Pune. The website presents the development's full-floor residences, architectural design, interiors, lifestyle amenities, nearby landmarks, and the global Trump property portfolio.

The frontend is built with Next.js App Router and retrieves homepage content, project information, galleries, amenities, landmarks, and metadata through API service modules.

## Features

- **Project Introduction** — Overview of the development and its residential offering.
- **Luxury Residences** — Information about full-floor 5.5 BHK residences.
- **Residence Gallery** — Visual presentation of terraces, bedrooms, living rooms, dining spaces, home theatres, and lift lobbies.
- **Lifestyle Amenities** — Fitness facilities, swimming and recreation, concierge services, yoga, meditation, and spa facilities.
- **Location Highlights** — Nearby airport, hospitals, hotels, schools, lifestyle destinations, and parks.
- **Interactive Sliders** — Carousel-based presentation of project imagery and content.
- **Global Portfolio** — Showcases selected Trump-branded developments worldwide.
- **Developer Information** — Introduces Panchshil Realty and its development portfolio.
- **Privacy Policy and Disclaimer** — Provides legal and project-related information.
- **Dynamic Content** — Loads homepage content and metadata from API services.
- **SEO Metadata** — Generates page metadata using the configured content service.
- **Responsive Design** — Tailwind CSS-based layouts for different screen sizes.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework and routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| GSAP | Animations |
| `@gsap/react` | GSAP integration with React |
| Motion | UI animation utilities |
| Swiper | Sliders and carousels |
| `html-react-parser` | HTML content parsing |
| `libphonenumber-js` | Phone-number utilities |
| Validator | Input validation |
| React Icons | Interface icons |
| ESLint | Code quality |
| npm | Dependency management |
| Docker | Containerized deployment |
| Netlify | Hosting |

## Getting Started

### Prerequisites

- Node.js 22 or a compatible version
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/trump-towers-pune-frontend.git
cd trump-towers-pune-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the values required for your environment.

```dotenv
NEXT_PUBLIC_PATH=
BASEPATH_PREFIX=
ASSET_PREFIX=
API_DOMAIN_NAME=
FRONTEND_TOKEN_KEY=
REDIS_URL=
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PATH` | Public asset path configuration |
| `BASEPATH_PREFIX` | Optional application base-path configuration |
| `ASSET_PREFIX` | Optional static asset prefix |
| `API_DOMAIN_NAME` | API domain used by the application |
| `FRONTEND_TOKEN_KEY` | Token-related configuration used by the frontend |
| `REDIS_URL` | Redis URL used by the application. |

Verify the expected values against the API service modules and deployment configuration before starting the application.

**Security:** Do not commit real credentials or private tokens. Values prefixed with `NEXT_PUBLIC_` can be exposed in browser-side bundles. Review how `FRONTEND_TOKEN_KEY` is consumed before treating it as a secret.

### 4. Start the development server

```bash
npm run dev
```

Open the application in your browser:

http://localhost:2986

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server on port `2986` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server on port `2986` |
| `npm run lint` | Runs ESLint |

## Project Structure

```text
trump-towers-pune-frontend/
├── .github/
│   └── workflows/       # GitHub Actions deployment workflow
├── app/                 # Next.js routes, layouts, and styles
├── components/          # Reusable UI and page components
├── lib/                 # API services and shared utilities
├── public/              # Static assets
├── types/               # TypeScript type definitions
├── Dockerfile            # Multi-stage production image
├── docker-compose.yml    # Docker Compose configuration
├── next.config.ts        # Next.js and deployment configuration
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked npm dependency versions
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Production Build

To build and run the application locally:

```bash
npm run build
npm run start
```

The production server listens on port `2986` by default.

## Docker Deployment

The repository includes a multi-stage Dockerfile based on Node.js 22 Alpine. It installs dependencies, builds the Next.js application, and runs the standalone production output.

### Build and start

After configuring the required environment variables in `.env`, run:

```bash
docker compose up -d --build
```

### View logs

```bash
docker compose logs -f ttp-web
```

### Stop the application

```bash
docker compose down
```

The Docker Compose service is named `ttp-web`, and the container name is `trump-towers-pune-frontend`. Port `2986` is mapped from the host to the container.

The Docker build receives application configuration through build arguments. Rebuild the image after changing build-time configuration.

## Netlify Deployment

The live website is hosted on Netlify.

To deploy the application:

1. Connect the GitHub repository to Netlify.
2. Configure the required environment variables in the Netlify site settings.
3. Use a compatible Node.js version.
4. Set the build command to `npm run build`.
5. Verify API connectivity, remote images, project galleries, and navigation.
6. Deploy and test the website on desktop and mobile devices.

The Next.js configuration includes `BASEPATH_PREFIX` and `ASSET_PREFIX` settings. Ensure these values match the intended deployment path and asset configuration.

### Search engine indexing

The current Next.js configuration adds an `X-Robots-Tag: noindex, nofollow` header when the deployment URL contains `netlify.app`.

This is useful for a preview deployment. If the website is intended to appear in public search results, review this condition before deploying to the final production domain.

## Development Guidelines

- Keep API integration logic within the appropriate modules under `lib/`.
- Use TypeScript for component properties and API response data.
- Follow the existing component and styling conventions.
- Run `npm run lint` before submitting changes.
- Run `npm run build` to verify production compilation.
- Test sliders, navigation, gallery content, and responsive layouts.
- Keep environment-specific configuration and secrets out of committed files.

## Deployment Workflow

The repository includes a GitHub Actions workflow triggered by pushes to `main`. It uses a self-hosted runner to pull the latest code into the configured production checkout.

For secure deployment:

- Protect the `main` branch and review production changes.
- Restrict access to the self-hosted runner.
- Use a dedicated, appropriately restricted SSH key.
- Keep private keys and credentials outside the repository.
- Ensure the server's build and restart procedure is managed appropriately.

## License

No explicit open-source license is documented in this README. Contact the repository owner for permission before redistributing or reusing the source code.

---

**Project:** Trump Towers Pune — Residential Website  
**Framework:** Next.js · React · TypeScript · Tailwind CSS  
**Hosting:** Netlify  
**Repository:** https://github.com/rohitdevc/trump-towers-pune-frontend