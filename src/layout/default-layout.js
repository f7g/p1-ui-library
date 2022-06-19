import { useState } from "react";

import MobileMenu from "./mobile-menu";
import DesktopSidebar from "./desktop-sidebar";
import Header from "./header";
import Tabs from "../components/tabs";

export default function DefaultLayout(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="h-full flex">
      <MobileMenu
        isOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <DesktopSidebar />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content header */}
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {/* Tabs */}
        <div className="surface px-4 pb-4 sm:pb-0 sm:px-8">{props.tabs}</div>

        {/* Main content */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {/* Primary column */}
            <section className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
              {/* Your content */}
              {props.children}
            </section>
          </main>

          {/* Secondary column (hidden on smaller screens) */}
          <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
            {/* Your content */}
          </aside>
        </div>
      </div>
    </div>
  );
}
