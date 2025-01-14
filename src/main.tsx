import routes from '@/routes.tsx';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@/styles/global.less';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div style={{ color: '#fff' }}>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
