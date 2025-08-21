import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  FolderOpen, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Building2,
  UserPlus,
  GraduationCap,
  Wrench,
  Briefcase
} from "lucide-react";

const navigationItems = [
  { title: "Dashboard", url: "/org-dashboard", icon: LayoutDashboard },
  { title: "Programs", url: "/org-programs", icon: FolderOpen },
  { title: "Reports", url: "/org-submissions", icon: FileText },
  { title: "Researchers", url: "/org-researchers", icon: Users },
  { title: "Invite Researcher", url: "/org-invite-researcher", icon: UserPlus },
  { title: "Jobs", url: "/org-jobs", icon: Briefcase },
  { title: "Tools", url: "/org-tools", icon: Wrench },
  { title: "Courses", url: "/org-courses", icon: GraduationCap },
  { title: "Analytics", url: "/org-analytics", icon: BarChart3 },
  { title: "Settings", url: "/org-settings", icon: Settings },
];

export function OrganizationSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent className="animate-fade-in-left">
        {/* Organization Branding */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            {!isCollapsed && (
              <div>
                <h2 className="font-semibold">Organization</h2>
                <p className="text-xs text-muted-foreground">Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}