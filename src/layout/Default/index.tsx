import { ReactNode, CSSProperties, memo } from "react";
import Header from "@/components/common/TopNav";

interface DefaultLayoutProps {
  children: ReactNode;
  customStyles?: {
    wrapper?: CSSProperties;
  };
  [key: string]: unknown; // Allow additional props
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  customStyles = {},
  ...rest
}) => {
  return (
    <div style={{ ...customStyles.wrapper }}>
      <Header {...rest} />
      <div className="topHeader" style={{ minHeight: "100vh" }}>
        {children}
      </div>
      {/* <Footer {...rest} /> */}
    </div>
  );
};

export default memo(DefaultLayout);
