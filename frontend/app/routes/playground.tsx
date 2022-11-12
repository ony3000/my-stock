import { PageContainer } from '~/layouts';
import { Ordinary200Button, Unhandled404Button } from '~/components/playground';

export default function Playground() {
  return (
    <PageContainer className="pb-15 bg-gray-100" title="놀이터">
      <Ordinary200Button />
      <Unhandled404Button />
    </PageContainer>
  );
}
