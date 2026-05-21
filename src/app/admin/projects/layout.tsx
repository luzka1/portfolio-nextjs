import { AdminHeader } from "@/components/AdminHeader/AdminHeader";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-[90vw] h-full min-h-screen pb-16 pt-16 m-auto w-240 gap-12">
      <AdminHeader />
      {children}
    </div>
  );
}
