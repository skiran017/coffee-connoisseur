import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CoffeeStore() {
  const router = useRouter();
  return (
    <div>
      Coffee store
      {/* better to use Link when routing in the webapp without reload and to use a with href to use external routes */}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
}
