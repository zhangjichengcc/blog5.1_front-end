/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 15:58:29
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-15 11:19:37
 * @FilePath: /blog5.1_front-end/src/components/Logo/index.tsx
 */
import logo from '@/assets/logo.png';
import styles from './index.module.less';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} />
      <span>ZhangJC</span>
    </div>
  );
}
