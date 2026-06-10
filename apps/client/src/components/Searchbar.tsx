import { useState } from 'react';
import { Input } from './ui/input';
import { Field } from './ui/field';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { useSearch } from '@/hooks/useSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { ResultRow } from './ResultRow';

export function Searchbar() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 1000);
  const { users } = useSearch(debouncedQuery);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) setShowResults(true);
  };
  return (
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
          {users?.map((u) => (
            <ResultRow key={u.id} user={u} />
          ))}
        </div>
      )}

      <Button className="cursor-pointer" variant={'ghost'}>
        <Search />
      </Button>
    </Field>
  );
}
