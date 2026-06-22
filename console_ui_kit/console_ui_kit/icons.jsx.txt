// DP Metric Console — Lucide icon subset as React components.
// Exposes window.LucideReact = { IconName, ... } matching lucide-react's API
// (props: size, color, strokeWidth). Paths are Lucide (ISC) 24x24 stroke icons.
(function () {
  const ICONS = {
    LayoutGrid: [['rect',{x:3,y:3,width:7,height:7,rx:1}],['rect',{x:14,y:3,width:7,height:7,rx:1}],['rect',{x:14,y:14,width:7,height:7,rx:1}],['rect',{x:3,y:14,width:7,height:7,rx:1}]],
    TriangleAlert: [['path',{d:'m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'}],['path',{d:'M12 9v4'}],['path',{d:'M12 17h.01'}]],
    Ship: [['path',{d:'M12 10.189V14'}],['path',{d:'M12 2v3'}],['path',{d:'M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6'}],['path',{d:'M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 1.62 6'}],['path',{d:'M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'}]],
    CalendarClock: [['path',{d:'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5'}],['path',{d:'M16 2v4'}],['path',{d:'M8 2v4'}],['path',{d:'M3 10h5'}],['path',{d:'M17.5 17.5 16 16.3V14'}],['circle',{cx:16,cy:16,r:6}]],
    FileBarChart: [['path',{d:'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'}],['path',{d:'M14 2v4a2 2 0 0 0 2 2h4'}],['path',{d:'M8 18v-2'}],['path',{d:'M12 18v-4'}],['path',{d:'M16 18v-6'}]],
    Settings: [['path',{d:'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'}],['circle',{cx:12,cy:12,r:3}]],
    Search: [['circle',{cx:11,cy:11,r:8}],['path',{d:'m21 21-4.3-4.3'}]],
    Bell: [['path',{d:'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'}],['path',{d:'M10.3 21a1.94 1.94 0 0 0 3.4 0'}]],
    SlidersHorizontal: [['line',{x1:21,x2:14,y1:4,y2:4}],['line',{x1:10,x2:3,y1:4,y2:4}],['line',{x1:21,x2:12,y1:12,y2:12}],['line',{x1:8,x2:3,y1:12,y2:12}],['line',{x1:21,x2:16,y1:20,y2:20}],['line',{x1:12,x2:3,y1:20,y2:20}],['line',{x1:14,x2:14,y1:2,y2:6}],['line',{x1:8,x2:8,y1:10,y2:14}],['line',{x1:16,x2:16,y1:18,y2:22}]],
    ArrowLeft: [['path',{d:'m12 19-7-7 7-7'}],['path',{d:'M19 12H5'}]],
    Wrench: [['path',{d:'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'}]],
    CalendarPlus: [['path',{d:'M8 2v4'}],['path',{d:'M16 2v4'}],['path',{d:'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'}],['path',{d:'M3 10h18'}],['path',{d:'M16 19h6'}],['path',{d:'M19 16v6'}]],
  };

  function make(nodes) {
    return function Icon(props) {
      const { size = 24, color = 'currentColor', strokeWidth = 2, style, ...rest } = props || {};
      return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg', width: size, height: size,
        viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth,
        strokeLinecap: 'round', strokeLinejoin: 'round', style, ...rest,
      }, nodes.map((n, i) => React.createElement(n[0], { key: i, ...n[1] })));
    };
  }

  const lib = {};
  for (const name in ICONS) lib[name] = make(ICONS[name]);
  window.LucideReact = lib;
})();
