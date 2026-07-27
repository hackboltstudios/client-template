import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { DummyData } from "@/app/data/DummyData";

export function Testimonials() {
    return (
        <div className="p-10">
            <section className="space-y-10 py-24">

                {/* Section Heading */}
                <div className="space-y-3 text-center">

                    {/* Badge */}
                    <Badge
                        variant="secondary"
                        className="border border-primary/20 bg-primary/10 text-primary"
                    >
                        {DummyData.TestimonialsSectionBadge}
                    </Badge>

                    {/* Heading */}
                    <h2 className="text-4xl font-bold tracking-tight">
                        {DummyData.TestimonialsSectionTitle}
                    </h2>

                    {/* Description */}
                    <p className="mx-auto max-w-2xl text-gray-400">
                        {DummyData.TestimonialsSectionP}
                    </p>

                </div>

                {/* Testimonials */}
                <div className="mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {DummyData.Testimonials.map((testimonial) => (

                        <Card
                            key={testimonial.Name}
                            className="relative w-full overflow-hidden border-white/10 backdrop-blur-xl"
                        >

                            {/* Accent Glows */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

                            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

                            {/* Header */}
                            <CardHeader className="relative">

                                <div className="flex items-center gap-4">

                                    {/* Customer Avatar */}
                                    <Avatar className="h-14 w-14 border border-primary/30">

                                        <AvatarImage
                                            src={testimonial.Image}
                                            alt={testimonial.Name}
                                            className="grayscale"
                                        />

                                        <AvatarFallback>
                                            {testimonial.Name
                                                .split(" ")
                                                .map((name) => name[0])
                                                .join("")
                                                .slice(0, 2)
                                                .toUpperCase()}
                                        </AvatarFallback>

                                    </Avatar>

                                    {/* Customer Details */}
                                    <div className="min-w-0">

                                        <CardTitle className="text-base">
                                            {testimonial.Name}
                                        </CardTitle>

                                        <CardDescription className="text-sm text-muted-foreground">
                                            {testimonial.Role}
                                        </CardDescription>

                                    </div>

                                    {/* Verified Badge */}
                                    {testimonial.Verified && (
                                        <CardAction className="ml-auto">

                                            <Badge
                                                variant="secondary"
                                                className="border border-primary/20 bg-primary/10 text-primary"
                                            >
                                                ✓ Verified
                                            </Badge>

                                        </CardAction>
                                    )}

                                </div>

                            </CardHeader>

                            {/* Testimonial */}
                            <CardContent className="relative">

                                {/* Quote */}
                                <div className="mb-2 text-5xl font-bold leading-none text-primary/30">
                                    "
                                </div>

                                {/* Message */}
                                <p className="text-sm leading-7 text-muted-foreground">
                                    {testimonial.Message}
                                </p>

                                {/* Rating */}
                                <div className="mt-5 flex items-center gap-1">
                                    {[...Array(testimonial.Rating)].map(
                                        (_, index) => (
                                            <span
                                                key={index}
                                                className="text-lg text-yellow-400"
                                            >
                                                ★
                                            </span>
                                        )
                                    )}
                                    <span className="ml-2 text-xs text-gray-500">
                                        {testimonial.Rating.toFixed(1)}
                                    </span>
                                </div>
                            </CardContent>

                            {/* Footer */}
                            <CardFooter className="border-t border-white/10 pt-4">
                                <div className="flex w-full items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                        {testimonial.BusinessName ||
                                            DummyData.ClientBusinessName}
                                    </span>
                                    <span className="text-xs font-medium text-primary">
                                        {testimonial.Category}
                                    </span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
            <Separator />
        </div>
    );
}