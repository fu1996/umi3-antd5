import styles from './index.less';
import { Watermark, Button } from 'antd';

export default function IndexPage() {
  return (
    // <>
    //   <Button type="primary">你好</Button>
    // </>

    <Watermark content="Ant Design">
      <h1 className={styles.title}>Page index</h1>
    </Watermark>
  );
}
