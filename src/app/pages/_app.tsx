import React from 'react';
import { AppProps } from 'next/app';
import '../globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="bg-gray-800 p-4">
        <nav>
          <Link href="/">Home</Link> |
          <Link href="/Tasks">Tasks</Link> |
          <Link href="/NewTasks">New Tasks</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
