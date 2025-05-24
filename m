// package.json
{
  "name": "ielts-prep-hub",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.16"
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <Head>
        <title>IELTS Prep Hub</title>
      </Head>
      <main className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to IELTS Prep Hub</h1>
        <p className="text-lg mb-6">Your all-in-one platform for IELTS listening, speaking, reading, and writing.</p>
        <p className="text-gray-600">Start preparing today and reach your target band score!</p>
      </main>
    </div>
  );
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
