import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfilePic({
  src,
  username,
  className,
}: {
  src?: string | null;
  username: string;
  className?: string;
}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src ?? undefined} alt="profile-pic" />
      <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
