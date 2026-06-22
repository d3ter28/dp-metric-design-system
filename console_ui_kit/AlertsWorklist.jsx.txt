// DP Metric Console — Alerts worklist screen.
function AlertsWorklist({ onOpenVessel }) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const { StatusBadge, Button, Tabs, Tag } = NS;
  const L = window.LucideReact || {};
  const { alerts } = window.DPMData;
  const [filter, setFilter] = React.useState('all');

  const shown = alerts.filter((a) => filter === 'all' ? true : a.tone === filter);
  const counts = {
    all: alerts.length,
    critical: alerts.filter((a) => a.tone === 'critical').length,
    watch: alerts.filter((a) => a.tone === 'watch').length,
  };

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1000 }}>
      <Tabs value={filter} onChange={setFilter} tabs={[
        { value: 'all', label: 'All alerts', count: counts.all },
        { value: 'critical', label: 'Critical', count: counts.critical },
        { value: 'watch', label: 'Watch', count: counts.watch },
      ]} />

      <div style={{ background:'var(--surface-card)', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-xs)', overflow:'hidden' }}>
        {shown.map((a, i) => (
          <div key={a.id} style={{ display:'flex', alignItems:'center', gap:16, padding:'16px 20px', borderBottom: i < shown.length-1 ? '1px solid var(--gray-100)' : 'none' }}>
            <div style={{ width:4, alignSelf:'stretch', borderRadius:4, background: a.tone==='critical'?'var(--status-critical)':'var(--status-watch)' }} />
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5 }}>
                <StatusBadge tone={a.tone}>{a.tone === 'critical' ? 'Critical' : 'Watch'}</StatusBadge>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)' }}>{a.id} · {a.opened}</span>
              </div>
              <div style={{ fontSize:15, fontWeight:600, color:'var(--text-strong)', marginBottom:4 }}>{a.title}</div>
              <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--text-muted)' }}>
                <span style={{ fontWeight:600, color:'var(--text-body)' }}>{a.vessel}</span>
                <span>·</span>
                <Tag color="navy">{a.asset}</Tag>
              </div>
            </div>
            <div style={{ textAlign:'right', fontFamily:'var(--font-mono)', minWidth:104 }}>
              <div style={{ fontSize:10, letterSpacing:'0.05em', textTransform:'uppercase', color:'var(--text-muted)' }}>Cleaning</div>
              <div style={{ fontSize:14, fontWeight:600, color: a.tone==='critical'?'var(--status-critical)':'var(--text-strong)', fontVariantNumeric:'tabular-nums' }}>{a.due}</div>
            </div>
            <div style={{ textAlign:'right', fontFamily:'var(--font-mono)', minWidth:70 }}>
              <div style={{ fontSize:10, letterSpacing:'0.05em', textTransform:'uppercase', color:'var(--text-muted)' }}>Conf</div>
              <div style={{ fontSize:18, fontWeight:600, color:'var(--text-strong)', fontVariantNumeric:'tabular-nums' }}>{a.confidence}</div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <Button variant="outline" size="sm" onClick={() => onOpenVessel(a.vesselId)}>Inspect</Button>
              <Button variant="primary" size="sm">Schedule</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AlertsWorklist });
