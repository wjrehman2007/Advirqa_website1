'use client';
import Link from 'next/link';
export default function ErrorState({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="wrap section">
      <h1>Something went wrong</h1>
      <p>Try again or return to the homepage.</p>
      <button className="button primary" onClick={reset}>
        Try again
      </button>{' '}
      <Link href="/">Back to home</Link>
    </main>
  );
}
