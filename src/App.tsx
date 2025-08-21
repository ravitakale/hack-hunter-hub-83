import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import ManualTestingProgramDetail from "./pages/ManualTestingProgramDetail";
import SubmitReport from "./pages/SubmitReport";
import Leaderboard from "./pages/Leaderboard";
import Courses from "./pages/Courses";
import Activity from "./pages/Activity";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import LoginSelection from "./pages/LoginSelection";
import SignupSelection from "./pages/SignupSelection";

import Payments from "./pages/Payments";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OrganizationSignIn from "./pages/OrganizationSignIn";
import OrganizationSignUp from "./pages/OrganizationSignUp";
import OrganizationDashboard from "./pages/OrganizationDashboard";
import OrganizationPrograms from "./pages/OrganizationPrograms";
import OrganizationProgramCreate from "./pages/OrganizationProgramCreate";
import OrganizationReports from "./pages/OrganizationReports";
import OrganizationResearchers from "./pages/OrganizationResearchers";
import OrganizationAnalytics from "./pages/OrganizationAnalytics";
import OrganizationSettings from "./pages/OrganizationSettings";
import OrganizationProgramView from "./pages/OrganizationProgramView";
import OrganizationProgramEdit from "./pages/OrganizationProgramEdit";
import OrganizationInviteResearcher from "./pages/OrganizationInviteResearcher";
import OrganizationTools from "./pages/OrganizationTools";
import OrganizationCourses from "./pages/OrganizationCourses";
import MySubmissions from "./pages/MySubmissions";
import ProgramSubmissions from "./pages/ProgramSubmissions";
import FAQ from "./pages/FAQ";
import APIDocumentation from "./pages/APIDocumentation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import Tools from "./pages/Tools";
import HowItWorks from "./pages/HowItWorks";
import ContactSales from "./pages/ContactSales";
import NotFound from "./pages/NotFound";
import FreeCourses from "./pages/FreeCourses";
import StartLearningFree from "./pages/StartLearningFree";
import AllCourses from "./pages/AllCourses";
import Jobs from "./pages/Jobs";
import OrganizationJobs from "./pages/OrganizationJobs";
import ReportDetail from "./pages/ReportDetail";
import CourseEnrollment from "./pages/CourseEnrollment";
import SecurityAnalystPath from "./pages/SecurityAnalystPath";
import PenetrationTesterPath from "./pages/PenetrationTesterPath";
import BugBountyHunterPath from "./pages/BugBountyHunterPath";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path="/manual-testing-program" element={<ManualTestingProgramDetail />} />
            <Route path="/programs/:id/submissions" element={<ProgramSubmissions />} />
            <Route path="/my-submissions" element={<MySubmissions />} />
            <Route path="/submit-report/:id" element={<SubmitReport />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id/enroll" element={<CourseEnrollment />} />
            <Route path="/free-courses" element={<FreeCourses />} />
            <Route path="/start-learning-free" element={<StartLearningFree />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/reports/:id" element={<ReportDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginSelection />} />
            <Route path="/signup" element={<SignupSelection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/researcher/signin" element={<SignIn />} />
            <Route path="/researcher/signup" element={<SignUp />} />
            <Route path="/organization/signin" element={<OrganizationSignIn />} />
            <Route path="/organization/signup" element={<OrganizationSignUp />} />
            <Route path="/org-dashboard" element={<OrganizationDashboard />} />
            <Route path="/org-programs" element={<OrganizationPrograms />} />
            <Route path="/org-program/create" element={<OrganizationProgramCreate />} />
            <Route path="/org-program/:id/view" element={<OrganizationProgramView />} />
            <Route path="/org-program/:id/edit" element={<OrganizationProgramEdit />} />
            <Route path="/org-submissions" element={<OrganizationReports />} />
            <Route path="/org-researchers" element={<OrganizationResearchers />} />
            <Route path="/org-analytics" element={<OrganizationAnalytics />} />
            <Route path="/org-invite-researcher" element={<OrganizationInviteResearcher />} />
            <Route path="/org-tools" element={<OrganizationTools />} />
            <Route path="/org-jobs" element={<OrganizationJobs />} />
            <Route path="/org-courses" element={<OrganizationCourses />} />
            <Route path="/org-settings" element={<OrganizationSettings />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/api" element={<APIDocumentation />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/security-analyst-path" element={<SecurityAnalystPath />} />
            <Route path="/penetration-tester-path" element={<PenetrationTesterPath />} />
            <Route path="/bug-bounty-hunter-path" element={<BugBountyHunterPath />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
