'use client';

import React from 'react';
import { Bars } from 'react-loader-spinner';

interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
  return (
    <div>
      <Bars height="80" width="80" color="#4fa94d" />
    </div>
  );
};

export default Loader;
