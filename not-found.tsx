import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="wrap section">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page may have moved or been removed.</p>
      <Link className="button primary" href="/">
        Back to home
      </Link>
    </main>
  );
}
