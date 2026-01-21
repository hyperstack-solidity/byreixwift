import { CMSLayout } from "@/components/cms/CMSLayout";

export default function RootCMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CMSLayout>{children}</CMSLayout>;
}