import { useState } from 'react';
import { Input } from './ui/input';
import { Field } from './ui/field';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { useSearch } from '@/hooks/useSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { ResultRowLive } from './ResultRowLive';
import { useNavigate } from 'react-router-dom';
import { Spinner } from './ui/spinner';

export function SearchbarLive() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 1000);
  const { users, isPending } = useSearch(debouncedQuery);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) setShowResults(true);
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <Field
        orientation="horizontal"
        className="relative border-none bg-muted rounded-md"
      >
        <Input
          type="search"
          placeholder="Type to search"
          value={query}
          onChange={handleChange}
          className="focus-visible:ring-0 focus:outline-none border-none"
          onBlur={() => setShowResults(false)}
          onFocus={() => {
            if (query.length > 2) setShowResults(true);
          }}
        />
        {showResults && (
          <div className="absolute top-full left-0 w-full z-50 bg-background  rounded-md shadow-md">
            {isPending && <Spinner />}
            {users?.map((u) => (
              <ResultRowLive key={u.id} user={u} />
            ))}
          </div>
        )}
        <Button className="cursor-pointer" variant={'ghost'} type="submit">
          <Search />
        </Button>
      </Field>
    </form>
  );
}
