// DP Metric Console — Fleet Overview screen.
function FleetOverview({ onOpenVessel }) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const { StatCard, StatusBadge, HealthDot, Meter, Button } = NS;
  const L = window.LucideReact || {};
  const { vessels, kpis, alerts } = window.DPMData;

  const toneOf = (h) => h;
  const labelOf = { healthy: 'Healthy', watch: 'Watch', critical: 'Critical', offline: 'Offline' };

  return (
    <div style={{ padding: 24, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 20, alignItems: 'start' }}>
      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {kpis.map((k) => (
            <StatCard key={k.label} label={k.label} value={k.value} unit={k.unit}
              delta={k.delta} deltaDirection={k.dir} tone={k.tone} footnote={k.foot} />
          ))}
        </div>

        {/* Fleet table */}
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)' }}>Fleet status</h3>
            <span style={{ marginLeft: 10, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-muted)' }}>24 vessels</span>
            <div style={{ flex: 1 }} />
            <Button variant="outline" size="sm" iconLeft={L.SlidersHorizontal ? <L.SlidersHorizontal size={15} /> : null}>Filter</Button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                {['Vessel', 'Type', 'Fleet', 'Condition', 'Speed loss', 'Cleaning', 'Sync'].map((h, i) => (
                  <th key={h} style={{ padding: '9px 18px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, borderBottom: '1px solid var(--border-subtle)', textAlign: i >= 4 ? 'right' : 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vessels.map((v) => (
                <tr key={v.id} onClick={() => onOpenVessel(v.id)} style={{ cursor: 'pointer', borderBottom: '1px solid var(--gray-100)' }}
                    onMouseEnter={(e)=>e.currentTarget.style.background='var(--gray-50)'}
                    onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
                  <td style={{ padding: '12px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <HealthDot tone={toneOf(v.health)} pulse={v.health==='critical'} />
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 14 }}>{v.name}</div>
                        <div style={{ fontFamily:'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{v.id} · {v.flag}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px 18px', fontSize: 13.5, color: 'var(--text-body)' }}>{v.type}</td>
                  <td style={{ padding: '12px 18px', fontSize: 13.5, color: 'var(--text-body)' }}>{v.fleet}</td>
                  <td style={{ padding: '12px 18px' }}><StatusBadge tone={v.health}>{labelOf[v.health]}</StatusBadge></td>
                  <td style={{ padding: '12px 18px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: v.health==='offline'?'var(--text-subtle)':v.health==='critical'?'var(--status-critical)':v.health==='watch'?'var(--amber-600)':'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{v.health==='offline' ? '—' : v.speedLoss.toFixed(1)+'%'}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'right', fontSize: 12.5, fontWeight: 500, color: v.health==='critical' ? 'var(--status-critical)' : v.health==='watch' ? 'var(--amber-600)' : 'var(--text-muted)' }}>{v.cleaning}</td>
                  <td style={{ padding: '12px 18px', textAlign: 'right', fontSize: 12, color: 'var(--text-muted)' }}>{v.lastSync}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right column — priority alerts */}
      <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
          {L.TriangleAlert && <L.TriangleAlert size={16} color="var(--status-watch)" />}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)' }}>Priority worklist</h3>
        </div>
        <div>
          {alerts.map((a) => (
            <div key={a.id} onClick={() => onOpenVessel(a.vesselId)} style={{ padding: '13px 18px', borderBottom: '1px solid var(--gray-100)', cursor: 'pointer' }}
                 onMouseEnter={(e)=>e.currentTarget.style.background='var(--gray-50)'}
                 onMouseLeave={(e)=>e.currentTarget.style.background='transparent'}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <StatusBadge tone={a.tone}>{a.tone === 'critical' ? 'Critical' : 'Watch'}</StatusBadge>
                <span style={{ fontFamily:'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{a.opened}</span>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.35, marginBottom: 4 }}>{a.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{a.vessel} · {a.asset}</div>
              <div style={{ display: 'flex', gap: 14, marginTop: 8, fontFamily:'var(--font-mono)', fontSize: 11.5 }}>
                <span style={{ color: 'var(--text-muted)' }}>cleaning <strong style={{ color: 'var(--text-strong)' }}>{a.due}</strong></span>
                <span style={{ color: 'var(--text-muted)' }}>conf <strong style={{ color: 'var(--text-strong)' }}>{a.confidence}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FleetOverview });
