import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ZodError } from 'zod';

type Validator = (
  value: string
) =>
  | { success: true; data: string | undefined }
  | { success: false; error: ZodError };

export function SettingsField({
  label,
  isEditing,
  setIsEditing,
  onSave,
  currentValue,
  fieldKey,
  validator,
}: {
  label: string;
  isEditing: boolean;
  currentValue: string;
  onSave: (value: string) => void;
  setIsEditing: (value: string) => void;
  fieldKey: string;
  validator: Validator;
}) {
  const [input, setInput] = useState(currentValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (): boolean => {
    const result = validator(input);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSave(input);
    setIsEditing('none');
  };

  const handleCancel = () => {
    setInput(currentValue);
    setError(null);
    setIsEditing('none');
  };

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium">{label}</p>
        {isEditing ? (
          <div>
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
              }}
              className="pl-2 h-6 text-xs text-muted-foreground border-x-0 border-t-0 rounded-none shadow-none focus-visible:ring-0"
              autoFocus
            />
            {error && <p className="text-xs text-destructive mt-1">{error}</p>}
          </div>
        ) : (
          <p className="pl-2 text-xs text-muted-foreground">{currentValue}</p>
        )}
      </div>
      {isEditing ? (
        <div className="flex gap-2">
          <Button size="sm" onClick={handleSubmit}>
            Save
          </Button>
          <Button size="sm" variant="ghost" onClick={handleCancel}>
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
