// DP Metric Console — Vessel Detail screen.
function PerfChart({ series, threshold, label }) {
  const w = 640, h = 180, pad = 8;
  const min = Math.min(...series) - 1, max = Math.max(...series, threshold) + 1.5;
  const x = (i) => pad + (i / (series.length - 1)) * (w - pad * 2);
  const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2 - 18);
  const line = series.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  const ty = y(threshold);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="tfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--teal-500)" stopOpacity="0.20" />
          <stop offset="1" stopColor="var(--teal-500)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1={pad} x2={w - pad} y1={pad + g * (h - pad * 2)} y2={pad + g * (h - pad * 2)} stroke="var(--gray-100)" strokeWidth="1" />
      ))}
      <line x1={pad} x2={w - pad} y1={ty} y2={ty} stroke="var(--status-critical)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />
      <text x={w - pad} y={ty - 5} textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" fill="var(--status-critical)">{label}</text>
      <polygon points={area} fill="url(#tfill)" />
      <polyline points={line} fill="none" stroke="var(--teal-500)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(series.length - 1)} cy={y(series[series.length - 1])} r="4" fill="var(--teal-500)" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function VesselDetail({ vesselId, onBack }) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const { Card, StatCard, StatusBadge, HealthDot, Meter, Tabs, Button, Tag } = NS;
  const L = window.LucideReact || {};
  const { vessels, series, seriesThreshold } = window.DPMData;
  const v = vessels.find((x) => x.id === vesselId) || vessels[0];
  const [tab, setTab] = React.useState('performance');
  const labelOf = { healthy: 'Healthy', watch: 'Watch', critical: 'Critical', offline: 'Offline' };
  const subLabel = { HULL: 'Hull condition', PROP: 'Propeller condition' };

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={onBack} style={{ display:'flex', alignItems:'center', gap:6, border:'1px solid var(--border-subtle)', background:'var(--surface-card)', borderRadius:'var(--radius-md)', padding:'7px 11px', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-body)', fontWeight:500 }}>
          {L.ArrowLeft && <L.ArrowLeft size={15} />} Fleet
        </button>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <HealthDot tone={v.health} size="lg" pulse={v.health==='critical'} />
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:24, fontWeight:600, color:'var(--text-strong)', letterSpacing:'-0.02em' }}>{v.name}</h2>
              <StatusBadge tone={v.health}>{labelOf[v.health]}</StatusBadge>
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:12.5, color:'var(--text-muted)', marginTop:2 }}>{v.id} · {v.type} · {v.fleet} · synced {v.lastSync}</div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="outline" size="md" iconLeft={L.Wrench ? <L.Wrench size={16} /> : null}>Log dry-dock</Button>
        <Button variant="primary" size="md" iconLeft={L.CalendarPlus ? <L.CalendarPlus size={16} /> : null}>Schedule cleaning</Button>
      </div>

      {/* Vessel KPI strip */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14 }}>
        <StatCard label="Vessel Technical Index" value={v.vti ? v.vti.toFixed(2) : '—'} tone={v.health} footnote="1.00 = clean baseline" />
        <StatCard label="Speed loss" value={v.health==='offline'?'—':v.speedLoss.toFixed(1)} unit="%" tone={v.health} footnote="at reference power" />
        <StatCard label="Excess power" value={v.health==='offline'?'—':v.excessPower.toFixed(1)} unit="%" tone={v.health} footnote="vs clean hull" />
        <StatCard label="CII rating" value={v.cii} tone={v.cii==='D'||v.cii==='E'?'critical':v.cii==='C'?'watch':'healthy'} footnote={v.cleaning} />
      </div>

      <Tabs value={tab} onChange={setTab} tabs={[
        { value: 'performance', label: 'Performance', count: v.subsystems.length || undefined },
        { value: 'voyages', label: 'Voyages' },
        { value: 'cleaning', label: 'Cleaning history' },
      ]} />

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 18, alignItems: 'start' }}>
        {/* Subsystem list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {v.subsystems.length === 0 && (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', background:'var(--surface-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-lg)' }}>
              No recent voyage data for this vessel in the demo dataset.
            </div>
          )}
          {v.subsystems.map((a) => (
            <div key={a.id} style={{ background:'var(--surface-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-xs)', padding:16 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                <HealthDot tone={a.condition} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:600, fontSize:15, color:'var(--text-strong)' }}>{a.name}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)' }}>{a.kind}</div>
                </div>
                <Tag color="navy">{a.due}</Tag>
                <StatusBadge tone={a.condition}>{labelOf[a.condition]}</StatusBadge>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1.4fr repeat(3, 1fr)', gap:16, alignItems:'center' }}>
                <Meter label={subLabel[a.id] || 'Condition'} valueLabel={a.level+'%'} value={a.level} />
                {a.metrics.map((m) => (
                  <div key={m.k}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.05em', textTransform:'uppercase', color:'var(--text-muted)' }}>{m.k}</div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:18, fontWeight:600, fontVariantNumeric:'tabular-nums', color: m.tone==='critical'?'var(--status-critical)':m.tone==='watch'?'var(--amber-600)':'var(--text-strong)' }}>{m.v}<span style={{ fontSize:11, color:'var(--text-muted)' }}> {m.u}</span></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance chart panel */}
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          <Card title="Excess power vs clean hull" eyebrow="Last 36 voyages · weather-normalized">
            <PerfChart series={series} threshold={seriesThreshold} label={`clean at +${seriesThreshold}%`} />
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)' }}>
              <span>−36 voyages</span><span>now</span>
            </div>
          </Card>
          <div style={{ background:'var(--navy-900)', borderRadius:'var(--radius-lg)', padding:18, color:'#fff' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.07em', textTransform:'uppercase', color:'var(--teal-300)', marginBottom:8 }}>Model forecast</div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:600, letterSpacing:'-0.02em' }}>Clean now <span style={{ fontSize:15, color:'var(--text-inverse-muted)', fontWeight:400 }}>· 14 d overdue</span></div>
            <p style={{ fontSize:13, color:'var(--text-inverse-muted)', lineHeight:1.5, marginTop:8, marginBottom:0 }}>Excess power has risen 0.3%/week above the clean-hull baseline and has passed the +10% cleaning threshold. Cleaning now recovers an est. 2.3 t/day of fuel; est. confidence 0.90.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { VesselDetail });
