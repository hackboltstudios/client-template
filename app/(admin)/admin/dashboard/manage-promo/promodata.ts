export type PromoStatus =
    | "Active"
    | "Scheduled"
    | "Expired"
    | "Draft"
    | "Paused";

export type PromoType =
    | "Percentage"
    | "Fixed Amount"
    | "Buy One Get One"
    | "Free Shipping";

export type Promo = {
    id: number;

    /**
     * Promotion name displayed in the admin panel
     */
    name: string;

    /**
     * Type of promotion
     */
    type: PromoType;

    /**
     * Discount value
     *
     * Examples:
     * 20 = 20%
     * 10 = $10
     * 0 = Free Shipping / BOGO
     */
    discount: number;

    /**
     * Start date of promotion
     */
    startDate: string;

    /**
     * End date of promotion
     */
    endDate: string;

    /**
     * Current promotion status
     */
    status: PromoStatus;

    /**
     * Number of times promotion has been used
     */
    usageCount: number;

    /**
     * Maximum number of uses
     * null means unlimited
     */
    usageLimit: number | null;

    /**
     * Promo code customers use
     */
    promoCode: string;
};

export const promos: Promo[] = [
    {
        id: 1,
        name: "Summer Streetwear Drop",
        type: "Percentage",
        discount: 20,
        startDate: "2026-07-01",
        endDate: "2026-07-31",
        status: "Active",
        usageCount: 24,
        usageLimit: 100,
        promoCode: "SUMMER20",
    },

    {
        id: 2,
        name: "New Society Member",
        type: "Percentage",
        discount: 15,
        startDate: "2026-08-01",
        endDate: "2026-12-31",
        status: "Scheduled",
        usageCount: 0,
        usageLimit: null,
        promoCode: "WELCOME15",
    },

    {
        id: 3,
        name: "Winter Collection",
        type: "Fixed Amount",
        discount: 10,
        startDate: "2026-06-01",
        endDate: "2026-06-30",
        status: "Expired",
        usageCount: 57,
        usageLimit: 100,
        promoCode: "WINTER10",
    },

    {
        id: 4,
        name: "Psycho Weekend",
        type: "Buy One Get One",
        discount: 0,
        startDate: "2026-08-15",
        endDate: "2026-08-17",
        status: "Draft",
        usageCount: 0,
        usageLimit: null,
        promoCode: "BOGO2026",
    },

    {
        id: 5,
        name: "Free Shipping Weekend",
        type: "Free Shipping",
        discount: 0,
        startDate: "2026-07-25",
        endDate: "2026-07-27",
        status: "Paused",
        usageCount: 12,
        usageLimit: 50,
        promoCode: "FREESHIP",
    },
];