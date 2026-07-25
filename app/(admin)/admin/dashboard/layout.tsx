import {ReactNode} from "react";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Separator} from "@/components/ui/separator";
import {ColorTheme} from "@/components/theme/Color-Theme";
import {ModeToggle} from "@/components/theme/Theme-Toggle";


interface AdminDashboardLayoutProps {
    children: ReactNode;
}

export default function AdminDashboardLayout({ children,}: AdminDashboardLayoutProps){
    return(
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                            />
                            <ModeToggle />
                            <ColorTheme/>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
                    </div>
                </SidebarInset>

            </SidebarProvider>
        </div>
    );
}