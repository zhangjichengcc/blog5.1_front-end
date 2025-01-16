/*
 * @Author: zhangjicheng
 * @Date: 2025-01-14 14:43:30
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-16 17:07:13
 * @FilePath: /blog5.1_front-end/src/pages/Home/index.tsx
 * @Description: Do not edit
 */

import { TopMenu } from '@/components/HomeMenu';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import About from './About';
import Banner from './Banner';
import Blog from './Blog';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Service from './Service';

import { useDebounceFn } from 'ahooks';
import styles from './index.module.less';

export interface PartComponentProps {
  style?: CSSProperties;
  id?: string;
  dataset?: Record<string, string>;
}

/** 首页模块列表 */
const sections: {
  component: FC<PartComponentProps>;
  label: string;
  key: string;
}[] = [
  {
    component: Banner,
    label: 'Banner',
    key: 'banner',
  },
  {
    component: About,
    label: 'About',
    key: 'about',
  },
  {
    component: Portfolio,
    label: 'Portfolio',
    key: 'portfolio',
  },
  {
    component: Service,
    label: 'Service',
    key: 'service',
  },
  {
    component: Contact,
    label: 'Contact',
    key: 'contact',
  },
  {
    component: Blog,
    label: 'Blog',
    key: 'blog',
  },
];

/** Home 导航key集合 */
export type MenuKey = (typeof sections)[number]['key'];

// 注册插件
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [activeKey, setActiveKey] = useState<MenuKey>('banner');

  /**
   * 使用函数节流设置激活菜单，防止频繁触发activeKey
   */
  const { run: setActiveMenuDebounce } = useDebounceFn(
    (key: MenuKey) => {
      setActiveKey(key);
    },
    {
      wait: 300,
    },
  ) as { run: (key: MenuKey) => void };

  /**
   * 监听滚动，设置当前模块
   */
  function bindMenuScroll() {
    const { childNodes } = ref.current!;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          const { dataset } = target as HTMLElement;
          if (isIntersecting) {
            const { label, key } = dataset;
            setActiveMenuDebounce(key as MenuKey);
            document.title = label!;
          }
        });
      },
      { threshold: 0.5 },
    );

    childNodes.forEach((node) => {
      if (node instanceof Element) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }

  useEffect(() => {
    bindMenuScroll();
  });

  return (
    <div className={styles.home}>
      <TopMenu menu={sections} activeKey={activeKey} />
      <div ref={ref} className={styles.container}>
        {sections.map((item) => {
          const Component = item.component;
          return Component ? (
            <Component
              dataset={{
                label: item.label,
                key: item.key,
              }}
              id={item.key}
              key={item.key}
              style={{
                transition: 'padding .3s ease',
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Home;
