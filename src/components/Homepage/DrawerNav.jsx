import {
  Drawer,
  DrawerItems,
  Sidebar,
  SidebarItemGroup,
  SidebarItems,
  ThemeProvider,
  createTheme,
} from "flowbite-react";
import { NavLink } from "react-router";
import { IoMdClose } from "react-icons/io";

const customTheme = createTheme({
  drawer: {
    root: {
      base: "!bg-bgMain text-[#666666]",
    },
  },
});

export default function DrawerNav({ isOpen, setIsOpen }) {
  const closeDrawer = () => {};
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          position="right"
          className="transition-all duration-700 ease-in-out space-y-6"
        >
          <div className="flex justify-between items-center ">
            <h3 className="text-xl ">Ma jewellery</h3>
            <IoMdClose
              className="cursor-pointer "
              size={25}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <hr />

          <DrawerItems>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0 w-full"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <SidebarItems>
                    <SidebarItemGroup className="flex flex-col  ">
                      <NavLink
                        to="/"
                        onClick={(e) => {
                          if (location.pathname === "/") {
                            e.preventDefault();
                            setIsOpen(false);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={({ isActive }) =>
                          `hover:bg-[#E4D1B3]  p-2 rounded-[5px] ${
                            isActive ? "bg-[#D9B8A7]" : ""
                          }`
                        }
                      >
                        HOME
                      </NavLink>
                      <NavLink
                        to="/releases"
                        onClick={(e) => {
                          if (location.pathname === "/releases") {
                            e.preventDefault();
                            setIsOpen(false);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={({ isActive }) =>
                          `hover:bg-[#E4D1B3]  p-2 rounded-[5px] ${
                            isActive ? "bg-[#D9B8A7]" : ""
                          }`
                        }
                      >
                        NEW RELEASES
                      </NavLink>
                      <NavLink
                        to="/gifts"
                        onClick={(e) => {
                          if (location.pathname === "/gifts") {
                            e.preventDefault();
                            setIsOpen(false);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={({ isActive }) =>
                          `hover:bg-[#E4D1B3]  p-2 rounded-[5px] ${
                            isActive ? "bg-[#D9B8A7]" : ""
                          }`
                        }
                      >
                        GIFTS
                      </NavLink>
                      <NavLink
                        to="/products"
                        onClick={(e) => {
                          if (location.pathname === "/products") {
                            e.preventDefault();
                            setIsOpen(false);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={({ isActive }) =>
                          `hover:bg-[#E4D1B3]  p-2 rounded-[5px] ${
                            isActive ? "bg-[#D9B8A7]" : ""
                          }`
                        }
                      >
                        Product Catelog
                      </NavLink>
                    </SidebarItemGroup>
                  </SidebarItems>
                </div>
              </div>
            </Sidebar>
          </DrawerItems>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
