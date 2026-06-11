import { Input } from './ui/input';
import { Field } from './ui/field';
import { Button } from './ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Searchbar({ initialInput }: { initialInput: string }) {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/?q=${input}`);
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
            onClick={() => navigate(`/search/?q=${input}`)}
            disabled={input.length < 3}
          >
            Search
          </Button>
        </Field>
      </form>
    </div>
  );
}
