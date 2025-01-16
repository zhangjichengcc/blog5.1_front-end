/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:09:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-16 17:02:34
 * @FilePath: /blog5.1_front-end/src/pages/Home/Portfolio/index.tsx
 */

import docsPreview from '@/assets/Home/project-docs.png';
import excalidraw from '@/assets/Home/project-excalidraw.png';
import PartTitle from '@/components/PartTitle';
import { type PartComponentProps } from '@/pages/Home';
import { useAppSelector } from '@/store';
import { formatDataset } from '@/utils/tools';
import classnames from 'classnames';
import { FC } from 'react';

import styles from './index.module.less';

const PortfolioItem = [
  {
    title: 'Personal docs',
    info: '个人开发文档，记录开发学习过程和问题',
    preview: docsPreview,
    url: '',
  },
  {
    title: '绘图工具',
    info: '基于 Excalidraw 开发的绘图工具，处理汉字的手绘风格',
    preview: excalidraw,
    url: '',
  },
];

const Portfolio: FC<PartComponentProps> = (props) => {
  const { style, id, dataset = {} } = props;

  const grid = useAppSelector((state) => state.global.gird);

  const datasetMap = formatDataset(dataset);

  function openView(url: string) {
    window.open(url);
  }

  return (
    <div
      id={id}
      className={classnames(styles.portfolio, grid && styles['grid-' + grid])}
      style={style}
      {...datasetMap}
    >
      <PartTitle style={{ paddingTop: 20 }} position="center">
        Portfolio
      </PartTitle>
      <div className={styles.container}>
        {PortfolioItem.map((item) => {
          const { title, info, preview, url } = item;

          return (
            <div key={title} className={styles.card}>
              <div
                className={styles.preview}
                style={{ backgroundImage: `url(${preview})` }}
                onClick={() => openView(url)}
              />
              <p className={styles.title}>{title}</p>
              <span className={styles.info}>{info}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
