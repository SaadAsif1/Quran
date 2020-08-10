import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className='loading-ayats'>
      <Spin size='large' />
    </div>
  );
};

export default Loading;
