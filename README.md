# Edwin Anderson - Portfolio Website

A modern, responsive portfolio website showcasing frontend development skills and projects. Built with Next.js 16, TypeScript, and Tailwind CSS with a focus on performance, accessibility, and user experience.

![Portfolio Preview](public/images/hero.svg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Performance Optimizations](#performance-optimizations)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Features

### Design & UX
- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎨 Custom color scheme with primary/secondary colors
- 🌊 Fluid typography scaling across all screen sizes
- 🎭 Scroll-triggered animations using Framer Motion
- 💫 Interactive UI components with hover effects

### Sections
- **Hero** - Eye-catching introduction with animated elements
- **About/Intro** - Professional background and expertise
- **Features** - Key skills and capabilities
- **Services** - Development services offered
- **Portfolio** - Showcase of projects with carousel
- **Experience** - Work history timeline
- **Testimonials** - Client feedback carousel
- **FAQ** - Common questions with accordion
- **CTA** - Contact call-to-action
- **Footer** - Social links and contact information

### Technical Features
- 🚀 Server-side rendering (SSR) with Next.js
- ⚡ Optimized image loading with Next.js Image
- 🎯 SEO optimized with meta tags and Open Graph
- 📊 Performance optimized (Lighthouse 90+ scores)
- ♿ Accessibility focused (WCAG compliant)
- 🔗 WhatsApp integration for direct messaging
- 🎪 Smooth page transitions and scroll effects

## Tech Stack

### Core
- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Design System** - Fluid typography, spacing, and colors
- **CSS Variables** - Theme customization

### UI Components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
  - Accordion
  - Navigation Menu
  - Slot
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icons

### Carousels
- **[Embla Carousel](https://www.embla-carousel.com/)** - Touch-friendly carousels

### Utilities
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classNames
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[class-variance-authority](https://cva.style/)** - Component variants

### Fonts
- **[Montserrat](https://fonts.google.com/specimen/Montserrat)** - Primary font (Google Fonts)
- Font weights: 400, 500, 600, 700, 800

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-slicing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

No environment variables required for basic setup. The project works out of the box.

## Project Structure

```
portfolio-slicing/
├── public/
│   └── images/              # Static images and SVGs
│       ├── hero.svg
│       ├── 227.svg
│       ├── Portfolio1.svg
│       └── ... (icons, logos, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles & design tokens
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── intro.tsx
│   │   │   ├── features.tsx
│   │   │   ├── services.tsx
│   │   │   ├── portfolio.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── faq-cta-transition.tsx
│   │   │   └── cta.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── navbar.tsx
│   │       ├── footer.tsx
│   │       ├── accordion.tsx
│   │       ├── carousel.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts         # Utility functions
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── PERFORMANCE_OPTIMIZATIONS.md  # Performance documentation
└── README.md               # This file
```

## Performance Optimizations

This portfolio has been optimized for maximum performance and SEO. See [PERFORMANCE_OPTIMIZATIONS.md](PERFORMANCE_OPTIMIZATIONS.md) for detailed documentation.

### Summary

#### 1. SEO & Metadata
- Professional page title and meta description
- Open Graph tags for social media
- Twitter Card metadata
- Structured keywords

#### 2. Font Optimization
- Font display swap for instant text visibility
- Eliminates Flash of Invisible Text (FOIT)
- Optimized Google Fonts loading

#### 3. Image Optimization
- Automatic AVIF/WebP conversion (50-70% smaller)
- Responsive image sizes for all devices
- Long-term browser caching (1 year)
- Next.js Image component throughout

#### 4. Bundle Optimization
- Automatic code splitting by Next.js
- Tree-shaking for minimal bundle size
- Efficient Framer Motion integration

### Performance Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 90+ | ✅ |
| Lighthouse SEO | 95+ | ✅ |
| Lighthouse Best Practices | 95+ | ✅ |
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |

## Scripts

### Development
```bash
npm run dev          # Start development server (localhost:3000)
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

## Design System

### Colors

**Primary Palette:**
- `primary-100`: #f1dfe6 (Light pink)
- `primary-200`: #da627d (Medium pink)
- `primary-300`: #b76080 (Dark pink)
- `primary-400`: #860d39 (Deep burgundy)

**Secondary:**
- `secondary-100`: #f3b64c (Golden yellow)

**Neutral:**
- 12 shades from `neutral-25` (#fdfdfd) to `neutral-950` (#0a0d12)

### Typography

**Fluid Scaling System:**
- Display sizes: 3xl, 2xl, xl, lg, md, sm, xs
- Text sizes: xl, lg, md, sm, xs
- Automatically scales between mobile (640px) and desktop (1440px)

**Font Weights:**
- Regular (400)
- Medium (500)
- Semibold (600)
- Bold (700)
- Extrabold (800)

### Spacing

**Fixed Spacing:**
- Scale from `spacing-xxs` (0.125rem) to `spacing-11xl` (8.75rem)

**Fluid Spacing:**
- Responsive spacing that adapts to screen size
- Used for sections, containers, gaps

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- **Netlify** - Use Next.js plugin
- **AWS Amplify** - Supports Next.js
- **Railway** - One-click deploy
- **Docker** - Build with `Dockerfile`

### Build Configuration

No special build configuration needed. Default Next.js settings work perfectly.

```bash
# Production build
npm run build

# Start production server
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Image Format Fallbacks:**
- Modern browsers: AVIF
- Most browsers: WebP
- Legacy browsers: JPEG/PNG

## Key Features Implementation

### WhatsApp Integration
Direct messaging button in hero section:
```typescript
<a href="https://wa.me/6285156094033" target="_blank" rel="noopener noreferrer">
  {/* Microphone Icon */}
</a>
```

### Scroll Animations
Using Framer Motion `useInView` hook:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
```

### Responsive Images
Using Next.js Image component:
```typescript
<Image
  src="/images/hero.svg"
  alt="Hero"
  width={610}
  height={735}
  priority // For above-fold images
/>
```

## Customization Guide

### Update Personal Information

1. **Contact Details** - Edit WhatsApp number in `src/components/sections/hero.tsx`
2. **Name & Title** - Update metadata in `src/app/layout.tsx`
3. **Bio** - Edit content in `src/components/sections/intro.tsx`
4. **Projects** - Update in `src/components/sections/portfolio.tsx`
5. **Experience** - Modify `src/components/sections/experience.tsx`

### Change Colors

Edit `src/app/globals.css`:
```css
@theme {
  --color-primary-400: #860d39;
  --color-secondary-100: #f3b64c;
  /* ... etc */
}
```

### Add New Sections

1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to layout

## Performance Testing

### Run Lighthouse

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"

### PageSpeed Insights

Test your deployed site:
```
https://pagespeed.web.dev/
```

### WebPageTest

Test from multiple locations:
```
https://www.webpagetest.org/
```

## Troubleshooting

### Images not loading
- Check file paths in `public/images/`
- Ensure using Next.js `<Image>` component
- Verify images exist and are accessible

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Font not displaying
- Check internet connection (Google Fonts)
- Clear browser cache
- Verify `layout.tsx` font configuration

## Contributing

This is a personal portfolio project. If you find any issues:

1. Check existing documentation
2. Review [PERFORMANCE_OPTIMIZATIONS.md](PERFORMANCE_OPTIMIZATIONS.md)
3. Test in latest browser version

## License

This project is private and proprietary.

## Credits

**Developer:** WPH_13_SHANGHAI
**Framework:** [Next.js](https://nextjs.org/)
**Styling:** [Tailwind CSS](https://tailwindcss.com/)
**Animations:** [Framer Motion](https://www.framer.com/motion/)
**Icons:** [Lucide](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
**UI Components:** [Radix UI](https://www.radix-ui.com/)

## Contact

- **WhatsApp:** [+62 851-5609-4033](https://wa.me/6285156094033)
- **Portfolio:** [Live Site](#)

---

**Last Updated:** November 2025
**Next.js Version:** 16.0.1
**React Version:** 19.2.0

Built with ❤️ by WPH_13_SHANGHAI
