import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import stylesheet from './tailwind.css?url';
import { LinksFunction } from '@remix-run/cloudflare';
import Header from './components/Header';
import Footer from './components/Footer';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
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
      <body className='content flex flex-col min-h-screen'>
        <Header />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
