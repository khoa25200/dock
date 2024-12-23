import './Loading.less';

import React, { useState, useEffect } from 'react';
import { Flex, Spin } from 'antd';

type TLoadingProps = {
  isLoading: boolean;
  isInfinitive: boolean;
};

const Loading: React.FC<TLoadingProps> = ({
  isLoading,
  isInfinitive = false,
}) => {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (!isInfinitive) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Flex gap="middle" vertical>
      <Spin
        fullscreen
        // delay={500}
        size="large"
        spinning={loading}
        tip="Data Loading ..."
      />
    </Flex>
  );
};

export default Loading;
