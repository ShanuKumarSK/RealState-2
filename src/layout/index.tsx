import { memo, useState, ReactNode } from "react";
import DefaultLayout from "@/layout/Default";
import EmptyLayout from "@/layout/Empty";

const LayoutTypesMapping = {
  DefaultLayout,
  EmptyLayout,
};

type LayoutType = keyof typeof LayoutTypesMapping;

interface LayoutProps {
  asLayout?: LayoutType;
  children: ReactNode;
  [key: string]: unknown;
}

const defaultLayoutType: LayoutType = "DefaultLayout";

const Layout: React.FC<LayoutProps> = ({ asLayout = defaultLayoutType, children, ...rest }) => {
  const [navData] = useState<unknown[]>([]);

  const LayoutComponent = LayoutTypesMapping[asLayout] || DefaultLayout;

  return (
    <LayoutComponent
      navData={navData}
      {...rest}
    >
      {children}
    </LayoutComponent>
  );
};

export default memo(Layout);

