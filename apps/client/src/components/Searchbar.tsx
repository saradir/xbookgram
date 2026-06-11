import { Input } from './ui/input';
import { Field } from './ui/field';
import { Button } from './ui/button';
import { useState } from 'react';

export function Searchbar({
  onSubmit,
  initialInput,
}: {
  initialInput: string;
  onSubmit: (query: string) => void;
}) {
  const [input, setInput] = useState(initialInput);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(input);
        }}
      >
        <Field
          orientation="horizontal"
          className="relative  bg-accent rounded-md m-5"
        >
          <Input
            id="search"
            name="search"
            type="search"
            placeholder="Type to search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus-visible:ring-0 focus:outline-none border bg-background "
          />
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() => onSubmit(input)}
            disabled={input.length < 3}
          >
            Search
          </Button>
        </Field>
      </form>
    </div>
  );
}
