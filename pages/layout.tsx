import ContentLayout from "@/shared/layout-components/layout/content-layout";
import { ReactNode } from 'react';


export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application',
};

interface LayoutProps {
    children: ReactNode;
  }

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
       <ContentLayout>
          {children}
        </ContentLayout>
      </body>
    </html>
  );
}