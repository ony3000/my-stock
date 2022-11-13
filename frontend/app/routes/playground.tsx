import { PageContainer } from '~/layouts';
import {
  Ordinary200Button,
  Ordinary201Button,
  Unhandled400Button,
  Unhandled403Button,
  Unhandled404Button,
  Unhandled405Button,
} from '~/components/playground';

export default function Playground() {
  return (
    <PageContainer className="pb-15 bg-gray-100" title="놀이터">
      <div>
        <Ordinary200Button />
        <Unhandled404Button />
      </div>
      <div>
        <Ordinary201Button />
        <Unhandled403Button />
        <Unhandled400Button />
      </div>
      <div>
        <Unhandled405Button />
      </div>
    </PageContainer>
  );
}
