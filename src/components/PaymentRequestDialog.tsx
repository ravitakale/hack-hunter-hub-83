import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  MapPin, 
  CreditCard, 
  Calendar,
  Building,
  Globe,
  Banknote
} from "lucide-react";

interface PaymentRequestDialogProps {
  children: React.ReactNode;
}

const PaymentRequestDialog = ({ children }: PaymentRequestDialogProps) => {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
    { code: "INR", symbol: "₹", name: "Indian Rupee", flag: "🇮🇳" }
  ];

  const cityTypes = [
    { value: "tier1", label: "Tier 1 Cities", cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"] },
    { value: "tier2", label: "Tier 2 Cities", cities: ["Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur"] },
    { value: "tier3", label: "Tier 3 Cities", cities: ["Agra", "Bhopal", "Coimbatore", "Faridabad", "Ghaziabad", "Ludhiana"] },
    { value: "international", label: "International Cities", cities: ["New York", "London", "Singapore", "Tokyo", "Sydney", "Dubai"] }
  ];

  const selectedCurrency = currencies.find(c => c.code === currency);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-full">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            Request Payment
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Column - Payment Details */}
          <div className="space-y-6">
            {/* Currency Selection */}
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-blue-600" />
                <Label className="text-sm font-semibold">Currency Selection</Label>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currencies.map((curr) => (
                  <Button
                    key={curr.code}
                    variant={currency === curr.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrency(curr.code)}
                    className="justify-start"
                  >
                    <span className="mr-2">{curr.flag}</span>
                    {curr.symbol} {curr.code}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="flex items-center gap-2">
                <Banknote className="h-4 w-4" />
                Payment Amount
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-semibold">
                  {selectedCurrency?.symbol}
                </span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 text-lg"
                />
              </div>
              {amount && (
                <Badge variant="secondary" className="mt-2">
                  {selectedCurrency?.symbol}{amount} {selectedCurrency?.code}
                </Badge>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payment Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose of this payment request..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-20"
              />
            </div>
          </div>

          {/* Right Column - Location & Additional Info */}
          <div className="space-y-6">
            {/* City Selection */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Select City Type
              </Label>
              
              {cityTypes.map((type) => (
                <Card key={type.value} className="p-3 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{type.label}</h4>
                    <Badge variant="outline" className="text-xs">
                      {type.cities.length} cities
                    </Badge>
                  </div>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={`Select from ${type.label.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {type.cities.map((cityName) => (
                        <SelectItem key={cityName} value={`${type.value}-${cityName}`}>
                          <div className="flex items-center gap-2">
                            <Building className="h-3 w-3" />
                            {cityName}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Summary & Actions */}
        <div className="space-y-4">
          <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Payment Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Amount:</span>
                <p className="font-semibold">
                  {amount ? `${selectedCurrency?.symbol}${amount} ${selectedCurrency?.code}` : "Not specified"}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">Location:</span>
                <p className="font-semibold">
                  {city ? city.split('-')[1] : "Not selected"}
                </p>
              </div>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button className="flex-1" disabled={!amount || !city || !description}>
              <DollarSign className="h-4 w-4 mr-2" />
              Submit Payment Request
            </Button>
            <Button variant="outline">
              Save as Draft
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentRequestDialog;