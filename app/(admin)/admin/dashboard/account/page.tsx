"use client";

import { useState } from "react";
import {
    Building2,
    Camera,
    Globe,
    Mail,
    MapPin,
    Phone,
    Save,
    User,
} from "lucide-react";

import { FaInstagram, FaLinkedin, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Account = () => {
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);

        // TODO: Save client information to your API/database

        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
    };

    return (
        <div className="relative min-h-screen space-y-10 p-4">

            {/* PAGE HEADER */}

            <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <User className="size-4" />
                    Account Settings
                </div>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    Your Account
                </h1>

                <p className="mt-3 max-w-2xl text-muted-foreground">
                    Manage your personal information, business details,
                    contact information, and social media profiles.
                </p>
            </div>

            {/* PROFILE HEADER */}

            <Card className="relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

                <CardContent className="relative z-10 p-6 sm:p-8">

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                        {/* Profile Picture */}

                        <div className="relative">

                            <div className="flex size-28 items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-primary/10 text-primary shadow-xl shadow-primary/10 sm:size-32">

                                {/* Replace with Image when client uploads a photo */}
                                <User className="size-14 sm:size-16" />

                            </div>

                            <Button
                                size="icon"
                                className="absolute bottom-0 right-0 size-10 rounded-full border-4 border-background shadow-lg"
                            >
                                <Camera className="size-4" />

                                <span className="sr-only">
                                    Change profile picture
                                </span>
                            </Button>

                        </div>


                        {/* Profile Information */}

                        <div className="flex-1">

                            <h2 className="text-2xl font-bold">
                                John Doe
                            </h2>

                            <p className="mt-1 text-muted-foreground">
                                Business Owner
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">

                                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500">
                                    Account Active
                                </span>

                                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                    Client
                                </span>

                            </div>

                        </div>


                        {/* Save Button */}

                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="rounded-xl h-10"
                        >
                            <div className="inline-flex items-center">
                                <Save className="mr-2 size-4" />

                                {isSaving ? "Saving..." : "Save Changes"}
                            </div>
                        </Button>

                    </div>

                </CardContent>

            </Card>

            {/* PERSONAL INFORMATION */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>

                    <div className="flex items-center gap-3">

                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <User className="size-5" />
                        </div>

                        <div>
                            <CardTitle>
                                Personal Information
                            </CardTitle>

                            <CardDescription>
                                Your personal contact and account information.
                            </CardDescription>
                        </div>

                    </div>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="space-y-2">
                            <Label htmlFor="firstName">
                                First Name
                            </Label>

                            <Input
                                id="firstName"
                                defaultValue="John"
                                placeholder="Enter your first name"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="surname">
                                Surname
                            </Label>

                            <Input
                                id="surname"
                                defaultValue="Doe"
                                placeholder="Enter your surname"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Personal Email Address
                            </Label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue="john@example.com"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="phone">
                                Personal Phone Number
                            </Label>

                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="phone"
                                    type="tel"
                                    defaultValue="+27 65 553 4049"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* BUSINESS INFORMATION */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>

                    <div className="flex items-center gap-3">

                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Building2 className="size-5" />
                        </div>

                        <div>
                            <CardTitle>
                                Business Information
                            </CardTitle>

                            <CardDescription>
                                Information about your business or organization.
                            </CardDescription>
                        </div>

                    </div>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="space-y-2">
                            <Label htmlFor="businessName">
                                Business Name
                            </Label>

                            <Input
                                id="businessName"
                                defaultValue="Psycho Society"
                                placeholder="Enter your business name"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="registrationNumber">
                                Company Registration Number
                            </Label>

                            <Input
                                id="registrationNumber"
                                placeholder="Optional"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="businessEmail">
                                Business Email
                            </Label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="businessEmail"
                                    type="email"
                                    defaultValue="info@psychosociety.com"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="businessPhone">
                                Business Phone
                            </Label>

                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="businessPhone"
                                    type="tel"
                                    placeholder="+27 00 000 0000"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="website">
                                Business Website
                            </Label>

                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="website"
                                    type="url"
                                    placeholder="https://www.example.com"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* BUSINESS ADDRESS */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>

                    <div className="flex items-center gap-3">

                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <MapPin className="size-5" />
                        </div>

                        <div>
                            <CardTitle>
                                Business Address
                            </CardTitle>

                            <CardDescription>
                                Your business location and physical address.
                            </CardDescription>
                        </div>

                    </div>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="space-y-2 sm:col-span-2">
                            <Label htmlFor="address">
                                Street Address
                            </Label>

                            <Input
                                id="address"
                                placeholder="Enter your street address"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="city">
                                City
                            </Label>

                            <Input
                                id="city"
                                placeholder="Enter city"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="province">
                                Province / State
                            </Label>

                            <Input
                                id="province"
                                placeholder="Enter province or state"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="postalCode">
                                Postal Code
                            </Label>

                            <Input
                                id="postalCode"
                                placeholder="Enter postal code"
                                className="h-12 rounded-xl"
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="country">
                                Country
                            </Label>

                            <Input
                                id="country"
                                defaultValue="South Africa"
                                className="h-12 rounded-xl"
                            />
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* SOCIAL MEDIA */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>

                    <div className="flex items-center gap-3">

                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Globe className="size-5" />
                        </div>

                        <div>
                            <CardTitle>
                                Social Media & Online Presence
                            </CardTitle>

                            <CardDescription>
                                Add your business social media profiles and
                                online platforms.
                            </CardDescription>
                        </div>

                    </div>

                </CardHeader>


                <CardContent>

                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="space-y-2">
                            <Label htmlFor="instagram">
                                Instagram
                            </Label>

                            <div className="relative">
                                <FaInstagram className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="instagram"
                                    placeholder="https://instagram.com/yourbusiness"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="facebook">
                                Facebook
                            </Label>

                            <div className="relative">
                                <FaFacebookSquare className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="facebook"
                                    placeholder="https://facebook.com/yourbusiness"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="linkedin">
                                LinkedIn
                            </Label>

                            <div className="relative">
                                <FaLinkedin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="linkedin"
                                    placeholder="https://linkedin.com/company/yourbusiness"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="youtube">
                                YouTube
                            </Label>

                            <div className="relative">
                                <FaYoutube className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="youtube"
                                    placeholder="https://youtube.com/@yourbusiness"
                                    className="h-12 rounded-xl pl-10"
                                />
                            </div>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* ADDITIONAL INFORMATION */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>
                    <CardTitle>
                        Additional Information
                    </CardTitle>

                    <CardDescription>
                        Add any additional information about yourself or your
                        business.
                    </CardDescription>
                </CardHeader>


                <CardContent>

                    <div className="space-y-2">

                        <Label htmlFor="additionalInfo">
                            About Your Business
                        </Label>

                        <Textarea
                            id="additionalInfo"
                            placeholder="Tell us a little about your business..."
                            className="min-h-[140px] resize-none rounded-xl"
                        />

                    </div>

                </CardContent>

            </Card>

            {/* BOTTOM SAVE */}

            <div className="flex justify-end pb-8">

                <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    size="lg"
                    className="rounded-xl h-10 px-8"
                >
                    <div className="inline-flex items-center">
                        <Save className="mr-2 size-4" />

                        {isSaving ? "Saving Changes..." : "Save Account Information"}
                    </div>
                </Button>

            </div>

        </div>
    );
};

export default Account;