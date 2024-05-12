import { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  useEffect(() => {
    const btn = document.getElementById('menu_btn');
    const nav = document.getElementById('menu');

    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('hidden');
    });
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
