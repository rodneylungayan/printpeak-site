"use client";

import { useId, useState } from "react";
import type { SizeChart } from "@/content/sizes";
import styles from "./SizeGuide.module.css";

type Props = {
  charts: SizeChart[];
  howTo: { title: string; text: string }[];
  note: string;
};

type Unit = "in" | "cm";

function format(inches: number, unit: Unit) {
  if (unit === "cm") return `${(inches * 2.54).toFixed(1)} cm`;
  const whole = Math.floor(inches);
  return `${whole}${inches - whole >= 0.5 ? "½" : ""}"`;
}

// Interactive size chart: pick a garment and cut, switch inches/cm. The default chart is in the HTML from the start.
export default function SizeChartTool({ charts, howTo, note }: Props) {
  const [chartId, setChartId] = useState(charts[0].id);
  const [unit, setUnit] = useState<Unit>("in");
  const selectId = useId();
  const chart = charts.find((c) => c.id === chartId) ?? charts[0];

  return (
    <div className={`${styles.tool} reveal`}>
      <div className={styles.controls}>
        <div className={styles.field}>
          <label htmlFor={selectId} className={`label ${styles.fieldLabel}`}>
            Choose garment and cut
          </label>
          <select id={selectId} className={styles.select} value={chartId} onChange={(e) => setChartId(e.target.value)}>
            {charts.map((c) => (
              <option key={c.id} value={c.id}>
                {c.garment} · {c.cut}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.units} role="group" aria-label="Units">
          {(["in", "cm"] as Unit[]).map((u) => (
            <button
              key={u}
              type="button"
              className={styles.unit}
              aria-pressed={unit === u}
              onClick={() => setUnit(u)}
            >
              {u === "in" ? "Inches" : "Centimeters"}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <aside className={styles.diagram}>
          <p className={`label ${styles.diagramLabel}`}>How to measure</p>
          <TeeDiagram />
          <p className={styles.garment}>{chart.garment}</p>
          <p className={`label ${styles.cut}`}>{chart.cut}</p>
          <ol role="list" className={styles.howTo}>
            {howTo.map((h, i) => (
              <li key={h.title}>
                <span className={styles.howNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{h.title}.</strong> {h.text}
                </span>
              </li>
            ))}
          </ol>
        </aside>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className={styles.caption}>
              <span className="label">Size chart</span>
              <span className={styles.captionTitle}>
                {chart.garment}, {chart.cut} ({unit === "in" ? "inches" : "centimeters"})
              </span>
            </caption>
            <thead>
              <tr>
                <th scope="col">Size</th>
                <th scope="col">
                  <span className={styles.thNum}>01</span> Chest width
                </th>
                <th scope="col">
                  <span className={styles.thNum}>02</span> Body length
                </th>
              </tr>
            </thead>
            <tbody>
              {chart.rows.map((r) => (
                <tr key={r.size}>
                  <th scope="row">{r.size}</th>
                  <td>{format(r.chest, unit)}</td>
                  <td>{format(r.length, unit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`small ${styles.note}`}>{note}</p>
        </div>
      </div>
    </div>
  );
}

function TeeDiagram() {
  return (
    <svg viewBox="0 0 200 180" className={styles.tee} aria-hidden="true">
      <path
        d="M70 20 40 32 12 62l24 22 14-10v92h100V74l14 10 24-22-28-30-30-12c-4 12-16 19-30 19S74 32 70 20Z"
        fill="var(--color-on-dark)"
        stroke="var(--color-dark)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <g stroke="var(--color-accent)" strokeWidth="2.5" fill="var(--color-accent)">
        <line x1="54" y1="84" x2="146" y2="84" />
        <path d="m54 84 8-5v10Zm92 0-8-5v10Z" stroke="none" />
      </g>
      <g stroke="var(--color-accent-2)" strokeWidth="2.5" fill="var(--color-accent-2)">
        <line x1="166" y1="34" x2="166" y2="166" />
        <path d="m166 34-5 8h10Zm0 132-5-8h10Z" stroke="none" />
      </g>
      <text x="100" y="78" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-accent)">
        01 CHEST
      </text>
      <text x="178" y="104" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-accent-2)" transform="rotate(90 178 104)" textAnchor="middle">
        02 LENGTH
      </text>
    </svg>
  );
}
