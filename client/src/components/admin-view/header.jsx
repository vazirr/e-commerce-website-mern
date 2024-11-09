import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";

const AdminHeader = ({ setOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      {/* Sidebar toggle button for small screens */}
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Flex container for the Logout button */}
      <div className="flex flex-1 justify-end ">
        {" "}
        {/* Corrected "jutify" to "justify" */}
        <button className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-white bg-black shadow">
          <LogOut />
          <span className="text-white">Logout</span>{" "}
          {/* Added span for spacing between icon and text */}
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
