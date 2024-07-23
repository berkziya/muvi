import { Outlet } from '@remix-run/react';

export default function Content() {
  return (
    <div className='flex flex-row'>
      <Outlet />
    </div>
  );
}
