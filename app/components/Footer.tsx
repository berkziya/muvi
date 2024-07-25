import { Link } from '@remix-run/react';

const Footer: React.FC = () => {
  return (
    <footer className='p-4 mt-8'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} Muvi. All rights reserved.</p>
        <div className='flex justify-center space-x-4 mt-2'>
          <Link to='/' className='hover:underline'>
            About Us
          </Link>
          <Link to='/' className='hover:underline'>
            Privacy Policy
          </Link>
          <Link to='/' className='hover:underline'>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
