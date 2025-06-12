import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

// COMPONENTS
import { NavItems, MobileSidebar } from "../../../components/Index";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Desktop Sidebar */}
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      {/* Show the rest of the pages in the center */}
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
