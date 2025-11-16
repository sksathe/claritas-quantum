# Component Integration Setup

## ✅ Completed Setup

### 1. Tailwind CSS
- ✅ Installed `tailwindcss`, `postcss`, `autoprefixer`
- ✅ Created `tailwind.config.js` and `postcss.config.js`
- ✅ Added Tailwind directives to `src/index.css`

### 2. TypeScript
- ✅ Installed TypeScript and type definitions
- ✅ Created `tsconfig.json` with path aliases (`@/*` → `./src/*`)
- ✅ Created `tsconfig.node.json` for Vite config
- ✅ Updated `vite.config.ts` with path alias resolution

### 3. Dependencies
- ✅ Installed `framer-motion` for animations
- ✅ Installed `lucide-react` for icons
- ✅ Installed `clsx` and `tailwind-merge` for className utilities

### 4. Component Structure
- ✅ Created `/src/components/ui/` directory (shadcn convention)
- ✅ Created `/src/lib/utils.ts` with `cn()` utility function
- ✅ Created `/src/components/ui/shape-landing-hero.tsx` component

### 5. Integration
- ✅ Integrated `HeroGeometric` component into `App.jsx`
- ✅ Customized with ClaritasQuantum branding:
  - Badge: "Post-Quantum Security"
  - Title 1: "Know Your Post-Quantum Risk"
  - Title 2: "Before Attackers Do"
  - Description: Updated with company messaging

## Component Location

The component follows shadcn/ui conventions:
- **Components**: `/src/components/ui/`
- **Utils**: `/src/lib/utils.ts`
- **Path Alias**: `@/` maps to `./src/`

## Usage

The `HeroGeometric` component is now integrated at the top of the landing page, positioned below the navigation bar. It features:

- Animated floating geometric shapes
- Smooth fade-in animations
- Gradient text effects
- Responsive design
- Dark theme support (inherits from page theme)

## Customization

You can customize the hero by passing props:

```jsx
<HeroGeometric 
  badge="Your Badge Text"
  title1="First Line of Title"
  title2="Second Line of Title"
/>
```

## Notes

- The component uses TypeScript (.tsx) but can be imported into JSX files
- Tailwind CSS classes are used for styling
- Framer Motion handles all animations
- The component is fully responsive

