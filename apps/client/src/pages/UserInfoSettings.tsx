import { ProfilePic } from '@/components/ProfilePic';
import { SettingsField } from '@/components/SettingsField';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useEditProfile } from '@/hooks/useEditProfile';
import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { useUploadAvatar } from '@/hooks/useUploadAvatar';
import { UserBodySchema } from '@xbookgram/shared';

export function UserInfoSettings() {
  const { currentUser } = useCurrentUser();
  const [isEditing, setIsEditing] = useState('none');
  const { mutate } = useEditProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: uploadAvatar } = useUploadAvatar();

  return (
    <div className="flex flex-col gap-2 px-4 w-100">
      <div className="relative w-20 h-20 rounded-full overflow-hidden group cursor-pointer">
        <ProfilePic
          src={currentUser?.user.profilePic}
          username={currentUser?.user.username || ''}
          className="h-20 w-20"
        />
        <div
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform"
        >
          <Camera size={12} className="text-white" />
          <span className="text-white text-[10px]">Upload</span>
        </div>
      </div>
      <SettingsField
        key={currentUser?.user.username}
        label="Username"
        fieldKey="username"
        isEditing={isEditing === 'username'}
        currentValue={currentUser?.user.username || ''}
        setIsEditing={setIsEditing}
        onSave={(value) => mutate({ username: value })}
        validator={(value) => UserBodySchema.shape.username.safeParse(value)}
      />
      <SettingsField
        key={currentUser?.user.name}
        label="Name"
        fieldKey="name"
        isEditing={isEditing === 'name'}
        currentValue={currentUser?.user.name || ''}
        setIsEditing={setIsEditing}
        onSave={(value) => mutate({ name: value })}
        validator={(value) => UserBodySchema.shape.name.safeParse(value)}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadAvatar(file);
        }}
      />
    </div>
  );
}
