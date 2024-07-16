import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <main>
        <div>
          <div style={{marginBottom: '20px'}}>
            <Link href="/ssg">SSG</Link>
          </div>
          <div style={{marginBottom: '20px'}}>
            <Link href="/ssr">SSR</Link>
          </div>
          <div>
            <Link href="/csr">CSR</Link>
          </div>
        </div>

        <h1>Welcome To The Home Page</h1>
      </main>
    </>
  );
}
