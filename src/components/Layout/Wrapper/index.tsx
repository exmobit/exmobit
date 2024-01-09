import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = (props) => {
  return (
    <div className={style.pageWrapper}>
      <Header />
      <div className={style.contentWrapper}> {props.children}</div>
      <Footer />
    </div>
  );
};
export default Wrapper;
