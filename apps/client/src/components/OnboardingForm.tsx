import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import { UserOnboardingSchema, type CurrentUser } from '@xbookgram/shared';

export function OnboardingForm({ user }: { user: CurrentUser }) {
  const [username, setUsername] = useState(user.username || '');
  const [name, setName] = useState(user.name || '');
  const [error, setError] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { username: string; name: string }) =>
      apiFetch('/auth/onboard', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log('handling');
    setError('');
    e.preventDefault();
    const result = UserOnboardingSchema.safeParse({ username, name });
    if (!result.success) {
      setError(result.error.issues.map((i) => i.message).join(', '));
      return;
    }
    mutation.mutate({ username, name });
  };
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>
          Please fill in or confirm the details below to start using Xbookgram
        </CardDescription>
        {error && <div>{error}</div>}
      </CardHeader>

      <CardContent>
        <form id="onboarding-form" onSubmit={handleSubmit} action="post">
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button form="onboarding-form" type="submit" className="w-full">
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
}
