import { Outlet } from '@remix-run/react';

export default function Content() {
  return (
    <div className='flex flex-col'>
      <Outlet />
      <div className='p-4'>
        {/* <h1 className='text-2xl font-semibold text-accent-300'>Comments</h1> */}
      </div>
    </div>
  );
}
