import { useCurrentUser } from '@/hooks/useCurrentUser';
import { OnboardingForm } from '@/components/OnboardingForm';

export function OnboardingPage() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) return null;

  return (
    <div className="bg-muted h-screen flex items-center justify-center">
      <OnboardingForm user={currentUser.user} />
    </div>
  );
}
