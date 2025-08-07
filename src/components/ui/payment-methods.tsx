import * as React from "react";
import { cn } from "@/lib/utils";

// Payment method icons and components
export const GooglePayIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="currentColor"
  >
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

export const UPIIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
    <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">UPI</text>
  </svg>
);

export const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

export const PayPalIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="currentColor"
  >
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.028-.026.056-.052.08-.498 2.542-2.101 4.081-4.847 4.081H8.522l-.788 4.953-.550 3.467h2.728c.46 0 .85-.334.922-.788l.04-.204.718-4.538.046-.25c.071-.454.462-.788.922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
  </svg>
);

export const BankTransferIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

// Payment method selector component
interface PaymentMethodOption {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const paymentMethods: PaymentMethodOption[] = [
  {
    value: "credit-card",
    label: "Credit Card",
    icon: CreditCardIcon,
    description: "Visa, Mastercard, American Express"
  },
  {
    value: "google-pay",
    label: "Google Pay",
    icon: GooglePayIcon,
    description: "Quick and secure payments"
  },
  {
    value: "upi",
    label: "UPI",
    icon: UPIIcon,
    description: "Unified Payments Interface"
  },
  {
    value: "bank-transfer",
    label: "Bank Transfer",
    icon: BankTransferIcon,
    description: "Direct bank transfer"
  },
  {
    value: "paypal",
    label: "PayPal",
    icon: PayPalIcon,
    description: "PayPal account required"
  }
];

export const PaymentMethodSelector = ({ 
  value, 
  onValueChange, 
  className 
}: { 
  value: string; 
  onValueChange: (value: string) => void;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 gap-3", className)}>
      {paymentMethods.map((method) => (
        <div
          key={method.value}
          className={cn(
            "flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all hover:bg-secondary/50",
            value === method.value ? "border-primary bg-primary/5" : "border-border"
          )}
          onClick={() => onValueChange(method.value)}
        >
          <div className="flex-shrink-0">
            <method.icon className={cn(
              "w-6 h-6",
              value === method.value ? "text-primary" : "text-muted-foreground"
            )} />
          </div>
          <div className="flex-1">
            <div className="font-medium">{method.label}</div>
            {method.description && (
              <div className="text-sm text-muted-foreground">{method.description}</div>
            )}
          </div>
          <div className="flex-shrink-0">
            <div className={cn(
              "w-4 h-4 rounded-full border-2 transition-all",
              value === method.value 
                ? "border-primary bg-primary" 
                : "border-muted-foreground"
            )}>
              {value === method.value && (
                <div className="w-full h-full rounded-full bg-white scale-50" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
