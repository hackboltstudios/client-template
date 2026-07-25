import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { TicketPercent} from "lucide-react";
import {DataTable} from "@/components/Data/data-table";
import {columns} from "@/app/(admin)/admin/dashboard/manage-promo/columns";
import {promos} from "@/app/(admin)/admin/dashboard/manage-promo/promodata";


const ManagePromo = () => {
    return(
        <div className="space-y-10">
            {/* HEADER */}
            <div
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-8 shadow-xl backdrop-blur-xl sm:p-10">

                {/* Background Glow */}
                <div
                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"/>

                <div className="relative z-10 max-w-3xl">

                    <Badge
                        variant="secondary"
                        className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                        Promotion Management Center
                    </Badge>

                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                        Create Specials, Discounts And {" "}
                        <span className="text-primary">
                            More.
                        </span>
                    </h1>
                </div>
            </div>

            <Card
                className="group relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">

                {/* Background Glow */}
                <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px] transition-all duration-500 group-hover:bg-primary/20"/>

                <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold">
                        Create Your Promotions Here
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Create Your Promo and display it on your website.
                    </p>
                </CardHeader>

                <CardContent className="relative z-10">
                    <Button
                        className="
                group/button
                relative
                flex
                h-40
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-2xl
                border
                border-primary/30
                bg-primary/5
                text-primary
                shadow-lg
                shadow-primary/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-primary/60
                hover:bg-primary/10
                hover:shadow-xl
                hover:shadow-primary/20
            "
                    >
                        {/* Icon Glow */}
                        <div
                            className="absolute h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover/button:bg-primary/20"/>

                        {/* Icon */}
                        <TicketPercent
                            className="
             relative
                    z-10
                    size-12
                    transition-transform
                    duration-500
                    group-hover/button:scale-110
                    group-hover/button:rotate-3
                "
                        />

                        {/* Text */}
                        <span className="relative z-10 text-sm font-semibold">
                Add New Event
            </span>

                    </Button>
                </CardContent>

            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Current Active Events</CardTitle>
                    <CardDescription>
                        Edit, Update and Remove Existing events
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={columns}
                        data={promos}
                    />
                </CardContent>
            </Card>

        </div>
    );
}

export default ManagePromo;