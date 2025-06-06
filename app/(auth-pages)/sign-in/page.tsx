"use client";

import { ModuleErrorBoundary } from "@/components/error-boundary";
import { AuthMethodSelector } from "@/core/forms/auth";
import Link from "next/link";

export default function SignInPage() {
  return (
    <ModuleErrorBoundary>
      <AuthMethodSelector
        defaultMethod="oauth"
        availableMethods={["oauth", "magic-link", "phone"]}
        pageType="sign-in"
        redirectTo="/protected"
        footerContent={
          <div className="space-y-4 text-sm text-muted-foreground text-center">
            <p>
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
            <div className="text-xs">
              By continuing, you agree to our{" "}
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
    </ModuleErrorBoundary>
  );
}
