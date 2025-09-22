interface invoice {
  date: string;
  id: string;
  amount: number;
}

type CompanyInfo={
    companyName:string,
    email:string,
    vat: string

}

interface BillingInfo{
    name:string,
    companyInfo:CompanyInfo
}

interface Transaction {
  name: string;
  date: string;
  time: string;
  value: number;
  sent: boolean;
}

export const transactions: Transaction[] = [
  {
    name: "Payment to John Doe",
    date: "2025-09-10",
    time: "09:30 AM",
    value: 250,
    sent: true,
  },
  {
    name: "Invoice from Tech Corp",
    date: "2025-09-11",
    time: "11:15 AM",
    value: 1200,
    sent: false,
  },
  {
    name: "Subscription to Cloud Service",
    date: "2025-09-12",
    time: "04:45 PM",
    value: 99,
    sent: true,
  },
  {
    name: "Refund from Store",
    date: "2025-09-13",
    time: "02:10 PM",
    value: 150,
    sent: false,
  },
  {
    name: "Payment to Sarah Lee",
    date: "2025-09-14",
    time: "08:20 AM",
    value: 500,
    sent: true,
  },
  {
    name: "Invoice from Design Studio",
    date: "2025-09-15",
    time: "06:00 PM",
    value: 750,
    sent: false,
  },
];

export const billingInfos: BillingInfo[] = [
  {
    name: "John Doe",
    companyInfo: {
      companyName: "Tech Solutions Inc.",
      email: "contact@techsolutions.com",
      vat: "VAT123456",
    },
  },
  {
    name: "Jane Smith",
    companyInfo: {
      companyName: "Green Energy Ltd.",
      email: "info@greenenergy.com",
      vat: "VAT654321",
    },
  },
  {
    name: "Alice Johnson",
    companyInfo: {
      companyName: "Creative Studio",
      email: "hello@creativestudio.com",
      vat: "VAT987654",
    },
  },
];

export const invoices: invoice[] = [
    { date: "2025-09-01", id: "INV-1001", amount: 250.75 },
    { date: "2025-09-03", id: "INV-1002", amount: 480.0 },
    { date: "2025-09-06", id: "INV-1003", amount: 1299.99 },
    { date: "2025-09-08", id: "INV-1004", amount: 75.5 },
    { date: "2025-09-12", id: "INV-1005", amount: 920.25 },
    { date: "2025-09-15", id: "INV-1006", amount: 310.0 },
  ];