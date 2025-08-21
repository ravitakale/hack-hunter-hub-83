import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import OrganizationToolsModule from "@/components/OrganizationToolsModule";

export default function OrganizationTools() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold">Tools Management</h1>
                <p className="text-muted-foreground">
                  Upload and manage tools for your researchers
                </p>
              </div>

              {/* Tools Module */}
              <OrganizationToolsModule />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}