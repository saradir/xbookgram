import { ResultRow } from '@/components/ResultRow';
import { Searchbar } from '@/components/Searchbar';
import { Separator } from '@/components/ui/separator';
import { useSearch } from '@/hooks/useSearch';
import { useState } from 'react';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const { users, isError } = useSearch(query);

  const handleSearch = (query: string) => setQuery(query);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Searchbar onSubmit={handleSearch} />
      <Separator className="w-30" />
      <div className="flex flex-col justify-center w-80 divide-y">
        {users &&
          users.length > 0 &&
          users.map((u) => <ResultRow key={u.id} user={u} />)}
      </div>

      {!!query && users?.length === 0 && <div>No results found </div>}

      {isError && (
        <div>Query must contain between 3 to 20 alphanumerical characters </div>
      )}
    </div>
  );
}
