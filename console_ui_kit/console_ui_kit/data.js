// DP Metric Console — demo data (fake). Ship hull/propeller performance & fouling.
// Exposes window.DPMData.
window.DPMData = (function () {
  const vessels = [
    { id: 'MV-08', name: 'MV Aurora', type: 'Bulk carrier', fleet: 'North Sea', flag: 'NO',
      health: 'critical', speedLoss: 8.7, excessPower: 12.4, vti: 1.34, cii: 'D',
      cleaning: 'Overdue 14 d', openAlerts: 2, lastSync: '2 min ago',
      subsystems: [
        { id: 'HULL', name: 'Hull', kind: 'Underwater hull', condition: 'critical', level: 22, due: 'Overdue 14 d',
          metrics: [{k:'Speed loss',v:'8.7',u:'%',tone:'critical'},{k:'Excess power',v:'12.4',u:'%',tone:'critical'},{k:'Days since clean',v:'312',u:'',tone:'watch'}] },
        { id: 'PROP', name: 'Propeller', kind: 'Propeller & shaft', condition: 'watch', level: 56, due: 'Polish due',
          metrics: [{k:'Efficiency drop',v:'4.1',u:'%',tone:'watch'},{k:'Roughness',v:'High',u:'',tone:'watch'},{k:'Last polish',v:'186 d',u:'',tone:'neutral'}] },
      ] },
    { id: 'MV-12', name: 'MV Helios', type: 'Container', fleet: 'Baltic', flag: 'DK',
      health: 'watch', speedLoss: 4.2, excessPower: 6.0, vti: 1.12, cii: 'C',
      cleaning: 'In 38 d', openAlerts: 1, lastSync: '1 min ago', subsystems: [] },
    { id: 'MV-03', name: 'MV Nordkapp', type: 'Tanker', fleet: 'North Sea', flag: 'NO',
      health: 'healthy', speedLoss: 1.3, excessPower: 1.9, vti: 1.02, cii: 'B',
      cleaning: 'In 142 d', openAlerts: 0, lastSync: 'just now', subsystems: [] },
    { id: 'MV-21', name: 'MV Sirocco', type: 'Bulk carrier', fleet: 'Atlantic', flag: 'GR',
      health: 'healthy', speedLoss: 2.0, excessPower: 2.6, vti: 1.04, cii: 'B',
      cleaning: 'In 118 d', openAlerts: 0, lastSync: '4 min ago', subsystems: [] },
    { id: 'MV-17', name: 'MV Triton', type: 'Container', fleet: 'Atlantic', flag: 'GR',
      health: 'watch', speedLoss: 5.1, excessPower: 7.3, vti: 1.16, cii: 'C',
      cleaning: 'In 22 d', openAlerts: 1, lastSync: '3 min ago', subsystems: [] },
    { id: 'MV-05', name: 'MV Pelagic', type: 'Tanker', fleet: 'Pacific', flag: 'SG',
      health: 'offline', speedLoss: 0, excessPower: 0, vti: 0, cii: '—',
      cleaning: 'No data', openAlerts: 0, lastSync: '6 h ago', subsystems: [] },
  ];

  const alerts = [
    { id: 'A-3041', vessel: 'MV Aurora', vesselId: 'MV-08', asset: 'Hull', tone: 'critical',
      title: 'Hull fouling past cleaning threshold', due: 'Overdue 14 d', confidence: 0.90, opened: '18 min ago' },
    { id: 'A-3038', vessel: 'MV Aurora', vesselId: 'MV-08', asset: 'Propeller', tone: 'watch',
      title: 'Propeller efficiency drop detected', due: 'In 60 d', confidence: 0.81, opened: '2 h ago' },
    { id: 'A-3026', vessel: 'MV Triton', vesselId: 'MV-17', asset: 'Hull', tone: 'watch',
      title: 'Excess power rising between dry-docks', due: 'In 22 d', confidence: 0.77, opened: '5 h ago' },
    { id: 'A-3019', vessel: 'MV Helios', vesselId: 'MV-12', asset: 'Hull', tone: 'watch',
      title: 'Speed loss trending above clean-hull baseline', due: 'In 38 d', confidence: 0.74, opened: '8 h ago' },
  ];

  const kpis = [
    { label: 'Fleet avg speed loss', value: '5.1', unit: '%', delta: '0.6%', dir: 'up', tone: 'watch', foot: 'vs last 30d' },
    { label: 'Vessels monitored', value: '24', unit: '', delta: '', tone: 'neutral', foot: '1 offline' },
    { label: 'Cleanings due', value: '3', unit: '', delta: '1', dir: 'up', tone: 'critical', foot: 'within 30 d' },
    { label: 'Fuel saved', value: '184', unit: 't', delta: '12%', dir: 'up', tone: 'healthy', foot: 'this quarter' },
  ];

  // 36-point series: excess power (%) over voyages, rising as the hull fouls.
  const series = Array.from({ length: 36 }, (_, i) => {
    const base = 2.4 + i * 0.22 + Math.sin(i / 3) * 0.5;
    const climb = i > 26 ? (i - 26) * 0.55 : 0;
    return Math.round((base + climb) * 10) / 10;
  });
  const seriesThreshold = 10; // cleaning recommended at +10% excess power

  return { vessels, alerts, kpis, series, seriesThreshold };
})();
