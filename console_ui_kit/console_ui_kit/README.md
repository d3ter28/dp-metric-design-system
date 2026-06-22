# DP Metric Console — UI kit

Interactive recreation of the **fleet hull-performance dashboard**. Open `index.html`.

> Original product design (no source app was provided). Demonstrates the design system's components composed into real screens for hull-fouling / ship-performance monitoring.

## Screens & flow
- **Fleet overview** (`FleetOverview.jsx`) — KPI row (avg speed loss, cleanings due, fuel saved), fleet status table (health dot, condition badge, speed loss, cleaning due, last sync), and a priority worklist rail. Click any vessel row or worklist item → vessel detail.
- **Vessel detail** (`VesselDetail.jsx`) — vessel header with condition; a KPI strip (VTI, speed loss, excess power, CII rating); a tabbed hull/propeller subsystem list with condition `Meter`s + performance metrics; an excess-power-vs-clean-hull trend chart; and the model cleaning forecast panel.
- **Alerts & worklist** (`AlertsWorklist.jsx`) — ranked fouling/performance alerts filterable by severity, each with the predicted cleaning window, confidence, and Inspect/Schedule actions.

Navigation lives in the left **Sidebar**; **TopBar** holds search + notifications (`Chrome.jsx`).

## Architecture
- `data.js` → `window.DPMData` (fake fleet / alerts / weather-normalized performance series).
- `icons.jsx` → `window.LucideReact` (bundled Lucide subset, no CDN).
- Screens read components from `window.DPMetricDesignSystem_04ca23` (the compiled `_ds_bundle.js`) and share scope via `window`.
- Composes system primitives (`StatCard`, `Card`, `Meter`, `StatusBadge`, `HealthDot`, `Tabs`, `Button`, `Tag`) — it does **not** reimplement them. The only local custom render is the SVG `PerfChart` (a data viz, not a component primitive).

`index.html` is also registered as a **Starting Point** ("Console").
