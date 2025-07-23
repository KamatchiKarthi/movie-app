import React from 'react';
import { Spin, Flex } from 'antd';

export default function Loading() {
  return (
    <Flex className='justify-center items-center' style={{ height: '80vh' }}>
    <Spin size="large" />
  </Flex>
  );
}
