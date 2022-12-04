import type { SearchableStock } from '~/types/models';
import { ContentWrapper } from '~/components/common';
import { makeGravatarUrl } from '~/utils/gravatar';

type StockListProps = {
  items: SearchableStock[];
};

export default function StockList({ items }: StockListProps) {
  return (
    <ContentWrapper>
      <ul>
        {items.map(({
          code, logoImage, readableName,
        }) => (
          <li key={code} className="flex items-center h-13.75 whitespace-nowrap">
            <div>
              <img
                className="w-7.5 h-7.5 object-contain rounded-full"
                src={logoImage ?? makeGravatarUrl(code)}
                alt={`${readableName} 아이콘`}
              />
            </div>
            <div className="flex-1 overflow-hidden flex items-center">
              <div className="overflow-hidden text-ellipsis ml-2.5 font-semibold">{readableName}</div>
              <div className="ml-1.5 text-xs text-gray-500">{code}</div>
            </div>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
}
