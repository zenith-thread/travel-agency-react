import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

// COMPONENTS
import { NavItems, MobileSidebar } from "../../../components/Index";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export const clientLoader = async () => {
  try {
    const user = await account.get();

    if (!user.$id) return redirect("/sign-in");

    const existingUser = await getExistingUser(user.$id);
    if (existingUser?.status === "user") {
      return redirect("/");
    }
    return existingUser?.$id ? existingUser : await storeUserData();
  } catch (err) {
    console.log("Error in ClientLoader", err);
    return redirect("/sign-in");
  }
};

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
