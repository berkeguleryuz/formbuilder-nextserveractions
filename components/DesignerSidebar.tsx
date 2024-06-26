import React from "react";
import { FormElements } from "./FormElements";
import SidebarButtonElement from "./SidebarButtonElement";

function DesignerSidebar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l2 border-muted p-4 bg-background overflow-y-auto">
      Elements
      <SidebarButtonElement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
