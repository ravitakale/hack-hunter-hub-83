import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Building2, Crown } from "lucide-react";

interface SubscriptionPlansProps {
  onPlanSelect: (planId: string, price: number) => void;
  selectedPlan?: string;
}

const SubscriptionPlans = ({ onPlanSelect, selectedPlan }: SubscriptionPlansProps) => {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 99,
      period: "month",
      description: "Perfect for small organizations getting started",
      icon: Building2,
      popular: false,
      features: [
        "Up to 5 bug bounty programs",
        "Basic vulnerability assessment",
        "Standard support",
        "Dashboard analytics",
        "Basic reporting",
        "Email notifications"
      ]
    },
    {
      id: "professional",
      name: "Professional",
      price: 299,
      period: "month",
      description: "Best for growing organizations with advanced needs",
      icon: Zap,
      popular: true,
      features: [
        "Unlimited bug bounty programs",
        "Advanced vulnerability scanning",
        "Priority support",
        "Advanced analytics & insights",
        "Custom reporting",
        "API access",
        "Slack/Teams integration",
        "Custom workflows"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 599,
      period: "month",
      description: "For large organizations with complex requirements",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced compliance reports",
        "Single sign-on (SSO)",
        "Custom SLA",
        "On-premise deployment option",
        "24/7 phone support"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Choose Your Plan</h3>
        <p className="text-muted-foreground">
          Select a subscription plan that fits your organization's needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isSelected = selectedPlan === plan.id;
          
          return (
            <Card 
              key={plan.id} 
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-primary shadow-md' : ''
              } ${plan.popular ? 'border-primary' : ''}`}
              onClick={() => onPlanSelect(plan.id, plan.price)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                  <div className={`p-3 rounded-full ${
                    plan.popular ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      plan.popular ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Button 
                  className={`w-full ${
                    isSelected ? 'bg-primary' : plan.popular ? 'bg-primary' : ''
                  }`}
                  variant={plan.popular && !isSelected ? "default" : isSelected ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlanSelect(plan.id, plan.price);
                  }}
                >
                  {isSelected ? 'Selected' : 'Select Plan'}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionPlans;