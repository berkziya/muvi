import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { LinksFunction } from '@remix-run/cloudflare';
import stylesheet from './tailwind.css?url';
import Header from './components/Header';
import Footer from './components/Footer';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    rel: 'stylesheet',
  },
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='flex flex-col min-h-screen bg-background-950 text-text-100'>
        <div className='grow mx-auto w-10/12 md:w-8/12'>
          <Header />
          <Outlet />
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
