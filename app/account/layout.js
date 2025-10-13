import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="h-full">
      {/* Desktop Grid with Sidebar */}
      <div className="hidden md:grid grid-cols-[16rem_1fr] gap-12 h-full">
        <SideNavigation />
        <div className="py-1">{children}</div>
      </div>

      {/* Mobile stacked layout */}
      <div className="md:hidden">{children}</div>
    </div>
  );
}
