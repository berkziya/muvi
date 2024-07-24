import { Link } from '@remix-run/react';

const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-xl font-bold'>
          Muvi
        </Link>
        <div>
          {/* <Link to='/movies' className='mr-4'>
            Movies
          </Link>
          <Link to='/about' className='mr-4'>
            About
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
