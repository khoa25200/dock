import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import "./LayoutAccount.less";
import "./LayoutAccount.media.less";
import Logo from "../../assets/images/logo-account.png";

const LayoutAcount: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="custom-layout">
      <div className="custom-layout-background"></div>
      <div className="custom-layout-content">
        <div className="layout-content-img">
          <img src={Logo} alt="Logo Project" />
        </div>
        <div className="layout-content-form">{children}</div>
      </div>
    </Layout>
  );
};

export default LayoutAcount;
