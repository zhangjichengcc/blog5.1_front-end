/*
 * @Author: zhangjicheng
 * @Date: 2022-10-12 23:09:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2025-01-16 16:52:37
 * @FilePath: /blog5.1_front-end/src/pages/Home/About/index.tsx
 */
import AppIcon from '@/assets/Home/icon-app.svg?react';
import ComIcon from '@/assets/Home/icon-components.svg?react';
import DesignIcon from '@/assets/Home/icon-design.svg?react';
import DevIcon from '@/assets/Home/icon-dev.svg?react';
import PartTitle from '@/components/PartTitle';
import { type PartComponentProps } from '@/pages/Home';
import { useAppSelector } from '@/store';
import { formatDataset } from '@/utils/tools';
import classnames from 'classnames';

import { FC } from 'react';
import styles from './index.module.less';

const cards = [
  {
    title: 'Web design',
    content: '网站开发设计，参考当下流行的UI设计打造网站',
    icon: DesignIcon,
  },
  {
    title: 'Web development',
    content: '高质量的网站开发',
    icon: DevIcon,
  },
  {
    title: 'Mobile apps',
    content: '移动端H5开发及小程序开发',
    icon: AppIcon,
  },
  {
    title: 'components',
    content: '前端开源组件开发',
    icon: ComIcon,
  },
] as const;

const About: FC<PartComponentProps> = (props) => {
  const { style, id, dataset = {} } = props;
  const grid = useAppSelector((state) => state.global.gird);

  const datasetMap = formatDataset(dataset);

  return (
    <div
      id={id}
      className={classnames(styles.about, grid && styles['grid-' + grid])}
      style={style}
      {...datasetMap}
    >
      <PartTitle style={{ paddingTop: 20 }}>About Me</PartTitle>
      <div className={styles.information}>
        <p>
          我是张吉成，来自 辽宁大连，毕业于
          辽宁工程技术大学，网络工程专业，目前在 广东深圳 从事前端开发
        </p>
        <p>
          我的工作是沟通需求，技术选型及方案的输出，并且负责项目框架搭建，前端组件库搭建，任务分配及人员安排
        </p>
        <p>
          您可以通过个人信息中的联系方式或使用 Contact
          发送邮件给我，我会第一时间回复。
        </p>
      </div>
      <div className={styles.container}>
        {cards.map((item, idx) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.info}>
              <div className={styles.title}>
                <span>{`0${idx + 1}`}</span>
                <span>{item.title}</span>
              </div>
              <item.icon style={{ fontSize: '50px' }} />
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
