import Footer from "@/components/layouts/client/footer/Footer";
import Navbar from "@/components/layouts/client/navbar/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#2a1646] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}