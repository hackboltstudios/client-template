import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Input } from "../ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";


const ContactForm = () => {
    return (
        <div className="relative">
            {/* Form Card */}
            <Card className="border-border/50 bg-card/50 shadow-2xl backdrop-blur-xl">
                <CardHeader className="pb-6">
                    <CardTitle className="text-xl font-bold">
                        Start Your Custom Order
                    </CardTitle>

                    <CardDescription className="mt-2 text-sm leading-6">
                        Fill in the details below and we'll get back to you
                        as soon as possible.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-5">

                        {/* Name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium"
                            >
                                Your Name
                            </label>

                            <Input
                                id="name"
                                name="name"
                                className="h-12 rounded-xl bg-background/50 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email Address
                            </label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                className="h-12 rounded-xl bg-background/50 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label
                                htmlFor="phone"
                                className="text-sm font-medium"
                            >
                                Phone Number
                            </label>

                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="h-12 rounded-xl bg-background/50 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                                placeholder="+27 00 000 0000"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium"
                            >
                                Tell Us About Your Idea
                            </label>

                            <Textarea
                                id="message"
                                name="message"
                                className="min-h-[140px] resize-none rounded-xl bg-background/50 placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                                placeholder="Tell us what you'd like to create..."
                            />
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="group h-12 w-full rounded-xl font-semibold"
                        >
                            Send Enquiry

                            <ArrowRight
                                size={18}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContactForm;