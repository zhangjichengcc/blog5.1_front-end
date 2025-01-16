import GridContainer from '@/components/GridContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        {/* <nav>
          <Link to="/?a=1">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/dashboard">Dashboard</Link>
        </nav> */}
      </header>
      <GridContainer>
        <main>
          <Suspense fallback={<div style={{ color: '#fff' }}>Loading...</div>}>
            <Outlet /> {/* 渲染子路由的内容 */}
          </Suspense>
        </main>
        <footer>{`© 2025 zhangjicheng's blog`}</footer>
      </GridContainer>
    </div>
  );
};

export default MainLayout;
