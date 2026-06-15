import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function SettingsField({
  label,
  isEditing,
  setIsEditing,
  onSave,
  currentValue,
  fieldKey,
}: {
  label: string;
  isEditing: boolean;
  currentValue: string;
  onSave: (value: string) => void;
  setIsEditing: (value: string) => void;
  fieldKey: string;
}) {
  const [input, setInput] = useState(currentValue);

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        {isEditing ? (
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pl-2 h-6 text-xs text-muted-foreground  border-x-0 border-t-0 rounded-none shadow-none focus-visible:ring-0"
            autoFocus
          />
        ) : (
          <p className="pl-2 text-xs text-muted-foreground">{currentValue}</p>
        )}
      </div>
      {isEditing ? (
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => {
              onSave(input);
              setIsEditing('none');
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setInput(currentValue);
              setIsEditing('none');
            }}
          >
            {' '}
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditing(fieldKey)}
        >
          Edit
        </Button>
      )}
    </div>
  );
}
