// components/ui/tabs.tsx
import React, { useState } from "react";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children, className = "" }) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        if (child.type === TabsList) {
          return React.cloneElement(child as React.ReactElement<TabsTriggerProps>, { active, setActive });
        }
        if (child.type === TabsContent) {
          return (child as React.ReactElement<TabsContentProps>).props.value === active ? child : null;
        }
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
  active?: string;
  setActive?: (val: string) => void;
}

export const TabsList: React.FC<TabsListProps> = ({ children, className = "", active, setActive }) => {
  return (
    <div className={`border-b flex ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child as React.ReactElement<TabsTriggerProps>, { active, setActive });
      })}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  active?: string;
  setActive?: (val: string) => void;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, active, setActive }) => {
  const isActive = active === value;
  return (
    <button
      className={`px-4 py-2 font-medium border-b-2 ${
        isActive
          ? "border-green-600 text-green-600"
          : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
      }`}
      onClick={() => setActive?.(value)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ children }) => {
  return <div>{children}</div>;
};
