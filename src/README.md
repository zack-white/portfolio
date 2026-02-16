# Portfolio Source Structure

This directory contains the modular components and structure for Zachary White's portfolio website.

## Directory Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
│   ├── Header.tsx         # Site header with ZW initials
│   ├── WelcomeBox.tsx     # Welcome message component
│   └── ScrollIndicator.tsx # Scroll indicator component
├── hooks/                  # Custom React hooks
│   └── useMouseTracking.ts # Mouse tracking for gradient effect
├── types/                  # TypeScript type definitions
│   └── index.ts           # Shared types
└── constants/              # Application constants
    └── index.ts           # Site configuration and navigation
```

## Adding New Components

1. Create a new component file in `src/components/`
2. Export as default function
3. Import and use in your pages
4. Follow the existing naming conventions

## Adding New Pages

1. Create a new directory in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file in that directory
3. Import and use existing components as needed

## Styling

- Use Tailwind CSS classes for styling
- Custom CSS animations are in `globals.css`
- Follow the existing design patterns for consistency

## State Management

- Use React hooks for local state
- Custom hooks for reusable logic
- Keep components focused and single-purpose
