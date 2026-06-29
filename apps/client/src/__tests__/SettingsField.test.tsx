import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SettingsField } from '../components/SettingsField';

const mockValidator = (value: string) => {
  if (value.length < 4) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {
      success: false as const,
      error: { issues: [{ message: 'Too short' }] },
    } as any;
  }
  return { success: true as const, data: value };
};

const defaultProps = {
  label: 'Username',
  isEditing: true,
  currentValue: 'john',
  onSave: vi.fn(),
  setIsEditing: vi.fn(),
  fieldKey: 'username',
  validator: mockValidator,
};

describe('test input', () => {
  it('shows error when input is invalid', async () => {
    const user = userEvent.setup();
    render(<SettingsField {...defaultProps} />);

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, 'ab');

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(defaultProps.onSave).not.toHaveBeenCalled();
    expect(screen.getByText('Too short')).toBeInTheDocument();
  });

  it('removes error with new input', async () => {
    const user = userEvent.setup();
    render(<SettingsField {...defaultProps} />);

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, 'ab');

    await user.click(screen.getByRole('button', { name: 'Save' }));
    await user.type(input, 'abcd');

    expect(screen.queryByText('Too short')).not.toBeInTheDocument();
  });

  it('calls onSave when input is valid and exits edit mode', async () => {
    const user = userEvent.setup();
    render(<SettingsField {...defaultProps} />);

    const input = screen.getByRole('textbox');
    await user.clear(input);
    await user.type(input, 'valid');

    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(defaultProps.onSave).toHaveBeenCalledWith('valid');
    expect(defaultProps.setIsEditing).toHaveBeenCalledWith('none');
  });
});
