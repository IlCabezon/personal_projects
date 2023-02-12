import React, { ReactElement } from "react";

type LayoutProp = {
  children: ReactElement;
};

export default function RootLayout({ children } : LayoutProp): JSX.Element {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
