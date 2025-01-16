/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:09:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-16 16:59:48
 * @FilePath: /blog5.1_front-end/src/pages/Home/Service/index.tsx
 */

import { type PartComponentProps } from '@/pages/Home';
import { formatDataset } from '@/utils/tools';

import { FC } from 'react';
import styles from './index.module.less';

const Service: FC<PartComponentProps> = (props) => {
  const { style, id, dataset = {} } = props;

  const datasetMap = formatDataset(dataset);

  return (
    <div id={id} style={style} className={styles.service} {...datasetMap} />
  );
};

export default Service;
