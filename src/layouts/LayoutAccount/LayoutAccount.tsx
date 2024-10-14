import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import "./LayoutAccount.less";
import "./LayoutAccount.media.less";
import { IMAGES } from "../../assets/images";
import ButtonBack from "../../components/buttons/ButtonBack/ButtonBack";

const LayoutAcount: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="custom-layout">
      <div className="custom-layout-background"></div>
      <div className="custom-layout-content">
        <ButtonBack title="Quay Lại" className="custom-layout-back" />
        <div className="layout-content-img">
          <img src={IMAGES.LOGO_ACCOUNT} alt="Logo Project" />
        </div>
        <div className="layout-content-form">{children}</div>
      </div>
    </Layout>
  );
};

export default LayoutAcount;
