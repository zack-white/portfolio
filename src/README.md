# Portfolio Source Structure

This directory contains the modular components and structure for my portfolio website.

## Directory Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
│   ├── Header.tsx         # Site header
│   ├── WelcomeBox.tsx     # Welcome message component
│   └── ScrollIndicator.tsx # Scroll indicator component
├── hooks/                  # Custom React hooks
│   └── useMouseTracking.ts # Mouse tracking for gradient effect
├── types/                  # TypeScript type definitions
│   └── index.ts           # Shared types
└── constants/              # Application constants
    └── index.ts           # Site configuration and navigation
```

