/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:09:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-14 18:29:25
 * @FilePath: /blog5.1_front-end/src/pages/Home/Blog/index.tsx
 */

import { formatDataset } from '@/utils/tools';
import { CSSProperties, forwardRef } from 'react';
import styles from './index.module.less';

const Blog = forwardRef<
  HTMLDivElement,
  { style?: CSSProperties; id?: string; dataset?: Record<string, any> }
>((props, ref) => {
  const { style, id, dataset = {} } = props;

  const datasetMap = formatDataset(dataset);

  return (
    <div
      id={id}
      style={style}
      ref={ref}
      className={styles.blog}
      {...datasetMap}
    ></div>
  );
});

export default Blog;
