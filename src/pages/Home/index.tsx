/*
 * @Author: zhangjicheng
 * @Date: 2025-01-10 15:38:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-14 11:44:24
 * @FilePath: /blog5.1_front-end/src/pages/Home/index.tsx
 * @Description: Do not edit
 */
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home: FC = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('a'));

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default Home;
