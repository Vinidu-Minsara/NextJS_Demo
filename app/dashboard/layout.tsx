import React, { ReactNode } from 'react';
import SideNav from "@/app/ui/dashboard/sidenav";

// Define the props type
interface DashboardLayoutProps {
    children: ReactNode;
}

// Apply the props type to the component
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
