import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "首页 - 中科国际 - 智慧太空舱",
  description:
    "中科国际 Zhongke International 智慧太空舱官方网站，展示产品中心、场景方案、案例展示、公司简介与联系咨询。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
