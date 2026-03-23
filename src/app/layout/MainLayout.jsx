import SiteHeader from "@/components/layout/SiteHeader/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-evp-section text-evp-body">
      <SiteHeader />
      <main className="mx-auto w-[92%] max-w-6xl px-0 py-8 pb-16">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default MainLayout;
