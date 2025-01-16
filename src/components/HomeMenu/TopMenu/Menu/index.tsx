/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:41:44
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-15 11:20:16
 * @FilePath: /blog5.1_front-end/src/components/HomeMenu/TopMenu/Menu/index.tsx
 */
import classnames from 'classnames';
import { useEffect } from 'react';
// import { deepClone } from '@/utils';
import { type MenuItem } from '@/components/HomeMenu';
import { useScroll } from 'ahooks';

import styles from './index.module.less';

interface Props {
  menu: Array<MenuItem>;
  activeKey?: string;
}

export default function Menu(props: Props) {
  const { menu = [], activeKey } = props;

  const position = useScroll();

  // function goView(item: MenuItem) {
  //   // .
  // }

  function matchActive() {
    // if (!scroll) return;
    // for (const item of menu) {
    //   const {
    //     domRect: { top },
    //     key,
    //   } = item;
    //   if (scroll?.top >= top - 100) {
    //     setActiveKey(key);
    //     break;
    //   }
    // }
  }

  useEffect(() => {
    matchActive();
  }, [position?.top]);

  return (
    <ul className={styles.menu}>
      {menu.map((item) => {
        const { label } = item;
        return (
          <li
            className={classnames({ [styles.active]: activeKey === item.key })}
            key={label}
          >
            <a href={`#${item.key}`}>{label}</a>
          </li>
        );
      })}
    </ul>
  );
}
