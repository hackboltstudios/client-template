export type EventStatus = "Active" | "Draft" | "Expired";

export type Event = {
    id: number;
    title: string;
    date: string;
    status: EventStatus;
};

export const events: Event[] = [
    {
        id: 1,
        title: "Summer Streetwear Drop",
        date: "2026-07-30",
        status: "Active",
    },
    {
        id: 2,
        title: "Psycho Society Launch",
        date: "2026-08-15",
        status: "Draft",
    },
    {
        id: 3,
        title: "Winter Collection",
        date: "2026-06-20",
        status: "Expired",
    },
];