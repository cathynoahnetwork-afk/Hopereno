/* @ds-bundle: {"format":4,"namespace":"HoperenoDesignSystem_a96cfc","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"610360d2b974","components/core/Button.jsx":"3a91c35a2f80","components/core/Card.jsx":"50262988ee19","components/core/Divider.jsx":"5cd3dca63b13","components/core/Icon.jsx":"2b85272a28ad","components/core/IconButton.jsx":"eb6c1f13a4ab","components/core/Tag.jsx":"13f4e6e6def4","components/feedback/Dialog.jsx":"2fee0e17d107","components/feedback/Toast.jsx":"f948fc1d2aef","components/feedback/Tooltip.jsx":"58d4198b7f6a","components/forms/Checkbox.jsx":"10773d38706b","components/forms/Field.jsx":"cbcd1675b8f8","components/forms/Input.jsx":"bd7c2a8ac308","components/forms/Radio.jsx":"6691cf98a7a1","components/forms/Select.jsx":"00c23e02a6fc","components/forms/Switch.jsx":"4b69046d20d3","components/forms/Textarea.jsx":"f7faf0c26bfb","components/layout/SectionHeader.jsx":"1f986d63c1bd","components/navigation/Accordion.jsx":"ffb92c4f19e7","components/navigation/Breadcrumb.jsx":"4a8ff78a7dde","components/navigation/Tabs.jsx":"fba000446d42","ui_kits/website/CaseDetail.jsx":"784ba21a11c0","ui_kits/website/Contact.jsx":"8b2ca970e006","ui_kits/website/Footer.jsx":"34fb1ae0f0d4","ui_kits/website/Header.jsx":"ba27f4da1b33","ui_kits/website/Home.jsx":"3ce582a75a2b","ui_kits/website/Photo.jsx":"0bb8f6e07158","ui_kits/website/Services.jsx":"988f22af4f2f","ui_kits/website/Work.jsx":"58e4652adf68"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HoperenoDesignSystem_a96cfc = window.HoperenoDesignSystem_a96cfc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--clay-200)",
    color: "var(--charcoal-700)"
  },
  brand: {
    background: "var(--clay-500)",
    color: "var(--charcoal-800)"
  },
  success: {
    background: "var(--status-success-bg)",
    color: "var(--status-success)"
  },
  warning: {
    background: "var(--status-warning-bg)",
    color: "var(--status-warning)"
  },
  danger: {
    background: "var(--status-danger-bg)",
    color: "var(--status-danger)"
  },
  inverse: {
    background: "var(--charcoal-800)",
    color: "var(--ivory)"
  }
};
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-overline)",
      letterSpacing: "0.04em",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  white: {
    background: "var(--white)",
    border: "1px solid var(--border-subtle)"
  },
  wood: {
    background: "var(--clay-300)",
    border: "1px solid transparent"
  },
  ivory: {
    background: "var(--ivory)",
    border: "1px solid var(--border-subtle)"
  },
  inverse: {
    background: "var(--charcoal-800)",
    border: "1px solid var(--charcoal-800)",
    color: "var(--ivory)"
  }
};

/**
 * @startingPoint section="Core" subtitle="Whitespace-first surface, 18px radius" viewport="700x260"
 */
function Card({
  tone = "white",
  padding = "var(--card-padding)",
  interactive,
  media,
  eyebrow,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-slow) var(--ease-standard), transform var(--duration-slow) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...tones[tone],
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: tone === "inverse" ? "var(--clay-400)" : "var(--text-muted)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: tone === "inverse" ? "var(--ivory)" : "var(--text-heading)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: tone === "inverse" ? "var(--clay-400)" : "var(--text-muted)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  orientation = "horizontal",
  label,
  spacing = "var(--space-8)",
  style
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        alignSelf: "stretch",
        background: "var(--border-subtle)",
        margin: "0 " + spacing,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        margin: spacing + " 0",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        background: "var(--border-subtle)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: "var(--border-subtle)",
      margin: spacing + " 0",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide outline icons (2px stroke, rounded caps) — loaded from CDN by the host page. */
const pascal = n => n.split(/[-_\s]+/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const draw = () => {
      const L = window.lucide;
      if (!L || !L.icons) return false;
      const node = L.icons[pascal(name)] || L.icons[name];
      if (!node) return false;
      const svg = L.createElement(node);
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("stroke-width", strokeWidth);
      host.innerHTML = "";
      host.appendChild(svg);
      return true;
    };
    if (!draw()) {
      const t = setInterval(() => {
        if (draw()) clearInterval(t);
      }, 120);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      flex: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "8px 16px",
    fontSize: "var(--text-body-sm)",
    gap: "6px",
    icon: 16,
    minHeight: 36
  },
  md: {
    padding: "12px 24px",
    fontSize: "var(--text-body-sm)",
    gap: "8px",
    icon: 18,
    minHeight: 44
  },
  lg: {
    padding: "16px 32px",
    fontSize: "var(--text-body)",
    gap: "10px",
    icon: 20,
    minHeight: 54
  }
};
const variants = {
  primary: {
    background: "var(--charcoal-800)",
    color: "var(--white)",
    border: "1px solid var(--charcoal-800)"
  },
  secondary: {
    background: "transparent",
    color: "var(--charcoal-800)",
    border: "1px solid var(--charcoal-800)"
  },
  ghost: {
    background: "transparent",
    color: "var(--charcoal-800)",
    border: "1px solid transparent"
  },
  quiet: {
    background: "var(--clay-300)",
    color: "var(--charcoal-800)",
    border: "1px solid transparent"
  }
};

/**
 * @startingPoint section="Core" subtitle="Charcoal primary, outlined secondary, ghost" viewport="700x180"
 */
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const hoverStyle = !disabled && hover ? variant === "primary" ? {
    background: press ? "var(--charcoal-900)" : "var(--charcoal-700)"
  } : {
    background: press ? "var(--clay-400)" : "var(--clay-200)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      minHeight: s.minHeight,
      width: fullWidth ? "100%" : "auto",
      font: "var(--type-label)",
      fontSize: s.fontSize,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--duration-base) var(--ease-standard), opacity var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)",
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const boxes = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = boxes[size] || boxes.md;
  const base = variant === "primary" ? {
    background: "var(--charcoal-800)",
    color: "var(--white)",
    border: "1px solid var(--charcoal-800)"
  } : variant === "outline" ? {
    background: "var(--white)",
    color: "var(--charcoal-800)",
    border: "1px solid var(--border-default)"
  } : {
    background: "transparent",
    color: "var(--charcoal-800)",
    border: "1px solid transparent"
  };
  const hov = !disabled && hover ? variant === "primary" ? {
    background: "var(--charcoal-700)"
  } : {
    background: "var(--clay-200)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "background var(--duration-base) var(--ease-standard)",
      ...base,
      ...hov,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : size === "lg" ? 22 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      font: "var(--type-label)",
      cursor: "pointer",
      background: selected ? "var(--charcoal-800)" : hover ? "var(--clay-200)" : "transparent",
      color: selected ? "var(--ivory)" : "var(--charcoal-700)",
      border: "1px solid " + (selected ? "var(--charcoal-800)" : "var(--border-default)"),
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  width = 520,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(42,41,38,.32)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%",
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--card-padding-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u95DC\u9589",
    onClick: onClose,
    style: {
      marginTop: -6,
      marginRight: -8
    }
  })), children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  neutral: {
    icon: "info",
    color: "var(--charcoal-800)"
  },
  success: {
    icon: "check-circle",
    color: "var(--status-success)"
  },
  warning: {
    icon: "alert-triangle",
    color: "var(--status-warning)"
  },
  danger: {
    icon: "alert-circle",
    color: "var(--status-danger)"
  }
};
function Toast({
  tone = "neutral",
  title,
  description,
  onDismiss,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      minWidth: 320,
      maxWidth: 420,
      padding: "18px 20px",
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    style: {
      color: t.color,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, description) : null), onDismiss ? /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: "pointer",
      color: "var(--stone-400)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = "top",
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      whiteSpace: "nowrap",
      padding: "7px 11px",
      borderRadius: "var(--radius-sm)",
      background: "var(--charcoal-800)",
      color: "var(--ivory)",
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--duration-base) var(--ease-standard)",
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  description,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--charcoal-800)" : "var(--white)",
      border: "1px solid " + (checked ? "var(--charcoal-800)" : "var(--border-default)"),
      color: "var(--white)",
      transition: "var(--transition-base)",
      marginTop: description ? 2 : 0
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.5
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-heading)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  error,
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 16px",
    font: "var(--type-body)",
    fontSize: "var(--text-body-sm)",
    color: "var(--text-heading)",
    background: "var(--white)",
    borderRadius: "var(--radius-input)",
    border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--charcoal-800)" : "var(--border-default)"),
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    outline: "none",
    transition: "var(--transition-base)"
  };
  const field = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      opacity: disabled ? 0.5 : 1,
      paddingLeft: icon ? 44 : base.padding.split(" ")[1],
      ...style
    }
  }, rest));
  if (!icon) return field;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 15,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  description,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--white)",
      border: "1px solid " + (checked ? "var(--charcoal-800)" : "var(--border-default)"),
      transition: "var(--transition-base)",
      marginTop: description ? 2 : 0
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--charcoal-800)"
    }
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-heading)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  error,
  disabled,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 16px",
    font: "var(--type-body)",
    fontSize: "var(--text-body-sm)",
    color: "var(--text-heading)",
    background: "var(--white)",
    borderRadius: "var(--radius-input)",
    border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--charcoal-800)" : "var(--border-default)"),
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    outline: "none",
    transition: "var(--transition-base)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      appearance: "none",
      paddingRight: 44,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 15,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      padding: 3,
      display: "inline-flex",
      alignItems: "center",
      background: checked ? "var(--charcoal-800)" : "var(--clay-400)",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transform: "translateX(" + (checked ? 18 : 0) + "px)",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-heading)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  error,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const base = {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 16px",
    font: "var(--type-body)",
    fontSize: "var(--text-body-sm)",
    color: "var(--text-heading)",
    background: "var(--white)",
    borderRadius: "var(--radius-input)",
    border: "1px solid " + (error ? "var(--status-danger)" : focus ? "var(--charcoal-800)" : "var(--border-default)"),
    boxShadow: focus ? "var(--shadow-focus)" : "none",
    outline: "none",
    transition: "var(--transition-base)"
  };
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base,
      resize: "vertical",
      lineHeight: "var(--leading-relaxed)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
/**
 * @startingPoint section="Layout" subtitle="Overline + heading + lede, 96px rhythm" viewport="700x220"
 */
function SectionHeader({
  overline,
  title,
  lede,
  align = "left",
  action,
  style
}) {
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: centered ? "center" : "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexDirection: centered ? "column" : "row",
      textAlign: centered ? "center" : "left",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: centered ? "62ch" : "56ch",
      alignItems: centered ? "center" : "flex-start"
    }
  }, overline ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, overline) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, title) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-lg)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, lede) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.title,
      style: {
        borderTop: i === 0 ? "1px solid var(--border-subtle)" : "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        padding: "22px 0",
        background: "none",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        font: "var(--type-h4)",
        fontSize: "var(--text-body-lg)",
        color: "var(--text-heading)"
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? "minus" : "plus",
      size: 20,
      style: {
        color: "var(--text-muted)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        overflow: "hidden",
        transition: "max-height var(--duration-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 24,
        font: "var(--type-body)",
        fontSize: "var(--text-body-sm)",
        color: "var(--text-muted)",
        maxWidth: "60ch"
      }
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      font: "var(--type-body-sm)",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === "string" ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--charcoal-800)" : "var(--text-muted)",
        cursor: last ? "default" : "pointer"
      }
    }, label), !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        color: "var(--stone-400)"
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "0 0 14px",
        font: "var(--type-label)",
        fontSize: "var(--text-body)",
        color: active ? "var(--charcoal-800)" : "var(--text-muted)",
        borderBottom: "2px solid " + (active ? "var(--charcoal-800)" : "transparent"),
        marginBottom: -1,
        transition: "var(--transition-base)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseDetail.jsx
try { (() => {
const {
  Breadcrumb,
  Tabs,
  Badge,
  Divider,
  Button,
  Card,
  IconButton
} = window.HoperenoDesignSystem_a96cfc;
function CaseDetail({
  go
}) {
  const [tab, setTab] = React.useState("完工");
  const tones = {
    "設計": "linen",
    "施工": "cement",
    "完工": "room"
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)",
    py: "48px"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["首頁", "完工案例", "信義區 32 坪"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 40,
      margin: "28px 0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-bold) 44px/1.15 var(--font-display)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "\u4FE1\u7FA9\u5340 32 \u576A \u8001\u5C4B\u7FFB\u65B0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u8001\u5C4B\u7FFB\u65B0"), /*#__PURE__*/React.createElement(Badge, null, "2025 \u5B8C\u5DE5"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "92 \u5DE5\u4F5C\u5929"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    variant: "outline",
    label: "\u5206\u4EAB"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    variant: "outline",
    label: "\u6536\u85CF"
  }))), /*#__PURE__*/React.createElement(Photo, {
    tone: "room",
    ratio: "16 / 7",
    label: "\u4E3B\u8996\u89BA \u2014 \u5BA2\u5EF3\u5168\u666F"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr 0.65fr",
      gap: 64,
      marginTop: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-heading)",
      margin: "0 0 16px"
    }
  }, "\u5C4B\u4E3B\u7684\u9700\u6C42"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-lg)",
      color: "var(--stone-600)",
      margin: 0,
      maxWidth: "56ch"
    }
  }, "\u4E09\u5341\u5E74\u7684\u8001\u516C\u5BD3\uFF0C\u7BA1\u7DDA\u8001\u820A\u3001\u63A1\u5149\u88AB\u9694\u9593\u5207\u788E\u3002\u5C4B\u4E3B\u5E0C\u671B\u767D\u5929\u4E0D\u7528\u958B\u71C8\uFF0C\u4E5F\u5E0C\u671B\u66F8\u623F\u8207\u5BA2\u5EF3\u53EF\u4EE5\u4E92\u76F8\u770B\u898B\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      marginTop: 20,
      maxWidth: "56ch"
    }
  }, "\u6211\u5011\u62C6\u9664\u5169\u9053\u975E\u7D50\u69CB\u7246\uFF0C\u628A\u5EDA\u623F\u79FB\u5230\u5357\u5411\uFF0C\u7528\u767D\u6A61\u6728\u683C\u67F5\u53D6\u4EE3\u5BE6\u7246\u3002\u5168\u5BA4\u91CD\u65B0\u914D\u7BA1\u914D\u7DDA\uFF0C\u885B\u6D74\u9632\u6C34\u91CD\u505A\u4E26\u5EF6\u9577\u81F3\u5929\u82B1\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "40px 0 24px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["設計", "施工", "完工"],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 20
    }
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement(Photo, {
    key: n,
    tone: tones[tab],
    label: tab + " 0" + n
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "wood",
    padding: "var(--card-padding-lg)",
    title: "\u5C08\u6848\u8CC7\u8A0A",
    style: {
      position: "sticky",
      top: 104
    },
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: () => go("contact")
    }, "\u8AEE\u8A62\u985E\u4F3C\u6848\u4EF6")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["坪數", "32 坪"], ["屋齡", "31 年"], ["成員", "2 大 1 小"], ["工期", "92 工作天"], ["費用區間", "NT$ 380–420 萬"], ["主要材質", "白橡木 · 水泥粉光 · 亞麻"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone-600)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-heading)",
      fontWeight: 500,
      textAlign: "right"
    }
  }, v))))))));
}
Object.assign(window, {
  CaseDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Button,
  Toast,
  Dialog,
  Icon
} = window.HoperenoDesignSystem_a96cfc;
function Contact() {
  const [scope, setScope] = React.useState("full");
  const [agree, setAgree] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)",
    py: "var(--section-y)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Contact",
    title: "\u9810\u7D04\u514D\u8CBB\u4E08\u91CF",
    lede: "\u7559\u4E0B\u9700\u6C42\uFF0C\u6211\u5011\u6703\u5728\u4E00\u500B\u5DE5\u4F5C\u5929\u5167\u56DE\u8986\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, [["phone", "02-2758-1200", "週一至週五 10:00–18:00"], ["mail", "hello@hopereno.tw", "24 小時內回信"], ["map-pin", "台北市信義區忠孝東路五段 68 號 9F", "需事先預約"]].map(([i, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    style: {
      color: "var(--charcoal-800)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, b))))), /*#__PURE__*/React.createElement(Photo, {
    tone: "timber",
    ratio: "3 / 2",
    label: "Office \u2014 \u4FE1\u7FA9\u5340\u5DE5\u4F5C\u5BA4"
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    padding: "var(--card-padding-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u59D3\u540D",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u60A8\u7684\u7A31\u547C"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u806F\u7D61\u96FB\u8A71",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "09xx-xxx-xxx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u623F\u5C4B\u6240\u5728\u5730"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\u8ACB\u9078\u64C7",
    options: ["台北市", "新北市", "桃園市", "其他"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u576A\u6578"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u4F8B\u5982 32"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, "\u670D\u52D9\u7BC4\u570D"), /*#__PURE__*/React.createElement(Radio, {
    checked: scope === "full",
    onChange: () => setScope("full"),
    label: "\u5168\u5BA4\u88DD\u4FEE",
    description: "\u542B\u6C34\u96FB\u3001\u6CE5\u4F5C\u3001\u6728\u4F5C"
  }), /*#__PURE__*/React.createElement(Radio, {
    checked: scope === "reno",
    onChange: () => setScope("reno"),
    label: "\u8001\u5C4B\u7FFB\u65B0"
  }), /*#__PURE__*/React.createElement(Radio, {
    checked: scope === "part",
    onChange: () => setScope("part"),
    label: "\u5C40\u90E8\u6539\u9020"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u9700\u6C42\u8AAA\u660E",
    hint: "\u8D8A\u5177\u9AD4\u8D8A\u597D\uFF0C\u4F8B\u5982\u6536\u7D0D\u3001\u52D5\u7DDA\u3001\u9810\u7B97\u4E0A\u9650",
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "\u60F3\u8DDF\u6211\u5011\u804A\u804A\u7684\u4E8B\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: agree,
    onChange: setAgree,
    label: "\u6211\u540C\u610F\u63A5\u6536\u65BD\u5DE5\u9032\u5EA6\u8207\u6848\u4F8B\u96FB\u5B50\u5831"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "\u9001\u51FA\u9810\u7D04"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setDialog(true)
  }, "\u5148\u770B\u670D\u52D9\u8AAA\u660E"))))))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "\u5DF2\u6536\u5230\u60A8\u7684\u9810\u7D04",
    description: "\u6211\u5011\u6703\u5728\u4E00\u500B\u5DE5\u4F5C\u5929\u5167\u56DE\u8986\u3002",
    onDismiss: () => setSent(false)
  })) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    onClose: () => setDialog(false),
    title: "\u514D\u8CBB\u4E08\u91CF\u5305\u542B\u4EC0\u9EBC\uFF1F",
    description: "\u73FE\u5834\u4E08\u91CF\u3001\u9700\u6C42\u8A2A\u8AC7\u8207\u521D\u6B65\u9810\u7B97\u5340\u9593\uFF0C\u5168\u7A0B\u4E0D\u6536\u8CBB\uFF0C\u4E5F\u4E0D\u5F37\u8FEB\u7C3D\u7D04\u3002",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDialog(false)
    }, "\u6211\u77E5\u9053\u4E86")
  }));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Icon,
  Divider
} = window.HoperenoDesignSystem_a96cfc;
function Footer() {
  const cols = [["服務", ["全室裝修", "老屋翻新", "局部改造", "商業空間"]], ["關於", ["品牌理念", "設計團隊", "施工流程", "常見問題"]], ["聯絡", ["02-2758-1200", "hello@hopereno.tw", "台北市信義區忠孝東路五段 68 號"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--charcoal-800)",
      color: "var(--clay-400)",
      padding: "80px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr repeat(3,1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) 20px var(--font-display)",
      letterSpacing: ".16em",
      color: "var(--ivory)"
    }
  }, "HOPERENO"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      margin: 0,
      maxWidth: "34ch"
    }
  }, "\u5B89\u975C\u3001\u6EAB\u6696\u3001\u503C\u5F97\u4FE1\u8CF4\u7684\u4F4F\u5B85\u88DD\u4FEE\u3002\u5F9E\u4E08\u91CF\u5230\u4EA4\u5C4B\uFF0C\u5168\u7A0B\u6709\u7D00\u9304\u3002")), cols.map(([t, links]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--stone-500)"
    }
  }, t), links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: "var(--type-body-sm)",
      color: "var(--clay-400)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(248,246,242,.12)",
      margin: "56px 0 24px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      font: "var(--type-body-sm)",
      fontSize: 13,
      color: "var(--stone-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Hopereno \u597D\u65E5\u5B50\u5BA4\u5167\u88DD\u4FEE"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18,
      color: "var(--clay-400)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "facebook",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  })))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  Icon
} = window.HoperenoDesignSystem_a96cfc;
function Header({
  page,
  go
}) {
  const items = [["home", "首頁"], ["services", "服務"], ["work", "完工案例"], ["contact", "聯絡"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(248,246,242,.86)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 40px",
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go("home"),
    style: {
      font: "var(--weight-bold) 20px var(--font-display)",
      letterSpacing: ".16em",
      color: "var(--charcoal-800)",
      cursor: "pointer"
    }
  }, "HOPERENO"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 36
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("span", {
    key: id,
    onClick: () => go(id),
    style: {
      font: "var(--type-label)",
      cursor: "pointer",
      color: page === id ? "var(--charcoal-800)" : "var(--text-muted)",
      borderBottom: "1px solid " + (page === id ? "var(--charcoal-800)" : "transparent"),
      paddingBottom: 3,
      transition: "var(--transition-base)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), "02-2758-1200"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact")
  }, "\u9810\u7D04\u514D\u8CBB\u4E08\u91CF"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  SectionHeader,
  Icon,
  Badge,
  Tag
} = window.HoperenoDesignSystem_a96cfc;
const Section = ({
  background,
  children,
  py = "var(--section-y)"
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background,
    padding: py + " 40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto"
  }
}, children));
function Home({
  go
}) {
  const [filter, setFilter] = React.useState("全部");
  const cases = [{
    t: "信義區 32 坪 老屋翻新",
    m: "老屋翻新",
    tone: "room"
  }, {
    t: "內湖 24 坪 兩房自宅",
    m: "全室裝修",
    tone: "timber"
  }, {
    t: "永和 18 坪 廚房改造",
    m: "局部改造",
    tone: "cement"
  }];
  const shown = cases.filter(c => filter === "全部" || c.m === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)",
    py: "var(--section-y-lg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "\u53F0\u5317 \xB7 \u4F4F\u5B85\u88DD\u4FEE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-bold) 60px/1.14 var(--font-display)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "\u628A\u5BB6\u9084\u7D66", /*#__PURE__*/React.createElement("br", null), "\u5B89\u975C\u7684\u65E5\u5E38"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-lg)",
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "34ch"
    }
  }, "\u6DFA\u6728\u8272\u3001\u81EA\u7136\u5149\u7DDA\u3001\u7559\u767D\u3002\u6211\u5011\u7528\u771F\u5BE6\u7684\u6750\u8CEA\u8207\u6E05\u695A\u7684\u9032\u5EA6\uFF0C\u966A\u60A8\u8D70\u5B8C\u6574\u6BB5\u5DE5\u7A0B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go("contact")
  }, "\u9810\u7D04\u514D\u8CBB\u4E08\u91CF"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("work")
  }, "\u770B\u5B8C\u5DE5\u6848\u4F8B"))), /*#__PURE__*/React.createElement(Photo, {
    tone: "room",
    ratio: "4 / 3.4",
    label: "Hero \u2014 \u81EA\u7136\u63A1\u5149\u7684\u5BA2\u5EF3\u5168\u666F"
  }))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--clay-300)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Services",
    title: "\u6211\u5011\u505A\u7684\u4E09\u4EF6\u4E8B",
    lede: "\u4E0D\u505A\u83EF\u9E97\u7684\u6A23\u54C1\u5C4B\uFF0C\u53EA\u505A\u80FD\u4F4F\u4E09\u5341\u5E74\u7684\u5BB6\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 48
    }
  }, [["ruler", "全室裝修", "從格局、水電到收納，一次到位的完整規劃。"], ["hammer", "老屋翻新", "結構、管線與防水優先，讓老房子重新呼吸。"], ["paint-roller", "局部改造", "廚房、衛浴、書房──小範圍也講究細節。"]].map(([i, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "white",
    padding: "var(--card-padding-lg)",
    interactive: true,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 28,
      style: {
        color: "var(--charcoal-800)"
      }
    }), t),
    footer: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        font: "var(--type-label)",
        color: "var(--charcoal-800)"
      }
    }, "\u4E86\u89E3\u66F4\u591A ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Our work",
    title: "\u5B8C\u5DE5\u6848\u4F8B",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go("work")
    }, "\u770B\u5168\u90E8")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      margin: "32px 0 28px"
    }
  }, ["全部", "全室裝修", "老屋翻新", "局部改造"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, shown.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    onClick: () => go("case"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: c.tone,
    label: c.t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      fontSize: 18,
      color: "var(--text-heading)"
    }
  }, c.t), /*#__PURE__*/React.createElement(Badge, null, c.m)))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--clay-300)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "timber",
    ratio: "1 / 1",
    label: "\u6750\u8CEA\u7279\u5BEB \u2014 \u6DFA\u6728\u7D0B\u8207\u4E9E\u9EBB"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-heading)",
      margin: 0
    }
  }, "\u6750\u8CEA\uFF0C\u662F\u6211\u5011\u7684\u8A9E\u8A00"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-lg)",
      color: "var(--stone-600)",
      margin: 0,
      maxWidth: "40ch"
    }
  }, "\u767D\u6A61\u3001\u6C34\u6CE5\u7C89\u5149\u3001\u4E9E\u9EBB\u8207\u7D19\u8CEA\u71C8\u7F69\u3002\u4F4E\u98FD\u548C\u7684\u81EA\u7136\u6750\u8CEA\uFF0C\u6703\u96A8\u8457\u4F7F\u7528\u6108\u4E45\u6108\u597D\u770B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 28,
      marginTop: 8
    }
  }, [["12 年", "住宅裝修經驗"], ["380+", "完工案例"], ["5 年", "防水保固"], ["≤ 1 天", "諮詢回覆"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-bold) 32px var(--font-display)",
      color: "var(--charcoal-800)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--stone-600)",
      marginTop: 4
    }
  }, l))))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    padding: "64px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--ivory)",
      margin: 0
    }
  }, "\u5148\u804A\u804A\uFF0C\u518D\u8AC7\u9810\u7B97"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--text-body-lg)",
      color: "var(--clay-400)",
      margin: 0,
      maxWidth: "42ch"
    }
  }, "\u514D\u8CBB\u73FE\u5834\u4E08\u91CF\u8207\u9700\u6C42\u8A2A\u8AC7\uFF0C\u6211\u5011\u6703\u7D66\u60A8\u4E00\u4EFD\u8AA0\u5BE6\u7684\u9810\u7B97\u5340\u9593\u3002")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "quiet",
    iconRight: "arrow-right",
    onClick: () => go("contact")
  }, "\u9810\u7D04\u4E08\u91CF")))));
}
Object.assign(window, {
  Home,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Photo.jsx
try { (() => {
const grads = {
  timber: "linear-gradient(105deg,#E9E2D6,#D9D0BE 45%,#E5DDD0)",
  cement: "linear-gradient(120deg,#DEDBD5,#C9C5BE)",
  room: "linear-gradient(160deg,#F4F1EA,#E3DBCC 60%,#D2C9B8)",
  dark: "linear-gradient(150deg,#4A4742,#2F2E2B)",
  linen: "repeating-linear-gradient(45deg,#F1EDE6 0 4px,#E9E3D9 4px 8px)"
};

/* Placeholder for real Hopereno photography — swap the div for an <img> when assets arrive. */
function Photo({
  tone = "room",
  label,
  ratio = "4 / 3",
  radius = "var(--radius-image)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: grads[tone],
      borderRadius: radius,
      display: "flex",
      alignItems: "flex-end",
      padding: 16,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 11,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: tone === "dark" ? "rgba(248,246,242,.6)" : "rgba(59,57,54,.38)"
    }
  }, label) : null);
}
Object.assign(window, {
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Photo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  SectionHeader,
  Card,
  Accordion,
  Icon,
  Divider,
  Button
} = window.HoperenoDesignSystem_a96cfc;
function Services({
  go
}) {
  const steps = [["ruler", "丈量與訪談", "免費現場丈量，了解生活動線與預算。"], ["pencil-ruler", "設計提案", "平面配置、材質板與 3D 透視。"], ["file-signature", "報價簽約", "逐項報價，不含模糊選項。"], ["hammer", "施工", "每週照片紀錄與進度回報。"], ["search-check", "驗收", "逐項點交，缺失七日內修正。"], ["key-round", "交屋保固", "防水五年、木作兩年。"]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)",
    py: "var(--section-y)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Services",
    title: "\u670D\u52D9\u5167\u5BB9",
    lede: "\u4E09\u7A2E\u898F\u6A21\u7684\u88DD\u4FEE\uFF0C\u540C\u4E00\u5957\u505A\u4E8B\u65B9\u6CD5\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 48
    }
  }, [["全室裝修", "NT$ 8–15 萬 / 坪", "含格局調整、水電、泥作、木作、系統櫃與軟裝建議。"], ["老屋翻新", "NT$ 10–18 萬 / 坪", "30 年以上老屋，結構檢視、全面換管與防水重做。"], ["局部改造", "NT$ 25 萬起 / 案", "廚房、衛浴或單一空間，2–4 週完工。"]].map(([t, p, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "white",
    padding: "var(--card-padding-lg)",
    title: t,
    eyebrow: p,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => go("contact")
    }, "\u8A62\u554F\u9019\u9805\u670D\u52D9")
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--clay-300)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Process",
    title: "\u516D\u500B\u968E\u6BB5",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 32,
      marginTop: 56
    }
  }, steps.map(([i, t, d], n) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      flex: "none",
      borderRadius: "50%",
      background: "var(--ivory)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--charcoal-800)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      color: "var(--stone-500)"
    }
  }, "0", n + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      color: "var(--text-heading)",
      marginTop: 6
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--stone-600)",
      margin: "8px 0 0",
      maxWidth: "26ch"
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "FAQ",
    title: "\u5E38\u898B\u554F\u984C"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "免費丈量包含什麼？",
      content: "現場丈量、需求訪談與初步預算區間，全程不收費，也不強迫簽約。"
    }, {
      title: "工期大約多久？",
      content: "全室裝修約 60–90 個工作天，老屋翻新 90–120 天，局部改造 14–30 天。"
    }, {
      title: "可以只做設計嗎？",
      content: "可以。單獨設計服務為 NT$ 4,500 / 坪，後續發包由您決定。"
    }, {
      title: "保固怎麼算？",
      content: "防水五年、木作兩年、設備依原廠保固，保固內免費到府檢修。"
    }]
  }))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const {
  SectionHeader,
  Tag,
  Badge,
  Select,
  Icon
} = window.HoperenoDesignSystem_a96cfc;
const ALL = [{
  t: "信義區 32 坪 老屋翻新",
  m: "老屋翻新",
  y: "2025",
  tone: "room"
}, {
  t: "內湖 24 坪 兩房自宅",
  m: "全室裝修",
  y: "2025",
  tone: "timber"
}, {
  t: "永和 18 坪 廚房改造",
  m: "局部改造",
  y: "2024",
  tone: "cement"
}, {
  t: "大安區 45 坪 三代同堂",
  m: "全室裝修",
  y: "2024",
  tone: "linen"
}, {
  t: "北投 28 坪 溫泉宅",
  m: "老屋翻新",
  y: "2024",
  tone: "timber"
}, {
  t: "松山 12 坪 單身公寓",
  m: "局部改造",
  y: "2023",
  tone: "room"
}];
function Work({
  go
}) {
  const [filter, setFilter] = React.useState("全部");
  const list = ALL.filter(c => filter === "全部" || c.m === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    background: "var(--ivory)",
    py: "var(--section-y)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Our work",
    title: "\u5B8C\u5DE5\u6848\u4F8B",
    lede: "380 \u500B\u5BB6\uFF0C\u6BCF\u4E00\u500B\u90FD\u7559\u4E0B\u5B8C\u6574\u7684\u65BD\u5DE5\u7D00\u9304\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      margin: "40px 0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, ["全部", "全室裝修", "老屋翻新", "局部改造"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["最新完工", "坪數由大到小", "工期由短到長"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 32,
      rowGap: 48
    }
  }, list.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    onClick: () => go("case"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: c.tone,
    label: c.t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: 16,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h4)",
      fontSize: 18,
      color: "var(--text-heading)"
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, c.y, " \xB7 ", c.m)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20,
    style: {
      color: "var(--stone-400)",
      marginTop: 4
    }
  })))))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
