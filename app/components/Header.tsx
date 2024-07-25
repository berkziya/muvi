import { Link } from '@remix-run/react';

const Header = () => {
  return (
    <header className='p-6'>
      <nav className='flex justify-between items-center'>
        <Link to='/' className='text-3xl mx-10 font-extrabold text-accent-400'>
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
