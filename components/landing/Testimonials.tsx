import {Separator} from "@/components/ui/separator";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export function Testimonials() {
    return (
        <div className="p-10 justify-center items-center">
            <section className="space-y-10 py-24">
                {/* Section Heading */}
                <div className="space-y-3 text-center">
                    <Badge
                        variant="secondary"
                        className="border border-primary/20 bg-primary/10 text-primary"
                    >
                        Customer Reviews
                    </Badge>

                    <h2 className="text-4xl font-bold tracking-tight ">
                        What Our Customers Say
                    </h2>

                    <p className="mx-auto max-w-2xl text-gray-400">
                        Don't just take our word for it. See what the Psycho Society
                        community has to say about our designs, quality, and style.
                    </p>
                </div>

                {/* Testimonial Card */}
                <Card className="relative mx-auto w-full max-w-sm overflow-hidden border-white/10  backdrop-blur-xl">
                    {/* Red & Blue Accent Glows */}
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

                    <CardHeader className="relative">
                        <div className="flex items-center gap-4">
                            {/* Customer Avatar */}
                            <Avatar className="h-14 w-14 border border-primary/30">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="Customer"
                                    className="grayscale"
                                />
                                <AvatarFallback>
                                    JD
                                </AvatarFallback>
                            </Avatar>

                            {/* Customer Details */}
                            <div className="min-w-0">
                                <CardTitle className="text-base ">
                                    John Doe
                                </CardTitle>

                                <CardDescription className="text-sm text-muted-foreground">
                                    Verified Customer
                                </CardDescription>
                            </div>

                            {/* Verified Badge */}
                            <CardAction className="ml-auto">
                                <Badge
                                    variant="secondary"
                                    className="border border-primary/20 bg-primary/10 text-primary"
                                >
                                    ✓ Verified
                                </Badge>
                            </CardAction>
                        </div>
                    </CardHeader>

                    {/* Testimonial */}
                    <CardContent className="relative">
                        {/* Quote */}
                        <div className="mb-2 text-5xl font-bold leading-none text-primary/30">
                            "
                        </div>

                        <p className="text-sm leading-7 text-muted-foreground">
                            Absolutely love my Psycho Society tee! The design looks
                            even better in person and the quality is 🔥. Definitely
                            ordering again. The whole experience was amazing!
                        </p>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className="text-lg text-yellow-400"
                                >
                                    ★
                                </span>
                            ))}
                            <span className="ml-2 text-xs text-gray-500">
                                5.0
                            </span>
                        </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="border-t border-white/10 pt-4">
                        <div className="flex w-full items-center justify-between">
                            <span className="text-xs text-gray-500">
                                Psycho Society
                            </span>

                            <span className="text-xs font-medium text-primary">
                                Streetwear Collection
                            </span>
                        </div>
                    </CardFooter>
                </Card>
            </section>

            <Separator/>
        </div>
    );
}