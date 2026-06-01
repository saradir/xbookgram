import { Button } from '@/components/ui/button';
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
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Use your Google account to login</CardDescription>
          <CardAction></CardAction>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <Button asChild className="w-full">
            <a href={`${import.meta.env.VITE_API_URL}/auth/google`}>
              Login with Google
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href={`${import.meta.env.VITE_API_URL}/auth/google`}>
              Continue as guest
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
