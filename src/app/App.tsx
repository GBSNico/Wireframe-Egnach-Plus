import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="size-full bg-gray-50 flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}