# The CFA Art College Website

A modern, responsive website for the College of Fine Arts built with Next.js 15, React 19, and Tailwind CSS.

## Features

- Dynamic content from API integration
- Responsive design for all devices
- Modern UI with animations
- SEO optimized
- Fast performance with Next.js

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/thecfaartcollage.git
   cd thecfaartcollage
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://karnatakaindustries.in/api
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## API Integration

The website integrates with the following API endpoints:

- `http://karnatakaindustries.in/api/home` - Home page data

### API Structure

The API returns data in the following format:

```json
{
  "success": true,
  "data": {
    "seo": {
      "title": "College Of Fine Arts - Bangalore | Painting, Sculpture, Applied Art, Art History, Graphic Art, Animation, Ceramic",
      "keywords": "Keywords of Fine Arts Bangalore, Fine Arts College Bangalore, Painting Courses Bangalore, Sculpture Courses Bangalore, Animation Courses Bangalore",
      "description": "The description of Fine Arts, Bangalore, provides comprehensive training in Painting, Sculpture, Applied Art, Art History, Graphic Art, Animation, and Ceramic Art. Discover your passion!",
      "og_title": "OGTitle of Fine Arts - Bangalore | Painting, Sculpture, Applied Art, Art History, Graphic Art, Animation, Ceramic",
      "og_description": "The OGdescription of Fine Arts, Bangalore, provides comprehensive training in Painting, Sculpture, Applied Art, Art History, Graphic Art, Animation, and Ceramic Art. Discover your passion!",
      "og_url": "https://thecfa.art",
      "og_image": "https://thecfa.art/wp-content/uploads/2024/04/logo-2.png"
    },
    "slider": [
      {
        "title": "Digital Art & Animation",
        "description": "Learn modern digital art techniques and animation",
        "image": "https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/05/Psittaciformes-2.png",
        "link": "/departments/art-history"
      }
    ],
    "notices": [
      {
        "title": "Admissions Open 2025-2026",
        "short_description": "Click here to download the Application Form",
        "link": "uploads/notice/pdf/CFA_Admission_Form_13_22_00.pdf",
        "date": "05 April 2025"
      }
    ],
    "events": [
      {
        "title": "Drushyotsava Annual show BVA 2022",
        "slug": "drushyotsava-annual-show-bva-2022",
        "snippet": "This is the snippet for Drushyotsava Annual show BVA 2022 glimpses which will be updated later",
        "date": "14th April 2025",
        "category": "Exhibition",
        "time": "10 AM to 6 PM",
        "venue": "College Auditorium",
        "thumbImg": "http://karnatakaindustries.in//storage/banner/conversions/Drushyotsava_annual-show-2022-1-980x1315-thumb.jpg",
        "featuredImg": "http://karnatakaindustries.in//storage/bannerDrushyotsava_annual-show-2022-1-980x1315.jpg"
      }
    ],
    "gallery": [
      {
        "title": "Building Front",
        "category": "Premises",
        "thumbImg": "http://karnatakaindustries.in//storage/gallery/conversions/front-thumb.jpg",
        "largeImg": "http://karnatakaindustries.in//storage/galleryfront.jpg"
      }
    ]
  },
  "message": "Home page data fetched successfully."
}
```

### API Service Structure

The API integration is structured as follows:

- `src/types/api.ts` - TypeScript interfaces for API data
- `src/config/api.config.ts` - API configuration
- `src/utils/api.utils.ts` - API utility functions
- `src/services/api/home.service.ts` - Home API service
- `src/hooks/useHomeData.ts` - Custom hook for fetching home data

## Project Structure

```
thecfaartcollage/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # React components
│   ├── config/          # Configuration files
│   ├── constants/       # Constants and static data
│   ├── hooks/           # Custom React hooks
│   ├── Images/          # Image assets
│   ├── services/        # API services
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── .env                 # Environment variables
├── .env.local           # Local environment variables (not committed)
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Deployment

The website can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
