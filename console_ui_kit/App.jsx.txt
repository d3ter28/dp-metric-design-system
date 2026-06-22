// DP Metric Console — root app, wires nav + screens.
function ConsoleApp() {
  const [view, setView] = React.useState('fleet');
  const [vesselId, setVesselId] = React.useState('MV-08');
  const { vessels, alerts } = window.DPMData;
  const criticalCount = alerts.filter((a) => a.tone === 'critical').length;

  const openVessel = (id) => { setVesselId(id); setView('vessel'); };

  // Allow an embedding page (e.g. the marketing slideshow) to drive the view.
  React.useEffect(() => {
    const apply = (v) => {
      if (!v) return;
      if (v === 'vessel') setVesselId('MV-08');
      setView(v);
    };
    const fromHash = (location.hash || '').replace('#', '');
    if (fromHash) apply(fromHash);
    const onMsg = (e) => { if (e.data && e.data.dpmView) apply(e.data.dpmView); };
    const onHash = () => apply((location.hash || '').replace('#', ''));
    window.addEventListener('message', onMsg);
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('message', onMsg); window.removeEventListener('hashchange', onHash); };
  }, []);

  const titles = {
    fleet: { t: 'Fleet overview', s: 'Hull & propeller performance across 24 vessels' },
    alerts: { t: 'Alerts & worklist', s: 'Ranked by cleaning urgency' },
    vessel: { t: 'Vessel', s: 'Hull performance & fouling forecast' },
    schedule: { t: 'Maintenance schedule', s: 'Planned cleanings & dry-docks' },
    reports: { t: 'Reports', s: 'Fleet efficiency & emissions analytics' },
    settings: { t: 'Settings', s: 'Workspace & alerting' },
  };
  const head = titles[view] || titles.fleet;

  let screen;
  if (view === 'fleet') screen = <FleetOverview onOpenVessel={openVessel} />;
  else if (view === 'alerts') screen = <AlertsWorklist onOpenVessel={openVessel} />;
  else if (view === 'vessel') screen = <VesselDetail vesselId={vesselId} onBack={() => setView('fleet')} />;
  else screen = (
    <div style={{ padding: 60, textAlign: 'center', color: 'var(--text-muted)' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:20, color:'var(--text-body)', marginBottom:6 }}>{head.t}</div>
      This screen is outside the demo scope.
    </div>
  );

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--surface-page)' }}>
      <Sidebar active={view} onNav={setView} criticalCount={criticalCount} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar title={head.t} subtitle={head.s} />
        <main style={{ flex: 1, overflowY: 'auto' }}>{screen}</main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ConsoleApp />);
