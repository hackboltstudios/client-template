"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Background from "@/components/shared/Background";
import Image from "next/image";
import { ColorTheme } from "@/components/theme/Color-Theme";
import {SquareChevronLeft} from "lucide-react";
import Link from "next/link";
import ForgotPassword from "@/components/auth/ForgotPassword";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
      <div
          className={cn(
              "relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6  sm:px-8",
              className
          )}
          {...props}
      >
        {/* ========================= */}
        {/* GLOBAL BACKGROUND */}
        {/* ========================= */}

        <Background />

        {/* ========================= */}
        {/* MAIN CONTENT */}
        {/* ========================= */}

        <div className="relative z-10 w-full max-w-5xl">

          {/* ========================= */}
          {/* LOGIN CARD */}
          {/* ========================= */}

          <Card className="overflow-hidden border-border/50 bg-card/60 p-0 shadow-2xl shadow-primary/5 backdrop-blur-2xl">

            <CardContent className="grid p-0 md:grid-cols-2">

              {/* ========================= */}
              {/* LOGIN FORM */}
              {/* ========================= */}

              <form className="p-6 sm:p-8 lg:p-10">

                <FieldGroup>

                  {/* Brand / Header */}
                  <div className="flex flex-col items-center text-center">

                    <Badge
                        variant="secondary"
                        className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                      Welcome Back
                    </Badge>

                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                      Psycho Society{" "}
                      <span className="text-primary">
                                            Admin Panel
                                        </span>
                    </h1>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      Manage Your Websites Content, Upload Pictures to your Gallery.
                      Got Upcoming Event Create Website Notifications.
                    </p>

                  </div>


                  {/* Email */}
                  <Field className="mt-6">

                    <FieldLabel htmlFor="email">
                      Email Address
                    </FieldLabel>

                    <Input
                        id="email"
                        type="email"
                        required
                        className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-primary/50 focus:ring-primary/20"
                    />

                  </Field>


                  {/* Password */}
                  <Field>

                    <div className="flex items-center justify-between">

                      <FieldLabel htmlFor="password">
                        Password
                      </FieldLabel>

                      {/*<a className="text-sm text-primary underline-offset-4 transition-colors hover:underline">*/}
                      {/*  Forgot password?*/}
                      {/*</a>*/}
                      <ForgotPassword/>

                    </div>

                    <Input
                        id="password"
                        type="password"
                        required
                        className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-primary/50 focus:ring-primary/20"
                    />

                  </Field>


                  {/* Login Button */}
                  <Field>

                    <Button
                        type="submit"
                        className="group h-12 w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30"
                    >
                      Login
                    </Button>
                    <Link href="/">
                      <Button className="group h-12 w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30">
                        <SquareChevronLeft />
                        Back
                      </Button>
                    </Link>

                  </Field>


                  {/* Divider */}
                  {/*<FieldSeparator className="my-2">*/}
                  {/*  Or continue with*/}
                  {/*</FieldSeparator>*/}


                  {/* Social Login */}
                  {/*<Field className="grid grid-cols-3 gap-3">*/}

                  {/*  /!* Apple *!/*/}
                    <div className="hidden">
                      <ColorTheme />
                    </div>


                  {/*  /!* Google *!/*/}
                  {/*  <Button*/}
                  {/*      variant="outline"*/}
                  {/*      type="button"*/}
                  {/*      className="h-12 rounded-xl border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10"*/}
                  {/*  >*/}
                  {/*    <svg*/}
                  {/*        xmlns="http://www.w3.org/2000/svg"*/}
                  {/*        viewBox="0 0 24 24"*/}
                  {/*        className="h-5 w-5"*/}
                  {/*    >*/}
                  {/*      <path*/}
                  {/*          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"*/}
                  {/*          fill="currentColor"*/}
                  {/*      />*/}
                  {/*    </svg>*/}

                  {/*    <span className="sr-only">*/}
                  {/*                          Login with Google*/}
                  {/*                      </span>*/}
                  {/*  </Button>*/}


                  {/*  /!* Meta *!/*/}
                  {/*  <Button*/}
                  {/*      variant="outline"*/}
                  {/*      type="button"*/}
                  {/*      className="h-12 rounded-xl border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10"*/}
                  {/*  >*/}
                  {/*    <svg*/}
                  {/*        xmlns="http://www.w3.org/2000/svg"*/}
                  {/*        viewBox="0 0 24 24"*/}
                  {/*        className="h-5 w-5"*/}
                  {/*    >*/}
                  {/*      <path*/}
                  {/*          d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"*/}
                  {/*          fill="currentColor"*/}
                  {/*      />*/}
                  {/*    </svg>*/}

                  {/*    <span className="sr-only">*/}
                  {/*                          Login with Meta*/}
                  {/*                      </span>*/}
                  {/*  </Button>*/}

                  {/*</Field>*/}


                  {/* Sign Up */}
                  {/*<FieldDescription className="text-center">*/}
                  {/*  Don't have an account?{" "}*/}
                  {/*  <a*/}
                  {/*      href="#"*/}
                  {/*      className="font-semibold text-primary underline-offset-4 hover:underline"*/}
                  {/*  >*/}
                  {/*    Sign up*/}
                  {/*  </a>*/}
                  {/*</FieldDescription>*/}

                </FieldGroup>

              </form>


              {/* ========================= */}
              {/* BRANDING PANEL */}
              {/* ========================= */}

              <div className="relative hidden min-h-[600px] overflow-hidden border-l border-border/50 bg-primary/5 md:block">

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

                {/* Decorative Circles */}
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

                <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-10 text-center">

                  <div className="relative mb-8">

                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />

                    <Image
                        src="/images/StonerShirt.png"
                        alt="Psycho Society"
                        width={100}
                        height={100}
                        className="relative rounded-full border border-primary/20 shadow-2xl"
                    />

                  </div>

                  <h2 className="text-4xl font-black tracking-tight">
                    Wear Your
                    <br />

                    <span className="text-primary">
                                        Identity.
                                    </span>
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                    Bold designs. Custom streetwear.
                    Creative expression.
                  </p>

                  <div className="mt-8 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Be Different.
                  </div>

                </div>

              </div>

            </CardContent>

          </Card>


          {/* ========================= */}
          {/* TERMS */}
          {/* ========================= */}

          <FieldDescription className="mx-auto mt-6 max-w-lg px-6 text-center">
            By continuing, you agree to our{" "}
            <a
                href="#"
                className="text-primary underline-offset-4 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
                href="#"
                className="text-primary underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </FieldDescription>

        </div>

      </div>
  );
}