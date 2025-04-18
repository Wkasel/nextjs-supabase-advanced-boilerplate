"use client";

import { AuthProvider } from "@/components/auth";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AuthProvider
      defaultMethod="oauth"
      availableMethods={["oauth", "magic-link", "phone"]}
      footerContent={
        <div className="space-y-4 text-sm text-muted-foreground text-center">
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
          <div className="text-xs">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      }
    />
  );
}
