import type { ChartMetadata } from "../src/types";

export const sampleChart: ChartMetadata = {
  id: "chart_monthly_revenue_comparison",
  type: "bar",
  title: "Monthly Revenue Comparison - FY 2024–25 [in ₹ Crores]",
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ],
  datasets: [
    {
      label: "HDFC Bank",
      data: [
        134.2, 140.3, 145.7, 152.1, 148.5, 150.0, 155.3, 158.9, 162.0, 165.5,
        168.2, 172.4,
      ],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1.5,
    },
    {
      label: "ICICI Bank",
      data: [
        128.7, 133.1, 137.9, 142.3, 139.0, 141.4, 144.8, 147.2, 150.9, 154.3,
        156.1, 160.0,
      ],
      backgroundColor: "rgba(255, 159, 64, 0.6)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1.5,
    },
    {
      label: "SBI",
      data: [
        122.4, 126.8, 130.5, 135.0, 132.2, 134.6, 138.9, 140.3, 144.7, 148.0,
        150.5, 153.6,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1.5,
    },
  ],
};
