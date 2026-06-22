// DP Metric Console — Sidebar + TopBar chrome. Exposes to window.
function Sidebar({ active, onNav, criticalCount }) {
  const L = window.LucideReact || {};
  const items = [
    { id: 'fleet', label: 'Fleet', Icon: L.LayoutGrid },
    { id: 'alerts', label: 'Alerts', Icon: L.TriangleAlert, badge: criticalCount },
    { id: 'vessel', label: 'Vessels', Icon: L.Ship },
    { id: 'schedule', label: 'Schedule', Icon: L.CalendarClock },
    { id: 'reports', label: 'Reports', Icon: L.FileBarChart },
  ];
  const bottom = [
    { id: 'settings', label: 'Settings', Icon: L.Settings },
  ];
  const Item = ({ it }) => {
    const isActive = active === it.id;
    const Ic = it.Icon;
    return (
      <button onClick={() => onNav(it.id)} style={{
        display: 'flex', alignItems: 'center', gap: 11, width: '100%',
        padding: '9px 12px', border: 0, cursor: 'pointer', textAlign: 'left',
        borderRadius: 'var(--radius-md)', marginBottom: 2,
        background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
        color: isActive ? '#fff' : 'var(--text-inverse-muted)',
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: isActive ? 600 : 500,
        position: 'relative',
      }}>
        {isActive && <span style={{ position:'absolute', left:0, top:8, bottom:8, width:3, borderRadius:'0 3px 3px 0', background:'var(--teal-500)' }} />}
        {Ic && <Ic size={18} strokeWidth={2} />}
        <span style={{ flex: 1 }}>{it.label}</span>
        {it.badge ? <span style={{
          fontFamily:'var(--font-mono)', fontSize:11, fontWeight:600, color:'#fff',
          background:'var(--status-critical)', borderRadius:'var(--radius-pill)', padding:'1px 7px',
        }}>{it.badge}</span> : null}
      </button>
    );
  };
  return (
    <aside style={{
      width: 'var(--sidebar-w)', flex: '0 0 auto', background: 'var(--navy-900)',
      display: 'flex', flexDirection: 'column', padding: '16px 12px',
      borderRight: '1px solid var(--border-inverse)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 18px' }}>
        <img src="../../assets/logo-tile.svg" width="30" height="30" style={{ borderRadius: 8 }} alt="" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-0.01em' }}>
          DP Metric
        </span>
      </div>
      <nav style={{ flex: 1 }}>
        {items.map((it) => <Item key={it.id} it={it} />)}
      </nav>
      <div style={{ borderTop: '1px solid var(--border-inverse)', paddingTop: 10 }}>
        {bottom.map((it) => <Item key={it.id} it={it} />)}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px 2px' }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--navy-600)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:12, fontWeight:600, fontFamily:'var(--font-mono)' }}>EL</div>
          <div style={{ lineHeight: 1.3 }}>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>E. Larsen</div>
            <div style={{ color: 'var(--text-inverse-muted)', fontSize: 11 }}>Fleet ops</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title, subtitle, onSearch, right }) {
  const L = window.LucideReact || {};
  const Search = L.Search, Bell = L.Bell;
  return (
    <header style={{
      height: 'var(--topbar-h)', flex: '0 0 auto', display: 'flex', alignItems: 'center',
      gap: 16, padding: '0 24px', background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{subtitle}</div>}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px', background: 'var(--surface-page)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', width: 240 }}>
        {Search && <Search size={16} color="var(--text-muted)" />}
        <input placeholder="Search vessels, assets…" onChange={(e)=>onSearch&&onSearch(e.target.value)} style={{ border: 0, outline: 0, background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--text-body)', width: '100%' }} />
      </div>
      <button aria-label="Notifications" style={{ position:'relative', width:36, height:36, border:'1px solid var(--border-subtle)', background:'var(--surface-card)', borderRadius:'var(--radius-md)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
        {Bell && <Bell size={17} color="var(--text-body)" />}
        <span style={{ position:'absolute', top:8, right:9, width:7, height:7, borderRadius:'50%', background:'var(--status-critical)', boxShadow:'0 0 0 2px var(--surface-card)' }} />
      </button>
      {right}
    </header>
  );
}

Object.assign(window, { Sidebar, TopBar });
