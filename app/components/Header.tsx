import { Link } from '@remix-run/react';

const Header = () => {
  return (
    <header className='p-2 py-3 md:p-6'>
      <nav className='flex justify-between items-center'>
        <Link to='/' className='text-3xl font-extrabold text-accent-400'>
          Muvi
        </Link>
        <div>
          {/* <Link to='/' className='mr-4'>
            Movies
          </Link>
          <Link to='/' className='mr-4'>
            About
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
