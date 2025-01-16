/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 15:47:48
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-15 10:19:47
 * @FilePath: /blog5.1_front-end/src/components/HomeMenu/TopMenu/index.tsx
 */
import { type MenuItem } from '@/components/HomeMenu';
import Logo from '@/components/Logo';
import { useScroll } from 'ahooks';
import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';
import Menu from './Menu';

import styles from './index.module.less';

interface Props {
  menu: Array<MenuItem>;
  activeKey?: string;
  onHeightChange?: (height: number) => void;
}

const Header: FC<Props> = (props) => {
  const { menu, activeKey, onHeightChange } = props;

  const scroll = useScroll();

  const [menuHeight, setMenuHeight] = useState(90);

  function scrollFn() {
    // scroller.current?.scrollTo(700)
  }

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(menuHeight);
    }
  }, [menuHeight, onHeightChange]);

  useEffect(() => {
    setMenuHeight(scroll?.top || 0 > 200 ? 60 : 90);
  }, [scroll?.top]);

  return (
    <div
      className={classnames({
        [styles.Header]: true,
        [styles.active]: scroll?.top && scroll?.top > 200,
      })}
      style={{ '--menu-height': menuHeight + 'px' } as React.CSSProperties}
    >
      <div className={styles.container}>
        <Logo />
        <div className={styles.rightContent}>
          <Menu menu={menu} activeKey={activeKey} />
          <button className={styles.cv} onClick={scrollFn}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
