/* @ds-bundle: {"format":3,"namespace":"DPMetricDesignSystem_04ca23","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"HealthDot","sourcePath":"components/feedback/HealthDot.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"eb9e7194541d","components/buttons/IconButton.jsx":"77031ce1e38e","components/data/Card.jsx":"e3176d7749ad","components/data/Meter.jsx":"552dfc7a304a","components/data/StatCard.jsx":"558ee008e9cc","components/feedback/HealthDot.jsx":"4ee3cfbb3ffc","components/feedback/StatusBadge.jsx":"7cfe4056e370","components/feedback/Tag.jsx":"f95a84e77d17","components/forms/Input.jsx":"e10e30ff8d79","components/forms/Select.jsx":"3d37ab03ad54","components/forms/Switch.jsx":"303dfa8d1077","components/navigation/Tabs.jsx":"f4f7b5966b38","ui_kits/console/AlertsWorklist.jsx":"38e3dc1f4718","ui_kits/console/App.jsx":"f2d206754886","ui_kits/console/Chrome.jsx":"f0deb9428ea9","ui_kits/console/FleetOverview.jsx":"8e00c25eefe2","ui_kits/console/VesselDetail.jsx":"a7dbc2e6ac8e","ui_kits/console/data.js":"d8ff56afbd9a","ui_kits/console/icons.jsx":"ff6995e52243"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DPMetricDesignSystem_04ca23 = window.DPMetricDesignSystem_04ca23 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 30,
    padding: '0 12px',
    fontSize: 13,
    gap: 6,
    radius: 'var(--radius-sm)'
  },
  md: {
    height: 38,
    padding: '0 16px',
    fontSize: 14,
    gap: 8,
    radius: 'var(--radius-md)'
  },
  lg: {
    height: 46,
    padding: '0 22px',
    fontSize: 15,
    gap: 9,
    radius: 'var(--radius-md)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-on-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--action-primary-hover)',
    '--press-bg': 'var(--action-primary-press)'
  },
  secondary: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--action-secondary-hover)',
    '--press-bg': 'var(--navy-900)'
  },
  outline: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--gray-50)',
    '--press-bg': 'var(--gray-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--gray-100)',
    '--press-bg': 'var(--gray-200)'
  },
  danger: {
    background: 'var(--status-critical)',
    color: '#fff',
    border: '1px solid transparent',
    '--hover-bg': 'var(--red-600)',
    '--press-bg': 'var(--red-600)'
  }
};

/**
 * DP Metric primary action control.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [state, setState] = React.useState('rest');
  const bg = disabled ? undefined : state === 'press' ? v['--press-bg'] : state === 'hover' ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      background: bg,
      color: v.color,
      border: v.border,
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      transform: state === 'press' && !disabled ? 'translateY(0.5px)' : 'none',
      boxShadow: variant === 'primary' && !disabled ? 'var(--shadow-xs)' : 'none',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 30,
  md: 38,
  lg: 46
};

/**
 * Square icon-only button. Pair with a Lucide icon child.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const palette = {
    ghost: {
      bg: hover ? 'var(--gray-100)' : 'transparent',
      color: 'var(--text-body)',
      border: 'transparent'
    },
    outline: {
      bg: hover ? 'var(--gray-50)' : 'var(--surface-card)',
      color: 'var(--text-body)',
      border: 'var(--border-default)'
    },
    solid: {
      bg: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: '#fff',
      border: 'transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: palette.bg,
      color: palette.color,
      border: `1px solid ${palette.border}`,
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface container. Optional header (title + actions) and padding control.
 */
function Card({
  children,
  title,
  eyebrow,
  actions,
  padding = 'md',
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    none: 0,
    sm: 'var(--space-3)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  }[padding] ?? 'var(--space-5)';
  return /*#__PURE__*/React.createElement("section", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
      borderColor: interactive && hover ? 'var(--border-default)' : 'var(--border-subtle)',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || actions || eyebrow) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 2
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, title)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: '0 0 auto'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal meter for condition / remaining-useful-life / utilization.
 * value is 0–100. tone colors the fill; auto-derives from value if "auto".
 */
function Meter({
  value = 0,
  tone = 'auto',
  label,
  valueLabel,
  height = 8,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const resolved = tone !== 'auto' ? tone : pct >= 66 ? 'healthy' : pct >= 33 ? 'watch' : 'critical';
  const color = {
    healthy: 'var(--status-healthy)',
    watch: 'var(--status-watch)',
    critical: 'var(--status-critical)',
    info: 'var(--status-info)',
    teal: 'var(--teal-500)'
  }[resolved] || 'var(--teal-500)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--gray-100)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-inset)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KPI tile — label, big value with unit, and optional delta trend.
 */
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  tone = 'neutral',
  footnote,
  style = {},
  ...rest
}) {
  const toneColor = {
    healthy: 'var(--status-healthy)',
    watch: 'var(--status-watch)',
    critical: 'var(--status-critical)',
    info: 'var(--status-info)',
    neutral: 'var(--text-strong)'
  }[tone] || 'var(--text-strong)';
  const dir = deltaDirection || (delta && String(delta).trim().startsWith('-') ? 'down' : 'up');
  const deltaColor = dir === 'down' ? 'var(--status-critical)' : 'var(--status-healthy)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: toneColor,
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, unit)), (delta || footnote) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: deltaColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, dir === 'down' ? '▼' : '▲'), delta), footnote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, footnote)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/HealthDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 10,
  md: 13,
  lg: 16
};
const COLORS = {
  healthy: 'var(--status-healthy)',
  watch: 'var(--status-watch)',
  critical: 'var(--status-critical)',
  info: 'var(--status-info)',
  offline: 'var(--status-offline)'
};

/**
 * Bare condition dot, optionally pulsing for live/critical states.
 */
function HealthDot({
  tone = 'healthy',
  size = 'md',
  pulse = false,
  style = {},
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  const color = COLORS[tone] || COLORS.healthy;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": tone,
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: d,
      height: d,
      ...style
    }
  }, rest), pulse && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: color,
      animation: 'dpm-ping 1.6s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: d,
      height: d,
      borderRadius: '50%',
      background: color,
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes dpm-ping{0%{transform:scale(1);opacity:.55}70%,100%{transform:scale(2.2);opacity:0}}`));
}
Object.assign(__ds_scope, { HealthDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/HealthDot.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  healthy: {
    fg: 'var(--green-600)',
    bg: 'var(--status-healthy-bg)',
    dot: 'var(--status-healthy)'
  },
  watch: {
    fg: 'var(--amber-600)',
    bg: 'var(--status-watch-bg)',
    dot: 'var(--status-watch)'
  },
  critical: {
    fg: 'var(--red-600)',
    bg: 'var(--status-critical-bg)',
    dot: 'var(--status-critical)'
  },
  info: {
    fg: 'var(--blue-600)',
    bg: 'var(--status-info-bg)',
    dot: 'var(--status-info)'
  },
  offline: {
    fg: 'var(--gray-600)',
    bg: 'var(--status-offline-bg)',
    dot: 'var(--status-offline)'
  },
  neutral: {
    fg: 'var(--gray-700)',
    bg: 'var(--gray-100)',
    dot: 'var(--gray-400)'
  }
};

/**
 * Pill conveying vessel / component condition. Optional leading status dot.
 */
function StatusBadge({
  tone = 'neutral',
  children,
  dot = true,
  solid = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      color: solid ? '#fff' : t.fg,
      background: solid ? t.dot : t.bg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      flex: '0 0 auto',
      background: solid ? '#fff' : t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label chip for categories, asset classes, and filters.
 */
function Tag({
  children,
  color = 'neutral',
  removable = false,
  onRemove,
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      fg: 'var(--gray-700)',
      bg: 'var(--gray-100)',
      br: 'var(--gray-200)'
    },
    teal: {
      fg: 'var(--teal-700)',
      bg: 'var(--teal-50)',
      br: 'var(--teal-100)'
    },
    navy: {
      fg: 'var(--navy-700)',
      bg: '#E7EEF6',
      br: '#D3E0EE'
    }
  }[color] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: removable ? '0 5px 0 9px' : '0 9px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: palette.fg,
      background: palette.bg,
      border: `1px solid ${palette.br}`,
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
      width: 14,
      height: 14,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7,
      fontSize: 13
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon, and error state.
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  type = 'text',
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--status-critical)' : focus ? 'var(--border-accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: '0 12px',
      background: disabled ? 'var(--gray-50)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-accent)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: error ? 'var(--status-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native select styled to match DP Metric inputs.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 38,
      border: `1px solid ${focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--gray-50)' : 'var(--surface-card)',
      boxShadow: focus ? 'var(--ring-accent)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      border: 0,
      outline: 0,
      appearance: 'none',
      background: 'transparent',
      padding: '0 34px 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off toggle. Controlled via checked/onChange.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const switchId = id || React.useId();
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: switchId,
    role: "switch",
    type: "button",
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 38,
      height: 22,
      padding: 0,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: 0,
      cursor: 'inherit',
      background: checked ? 'var(--action-primary)' : 'var(--gray-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. Controlled via value/onChange.
 * tabs: Array<{ value, label, count? }>.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(t.value),
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '10px 12px',
        marginBottom: -1,
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--text-strong)' : hover === t.value ? 'var(--text-body)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--teal-50)' : 'var(--gray-100)',
        color: active ? 'var(--teal-700)' : 'var(--text-muted)'
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        borderRadius: '2px 2px 0 0',
        background: active ? 'var(--action-primary)' : 'transparent',
        transition: 'background var(--dur-fast)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/AlertsWorklist.jsx
try { (() => {
// DP Metric Console — Alerts worklist screen.
function AlertsWorklist({
  onOpenVessel
}) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const {
    StatusBadge,
    Button,
    Tabs,
    Tag
  } = NS;
  const L = window.LucideReact || {};
  const {
    alerts
  } = window.DPMData;
  const [filter, setFilter] = React.useState('all');
  const shown = alerts.filter(a => filter === 'all' ? true : a.tone === filter);
  const counts = {
    all: alerts.length,
    critical: alerts.filter(a => a.tone === 'critical').length,
    watch: alerts.filter(a => a.tone === 'watch').length
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    tabs: [{
      value: 'all',
      label: 'All alerts',
      count: counts.all
    }, {
      value: 'critical',
      label: 'Critical',
      count: counts.critical
    }, {
      value: 'watch',
      label: 'Watch',
      count: counts.watch
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden'
    }
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      borderBottom: i < shown.length - 1 ? '1px solid var(--gray-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 4,
      background: a.tone === 'critical' ? 'var(--status-critical)' : 'var(--status-watch)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: a.tone
  }, a.tone === 'critical' ? 'Critical' : 'Watch'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, a.id, " \xB7 ", a.opened)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 4
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, a.vessel), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement(Tag, {
    color: "navy"
  }, a.asset))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      minWidth: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Cleaning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: a.tone === 'critical' ? 'var(--status-critical)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.due)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      minWidth: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Conf"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.confidence)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onOpenVessel(a.vesselId)
  }, "Inspect"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Schedule"))))));
}
Object.assign(window, {
  AlertsWorklist
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/AlertsWorklist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/App.jsx
try { (() => {
// DP Metric Console — root app, wires nav + screens.
function ConsoleApp() {
  const [view, setView] = React.useState('fleet');
  const [vesselId, setVesselId] = React.useState('MV-08');
  const {
    vessels,
    alerts
  } = window.DPMData;
  const criticalCount = alerts.filter(a => a.tone === 'critical').length;
  const openVessel = id => {
    setVesselId(id);
    setView('vessel');
  };

  // Allow an embedding page (e.g. the marketing slideshow) to drive the view.
  React.useEffect(() => {
    const apply = v => {
      if (!v) return;
      if (v === 'vessel') setVesselId('MV-08');
      setView(v);
    };
    const fromHash = (location.hash || '').replace('#', '');
    if (fromHash) apply(fromHash);
    const onMsg = e => {
      if (e.data && e.data.dpmView) apply(e.data.dpmView);
    };
    const onHash = () => apply((location.hash || '').replace('#', ''));
    window.addEventListener('message', onMsg);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('message', onMsg);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);
  const titles = {
    fleet: {
      t: 'Fleet overview',
      s: 'Hull & propeller performance across 24 vessels'
    },
    alerts: {
      t: 'Alerts & worklist',
      s: 'Ranked by cleaning urgency'
    },
    vessel: {
      t: 'Vessel',
      s: 'Hull performance & fouling forecast'
    },
    schedule: {
      t: 'Maintenance schedule',
      s: 'Planned cleanings & dry-docks'
    },
    reports: {
      t: 'Reports',
      s: 'Fleet efficiency & emissions analytics'
    },
    settings: {
      t: 'Settings',
      s: 'Workspace & alerting'
    }
  };
  const head = titles[view] || titles.fleet;
  let screen;
  if (view === 'fleet') screen = /*#__PURE__*/React.createElement(FleetOverview, {
    onOpenVessel: openVessel
  });else if (view === 'alerts') screen = /*#__PURE__*/React.createElement(AlertsWorklist, {
    onOpenVessel: openVessel
  });else if (view === 'vessel') screen = /*#__PURE__*/React.createElement(VesselDetail, {
    vesselId: vesselId,
    onBack: () => setView('fleet')
  });else screen = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--text-body)',
      marginBottom: 6
    }
  }, head.t), "This screen is outside the demo scope.");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: view,
    onNav: setView,
    criticalCount: criticalCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: head.t,
    subtitle: head.s
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, screen)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ConsoleApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Chrome.jsx
try { (() => {
// DP Metric Console — Sidebar + TopBar chrome. Exposes to window.
function Sidebar({
  active,
  onNav,
  criticalCount
}) {
  const L = window.LucideReact || {};
  const items = [{
    id: 'fleet',
    label: 'Fleet',
    Icon: L.LayoutGrid
  }, {
    id: 'alerts',
    label: 'Alerts',
    Icon: L.TriangleAlert,
    badge: criticalCount
  }, {
    id: 'vessel',
    label: 'Vessels',
    Icon: L.Ship
  }, {
    id: 'schedule',
    label: 'Schedule',
    Icon: L.CalendarClock
  }, {
    id: 'reports',
    label: 'Reports',
    Icon: L.FileBarChart
  }];
  const bottom = [{
    id: 'settings',
    label: 'Settings',
    Icon: L.Settings
  }];
  const Item = ({
    it
  }) => {
    const isActive = active === it.id;
    const Ic = it.Icon;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        width: '100%',
        padding: '9px 12px',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 'var(--radius-md)',
        marginBottom: 2,
        background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
        color: isActive ? '#fff' : 'var(--text-inverse-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        position: 'relative'
      }
    }, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: '0 3px 3px 0',
        background: 'var(--teal-500)'
      }
    }), Ic && /*#__PURE__*/React.createElement(Ic, {
      size: 18,
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 600,
        color: '#fff',
        background: 'var(--status-critical)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 7px'
      }
    }, it.badge) : null);
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-w)',
      flex: '0 0 auto',
      background: 'var(--navy-900)',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 12px',
      borderRight: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-tile.svg",
    width: "30",
    height: "30",
    style: {
      borderRadius: 8
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, "DP Metric")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)',
      paddingTop: 10
    }
  }, bottom.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--navy-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--font-mono)'
    }
  }, "EL"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 600
    }
  }, "E. Larsen"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: 11
    }
  }, "Fleet ops")))));
}
function TopBar({
  title,
  subtitle,
  onSearch,
  right
}) {
  const L = window.LucideReact || {};
  const Search = L.Search,
    Bell = L.Bell;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em',
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      width: 240
    }
  }, Search && /*#__PURE__*/React.createElement(Search, {
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search vessels, assets\u2026",
    onChange: e => onSearch && onSearch(e.target.value),
    style: {
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-body)',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    style: {
      position: 'relative',
      width: 36,
      height: 36,
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, Bell && /*#__PURE__*/React.createElement(Bell, {
    size: 17,
    color: "var(--text-body)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--status-critical)',
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  })), right);
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/FleetOverview.jsx
try { (() => {
// DP Metric Console — Fleet Overview screen.
function FleetOverview({
  onOpenVessel
}) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const {
    StatCard,
    StatusBadge,
    HealthDot,
    Meter,
    Button
  } = NS;
  const L = window.LucideReact || {};
  const {
    vessels,
    kpis,
    alerts
  } = window.DPMData;
  const toneOf = h => h;
  const labelOf = {
    healthy: 'Healthy',
    watch: 'Watch',
    critical: 'Critical',
    offline: 'Offline'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement(StatCard, {
    key: k.label,
    label: k.label,
    value: k.value,
    unit: k.unit,
    delta: k.delta,
    deltaDirection: k.dir,
    tone: k.tone,
    footnote: k.foot
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Fleet status"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "24 vessels"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: L.SlidersHorizontal ? /*#__PURE__*/React.createElement(L.SlidersHorizontal, {
      size: 15
    }) : null
  }, "Filter")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'left'
    }
  }, ['Vessel', 'Type', 'Fleet', 'Condition', 'Speed loss', 'Cleaning', 'Sync'].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '9px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600,
      borderBottom: '1px solid var(--border-subtle)',
      textAlign: i >= 4 ? 'right' : 'left'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, vessels.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v.id,
    onClick: () => onOpenVessel(v.id),
    style: {
      cursor: 'pointer',
      borderBottom: '1px solid var(--gray-100)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HealthDot, {
    tone: toneOf(v.health),
    pulse: v.health === 'critical'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 14
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, v.id, " \xB7 ", v.flag)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, v.type), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, v.fleet), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: v.health
  }, labelOf[v.health])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px',
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      fontWeight: 600,
      color: v.health === 'offline' ? 'var(--text-subtle)' : v.health === 'critical' ? 'var(--status-critical)' : v.health === 'watch' ? 'var(--amber-600)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v.health === 'offline' ? '—' : v.speedLoss.toFixed(1) + '%'), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px',
      textAlign: 'right',
      fontSize: 12.5,
      fontWeight: 500,
      color: v.health === 'critical' ? 'var(--status-critical)' : v.health === 'watch' ? 'var(--amber-600)' : 'var(--text-muted)'
    }
  }, v.cleaning), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 18px',
      textAlign: 'right',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, v.lastSync))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, L.TriangleAlert && /*#__PURE__*/React.createElement(L.TriangleAlert, {
    size: 16,
    color: "var(--status-watch)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Priority worklist")), /*#__PURE__*/React.createElement("div", null, alerts.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    onClick: () => onOpenVessel(a.vesselId),
    style: {
      padding: '13px 18px',
      borderBottom: '1px solid var(--gray-100)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: a.tone
  }, a.tone === 'critical' ? 'Critical' : 'Watch'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, a.opened)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.35,
      marginBottom: 4
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, a.vessel, " \xB7 ", a.asset), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "cleaning ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, a.due)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "conf ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, a.confidence))))))));
}
Object.assign(window, {
  FleetOverview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/FleetOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/VesselDetail.jsx
try { (() => {
// DP Metric Console — Vessel Detail screen.
function PerfChart({
  series,
  threshold,
  label
}) {
  const w = 640,
    h = 180,
    pad = 8;
  const min = Math.min(...series) - 1,
    max = Math.max(...series, threshold) + 1.5;
  const x = i => pad + i / (series.length - 1) * (w - pad * 2);
  const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2 - 18);
  const line = series.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  const ty = y(threshold);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: h,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tfill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--teal-500)",
    stopOpacity: "0.20"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--teal-500)",
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: pad,
    x2: w - pad,
    y1: pad + g * (h - pad * 2),
    y2: pad + g * (h - pad * 2),
    stroke: "var(--gray-100)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: w - pad,
    y1: ty,
    y2: ty,
    stroke: "var(--status-critical)",
    strokeWidth: "1.5",
    strokeDasharray: "5 4",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("text", {
    x: w - pad,
    y: ty - 5,
    textAnchor: "end",
    fontFamily: "var(--font-mono)",
    fontSize: "10",
    fill: "var(--status-critical)"
  }, label), /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "url(#tfill)"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: "var(--teal-500)",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x(series.length - 1),
    cy: y(series[series.length - 1]),
    r: "4",
    fill: "var(--teal-500)",
    stroke: "#fff",
    strokeWidth: "2"
  }));
}
function VesselDetail({
  vesselId,
  onBack
}) {
  const NS = window.DPMetricDesignSystem_04ca23;
  const {
    Card,
    StatCard,
    StatusBadge,
    HealthDot,
    Meter,
    Tabs,
    Button,
    Tag
  } = NS;
  const L = window.LucideReact || {};
  const {
    vessels,
    series,
    seriesThreshold
  } = window.DPMData;
  const v = vessels.find(x => x.id === vesselId) || vessels[0];
  const [tab, setTab] = React.useState('performance');
  const labelOf = {
    healthy: 'Healthy',
    watch: 'Watch',
    critical: 'Critical',
    offline: 'Offline'
  };
  const subLabel = {
    HULL: 'Hull condition',
    PROP: 'Propeller condition'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '7px 11px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, L.ArrowLeft && /*#__PURE__*/React.createElement(L.ArrowLeft, {
    size: 15
  }), " Fleet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HealthDot, {
    tone: v.health,
    size: "lg",
    pulse: v.health === 'critical'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, v.name), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: v.health
  }, labelOf[v.health])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, v.id, " \xB7 ", v.type, " \xB7 ", v.fleet, " \xB7 synced ", v.lastSync))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    iconLeft: L.Wrench ? /*#__PURE__*/React.createElement(L.Wrench, {
      size: 16
    }) : null
  }, "Log dry-dock"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    iconLeft: L.CalendarPlus ? /*#__PURE__*/React.createElement(L.CalendarPlus, {
      size: 16
    }) : null
  }, "Schedule cleaning")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Vessel Technical Index",
    value: v.vti ? v.vti.toFixed(2) : '—',
    tone: v.health,
    footnote: "1.00 = clean baseline"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Speed loss",
    value: v.health === 'offline' ? '—' : v.speedLoss.toFixed(1),
    unit: "%",
    tone: v.health,
    footnote: "at reference power"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Excess power",
    value: v.health === 'offline' ? '—' : v.excessPower.toFixed(1),
    unit: "%",
    tone: v.health,
    footnote: "vs clean hull"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "CII rating",
    value: v.cii,
    tone: v.cii === 'D' || v.cii === 'E' ? 'critical' : v.cii === 'C' ? 'watch' : 'healthy',
    footnote: v.cleaning
  })), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'performance',
      label: 'Performance',
      count: v.subsystems.length || undefined
    }, {
      value: 'voyages',
      label: 'Voyages'
    }, {
      value: 'cleaning',
      label: 'Cleaning history'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, v.subsystems.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, "No recent voyage data for this vessel in the demo dataset."), v.subsystems.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(HealthDot, {
    tone: a.condition
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, a.kind)), /*#__PURE__*/React.createElement(Tag, {
    color: "navy"
  }, a.due), /*#__PURE__*/React.createElement(StatusBadge, {
    tone: a.condition
  }, labelOf[a.condition])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    label: subLabel[a.id] || 'Condition',
    valueLabel: a.level + '%',
    value: a.level
  }), a.metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, m.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums',
      color: m.tone === 'critical' ? 'var(--status-critical)' : m.tone === 'watch' ? 'var(--amber-600)' : 'var(--text-strong)'
    }
  }, m.v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, " ", m.u)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Excess power vs clean hull",
    eyebrow: "Last 36 voyages \xB7 weather-normalized"
  }, /*#__PURE__*/React.createElement(PerfChart, {
    series: series,
    threshold: seriesThreshold,
    label: `clean at +${seriesThreshold}%`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u221236 voyages"), /*#__PURE__*/React.createElement("span", null, "now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--teal-300)',
      marginBottom: 8
    }
  }, "Model forecast"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }
  }, "Clean now ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-inverse-muted)',
      fontWeight: 400
    }
  }, "\xB7 14 d overdue")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-inverse-muted)',
      lineHeight: 1.5,
      marginTop: 8,
      marginBottom: 0
    }
  }, "Excess power has risen 0.3%/week above the clean-hull baseline and has passed the +10% cleaning threshold. Cleaning now recovers an est. 2.3 t/day of fuel; est. confidence 0.90.")))));
}
Object.assign(window, {
  VesselDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/VesselDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/data.js
try { (() => {
// DP Metric Console — demo data (fake). Ship hull/propeller performance & fouling.
// Exposes window.DPMData.
window.DPMData = function () {
  const vessels = [{
    id: 'MV-08',
    name: 'MV Aurora',
    type: 'Bulk carrier',
    fleet: 'North Sea',
    flag: 'NO',
    health: 'critical',
    speedLoss: 8.7,
    excessPower: 12.4,
    vti: 1.34,
    cii: 'D',
    cleaning: 'Overdue 14 d',
    openAlerts: 2,
    lastSync: '2 min ago',
    subsystems: [{
      id: 'HULL',
      name: 'Hull',
      kind: 'Underwater hull',
      condition: 'critical',
      level: 22,
      due: 'Overdue 14 d',
      metrics: [{
        k: 'Speed loss',
        v: '8.7',
        u: '%',
        tone: 'critical'
      }, {
        k: 'Excess power',
        v: '12.4',
        u: '%',
        tone: 'critical'
      }, {
        k: 'Days since clean',
        v: '312',
        u: '',
        tone: 'watch'
      }]
    }, {
      id: 'PROP',
      name: 'Propeller',
      kind: 'Propeller & shaft',
      condition: 'watch',
      level: 56,
      due: 'Polish due',
      metrics: [{
        k: 'Efficiency drop',
        v: '4.1',
        u: '%',
        tone: 'watch'
      }, {
        k: 'Roughness',
        v: 'High',
        u: '',
        tone: 'watch'
      }, {
        k: 'Last polish',
        v: '186 d',
        u: '',
        tone: 'neutral'
      }]
    }]
  }, {
    id: 'MV-12',
    name: 'MV Helios',
    type: 'Container',
    fleet: 'Baltic',
    flag: 'DK',
    health: 'watch',
    speedLoss: 4.2,
    excessPower: 6.0,
    vti: 1.12,
    cii: 'C',
    cleaning: 'In 38 d',
    openAlerts: 1,
    lastSync: '1 min ago',
    subsystems: []
  }, {
    id: 'MV-03',
    name: 'MV Nordkapp',
    type: 'Tanker',
    fleet: 'North Sea',
    flag: 'NO',
    health: 'healthy',
    speedLoss: 1.3,
    excessPower: 1.9,
    vti: 1.02,
    cii: 'B',
    cleaning: 'In 142 d',
    openAlerts: 0,
    lastSync: 'just now',
    subsystems: []
  }, {
    id: 'MV-21',
    name: 'MV Sirocco',
    type: 'Bulk carrier',
    fleet: 'Atlantic',
    flag: 'GR',
    health: 'healthy',
    speedLoss: 2.0,
    excessPower: 2.6,
    vti: 1.04,
    cii: 'B',
    cleaning: 'In 118 d',
    openAlerts: 0,
    lastSync: '4 min ago',
    subsystems: []
  }, {
    id: 'MV-17',
    name: 'MV Triton',
    type: 'Container',
    fleet: 'Atlantic',
    flag: 'GR',
    health: 'watch',
    speedLoss: 5.1,
    excessPower: 7.3,
    vti: 1.16,
    cii: 'C',
    cleaning: 'In 22 d',
    openAlerts: 1,
    lastSync: '3 min ago',
    subsystems: []
  }, {
    id: 'MV-05',
    name: 'MV Pelagic',
    type: 'Tanker',
    fleet: 'Pacific',
    flag: 'SG',
    health: 'offline',
    speedLoss: 0,
    excessPower: 0,
    vti: 0,
    cii: '—',
    cleaning: 'No data',
    openAlerts: 0,
    lastSync: '6 h ago',
    subsystems: []
  }];
  const alerts = [{
    id: 'A-3041',
    vessel: 'MV Aurora',
    vesselId: 'MV-08',
    asset: 'Hull',
    tone: 'critical',
    title: 'Hull fouling past cleaning threshold',
    due: 'Overdue 14 d',
    confidence: 0.90,
    opened: '18 min ago'
  }, {
    id: 'A-3038',
    vessel: 'MV Aurora',
    vesselId: 'MV-08',
    asset: 'Propeller',
    tone: 'watch',
    title: 'Propeller efficiency drop detected',
    due: 'In 60 d',
    confidence: 0.81,
    opened: '2 h ago'
  }, {
    id: 'A-3026',
    vessel: 'MV Triton',
    vesselId: 'MV-17',
    asset: 'Hull',
    tone: 'watch',
    title: 'Excess power rising between dry-docks',
    due: 'In 22 d',
    confidence: 0.77,
    opened: '5 h ago'
  }, {
    id: 'A-3019',
    vessel: 'MV Helios',
    vesselId: 'MV-12',
    asset: 'Hull',
    tone: 'watch',
    title: 'Speed loss trending above clean-hull baseline',
    due: 'In 38 d',
    confidence: 0.74,
    opened: '8 h ago'
  }];
  const kpis = [{
    label: 'Fleet avg speed loss',
    value: '5.1',
    unit: '%',
    delta: '0.6%',
    dir: 'up',
    tone: 'watch',
    foot: 'vs last 30d'
  }, {
    label: 'Vessels monitored',
    value: '24',
    unit: '',
    delta: '',
    tone: 'neutral',
    foot: '1 offline'
  }, {
    label: 'Cleanings due',
    value: '3',
    unit: '',
    delta: '1',
    dir: 'up',
    tone: 'critical',
    foot: 'within 30 d'
  }, {
    label: 'Fuel saved',
    value: '184',
    unit: 't',
    delta: '12%',
    dir: 'up',
    tone: 'healthy',
    foot: 'this quarter'
  }];

  // 36-point series: excess power (%) over voyages, rising as the hull fouls.
  const series = Array.from({
    length: 36
  }, (_, i) => {
    const base = 2.4 + i * 0.22 + Math.sin(i / 3) * 0.5;
    const climb = i > 26 ? (i - 26) * 0.55 : 0;
    return Math.round((base + climb) * 10) / 10;
  });
  const seriesThreshold = 10; // cleaning recommended at +10% excess power

  return {
    vessels,
    alerts,
    kpis,
    series,
    seriesThreshold
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/data.js", error: String((e && e.message) || e) }); }

// ui_kits/console/icons.jsx
try { (() => {
// DP Metric Console — Lucide icon subset as React components.
// Exposes window.LucideReact = { IconName, ... } matching lucide-react's API
// (props: size, color, strokeWidth). Paths are Lucide (ISC) 24x24 stroke icons.
(function () {
  const ICONS = {
    LayoutGrid: [['rect', {
      x: 3,
      y: 3,
      width: 7,
      height: 7,
      rx: 1
    }], ['rect', {
      x: 14,
      y: 3,
      width: 7,
      height: 7,
      rx: 1
    }], ['rect', {
      x: 14,
      y: 14,
      width: 7,
      height: 7,
      rx: 1
    }], ['rect', {
      x: 3,
      y: 14,
      width: 7,
      height: 7,
      rx: 1
    }]],
    TriangleAlert: [['path', {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'
    }], ['path', {
      d: 'M12 9v4'
    }], ['path', {
      d: 'M12 17h.01'
    }]],
    Ship: [['path', {
      d: 'M12 10.189V14'
    }], ['path', {
      d: 'M12 2v3'
    }], ['path', {
      d: 'M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6'
    }], ['path', {
      d: 'M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 1.62 6'
    }], ['path', {
      d: 'M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1'
    }]],
    CalendarClock: [['path', {
      d: 'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5'
    }], ['path', {
      d: 'M16 2v4'
    }], ['path', {
      d: 'M8 2v4'
    }], ['path', {
      d: 'M3 10h5'
    }], ['path', {
      d: 'M17.5 17.5 16 16.3V14'
    }], ['circle', {
      cx: 16,
      cy: 16,
      r: 6
    }]],
    FileBarChart: [['path', {
      d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'
    }], ['path', {
      d: 'M14 2v4a2 2 0 0 0 2 2h4'
    }], ['path', {
      d: 'M8 18v-2'
    }], ['path', {
      d: 'M12 18v-4'
    }], ['path', {
      d: 'M16 18v-6'
    }]],
    Settings: [['path', {
      d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'
    }], ['circle', {
      cx: 12,
      cy: 12,
      r: 3
    }]],
    Search: [['circle', {
      cx: 11,
      cy: 11,
      r: 8
    }], ['path', {
      d: 'm21 21-4.3-4.3'
    }]],
    Bell: [['path', {
      d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'
    }], ['path', {
      d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0'
    }]],
    SlidersHorizontal: [['line', {
      x1: 21,
      x2: 14,
      y1: 4,
      y2: 4
    }], ['line', {
      x1: 10,
      x2: 3,
      y1: 4,
      y2: 4
    }], ['line', {
      x1: 21,
      x2: 12,
      y1: 12,
      y2: 12
    }], ['line', {
      x1: 8,
      x2: 3,
      y1: 12,
      y2: 12
    }], ['line', {
      x1: 21,
      x2: 16,
      y1: 20,
      y2: 20
    }], ['line', {
      x1: 12,
      x2: 3,
      y1: 20,
      y2: 20
    }], ['line', {
      x1: 14,
      x2: 14,
      y1: 2,
      y2: 6
    }], ['line', {
      x1: 8,
      x2: 8,
      y1: 10,
      y2: 14
    }], ['line', {
      x1: 16,
      x2: 16,
      y1: 18,
      y2: 22
    }]],
    ArrowLeft: [['path', {
      d: 'm12 19-7-7 7-7'
    }], ['path', {
      d: 'M19 12H5'
    }]],
    Wrench: [['path', {
      d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
    }]],
    CalendarPlus: [['path', {
      d: 'M8 2v4'
    }], ['path', {
      d: 'M16 2v4'
    }], ['path', {
      d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8'
    }], ['path', {
      d: 'M3 10h18'
    }], ['path', {
      d: 'M16 19h6'
    }], ['path', {
      d: 'M19 16v6'
    }]]
  };
  function make(nodes) {
    return function Icon(props) {
      const {
        size = 24,
        color = 'currentColor',
        strokeWidth = 2,
        style,
        ...rest
      } = props || {};
      return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: color,
        strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        style,
        ...rest
      }, nodes.map((n, i) => React.createElement(n[0], {
        key: i,
        ...n[1]
      })));
    };
  }
  const lib = {};
  for (const name in ICONS) lib[name] = make(ICONS[name]);
  window.LucideReact = lib;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.HealthDot = __ds_scope.HealthDot;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
