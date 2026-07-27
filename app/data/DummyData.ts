export interface DummyDataInterface {
    // =========================
    // Business Information
    // =========================
    ClientBusinessName: string;
    ClientBusinessDescription: string;
    ClientBusinessLogo: string;
    ClientBusinessPhone: string;
    ClientBusinessEmail: string;
    ClientBusinessAddress: string;

    // =========================
    // Social Media
    // =========================
    Instagram: string;
    Facebook: string;
    Twitter: string;
    Tiktok: string;
    LinkedIn: string;

    // =========================
    // Hero Section
    // =========================
    HeroSectionTitleLine1: string;
    HeroSectionTitleHighlight: string;
    HeroSectionTitleLine2: string;
    HeroSectionP: string;
    HeroSectionButtonText: string;
    HeroSectionButtonLink: string;
    HeroSectionImage: string;

    // =========================
    // About Section
    // =========================
    AboutSectionBadge: string;
    AboutSectionTitleLine1: string;
    AboutSectionTitleHighlight: string;
    AboutSectionP1: string;
    AboutSectionP2: string;
    AboutSectionImage: string;
    AboutSectionLabel: string;
    AboutSectionLabelDescription: string;

    // About Values
    AboutValues: {
        Number: string;
        Title: string;
        Description: string;
    }[];

    // =========================
    // Services Section
    // =========================
    ServicesSectionTitle: string;
    ServicesSectionP: string;

    Services: {
        Title: string;
        Description: string;
        Image: string;
        ButtonText: string;
        ButtonLink: string;
    }[];

    // =========================
    // Gallery Section
    // =========================
    GallerySectionBadge: string;

    GallerySectionTitleLine1: string;
    GallerySectionTitleHighlight: string;

    GallerySectionP: string;

    GallerySectionButtonText: string;
    GallerySectionButtonLink: string;

    GallerySectionImage: string;

    GalleryImages: {
        Image: string;
        Alt: string;
        Title: string;
        Description?: string;
    }[];

    // =========================
    // Testimonials Section
    // =========================
    TestimonialsSectionBadge: string;

    TestimonialsSectionTitle: string;

    TestimonialsSectionP: string;

    Testimonials: {
        Name: string;
        Role?: string;
        Message: string;
        Image?: string;
        Rating: number;
        Verified?: boolean;
        BusinessName?: string;
        Category?: string;
    }[];

    // =========================
    // CTA Section
    // =========================
    CTASectionBadge: string;

    CTASectionTitleLine1: string;
    CTASectionTitleHighlight: string;

    CTASectionP: string;

    CTAPrimaryButtonText: string;
    CTAPrimaryButtonLink: string;

    CTASecondaryButtonText: string;
    CTASecondaryButtonLink: string;

    CTASectionBrandStatement: string;
    CTASectionBrandDescription: string;

    // =========================
    // Contact Section
    // =========================
    // Contact Section
    ContactSectionBadge: string;

    ContactSectionTitleLine1: string;
    ContactSectionTitleHighlight: string;

    ContactSectionP: string;

    ContactSectionBrandName: string;
    ContactSectionBrandDescription: string;

    ContactEmailLabel: string;
    ContactEmail: string;

    ContactOrdersLabel: string;
    ContactOrdersDescription: string;

    // =========================
    // Footer
    // =========================
    FooterDescription: string;
    CopyrightText: string;
}


export const DummyData: DummyDataInterface = {

        // =========================
        // Business Information
        // =========================
        ClientBusinessName: "Client Template. ",

        ClientBusinessDescription:
            "Client Template is a creative software brand focused on bold designs, custom apparel, and unique self-expression.",

        ClientBusinessLogo:
            "/images/clients/psycho-society/logo.png",

        ClientBusinessPhone:
            "+1 555 123 4567",

        ClientBusinessEmail:
            "hackboltstudios@gmail.com",

        ClientBusinessAddress:
            "123 Creative Street, New York, NY",

        // =========================
        // Social Media
        // =========================
        Instagram:
            "https://www.instagram.com/hackboltstudios/",

        Facebook:
            "https://www.facebook.com/profile.php?id=61591915464680",

        Twitter:
            "https://x.com/HackBoltStudios",

        Tiktok:
            "https://www.tiktok.com/@hack.bolt.studios",

        LinkedIn:
            "https://www.linkedin.com/company/hack-bolt-studios",

        // =========================
        // Hero Section
        // =========================
        HeroSectionTitleLine1: "Show Off Your",
        HeroSectionTitleHighlight: "Identity.",
        HeroSectionTitleLine2: "Be Different.",

        HeroSectionP:
            "Welcome to Client Template — where bold designs, custom software, and creative expression come together. Create your look. Make your statement. Join the society.",

        HeroSectionButtonText:
            "Explore Our Collection",

        HeroSectionButtonLink:
            "/gallery",

        HeroSectionImage:
            "/generic/HeroSection.png",

        // =========================
        // About Section
        // =========================
        AboutSectionBadge: "Our Story",

        AboutSectionTitleLine1: "More Than",

        AboutSectionTitleHighlight:
            "Just A Website.",

        AboutSectionP1:
            "Client Template was created for those who aren't afraid to stand out. We believe clothing is more than something you wear — it's a reflection of who you are, what you believe, and how you see the world.",

        AboutSectionP2:
            "From bold graphics to custom creations, every piece is designed to make a statement. Our goal is simple: create unique software that gives you the freedom to express yourself without limits.",

        AboutSectionImage:
            "/generic/AboutSection.png",

        AboutSectionLabel:
            "Client Template",

        AboutSectionLabelDescription:
            "More Than Website.",

        AboutValues: [
            {
                Number: "01",
                Title: "Be Original",
                Description:
                    "Stand out from the crowd and embrace what makes you different.",
            },
            {
                Number: "02",
                Title: "Stay Creative",
                Description:
                    "Bold ideas, unique designs, and no limits on self-expression.",
            },
            {
                Number: "03",
                Title: "Join The Society",
                Description:
                    "Become part of a community that celebrates individuality.",
            },
        ],

        // =========================
        // Services Section
        // =========================
        ServicesSectionTitle:
            "What We Create",

        ServicesSectionP:
            "Explore our range of custom apparel and creative services designed to bring your ideas to life.",

        Services: [
            {
                Title: "Custom Software",

                Description:
                    "Bring your ideas to life with custom software designed specifically for you.",

                Image:
                    "/images/clients/psycho-society/services/tshirt-printing.png",

                ButtonText:
                    "Learn More",

                ButtonLink:
                    "/services/tshirt-printing",
            },
            {
                Title: "Custom Design",

                Description:
                    "Add a premium touch to your site with high-quality custom software.",

                Image:
                    "/images/clients/psycho-society/services/embroidery.png",

                ButtonText:
                    "Learn More",

                ButtonLink:
                    "/services/embroidery",
            },
            {
                Title: "UI/UX Designs",

                Description:
                    "Create vibrant, detailed designs with our high-quality UI/UX solutions.",

                Image:
                    "/images/clients/psycho-society/services/uv-dtf.png",

                ButtonText:
                    "Learn More",

                ButtonLink:
                    "/services/uv-dtf",
            },
            {
                Title: "Custom Images & Logo",

                Description:
                    "Complete your look with custom-designed background and logo made to match your style.",

                Image:
                    "/images/clients/psycho-society/services/hats.png",

                ButtonText:
                    "Learn More",

                ButtonLink:
                    "/services/hats",
            },
        ],

        // =========================
        // Gallery Section
        // =========================
        GallerySectionBadge:
            "The Collection",

        GallerySectionTitleLine1:
            "Client Template",

        GallerySectionTitleHighlight:
            "Gallery",

        GallerySectionP:
            "Explore the latest drops, custom designs, and software pieces from the Client Template collection.",

        GallerySectionButtonText:
            "View Full Gallery",

        GallerySectionButtonLink:
            "/gallery",

        GallerySectionImage:
            "/generic/GallerySection.png",

        GalleryImages: [
            {
                Image: "/images/Branded T-shirt.png",
                Alt: "Client Template branded T-shirt",
                Title: "Client Template Tee",
                Description: "T-Shirt Collection",
            },
            {
                Image: "/images/Stoner.png",
                Alt: "Client Template street culture design",
                Title: "Street Culture",
                Description: "Latest Drop",
            },
            {
                Image: "/images/StonerShirt.png",
                Alt: "Client Template custom apparel",
                Title: "Custom Designs",
                Description: "Custom Apparel",
            },
            {
                Image: "/images/Branded T-shirt.png",
                Alt: "Client Template software",
                Title: "Client Template",
                Description: "software",
            },
            {
                Image: "/images/Stoner.png",
                Alt: "Client Template collection",
                Title: "Made Different",
                Description: "Psycho Collection",
            },
        ],

        // =========================
        // Testimonials Section
        // =========================
        TestimonialsSectionBadge:
            "Customer Reviews",

        TestimonialsSectionTitle:
            "What Our Customers Say",

        TestimonialsSectionP:
            "Don't just take our word for it. See what the Client Template community has to say about our designs, quality, and style.",

        Testimonials: [
            {
                Name: "John Doe",

                Role: "Verified Customer",

                Message:
                    "Absolutely love my Client Template Website! The design looks even better in person and the quality is 🔥. Definitely ordering again. The whole experience was amazing!",

                Image:
                    "https://github.com/shadcn.png",

                Rating: 5,

                Verified: true,

                BusinessName:
                    "Client Template",

                Category:
                    "software Collection",
            },
            {
                Name: "Jane Smith",

                Role: "Verified Customer",

                Message:
                    "The quality is amazing and the design came out exactly how I imagined it. I'll definitely be ordering again!",

                Image:
                    "https://github.com/shadcn.png",

                Rating: 5,

                Verified: true,

                BusinessName:
                    "Client Template",

                Category:
                    "Custom Apparel",
            },
        ],

        // =========================
        // CTA Section
        // =========================

        CTASectionBadge:
            "Join The Society",

        CTASectionTitleLine1:
            "Don't Follow The Crowd.",

        CTASectionTitleHighlight:
            "Create Your Own.",

        CTASectionP:
            "Discover bold designs, custom software made for people who aren't afraid to stand out. Your style. Your identity. Your society.",

        CTAPrimaryButtonText:
            "Shop The Collection",

        CTAPrimaryButtonLink:
            "/gallery",

        CTASecondaryButtonText:
            "Get In Touch",

        CTASecondaryButtonLink:
            "/#contact",

        CTASectionBrandStatement:
            "Client Template",

        CTASectionBrandDescription:
            "Show Off Your Identity. Be Different.",

        // =========================
        // Contact Section
        // =========================

        ContactSectionBadge:
            "Get In Touch",

        ContactSectionTitleLine1:
            "Let's Create",

        ContactSectionTitleHighlight:
            "Something Different.",

        ContactSectionP:
            "Got an idea for your next Website or Customer software piece? Tell us what you're thinking and let's bring your vision to life.",

        ContactSectionBrandName:
            "Client Template",

        ContactSectionBrandDescription:
            "Show Off Your Identity. Be Different.",

        ContactEmailLabel:
            "Email",

        ContactEmail:
            "hackboltstudios@gmail.com",

        ContactOrdersLabel:
            "Custom Orders",

        ContactOrdersDescription:
            "Custom Software • Logos • UI/UX • Background",
        // =========================
        // Footer
        // =========================
        FooterDescription:
            "Client Template — bold designs, custom software, and creative expression.",

        CopyrightText:
            "© 2026 Client Template. All rights reserved.",
    };