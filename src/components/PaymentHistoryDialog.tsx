import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  DollarSign, 
  Download, 
  Filter,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp
} from "lucide-react";

interface PaymentHistoryDialogProps {
  children: React.ReactNode;
}

const PaymentHistoryDialog = ({ children }: PaymentHistoryDialogProps) => {
  const paymentHistory = [
    {
      id: "PAY-001",
      date: "2024-01-15",
      amount: 2500,
      currency: "USD",
      status: "completed",
      description: "Bug bounty reward - Critical vulnerability",
      city: "Mumbai",
      method: "Bank Transfer"
    },
    {
      id: "PAY-002", 
      date: "2024-01-10",
      amount: 1200,
      currency: "INR",
      status: "pending",
      description: "Security assessment payment",
      city: "Bangalore",
      method: "UPI"
    },
    {
      id: "PAY-003",
      date: "2024-01-05",
      amount: 850,
      currency: "USD",
      status: "failed",
      description: "Vulnerability report submission",
      city: "Delhi",
      method: "PayPal"
    },
    {
      id: "PAY-004",
      date: "2024-01-01",
      amount: 3000,
      currency: "INR",
      status: "completed",
      description: "Enterprise security consultation",
      city: "Chennai",
      method: "Bank Transfer"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "failed":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "failed":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getCurrencySymbol = (currency: string) => {
    return currency === "USD" ? "$" : "₹";
  };

  const totalEarnings = paymentHistory
    .filter(p => p.status === "completed")
    .reduce((sum, p) => sum + (p.currency === "USD" ? p.amount * 83 : p.amount), 0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-purple-500/10 rounded-full">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            Payment History
          </DialogTitle>
        </DialogHeader>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Total Earned</span>
            </div>
            <p className="text-2xl font-bold text-green-700 dark:text-green-400">₹{totalEarnings.toLocaleString()}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <p className="text-2xl font-bold">{paymentHistory.filter(p => p.status === "completed").length}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium">Pending</span>
            </div>
            <p className="text-2xl font-bold">{paymentHistory.filter(p => p.status === "pending").length}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium">Failed</span>
            </div>
            <p className="text-2xl font-bold">{paymentHistory.filter(p => p.status === "failed").length}</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mt-6">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-64">
              <Label className="flex items-center gap-2 mb-2">
                <Search className="h-4 w-4" />
                Search Payments
              </Label>
              <Input placeholder="Search by description, ID, or city..." />
            </div>
            
            <div className="w-48">
              <Label className="flex items-center gap-2 mb-2">
                <Filter className="h-4 w-4" />
                Status Filter
              </Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-48">
              <Label className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4" />
                Currency
              </Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Currencies</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="INR">INR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </Card>

        {/* Payment History List */}
        <div className="space-y-4 mt-6">
          {paymentHistory.map((payment) => (
            <Card key={payment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {payment.id}
                      </Badge>
                      <Badge className={getStatusColor(payment.status)}>
                        {getStatusIcon(payment.status)}
                        <span className="ml-1 capitalize">{payment.status}</span>
                      </Badge>
                    </div>
                    <p className="font-medium">{payment.description}</p>
                    <p className="text-sm text-muted-foreground">{payment.city} • {payment.method}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold">
                      {getCurrencySymbol(payment.currency)}{payment.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">{payment.currency}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="font-medium">{new Date(payment.date).toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(payment.date).toLocaleDateString('en-US', { weekday: 'long' })}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {payment.status === "completed" && (
                      <Button size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Receipt
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentHistoryDialog;