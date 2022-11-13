import { ErrorDialog } from '~/components';
import {
  Conditional200Button,
  Conditional204Button,
  Handled400Button,
  Handled403Button,
  Ordinary200Button,
  Ordinary201Button,
  Unhandled400Button,
  Unhandled403Button,
  Unhandled404Button,
  Unhandled405Button,
} from '~/components/playground';

export default function Playground() {
  return (
    <div className="container min-h-screen bg-gray-100">
      <h1 className="sr-only">놀이터</h1>
      <main>
        <div>
          <h2>GET method</h2>
          <Ordinary200Button />
          <Unhandled404Button />
        </div>
        <div>
          <h2>POST method</h2>
          <Ordinary201Button />
          <Unhandled403Button />
          <Unhandled400Button />
        </div>
        <div>
          <h2>PUT method</h2>
          <Unhandled405Button />
        </div>
        <div>
          <h2>PATCH method</h2>
          <Conditional200Button />
          <Handled403Button />
          <Handled400Button />
        </div>
        <div>
          <h2>DELETE method</h2>
          <Conditional204Button />
        </div>
      </main>
      <ErrorDialog />
    </div>
  );
}
