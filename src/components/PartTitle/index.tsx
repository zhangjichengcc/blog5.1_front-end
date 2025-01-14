// import useVisible from '@/hooks/useVisible';
import classnames from 'classnames';
import { CSSProperties, FC, ReactNode, useRef } from 'react';

import styles from './index.module.less';

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  position?: 'left' | 'center';
}
const PartTitle: FC<Props> = (props) => {
  const { children, style, position = 'left' } = props;

  const ref = useRef<HTMLDivElement>(null);
  // const visible = useVisible(ref);

  return (
    <div
      ref={ref}
      className={classnames(styles['part-title'], {
        // [styles.visible]: visible,
        [styles[position]]: true,
      })}
      style={style}
    >
      <span>{children}</span>
    </div>
  );
};

export default PartTitle;
