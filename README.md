# 🧠 Renderer Playground

This is a dynamic React-based playground for rendering charts (bar, line, pie) based on structured JSON data. It allows you to interactively visualize data like financial reports using Chart.js with a clean and customizable interface.

## Features

- ✅ Supports Bar, Line, and Pie charts
- ✅ Switch chart types dynamically
- ✅ Toggle between multiple datasets (e.g., HDFC, SBI, ICICI)
- ✅ Paste or type raw chart JSON input
- ✅ Chart metadata is TypeScript-safe


---


## TypeScript type
You can just ask chatgpt to generate datasets according to this interface.
```
export interface ChartMetadata {
  id: string;
  type: "bar" | "line" | "pie";
  title?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}
```

## 📊 Example Chart Metadata

```json
{
  "id": "bar_monthly_revenue_comparison",
  "type": "bar",
  "title": "Monthly Revenue Comparison - FY 2024–25 [in ₹ Crores]",
  "labels": ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  "datasets": [
    {
      "label": "HDFC Bank",
      "data": [134.2, 140.3, 145.7, 152.1, 148.5, 150.0, 155.3, 158.9, 162.0],
      "backgroundColor": "rgba(54, 162, 235, 0.6)",
      "borderColor": "rgba(54, 162, 235, 1)",
      "borderWidth": 1.5
    },
    {
      "label": "ICICI Bank",
      "data": [128.7, 133.1, 137.9, 142.3, 139.0, 141.4, 144.8, 147.2, 150.9],
      "backgroundColor": "rgba(255, 159, 64, 0.6)",
      "borderColor": "rgba(255, 159, 64, 1)",
      "borderWidth": 1.5
    }
  ]
}
```
