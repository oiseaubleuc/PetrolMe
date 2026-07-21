"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle = {
  backgroundColor: "#0F1420",
  border: "1px solid rgba(148,169,201,0.16)",
  borderRadius: 12,
  fontSize: 12,
  color: "#e2e8f0",
  boxShadow: "0 20px 40px -24px rgba(0,0,0,0.7)",
};

const axisProps = {
  stroke: "rgba(148,169,201,0.35)",
  fontSize: 11,
  tickLine: false as const,
  axisLine: false as const,
};

export function ProductionTrendChart({
  data,
}: {
  data: { t: string; oil: number; gas: number; water: number; target: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <ComposedChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="oilFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f96412" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#f96412" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148,169,201,0.06)" vertical={false} />
        <XAxis dataKey="t" {...axisProps} interval={3} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
        <Area
          type="monotone"
          dataKey="oil"
          name="Oil (Mbbl/d)"
          stroke="#f96412"
          fill="url(#oilFill)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="gas"
          name="Gas (MMscf/d)"
          stroke="#4f9fb8"
          strokeWidth={1.75}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="target"
          name="Oil Target"
          stroke="rgba(148,169,201,0.45)"
          strokeDasharray="4 4"
          strokeWidth={1.25}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function ForecastChart({
  data,
}: {
  data: {
    t: string;
    actual: number | null;
    forecast: number;
    upper: number;
    lower: number;
  }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <ComposedChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="bandFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f9fb8" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#4f9fb8" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148,169,201,0.06)" vertical={false} />
        <XAxis dataKey="t" {...axisProps} interval={1} />
        <YAxis {...axisProps} domain={["dataMin - 40", "dataMax + 40"]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
        <Area
          type="monotone"
          dataKey="upper"
          name="Upper band"
          stroke="transparent"
          fill="url(#bandFill)"
        />
        <Line
          type="monotone"
          dataKey="actual"
          name="Actual"
          stroke="#f96412"
          strokeWidth={2}
          dot={false}
          connectNulls={false}
        />
        <Line
          type="monotone"
          dataKey="forecast"
          name="Forecast"
          stroke="#4f9fb8"
          strokeWidth={1.75}
          strokeDasharray="5 4"
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export function MaintenanceMixChart({
  data,
}: {
  data: { month: string; preventive: number; corrective: number; predictive: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid stroke="rgba(148,169,201,0.06)" vertical={false} />
        <XAxis dataKey="month" {...axisProps} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="preventive" name="Preventive" stackId="a" fill="#4f9fb8" radius={[0, 0, 0, 0]} />
        <Bar dataKey="corrective" name="Corrective" stackId="a" fill="#f5b13d" />
        <Bar dataKey="predictive" name="Predictive" stackId="a" fill="#f96412" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({
  data,
  height = 220,
}: {
  data: { name: string; value: number; color: string }[];
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="62%"
          outerRadius="84%"
          paddingAngle={2}
          stroke="none"
        >
          {data.map((d) => (
            <Cell key={d.name} fill={d.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function SimpleBarChart({
  data,
  dataKey,
  nameKey = "name",
  color = "#4f9fb8",
  height = 220,
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  nameKey?: string;
  color?: string;
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 12, left: 8, bottom: 0 }}>
        <CartesianGrid stroke="rgba(148,169,201,0.06)" horizontal={false} />
        <XAxis type="number" {...axisProps} />
        <YAxis type="category" dataKey={nameKey} width={88} {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey={dataKey} fill={color} radius={[0, 6, 6, 0]} barSize={14} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AreaSeriesChart({
  data,
  series,
  xKey = "t",
  height = 240,
}: {
  data: Record<string, string | number>[];
  series: { key: string; color: string; name: string }[];
  xKey?: string;
  height?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid stroke="rgba(148,169,201,0.06)" vertical={false} />
        <XAxis dataKey={xKey} {...axisProps} />
        <YAxis {...axisProps} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        {series.map((s) => (
          <Area
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.name}
            stroke={s.color}
            fill={s.color}
            fillOpacity={0.12}
            strokeWidth={1.75}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
