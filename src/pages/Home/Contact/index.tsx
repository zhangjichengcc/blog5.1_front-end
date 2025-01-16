/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:09:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-16 16:56:39
 * @FilePath: /blog5.1_front-end/src/pages/Home/Contact/index.tsx
 */

import { type PartComponentProps } from '@/pages/Home';
import { formatDataset } from '@/utils/tools';
import { FC } from 'react';

import styles from './index.module.less';

const Contact: FC<PartComponentProps> = (props) => {
  const { style, id, dataset = {} } = props;

  const datasetMap = formatDataset(dataset);

  return (
    <div id={id} style={style} className={styles.contact} {...datasetMap}>
      <h2>contact</h2>
    </div>
  );
};

export default Contact;
