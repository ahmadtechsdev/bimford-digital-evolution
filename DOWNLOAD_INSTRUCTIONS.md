# BIMFord Project - Download & Installation Guide

## How to Download This Project

Since this is a Lovable project, you can download it in several ways:

### Method 1: Using Git (Recommended)
1. Connect your GitHub account to Lovable (if not already connected)
2. Push your project to GitHub using the GitHub integration button in Lovable
3. Clone the repository to your local machine:
   ```bash
   git clone [your-repository-url]
   cd [your-project-name]
   ```

### Method 2: Export from Lovable
1. In your Lovable project, click on the project settings
2. Look for the "Export" or "Download" option
3. Download the ZIP file and extract it to your desired location

## Installation & Setup

Once you have the project files locally:

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd bimford-project
   ```

2. **Install dependencies:**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun (recommended)
   bun install
   ```

3. **Start the development server:**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)
   - Your BIMFord website should now be running locally!

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, TopBanner components
│   ├── sections/        # Page sections (Hero, About, Services, etc.)
│   └── ui/             # Reusable UI components (shadcn/ui)
├── pages/              # Main pages (Index, Services, About, Contact)
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Key Features Implemented

- ✅ Top banner with contact info and social media
- ✅ Responsive navigation header
- ✅ Professional margins and spacing
- ✅ White footer with readable text colors
- ✅ Improved text readability (grey text colors)
- ✅ SEO-optimized structure
- ✅ Modern design system with Tailwind CSS
- ✅ Fully responsive design

## Building for Production

To create a production build:

```bash
# Build the project
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **React Router** - Navigation

## Support

If you encounter any issues during setup, please refer to the official documentation:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Next Steps

After setting up locally, you can:
- Customize colors and branding in `src/index.css`
- Add new pages in the `src/pages/` directory
- Modify components in `src/components/`
- Add new assets to `src/assets/`
- Update content and copy throughout the application

Happy coding! 🚀