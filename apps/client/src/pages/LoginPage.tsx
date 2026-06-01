import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from '@/components/ui/card';
export function LoginPage() {
  return (
    <div className="bg-muted h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <img
          src={logo}
          alt="logo"
          className="relative h-24 z-20 object-contain mt-4 w-full object-cover  mb-0 pb-0"
        />

        <CardHeader className="pt-0">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Use your Google account to login or continue as a guest
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <Button asChild className="w-full">
            <a href={`${import.meta.env.VITE_API_URL}/auth/google`}>
              Login with Google
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href={`${import.meta.env.VITE_API_URL}/auth/guest-login`}>
              Continue as guest
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
