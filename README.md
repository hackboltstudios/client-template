# Client Website Template

A modern, responsive, and fully customizable client website template built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This project is designed to serve as a reusable foundation for building professional websites for different clients and businesses. Website content is separated from the UI components using a centralized `DummyData` configuration, making it easy to customize each client's website without modifying the core section designs.

---

## 🚀 Tech Stack

* **Next.js** — React framework for production-ready web applications
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Utility-first CSS framework
* **shadcn/ui** — Reusable UI components
* **Lucide React** — Icon library
* **React Icons** — Additional icon library
* **Embla Carousel** — Gallery carousel functionality
* **next/image** — Optimized image rendering
* **Framer Motion / CSS Animations** — Animations and visual effects

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── data/
│   │   └── DummyData.ts
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── separator.tsx
│       └── ...
│
├── public/
│   ├── generic/
│   │   ├── HeroSection.png
│   │   ├── AboutSection.png
│   │   ├── ServicesSection.png
│   │   └── GallerySection.png
│   │
│   └── images/
│       └── ...
│
└── ...
```

---

# ✨ Features

## Hero Section

The Hero section includes:

* Client business name
* Custom Hero heading
* Highlighted heading text
* Hero description
* Call-to-action button
* Configurable CTA link
* Hero image
* Floating visual effects
* Decorative rings and glows
* Brand badge

Hero content is controlled through `DummyData`.

Example:

```tsx
HeroSectionTitleLine1: "Wear Your",

HeroSectionTitleHighlight:
    "Identity.",

HeroSectionTitleLine2:
    "Be Different.",

HeroSectionP:
    "Welcome to Psycho Society — where bold designs, custom streetwear, and creative expression come together.",

HeroSectionButtonText:
    "Explore Psycho Society",

HeroSectionButtonLink:
    "/gallery",

HeroSectionImage:
    "/generic/HeroSection.png",
```

---

## About Section

The About section provides:

* Section badge
* Custom heading
* Highlighted heading text
* Multiple paragraphs
* About image
* Brand statement
* Brand values
* Dynamic value cards

Example:

```tsx
AboutSectionBadge: "Our Story",

AboutSectionTitleLine1:
    "More Than",

AboutSectionTitleHighlight:
    "Just A T-Shirt.",

AboutSectionP1:
    "Psycho Society was created for those who aren't afraid to stand out.",

AboutSectionP2:
    "From bold graphics to custom creations, every piece is designed to make a statement.",

AboutValues: [
    {
        Number: "01",
        Title: "Be Original",
        Description:
            "Stand out from the crowd and embrace what makes you different.",
    },
],
```

---

## Services Section

The Services section dynamically renders services from the client data.

Each service supports:

* Service title
* Description
* Image
* Button text
* Button link
* Automatic numbering

Example:

```tsx
Services: [
    {
        Title: "Custom T-Shirt Printing",

        Description:
            "Bring your ideas to life with bold, high-quality custom designs.",

        Image:
            "/images/services/tshirt-printing.png",

        ButtonText:
            "Learn More",

        ButtonLink:
            "/services/tshirt-printing",
    },
],
```

Services are rendered dynamically using:

```tsx
DummyData.Services.map(...)
```

This allows each client to have a completely different set of services.

---

## Gallery Section

The Gallery section includes:

* Section badge
* Custom heading
* Highlighted heading text
* Description
* Gallery button
* Feature image
* Responsive carousel
* Dynamic gallery items
* Image titles
* Categories
* Alt text

Example:

```tsx
GalleryImages: [
    {
        Image: "/images/gallery/design-1.png",
        Alt: "Custom streetwear design",
        Title: "Custom Streetwear",
        Category: "Streetwear Collection",
        Description:
            "Bold designs created for individuals who want to stand out.",
    },
],
```

The carousel automatically renders all items from:

```tsx
DummyData.GalleryImages
```

---

## Testimonials Section

The Testimonials section dynamically renders customer reviews.

Each testimonial supports:

* Customer name
* Customer role
* Customer image
* Customer message
* Rating
* Verified status
* Business name
* Category

Example:

```tsx
Testimonials: [
    {
        Name: "John Doe",

        Role: "Verified Customer",

        Message:
            "Absolutely love my new custom design!",

        Image:
            "/images/testimonials/customer-1.png",

        Rating:
            5,

        Verified:
            true,

        BusinessName:
            "Psycho Society",

        Category:
            "Streetwear Collection",
    },
],
```

The component automatically creates a testimonial card for every item in the array.

---

## CTA Section

The Call-To-Action section includes:

* Badge
* Custom heading
* Highlighted heading text
* Description
* Primary CTA
* Secondary CTA
* Configurable links
* Brand statement

Example:

```tsx
CTASectionBadge:
    "Join The Society",

CTASectionTitleLine1:
    "Don't Follow The Crowd.",

CTASectionTitleHighlight:
    "Create Your Own.",

CTASectionP:
    "Discover bold designs, custom streetwear, and apparel made for people who aren't afraid to stand out.",

CTAPrimaryButtonText:
    "Shop The Collection",

CTAPrimaryButtonLink:
    "/gallery",

CTASecondaryButtonText:
    "Get In Touch",

CTASecondaryButtonLink:
    "/#contact",
```

---

## Contact Section

The Contact section includes:

* Section badge
* Custom heading
* Highlighted heading
* Description
* Brand statement
* Contact email
* Custom order information
* Contact form

The actual form is handled by:

```text
components/forms/ContactForm.tsx
```

Contact information is managed through `DummyData`.

Example:

```tsx
ContactSectionBadge:
    "Get In Touch",

ContactSectionTitleLine1:
    "Let's Create",

ContactSectionTitleHighlight:
    "Something Different.",

ContactSectionP:
    "Got an idea for your next custom project? Tell us what you're thinking and let's bring your vision to life.",

ContactEmail:
    "hello@psychosociety.com",
```

---

# 🧩 Data-Driven Architecture

The website is designed around a centralized client data structure.

Instead of hardcoding content directly inside components, content is stored in:

```text
src/app/data/DummyData.ts
```

The components then import the data:

```tsx
import { DummyData } from "@/app/data/DummyData";
```

And display the relevant information:

```tsx
{DummyData.ClientBusinessName}
```

```tsx
{DummyData.HeroSectionP}
```

```tsx
{DummyData.Services.map((service) => (
    ...
))}
```

This creates a separation between:

```text
Content
   │
   ▼
DummyData.ts
   │
   ▼
Reusable Components
   │
   ▼
Website
```

The goal is to eventually replace `DummyData` with client data retrieved from a database such as **Supabase**.

The UI components can remain largely unchanged when the data source is replaced.

---

# 🎨 Customizing the Website

To create a new client website, update:

```text
src/app/data/DummyData.ts
```

You can customize:

* Business name
* Business description
* Logo
* Contact details
* Social media
* Hero content
* Hero images
* About content
* Services
* Gallery
* Testimonials
* CTA
* Contact section

The overall website design and component structure can remain unchanged.

---

# 🖼️ Images

Images should be placed inside the `public` directory.

Example:

```text
public/
├── generic/
│   ├── HeroSection.png
│   ├── AboutSection.png
│   ├── ServicesSection.png
│   └── GallerySection.png
│
└── images/
    ├── gallery/
    ├── services/
    └── testimonials/
```

Images can then be referenced using:

```tsx
<Image
    src="/generic/HeroSection.png"
    alt="Hero Image"
    width={650}
    height={650}
/>
```

For client-specific projects, it is recommended to organize assets by client:

```text
public/
└── clients/
    └── psycho-society/
        ├── logo.png
        ├── hero.png
        ├── about.png
        ├── services/
        ├── gallery/
        └── testimonials/
```

This will make it easier to manage multiple client websites in the future.

---

# ⚙️ Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
```

## 2. Navigate Into the Project

```bash
cd <project-folder>
```

## 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

Or using yarn:

```bash
yarn install
```

---

## 4. Start the Development Server

```bash
npm run dev
```

Open the development server in your browser.

The application will typically be available at:

```text
http://localhost:3000
```

---

# 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

# 🧹 Linting

Run ESLint with:

```bash
npm run lint
```

---

# 🌙 Theme Support

The website supports dark and light themes using the project's theme provider.

The theme system is designed to work with:

* Dark mode
* Light mode
* System preference

Components use Tailwind's theme-aware classes to maintain consistent styling.

---

# 📱 Responsive Design

The website is designed to be responsive across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

Tailwind responsive breakpoints are used throughout the project.

Common breakpoints include:

```text
sm
md
lg
xl
2xl
```

---

# 🔮 Future Development

The long-term goal of this project is to transform the static data-driven template into a fully dynamic client website management platform.

Planned features include:

* Supabase database integration
* Client authentication
* Dynamic client profiles
* Dynamic website content
* Client-specific themes
* Client-specific color palettes
* Dynamic image management
* Gallery management
* Services management
* Testimonials management
* Contact form submissions
* Client dashboard
* Website preview system
* Custom domains
* Multi-client support
* CMS-style content management

The intended architecture will eventually look like:

```text
Client
    │
    ▼
Supabase
    │
    ├── Business Information
    ├── Website Settings
    ├── Hero Section
    ├── About Section
    ├── Services
    ├── Gallery
    ├── Testimonials
    ├── CTA
    ├── Contact
    └── Social Media
            │
            ▼
      Next.js Website
```

---

# 🧱 Design Philosophy

The project follows a reusable component-based architecture.

The main principle is:

> **Separate the design from the content.**

Components are responsible for:

* Layout
* Styling
* Animations
* Responsiveness
* User interaction

The data layer is responsible for:

* Client information
* Text content
* Images
* Links
* Services
* Gallery items
* Testimonials

This allows the same website components to be reused for multiple businesses and industries.

---

# 📄 License

This project is intended for use as a reusable client website template.

Customize licensing and usage terms according to your project's requirements.

---

# 👨‍💻 Development

Built and maintained by **Hack Bolt Studios**.

The project is designed as part of a reusable client website system for creating modern, responsive, and customizable websites for businesses and organizations.
