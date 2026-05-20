import { AdminHeader } from "@/components/AdminHeader/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen pt-32 m-auto w-1/2 gap-12">
      <AdminHeader />
      {children}
    </div>
  );
}
