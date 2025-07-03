import { useState } from "react";
import type { ChartMetadata } from "./types";
import ChartRenderer from "./components/ChartRenderer";
import { sampleChart } from "../data/dummy";

const chartTypes: ChartMetadata["type"][] = ["bar", "line", "pie"];

function App() {
  const [type, setType] = useState<ChartMetadata["type"]>("bar");
  const [chartData, setChartData] = useState<ChartMetadata>(sampleChart);
  const [input, setInput] = useState("");

  const parsedChartData = {
    ...chartData,
    type,
  };

  const handleChartInput = () => {
    try {
      const parsed = JSON.parse(input) as ChartMetadata;
      setChartData(parsed);
    } catch (err: unknown) {
      alert("Invalid JSON" + err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Chart Playground</h1>
            <select
              className="border px-3 py-1 rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value as ChartMetadata["type"])}
            >
              {chartTypes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)} Chart
                </option>
              ))}
            </select>
          </div>
          <textarea
            className="w-full border rounded-md p-3 font-mono text-sm min-h-[200px]"
            placeholder="Paste ChartMetadata JSON here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="self-start bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleChartInput}
          >
            Render Chart
          </button>
        </div>
        <ChartRenderer chartData={parsedChartData} />
      </div>
    </div>
  );
}

export default App;
