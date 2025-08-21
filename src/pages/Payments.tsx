import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PaymentRequestDialog from "@/components/PaymentRequestDialog";
import PaymentSettingsDialog from "@/components/PaymentSettingsDialog";
import PaymentHistoryDialog from "@/components/PaymentHistoryDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  Calendar, 
  DollarSign,
  Clock,
  CheckCircle,
  Settings,
  TrendingUp,
  CreditCard,
  Wallet
} from "lucide-react";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Payment Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Payment Settings Header */}
            <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500 rounded-full">
                    <Info className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2">Manage your payments settings</h2>
                    <p className="text-sm text-muted-foreground">
                      To manage your payment preferences and ensure you receive payments without delay, 
                      please visit and review your settings in{" "}
                      <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                        payment details
                      </Button>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Upcoming payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-2">There are no upcoming payments at the moment</h3>
                  <p className="text-sm text-muted-foreground">
                    Your upcoming payments will appear here
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Remitted Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Remitted payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-2">There are no remitted payments at the moment</h3>
                  <p className="text-sm text-muted-foreground">
                    Your remitted payments will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Total Rewarded */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-1">$0.00</div>
                <p className="text-sm text-green-600 dark:text-green-500">total rewarded</p>
              </CardContent>
            </Card>

            {/* Payment Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1">Weekly Schedule</p>
                    <p className="text-xs text-muted-foreground">
                      Payments are remitted each weekday at 12:00pm (noon) Pacific time.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="bg-muted/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    No payment methods configured
                  </p>
                  <Button size="sm" className="w-full">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <PaymentSettingsDialog>
                  <Button variant="outline" size="sm" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/20">
                    <Settings className="h-4 w-4 mr-2 text-blue-600" />
                    Payment Settings
                  </Button>
                </PaymentSettingsDialog>
                
                <PaymentRequestDialog>
                  <Button variant="outline" size="sm" className="w-full justify-start hover:bg-green-50 dark:hover:bg-green-950/20">
                    <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                    Request Payment
                  </Button>
                </PaymentRequestDialog>
                
                <PaymentHistoryDialog>
                  <Button variant="outline" size="sm" className="w-full justify-start hover:bg-purple-50 dark:hover:bg-purple-950/20">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    Payment History
                  </Button>
                </PaymentHistoryDialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payments;