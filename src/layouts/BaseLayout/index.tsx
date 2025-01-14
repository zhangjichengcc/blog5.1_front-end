import { Suspense } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';

const MainLayout = () => {
  const navigation = useNavigation();

  console.log(navigation.state);

  return (
    <div>
      <header>
        <nav>
          <Link to="/?a=1">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main>
        {navigation.state === 'loading' && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              background: 'blue',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Loading...
          </div>
        )}
        <Suspense fallback={<div style={{ color: '#fff' }}>Loading...</div>}>
          <Outlet /> {/* 渲染子路由的内容 */}
        </Suspense>
      </main>
      <footer>{`© 2025 zhangjicheng's blog`}</footer>
    </div>
  );
};

export default MainLayout;
