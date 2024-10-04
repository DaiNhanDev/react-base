import React from 'react';
import { SearchFilter } from '../SearchFilter';
import { SearchResults } from '../SearchResults';
import { CategoryComponents } from 'components/Header/components/HeaderSearch';
import { NotFound } from 'components';
import * as S from './styled';

interface SearchOverlayProps {
  data: CategoryComponents[] | null;
  isFilterOpen: boolean;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  data,
  isFilterOpen,
}) => {
  return (
    <S.Menu>
      <SearchFilter data={data} isOpen={isFilterOpen}>
        {(filteredResults) =>
          filteredResults.length > 0 ? (
            <SearchResults results={filteredResults} />
          ) : (
            <NotFound />
          )
        }
      </SearchFilter>
    </S.Menu>
  );
};
