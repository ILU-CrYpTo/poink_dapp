(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [363],
  {
    627: (t, e) => {
      "use strict";
      var i, s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          ACTION_HMR_REFRESH: function () {
            return u;
          },
          ACTION_NAVIGATE: function () {
            return r;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_REFRESH: function () {
            return n;
          },
          ACTION_RESTORE: function () {
            return o;
          },
          ACTION_SERVER_ACTION: function () {
            return h;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          PrefetchCacheEntryStatus: function () {
            return s;
          },
          PrefetchKind: function () {
            return i;
          },
        });
      let n = "refresh",
        r = "navigate",
        o = "restore",
        a = "server-patch",
        l = "prefetch",
        u = "hmr-refresh",
        h = "server-action";
      !(function (t) {
        (t.AUTO = "auto"), (t.FULL = "full"), (t.TEMPORARY = "temporary");
      })(i || (i = {})),
        (function (t) {
          (t.fresh = "fresh"),
            (t.reusable = "reusable"),
            (t.expired = "expired"),
            (t.stale = "stale");
        })(s || (s = {})),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    5157: (t, e, i) => {
      "use strict";
      function s(t, e, i, s) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        i(2063),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    6397: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let s = i(7677),
        n = i(4848),
        r = s._(i(6540)),
        o = i(6847),
        a = i(7785),
        l = i(2772),
        u = i(1278),
        h = i(6185),
        d = i(7644),
        c = i(9258),
        p = i(6334),
        f = i(5157),
        m = i(296),
        v = i(627),
        y = i(1903),
        g = new Set();
      function x(t, e, i, s, n, r) {
        if (r || (0, a.isLocalURL)(e)) {
          if (!s.bypassPrefetchedCheck && !r) {
            let n =
              e +
              "%" +
              i +
              "%" +
              (void 0 !== s.locale
                ? s.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (g.has(n)) return;
            g.add(n);
          }
          (async () => (r ? t.prefetch(e, n) : t.prefetch(e, i, s)))().catch(
            (t) => {}
          );
        }
      }
      function S(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = r.default.forwardRef(function (t, e) {
        let i, s;
        let {
          href: l,
          as: g,
          children: b,
          prefetch: P = null,
          passHref: T,
          replace: w,
          shallow: A,
          scroll: E,
          locale: C,
          onClick: V,
          onMouseEnter: M,
          onTouchStart: k,
          legacyBehavior: R = !1,
          ...j
        } = t;
        (i = b),
          R &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, n.jsx)("a", { children: i }));
        let D = r.default.useContext(d.RouterContext),
          F = r.default.useContext(c.AppRouterContext),
          L = null != D ? D : F,
          _ = !D,
          O = !1 !== P,
          B = null === P ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: I, as: U } = r.default.useMemo(() => {
            if (!D) {
              let t = S(l);
              return { href: t, as: g ? S(g) : t };
            }
            let [t, e] = (0, o.resolveHref)(D, l, !0);
            return { href: t, as: g ? (0, o.resolveHref)(D, g) : e || t };
          }, [D, l, g]),
          N = r.default.useRef(I),
          $ = r.default.useRef(U);
        R && (s = r.default.Children.only(i));
        let W = R ? s && "object" == typeof s && s.ref : e,
          [z, G, q] = (0, p.useIntersection)({ rootMargin: "200px" }),
          X = r.default.useCallback(
            (t) => {
              ($.current !== U || N.current !== I) &&
                (q(), ($.current = U), (N.current = I)),
                z(t);
            },
            [U, I, q, z]
          ),
          K = (0, y.useMergedRef)(X, W);
        r.default.useEffect(() => {
          L && G && O && x(L, I, U, { locale: C }, { kind: B }, _);
        }, [U, I, G, C, O, null == D ? void 0 : D.locale, L, _, B]);
        let H = {
          ref: K,
          onClick(t) {
            R || "function" != typeof V || V(t),
              R &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(t),
              L &&
                !t.defaultPrevented &&
                (function (t, e, i, s, n, o, l, u, h) {
                  let { nodeName: d } = t.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(i)))
                  )
                    return;
                  t.preventDefault();
                  let c = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[n ? "replace" : "push"](i, s, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[n ? "replace" : "push"](s || i, { scroll: t });
                  };
                  h ? r.default.startTransition(c) : c();
                })(t, L, I, U, w, A, E, C, _);
          },
          onMouseEnter(t) {
            R || "function" != typeof M || M(t),
              R &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(t),
              L &&
                (O || !_) &&
                x(
                  L,
                  I,
                  U,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  _
                );
          },
          onTouchStart: function (t) {
            R || "function" != typeof k || k(t),
              R &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(t),
              L &&
                (O || !_) &&
                x(
                  L,
                  I,
                  U,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  _
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) H.href = U;
        else if (!R || T || ("a" === s.type && !("href" in s.props))) {
          let t = void 0 !== C ? C : null == D ? void 0 : D.locale,
            e =
              (null == D ? void 0 : D.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                U,
                t,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales
              );
          H.href =
            e ||
            (0, m.addBasePath)(
              (0, h.addLocale)(U, t, null == D ? void 0 : D.defaultLocale)
            );
        }
        return R
          ? r.default.cloneElement(s, H)
          : (0, n.jsx)("a", { ...j, ...H, children: i });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6334: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let s = i(6540),
        n = i(4959),
        r = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !r,
          [h, d] = (0, s.useState)(!1),
          c = (0, s.useRef)(null),
          p = (0, s.useCallback)((t) => {
            c.current = t;
          }, []);
        return (
          (0, s.useEffect)(() => {
            if (r) {
              if (u || h) return;
              let t = c.current;
              if (t && t.tagName)
                return (function (t, e, i) {
                  let {
                    id: s,
                    observer: n,
                    elements: r,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      s = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (s && (e = o.get(s))) return e;
                    let n = new Map();
                    return (
                      (e = {
                        id: i,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = n.get(t.target),
                              i = t.isIntersecting || t.intersectionRatio > 0;
                            e && i && e(i);
                          });
                        }, t),
                        elements: n,
                      }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    r.set(t, e),
                    n.observe(t),
                    function () {
                      if ((r.delete(t), n.unobserve(t), 0 === r.size)) {
                        n.disconnect(), o.delete(s);
                        let t = a.findIndex(
                          (t) => t.root === s.root && t.margin === s.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && d(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
            } else if (!h) {
              let t = (0, n.requestIdleCallback)(() => d(!0));
              return () => (0, n.cancelIdleCallback)(t);
            }
          }, [u, i, e, h, c.current]),
          [
            p,
            h,
            (0, s.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2532: (t, e, i) => {
      "use strict";
      var s = i(7836);
      i(9750);
      var n = i(6540),
        r = (function (t) {
          return t && "object" == typeof t && "default" in t
            ? t
            : { default: t };
        })(n),
        o = void 0 !== s && s.env && !0,
        a = function (t) {
          return "[object String]" === Object.prototype.toString.call(t);
        },
        l = (function () {
          function t(t) {
            var e = void 0 === t ? {} : t,
              i = e.name,
              s = void 0 === i ? "stylesheet" : i,
              n = e.optimizeForSpeed,
              r = void 0 === n ? o : n;
            u(a(s), "`name` must be a string"),
              (this._name = s),
              (this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}"),
              u("boolean" == typeof r, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = r),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var l = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null;
          }
          var e = t.prototype;
          return (
            (e.setOptimizeForSpeed = function (t) {
              u(
                "boolean" == typeof t,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                u(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = t),
                this.inject();
            }),
            (e.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (e.inject = function () {
              var t = this;
              if (
                (u(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (e, i) {
                  return (
                    "number" == typeof i
                      ? (t._serverSheet.cssRules[i] = { cssText: e })
                      : t._serverSheet.cssRules.push({ cssText: e }),
                    i
                  );
                },
                deleteRule: function (e) {
                  t._serverSheet.cssRules[e] = null;
                },
              };
            }),
            (e.getSheetForTag = function (t) {
              if (t.sheet) return t.sheet;
              for (var e = 0; e < document.styleSheets.length; e++)
                if (document.styleSheets[e].ownerNode === t)
                  return document.styleSheets[e];
            }),
            (e.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (e.insertRule = function (t, e) {
              if (
                (u(a(t), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var i = this.getSheet();
                "number" != typeof e && (e = i.cssRules.length);
                try {
                  i.insertRule(t, e);
                } catch (e) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          t +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var s = this._tags[e];
                this._tags.push(this.makeStyleTag(this._name, t, s));
              }
              return this._rulesCount++;
            }),
            (e.replaceRule = function (t, e) {
              if (this._optimizeForSpeed) {
                var i = this.getSheet();
                if (
                  (e.trim() || (e = this._deletedRulePlaceholder),
                  !i.cssRules[t])
                )
                  return t;
                i.deleteRule(t);
                try {
                  i.insertRule(e, t);
                } catch (s) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    i.insertRule(this._deletedRulePlaceholder, t);
                }
              } else {
                var s = this._tags[t];
                u(s, "old rule at index `" + t + "` not found"),
                  (s.textContent = e);
              }
              return t;
            }),
            (e.deleteRule = function (t) {
              if (this._optimizeForSpeed) this.replaceRule(t, "");
              else {
                var e = this._tags[t];
                u(e, "rule at index `" + t + "` not found"),
                  e.parentNode.removeChild(e),
                  (this._tags[t] = null);
              }
            }),
            (e.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (t) {
                  return t && t.parentNode.removeChild(t);
                }),
                (this._tags = []);
            }),
            (e.cssRules = function () {
              var t = this;
              return this._tags.reduce(function (e, i) {
                return (
                  i
                    ? (e = e.concat(
                        Array.prototype.map.call(
                          t.getSheetForTag(i).cssRules,
                          function (e) {
                            return e.cssText === t._deletedRulePlaceholder
                              ? null
                              : e;
                          }
                        )
                      ))
                    : e.push(null),
                  e
                );
              }, []);
            }),
            (e.makeStyleTag = function (t, e, i) {
              e &&
                u(
                  a(e),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var s = document.createElement("style");
              this._nonce && s.setAttribute("nonce", this._nonce),
                (s.type = "text/css"),
                s.setAttribute("data-" + t, ""),
                e && s.appendChild(document.createTextNode(e));
              var n = document.head || document.getElementsByTagName("head")[0];
              return i ? n.insertBefore(s, i) : n.appendChild(s), s;
            }),
            (function (t, e) {
              for (var i = 0; i < e.length; i++) {
                var s = e[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(t, s.key, s);
              }
            })(t.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            t
          );
        })();
      function u(t, e) {
        if (!t) throw Error("StyleSheet: " + e + ".");
      }
      var h = function (t) {
          for (var e = 5381, i = t.length; i; )
            e = (33 * e) ^ t.charCodeAt(--i);
          return e >>> 0;
        },
        d = {};
      function c(t, e) {
        if (!e) return "jsx-" + t;
        var i = String(e),
          s = t + i;
        return d[s] || (d[s] = "jsx-" + h(t + "-" + i)), d[s];
      }
      function p(t, e) {
        var i = t + e;
        return (
          d[i] || (d[i] = e.replace(/__jsx-style-dynamic-selector/g, t)), d[i]
        );
      }
      var f = (function () {
          function t(t) {
            var e = void 0 === t ? {} : t,
              i = e.styleSheet,
              s = void 0 === i ? null : i,
              n = e.optimizeForSpeed,
              r = void 0 !== n && n;
            (this._sheet =
              s || new l({ name: "styled-jsx", optimizeForSpeed: r })),
              this._sheet.inject(),
              s &&
                "boolean" == typeof r &&
                (this._sheet.setOptimizeForSpeed(r),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var e = t.prototype;
          return (
            (e.add = function (t) {
              var e = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(t.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (t, e) {
                      return (t[e] = 0), t;
                    },
                    {}
                  )));
              var i = this.getIdAndRules(t),
                s = i.styleId,
                n = i.rules;
              if (s in this._instancesCounts) {
                this._instancesCounts[s] += 1;
                return;
              }
              var r = n
                .map(function (t) {
                  return e._sheet.insertRule(t);
                })
                .filter(function (t) {
                  return -1 !== t;
                });
              (this._indices[s] = r), (this._instancesCounts[s] = 1);
            }),
            (e.remove = function (t) {
              var e = this,
                i = this.getIdAndRules(t).styleId;
              if (
                ((function (t, e) {
                  if (!t) throw Error("StyleSheetRegistry: " + e + ".");
                })(
                  i in this._instancesCounts,
                  "styleId: `" + i + "` not found"
                ),
                (this._instancesCounts[i] -= 1),
                this._instancesCounts[i] < 1)
              ) {
                var s = this._fromServer && this._fromServer[i];
                s
                  ? (s.parentNode.removeChild(s), delete this._fromServer[i])
                  : (this._indices[i].forEach(function (t) {
                      return e._sheet.deleteRule(t);
                    }),
                    delete this._indices[i]),
                  delete this._instancesCounts[i];
              }
            }),
            (e.update = function (t, e) {
              this.add(e), this.remove(t);
            }),
            (e.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (e.cssRules = function () {
              var t = this,
                e = this._fromServer
                  ? Object.keys(this._fromServer).map(function (e) {
                      return [e, t._fromServer[e]];
                    })
                  : [],
                i = this._sheet.cssRules();
              return e.concat(
                Object.keys(this._indices)
                  .map(function (e) {
                    return [
                      e,
                      t._indices[e]
                        .map(function (t) {
                          return i[t].cssText;
                        })
                        .join(t._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (t) {
                    return !!t[1];
                  })
              );
            }),
            (e.styles = function (t) {
              var e, i;
              return (
                (e = this.cssRules()),
                void 0 === (i = t) && (i = {}),
                e.map(function (t) {
                  var e = t[0],
                    s = t[1];
                  return r.default.createElement("style", {
                    id: "__" + e,
                    key: "__" + e,
                    nonce: i.nonce ? i.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: s },
                  });
                })
              );
            }),
            (e.getIdAndRules = function (t) {
              var e = t.children,
                i = t.dynamic,
                s = t.id;
              if (i) {
                var n = c(s, i);
                return {
                  styleId: n,
                  rules: Array.isArray(e)
                    ? e.map(function (t) {
                        return p(n, t);
                      })
                    : [p(n, e)],
                };
              }
              return { styleId: c(s), rules: Array.isArray(e) ? e : [e] };
            }),
            (e.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (t, e) {
                  return (t[e.id.slice(2)] = e), t;
                }, {});
            }),
            t
          );
        })(),
        m = n.createContext(null);
      m.displayName = "StyleSheetContext";
      var v = r.default.useInsertionEffect || r.default.useLayoutEffect,
        y = new f();
      function g(t) {
        var e = y || n.useContext(m);
        return (
          e &&
            v(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove(t);
                  }
                );
              },
              [t.id, String(t.dynamic)]
            ),
          null
        );
      }
      (g.dynamic = function (t) {
        return t
          .map(function (t) {
            return c(t[0], t[1]);
          })
          .join(" ");
      }),
        (e.style = g);
    },
    5703: (t, e, i) => {
      "use strict";
      t.exports = i(2532).style;
    },
    9750: () => {},
    1106: (t, e, i) => {
      t.exports = i(6397);
    },
    3208: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => d });
      var s = i(4582),
        n = i(4835),
        r = i(9652),
        o = i(3033),
        a = i(8104),
        l = i(615);
      let u = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (l.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var h = i(8072);
      class d {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = s.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = s.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: l,
            delay: d,
            onComplete: c,
            onUpdate: p,
            isGenerator: f,
          } = this.options;
          if (
            !f &&
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                l = u(n, e),
                h = u(r, e);
              return (
                (0, a.$)(
                  l === h,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!l &&
                  !!h &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || (0, o.WH)(i)) && s))
              );
            })(t, i, n, l)
          ) {
            if (r.d.current || !d) {
              null == p || p((0, h.X)(t, this.options, e)),
                null == c || c(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let m = this.initPlayback(t, e);
          !1 !== m &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...m }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    2348: (t, e, i) => {
      "use strict";
      i.d(e, { o: () => N, L: () => $ });
      var s = i(3033),
        n = i(7331),
        r = i(4835),
        o = i(2464),
        a = i(8955),
        l = i(1339),
        u = i(7177);
      function h(t, e, i) {
        let s = Math.max(e - 5, 0);
        return (0, u.f)(i - t(s), e - s);
      }
      let d = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var c = i(8104);
      function p(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let f = ["duration", "bounce"],
        m = ["stiffness", "damping", "mass"];
      function v(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function y(t = d.visualDuration, e = d.bounce) {
        let i;
        let r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: a, restDelta: l } = r,
          u = r.keyframes[0],
          g = r.keyframes[r.keyframes.length - 1],
          x = { done: !1, value: u },
          {
            stiffness: S,
            damping: b,
            mass: P,
            duration: T,
            velocity: w,
            isResolvedFromDuration: A,
          } = (function (t) {
            let e = {
              velocity: d.velocity,
              stiffness: d.stiffness,
              damping: d.damping,
              mass: d.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!v(t, m) && v(t, f)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  s = i * i,
                  n = 2 * (0, o.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = { ...e, mass: d.mass, stiffness: s, damping: n };
              } else {
                let i = (function ({
                  duration: t = d.duration,
                  bounce: e = d.bounce,
                  velocity: i = d.velocity,
                  mass: s = d.mass,
                }) {
                  let r, a;
                  (0, c.$)(
                    t <= (0, n.f)(d.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let l = 1 - e;
                  (l = (0, o.q)(d.minDamping, d.maxDamping, l)),
                    (t = (0, o.q)(d.minDuration, d.maxDuration, (0, n.X)(t))),
                    l < 1
                      ? ((r = (e) => {
                          let s = e * l,
                            n = s * t;
                          return 0.001 - ((s - i) / p(e, l)) * Math.exp(-n);
                        }),
                        (a = (e) => {
                          let s = e * l * t,
                            n = Math.pow(l, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-s),
                            a = p(Math.pow(e, 2), l);
                          return (
                            ((s * i + i - n) *
                              o *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (a = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let u = (function (t, e, i) {
                    let s = i;
                    for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                    return s;
                  })(r, a, 5 / t);
                  if (((t = (0, n.f)(t)), isNaN(u)))
                    return {
                      stiffness: d.stiffness,
                      damping: d.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(u, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * l * Math.sqrt(s * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: d.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...r, velocity: -(0, n.X)(r.velocity || 0) }),
          E = w || 0,
          C = b / (2 * Math.sqrt(S * P)),
          V = g - u,
          M = (0, n.X)(Math.sqrt(S / P)),
          k = 5 > Math.abs(V);
        if (
          (a || (a = k ? d.restSpeed.granular : d.restSpeed.default),
          l || (l = k ? d.restDelta.granular : d.restDelta.default),
          C < 1)
        ) {
          let t = p(M, C);
          i = (e) =>
            g -
            Math.exp(-C * M * e) *
              (((E + C * M * V) / t) * Math.sin(t * e) + V * Math.cos(t * e));
        } else if (1 === C)
          i = (t) => g - Math.exp(-M * t) * (V + (E + M * V) * t);
        else {
          let t = M * Math.sqrt(C * C - 1);
          i = (e) => {
            let i = Math.exp(-C * M * e),
              s = Math.min(t * e, 300);
            return (
              g -
              (i * ((E + C * M * V) * Math.sinh(s) + t * V * Math.cosh(s))) / t
            );
          };
        }
        let R = {
          calculatedDuration: (A && T) || null,
          next: (t) => {
            let e = i(t);
            if (A) x.done = t >= T;
            else {
              let s = 0;
              C < 1 && (s = 0 === t ? (0, n.f)(E) : h(i, t, e));
              let r = Math.abs(s) <= a,
                o = Math.abs(g - e) <= l;
              x.done = r && o;
            }
            return (x.value = x.done ? g : e), x;
          },
          toString: () => {
            let t = Math.min((0, s.tu)(R), s.YE),
              e = (0, s.KZ)((e) => R.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return R;
      }
      function g({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: d,
      }) {
        let c, p;
        let f = t[0],
          m = { done: !1, value: f },
          v = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          x = i * e,
          S = f + x,
          b = void 0 === o ? S : o(S);
        b !== S && (x = b - f);
        let P = (t) => -x * Math.exp(-t / s),
          T = (t) => b + P(t),
          w = (t) => {
            let e = P(t),
              i = T(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : i);
          },
          A = (t) => {
            v(m.value) &&
              ((c = t),
              (p = y({
                keyframes: [m.value, g(m.value)],
                velocity: h(T, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: u,
                restSpeed: d,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== c || ((e = !0), w(t), A(t)),
              void 0 !== c && t >= c)
                ? p.next(t - c)
                : (e || w(t), m);
            },
          }
        );
      }
      var x = i(4043);
      let S = (0, x.A)(0.42, 0, 1, 1),
        b = (0, x.A)(0, 0, 0.58, 1),
        P = (0, x.A)(0.42, 0, 0.58, 1),
        T = (t) => Array.isArray(t) && "number" != typeof t[0];
      var w = i(1533),
        A = i(309),
        E = i(4768),
        C = i(4868);
      let V = {
          linear: w.l,
          easeIn: S,
          easeInOut: P,
          easeOut: b,
          circIn: C.po,
          circInOut: C.tn,
          circOut: C.yT,
          backIn: E.dg,
          backInOut: E.ZZ,
          backOut: E.Sz,
          anticipate: A.b,
        },
        M = (t) => {
          if ((0, s.DW)(t)) {
            (0, c.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return (0, x.A)(e, i, s, n);
          }
          return "string" == typeof t
            ? ((0, c.V)(void 0 !== V[t], `Invalid easing type '${t}'`), V[t])
            : t;
        };
      var k = i(8844),
        R = i(6896),
        j = i(9713);
      function D({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = T(s) ? s.map(M) : M(s),
          r = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = (0, R.q)(0, e, s);
                        t.push((0, j.k)(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = (0, k.G)(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || P).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = a(e)), (r.done = e >= t), r),
        };
      }
      var F = i(3208),
        L = i(4582),
        _ = i(104);
      let O = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => _.Gt.update(e, !0),
          stop: () => (0, _.WG)(e),
          now: () => (_.uv.isProcessing ? _.uv.timestamp : L.k.now()),
        };
      };
      var B = i(8072);
      let I = { decay: g, inertia: g, tween: D, keyframes: D, spring: y },
        U = (t) => t / 100;
      class N extends F.i {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: n,
            } = this.options,
            o = (null == s ? void 0 : s.KeyframeResolver) || r.h;
          (this.resolver = new o(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: o = 0,
              repeatType: u,
              velocity: h = 0,
            } = this.options,
            d = (0, s.WH)(n) ? n : I[n] || D;
          d !== D &&
            "number" != typeof t[0] &&
            ((e = (0, l.F)(U, (0, a.j)(t[0], t[1]))), (t = [0, 100]));
          let c = d({ ...this.options, keyframes: t });
          "mirror" === u &&
            (i = d({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -h,
            })),
            null === c.calculatedDuration &&
              (c.calculatedDuration = (0, s.tu)(c));
          let { calculatedDuration: p } = c,
            f = p + o;
          return {
            generator: c,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: p,
            resolvedDuration: f,
            totalDuration: f * (r + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: d,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: c,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let y = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? y < 0 : y > h;
          (this.currentTime = Math.max(y, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let x = this.currentTime,
            S = n;
          if (p) {
            let t = Math.min(this.currentTime, h) / d,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === f
                  ? ((i = 1 - i), m && (i -= m / d))
                  : "mirror" === f && (S = r)),
              (x = (0, o.q)(0, 1, i) * d);
          }
          let b = g ? { done: !1, value: l[0] } : S.next(x);
          a && (b.value = a(b.value));
          let { done: P } = b;
          g ||
            null === u ||
            (P =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            T && void 0 !== s && (b.value = (0, B.X)(l, this.options, s)),
            v && v(b.value),
            T && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = O, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let s = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = s - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = s)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function $(t) {
        return new N(t);
      }
    },
    8072: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => n });
      let s = (t) => null !== t;
      function n(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(s),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== n ? n : r[o];
      }
    },
    9473: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => s });
      let s = (0, i(6540).createContext)({});
    },
    5446: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => s });
      let s = (0, i(6540).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    6719: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => s });
      let s = (0, i(6540).createContext)(null);
    },
    309: (t, e, i) => {
      "use strict";
      i.d(e, { b: () => n });
      var s = i(4768);
      let n = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, s.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    4768: (t, e, i) => {
      "use strict";
      i.d(e, { Sz: () => o, ZZ: () => l, dg: () => a });
      var s = i(4043),
        n = i(3041),
        r = i(2946);
      let o = (0, s.A)(0.33, 1.53, 0.69, 0.99),
        a = (0, r.G)(o),
        l = (0, n.V)(a);
    },
    4868: (t, e, i) => {
      "use strict";
      i.d(e, { po: () => r, tn: () => a, yT: () => o });
      var s = i(3041),
        n = i(2946);
      let r = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, n.G)(r),
        a = (0, s.V)(r);
    },
    4043: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => r });
      var s = i(1533);
      let n = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function r(t, e, i, r) {
        if (t === e && i === r) return s.l;
        let o = (e) =>
          (function (t, e, i, s, r) {
            let o, a;
            let l = 0;
            do (o = n((a = e + (i - e) / 2), s, r) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : n(o(t), e, r));
      }
    },
    3041: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => s });
      let s = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2946: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => s });
      let s = (t) => (e) => 1 - t(1 - e);
    },
    5489: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => r });
      var s = i(4668);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function r(t, e) {
        let i = !1,
          r = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = n.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  n = !1,
                  r = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return n && r.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), r.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), s)) {
                      n = !0;
                      return;
                    }
                    (s = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (s = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: d,
            preRender: c,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let n = s.W.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(n - o.timestamp, 40), 1)),
              (o.timestamp = n),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((r = !1), t(m));
          },
          v = () => {
            (i = !0), (r = !0), o.isProcessing || t(m);
          };
        return {
          schedule: n.reduce((t, e) => {
            let s = l[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || v(), s.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < n.length; e++) l[n[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    104: (t, e, i) => {
      "use strict";
      i.d(e, { Gt: () => n, PP: () => a, WG: () => r, uv: () => o });
      var s = i(1533);
      let {
        schedule: n,
        cancel: r,
        state: o,
        steps: a,
      } = (0, i(5489).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : s.l,
        !0
      );
    },
    4582: (t, e, i) => {
      "use strict";
      let s;
      i.d(e, { k: () => a });
      var n = i(4668),
        r = i(104);
      function o() {
        s = void 0;
      }
      let a = {
        now: () => (
          void 0 === s &&
            a.set(
              r.uv.isProcessing || n.W.useManualTiming
                ? r.uv.timestamp
                : performance.now()
            ),
          s
        ),
        set: (t) => {
          (s = t), queueMicrotask(o);
        },
      };
    },
    8174: (t, e, i) => {
      "use strict";
      function s(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { P: () => sT });
      let n = (t) => Array.isArray(t);
      function r(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function o(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t, e, i, s) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, r] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                }),
              e
            );
          })(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        return e;
      }
      function l(t, e, i) {
        let s = t.getProps();
        return a(s, e, void 0 !== i ? i : s.custom, t);
      }
      let u = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        h = ["initial", ...u];
      var d,
        c,
        p = i(3033),
        f = i(2200);
      let m = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        v = (t) => (n(t) ? t[t.length - 1] || 0 : t);
      var y = i(4785),
        g = i(9896);
      function x(t, e) {
        let i = t.getValue("willChange");
        if ((0, g.S)(i) && i.add) return i.add(e);
      }
      let S = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        b = "data-" + S("framerAppearId");
      var P = i(7331),
        T = i(104),
        w = i(4668),
        A = i(9652),
        E = i(1533),
        C = i(309),
        V = i(4768),
        M = i(4868);
      let k = (t) => /^0[^.\s]+$/u.test(t);
      var R = i(8104);
      let j = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var D = i(568);
      let F = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var L = i(3420),
        _ = i(2944),
        O = i(5269);
      let B = (t) => (e) => e.test(t),
        I = [
          _.ai,
          O.px,
          O.KN,
          O.uj,
          O.vw,
          O.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        U = (t) => I.find(B(t));
      var N = i(4835),
        $ = i(615),
        W = i(849);
      let z = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function G(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(W.S) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = z.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let q = /\b([a-z-]*)\(.*?\)/gu,
        X = {
          ...$.f,
          getAnimatableNone: (t) => {
            let e = t.match(q);
            return e ? e.map(G).join(" ") : t;
          },
        };
      var K = i(7739);
      let H = {
          borderWidth: O.px,
          borderTopWidth: O.px,
          borderRightWidth: O.px,
          borderBottomWidth: O.px,
          borderLeftWidth: O.px,
          borderRadius: O.px,
          radius: O.px,
          borderTopLeftRadius: O.px,
          borderTopRightRadius: O.px,
          borderBottomRightRadius: O.px,
          borderBottomLeftRadius: O.px,
          width: O.px,
          maxWidth: O.px,
          height: O.px,
          maxHeight: O.px,
          top: O.px,
          right: O.px,
          bottom: O.px,
          left: O.px,
          padding: O.px,
          paddingTop: O.px,
          paddingRight: O.px,
          paddingBottom: O.px,
          paddingLeft: O.px,
          margin: O.px,
          marginTop: O.px,
          marginRight: O.px,
          marginBottom: O.px,
          marginLeft: O.px,
          backgroundPositionX: O.px,
          backgroundPositionY: O.px,
        },
        Y = {
          rotate: O.uj,
          rotateX: O.uj,
          rotateY: O.uj,
          rotateZ: O.uj,
          scale: _.hs,
          scaleX: _.hs,
          scaleY: _.hs,
          scaleZ: _.hs,
          skew: O.uj,
          skewX: O.uj,
          skewY: O.uj,
          distance: O.px,
          translateX: O.px,
          translateY: O.px,
          translateZ: O.px,
          x: O.px,
          y: O.px,
          z: O.px,
          perspective: O.px,
          transformPerspective: O.px,
          opacity: _.X4,
          originX: O.gQ,
          originY: O.gQ,
          originZ: O.px,
        },
        Z = { ..._.ai, transform: Math.round },
        Q = {
          ...H,
          ...Y,
          zIndex: Z,
          size: O.px,
          fillOpacity: _.X4,
          strokeOpacity: _.X4,
          numOctaves: Z,
        },
        J = {
          ...Q,
          color: K.y,
          backgroundColor: K.y,
          outlineColor: K.y,
          fill: K.y,
          stroke: K.y,
          borderColor: K.y,
          borderTopColor: K.y,
          borderRightColor: K.y,
          borderBottomColor: K.y,
          borderLeftColor: K.y,
          filter: X,
          WebkitFilter: X,
        },
        tt = (t) => J[t];
      function te(t, e) {
        let i = tt(t);
        return (
          i !== X && (i = $.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let ti = new Set(["auto", "none", "0"]);
      class ts extends N.h {
        constructor(t, e, i, s, n) {
          super(t, e, i, s, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && ((s = s.trim()), (0, D.p)(s))) {
              let n = (function t(e, i, s = 1) {
                (0, R.V)(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = F.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return j(t) ? parseFloat(t) : t;
                }
                return (0, D.p)(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !L.$y.has(i) || 2 !== t.length))
            return;
          let [s, n] = t,
            r = U(s),
            o = U(n);
          if (r !== o) {
            if ((0, L.E4)(r) && (0, L.E4)(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || k(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                "string" == typeof e &&
                  !ti.has(e) &&
                  (0, $.V)(e).values.length &&
                  (s = t[n]),
                  n++;
              }
              if (s && i) for (let n of e) t[n] = te(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = L.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = L.Hr[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      var tn = i(3208),
        tr = i(2348);
      let to = new Set(["opacity", "clipPath", "filter", "transform"]);
      var ta = i(8072);
      let tl = (0, i(4435).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tu = { anticipate: C.b, backInOut: V.ZZ, circInOut: M.tn };
      class th extends tn.i {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: s,
            keyframes: n,
          } = this.options;
          (this.resolver = new ts(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            s
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: n = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && (0, p.nL)() && o in tu && (o = tu[o]),
            (s = this.options),
            (0, p.WH)(s.type) || "spring" === s.type || !(0, p.yL)(s.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tr.o({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (0, p.TU)(a, n);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: s,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, p.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, ta.X)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: n,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, P.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, P.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, P.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return E.l;
            let { animation: i } = e;
            (0, p.vG)(i, t);
          } else this.pendingTimeline = t;
          return E.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: s,
            type: n,
            ease: r,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new tr.o({
                ...u,
                keyframes: i,
                duration: s,
                type: n,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              d = (0, P.f)(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            tl() &&
            i &&
            to.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let td = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tc = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tp = { type: "keyframes", duration: 0.8 },
        tf = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tm = (t, { keyframes: e }) =>
          e.length > 2
            ? tp
            : f.f.has(t)
            ? t.startsWith("scale")
              ? tc(e[1])
              : td
            : tf,
        tv =
          (t, e, i, s = {}, n, r) =>
          (o) => {
            let a = (0, p.rU)(s, t) || {},
              l = a.delay || s.delay || 0,
              { elapsed: u = 0 } = s;
            u -= (0, P.f)(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: s,
              staggerDirection: n,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...tm(t, h) }),
              h.duration && (h.duration = (0, P.f)(h.duration)),
              h.repeatDelay && (h.repeatDelay = (0, P.f)(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (A.d.current || w.W.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !r && void 0 !== e.get())
            ) {
              let t = (0, ta.X)(h.keyframes, a);
              if (void 0 !== t)
                return (
                  T.Gt.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new p.P6([])
                );
            }
            return !r && th.supports(h) ? new th(h) : new tr.o(h);
          };
      function ty(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...u
        } = e;
        s && (o = s);
        let h = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in u) {
          let s = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            n = u[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...(0, p.rU)(o || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[b];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, T.Gt);
              null !== t && ((a.startTime = t), (l = !0));
            }
          }
          x(t, e),
            s.start(
              tv(
                e,
                s,
                n,
                t.shouldReduceMotion && f.f.has(e) ? { type: !1 } : a,
                t,
                l
              )
            );
          let c = s.animation;
          c && h.push(c);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              T.Gt.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = l(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = v(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, y.OQ)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function tg(t, e, i = {}) {
        var s;
        let n = l(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(ty(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tx)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tg(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = r;
        if (!u) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function tx(t, e) {
        return t.sortNodePosition(e);
      }
      let tS = h.length,
        tb = [...u].reverse(),
        tP = u.length;
      function tT(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function tw() {
        return {
          animate: tT(!0),
          whileInView: tT(),
          whileHover: tT(),
          whileTap: tT(),
          whileDrag: tT(),
          whileFocus: tT(),
          exit: tT(),
        };
      }
      class tA {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class tE extends tA {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => tg(t, e, i)));
                          else if ("string" == typeof e) s = tg(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? l(t, e, i.custom) : e;
                            s = Promise.all(ty(t, n, i));
                          }
                          return s.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = tw(),
                  a = !0,
                  u = (e) => (i, s) => {
                    var n;
                    let r = l(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function d(l) {
                  let { props: d } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < tS; t++) {
                          let s = h[t],
                            n = e.props[s];
                          (o(n) || !1 === n) && (i[s] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < tP; e++) {
                    var y;
                    let h = tb[e],
                      g = i[h],
                      x = void 0 !== d[h] ? d[h] : c[h],
                      S = o(x),
                      b = h === l ? g.isActive : null;
                    !1 === b && (v = e);
                    let P = x === c[h] && x !== d[h] && S;
                    if (
                      (P && a && t.manuallyAnimateOnMount && (P = !1),
                      (g.protectedKeys = { ...m }),
                      (!g.isActive && null === b) ||
                        (!x && !g.prevProp) ||
                        s(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let T =
                        ((y = g.prevProp),
                        "string" == typeof x
                          ? x !== y
                          : !!Array.isArray(x) && !r(x, y)),
                      w =
                        T || (h === l && g.isActive && !P && S) || (e > v && S),
                      A = !1,
                      E = Array.isArray(x) ? x : [x],
                      C = E.reduce(u(h), {});
                    !1 === b && (C = {});
                    let { prevResolvedValues: V = {} } = g,
                      M = { ...V, ...C },
                      k = (e) => {
                        (w = !0),
                          f.has(e) && ((A = !0), f.delete(e)),
                          (g.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = C[t],
                        i = V[t];
                      if (!m.hasOwnProperty(t))
                        (n(e) && n(i) ? r(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? k(t)
                            : (g.protectedKeys[t] = !0)
                          : null != e
                          ? k(t)
                          : f.add(t);
                    }
                    (g.prevProp = x),
                      (g.prevResolvedValues = C),
                      g.isActive && (m = { ...m, ...C }),
                      a && t.blockInitialAnimation && (w = !1);
                    let R = !(P && T) || A;
                    w &&
                      R &&
                      p.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: h },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      p.push({ animation: e });
                  }
                  let g = !!p.length;
                  return (
                    a &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (a = !1),
                    g ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let r = d(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = tw()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          s(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let tC = 0;
      class tV extends tA {
        constructor() {
          super(...arguments), (this.id = tC++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function tM(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      function tk(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let tR = (t) => (e) => (0, p.Mc)(e) && t(e, tk(e));
      function tj(t, e, i, s) {
        return tM(t, e, tR(i), s);
      }
      let tD = (t, e) => Math.abs(t - e);
      var tF = i(1339);
      class tL {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = tB(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(tD(t.x, e.x) ** 2 + tD(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: n } = T.uv;
              this.history.push({ ...s, timestamp: n });
              let { onStart: r, onMove: o } = this.handlers;
              e ||
                (r && r(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = t_(e, this.transformPagePoint)),
                T.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = tB(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : t_(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !(0, p.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = t_(tk(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = T.uv;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tB(r, this.history)),
            (this.removeListeners = (0, tF.F)(
              tj(this.contextWindow, "pointermove", this.handlePointerMove),
              tj(this.contextWindow, "pointerup", this.handlePointerUp),
              tj(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, T.WG)(this.updatePoint);
        }
      }
      function t_(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tO(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tB({ point: t }, e) {
        return {
          point: t,
          delta: tO(t, tI(e)),
          offset: tO(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = tI(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(n.timestamp - s.timestamp > (0, P.f)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = (0, P.X)(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tI(t) {
        return t[t.length - 1];
      }
      function tU(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var tN = i(6896),
        t$ = i(9713);
      function tW(t) {
        return t.max - t.min;
      }
      function tz(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, t$.k)(e.min, e.max, t.origin)),
          (t.scale = tW(i) / tW(e)),
          (t.translate = (0, t$.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function tG(t, e, i, s) {
        tz(t.x, e.x, i.x, s ? s.originX : void 0),
          tz(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function tq(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + tW(e));
      }
      function tX(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + tW(e));
      }
      function tK(t, e, i) {
        tX(t.x, e.x, i.x), tX(t.y, e.y, i.y);
      }
      var tH = i(2464);
      function tY(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tZ(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function tQ(t, e, i) {
        return { min: tJ(t, e), max: tJ(t, i) };
      }
      function tJ(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let t0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        t1 = () => ({ x: t0(), y: t0() }),
        t5 = () => ({ min: 0, max: 0 }),
        t3 = () => ({ x: t5(), y: t5() });
      function t2(t) {
        return [t("x"), t("y")];
      }
      function t4({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function t6(t) {
        return void 0 === t || 1 === t;
      }
      function t9({ scale: t, scaleX: e, scaleY: i }) {
        return !t6(t) || !t6(e) || !t6(i);
      }
      function t8(t) {
        return (
          t9(t) ||
          t7(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function t7(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function et(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function ee(t, e = 0, i = 1, s, n) {
        (t.min = et(t.min, e, i, s, n)), (t.max = et(t.max, e, i, s, n));
      }
      function ei(t, { x: e, y: i }) {
        ee(t.x, e.translate, e.scale, e.originPoint),
          ee(t.y, i.translate, i.scale, i.originPoint);
      }
      function es(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function en(t, e, i, s, n = 0.5) {
        let r = (0, t$.k)(t.min, t.max, n);
        ee(t, e, i, r, s);
      }
      function er(t, e) {
        en(t.x, e.x, e.scaleX, e.scale, e.originX),
          en(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function eo(t, e) {
        return t4(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ea = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        el = new WeakMap();
      class eu {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = t3()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new tL(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tk(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, p.Wp)(i)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  t2((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (O.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = tW(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && T.Gt.postRender(() => n(t, e)),
                  x(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                t2((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: ea(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && T.Gt.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !eh(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, t$.k)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, t$.k)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && tU(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: tY(t.x, i, n), y: tY(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tQ(t, "left", "right"), y: tQ(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              t2((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !tU(e)) return !1;
          let s = e.current;
          (0, R.V)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = eo(t, i),
                { scroll: n } = e;
              return n && (es(s.x, n.offset.x), es(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: tZ((t = n.layout.layoutBox).x, r.x), y: tZ(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = t4(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            t2((o) => {
              if (!eh(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            x(this.visualElement, t),
            i.start(tv(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          t2((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          t2((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          t2((e) => {
            let { drag: i } = this.getProps();
            if (!eh(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - (0, t$.k)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!tU(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          t2((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = tW(t),
                  n = tW(e);
                return (
                  n > s
                    ? (i = (0, tN.q)(e.min, e.max - s, t.min))
                    : s > n && (i = (0, tN.q)(t.min, t.max - n, e.min)),
                  (0, tH.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            t2((e) => {
              if (!eh(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set((0, t$.k)(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          el.set(this.visualElement, this);
          let t = tj(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              tU(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            T.Gt.read(e);
          let n = tM(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (t2((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function eh(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class ed extends tA {
        constructor(t) {
          super(t),
            (this.removeGroupControls = E.l),
            (this.removeListeners = E.l),
            (this.controls = new eu(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || E.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ec = (t) => (e, i) => {
        t && T.Gt.postRender(() => t(e, i));
      };
      class ep extends tA {
        constructor() {
          super(...arguments), (this.removePointerDownListener = E.l);
        }
        onPointerDown(t) {
          this.session = new tL(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ea(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: ec(t),
            onStart: ec(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && T.Gt.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tj(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var ef = i(4848),
        em = i(6540),
        ev = i(6719),
        ey = i(9473);
      let eg = (0, em.createContext)({}),
        ex = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eS(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eb = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!O.px.test(t)) return t;
              t = parseFloat(t);
            }
            let i = eS(t, e.target.x),
              s = eS(t, e.target.y);
            return `${i}% ${s}%`;
          },
        },
        eP = {},
        { schedule: eT, cancel: ew } = (0, i(5489).I)(queueMicrotask, !1);
      class eA extends em.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(eP, eC),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ex.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    T.Gt.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            eT.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function eE(t) {
        let [e, i] = (function () {
            let t = (0, em.useContext)(ev.t);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, em.useId)();
            (0, em.useEffect)(() => s(n), []);
            let r = (0, em.useCallback)(() => i && i(n), [n, i]);
            return !e && i ? [!1, r] : [!0];
          })(),
          s = (0, em.useContext)(ey.L);
        return (0, ef.jsx)(eA, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, em.useContext)(eg),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let eC = {
        borderRadius: {
          ...eb,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eb,
        borderTopRightRadius: eb,
        borderBottomLeftRadius: eb,
        borderBottomRightRadius: eb,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = $.f.parse(t);
            if (s.length > 5) return t;
            let n = $.f.createTransformer(t),
              r = "number" != typeof s[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + r] /= o), (s[1 + r] /= a);
            let l = (0, t$.k)(o, a, 0.5);
            return (
              "number" == typeof s[2 + r] && (s[2 + r] /= l),
              "number" == typeof s[3 + r] && (s[3 + r] /= l),
              n(s)
            );
          },
        },
      };
      var eV = i(4582),
        eM = i(2358);
      let ek = (t, e) => t.depth - e.depth;
      class eR {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, eM.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, eM.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(ek),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var ej = i(2606);
      function eD(t) {
        let e = (0, g.S)(t) ? t.get() : t;
        return m(e) ? e.toValue() : e;
      }
      let eF = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eL = eF.length,
        e_ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        eO = (t) => "number" == typeof t || O.px.test(t);
      function eB(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eI = eN(0, 0.5, M.yT),
        eU = eN(0.5, 0.95, E.l);
      function eN(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, tN.q)(t, e, s)));
      }
      function e$(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function eW(t, e) {
        e$(t.x, e.x), e$(t.y, e.y);
      }
      function ez(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function eG(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function eq(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (O.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, t$.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, t$.k)(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = eG(t.min, e, i, a, n)),
            (t.max = eG(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let eX = ["x", "scaleX", "originX"],
        eK = ["y", "scaleY", "originY"];
      function eH(t, e, i, s) {
        eq(t.x, e, eX, i ? i.x : void 0, s ? s.x : void 0),
          eq(t.y, e, eK, i ? i.y : void 0, s ? s.y : void 0);
      }
      function eY(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eZ(t) {
        return eY(t.x) && eY(t.y);
      }
      function eQ(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function eJ(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function e0(t, e) {
        return eJ(t.x, e.x) && eJ(t.y, e.y);
      }
      function e1(t) {
        return tW(t.x) / tW(t.y);
      }
      function e5(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class e3 {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, eM.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, eM.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let e2 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        e4 = "undefined" != typeof window && void 0 !== window.MotionDebug,
        e6 = ["", "X", "Y", "Z"],
        e9 = { visibility: "hidden" },
        e8 = 0;
      function e7(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function it({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = e8++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  e4 &&
                    (e2.totalNodes =
                      e2.resolvedTargetDeltas =
                      e2.recalculatedProjection =
                        0),
                  this.nodes.forEach(is),
                  this.nodes.forEach(id),
                  this.nodes.forEach(ic),
                  this.nodes.forEach(ir),
                  e4 && window.MotionDebug.record(e2);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eR());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ej.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = eV.k.now(),
                      s = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && ((0, T.WG)(s), t(n - 250));
                      };
                    return T.Gt.read(s, !0), () => (0, T.WG)(s);
                  })(s, 250)),
                  ex.hasAnimatedSinceResize &&
                    ((ex.hasAnimatedSinceResize = !1), this.nodes.forEach(ih));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        ix,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !e0(this.targetLayout, s) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, p.rU)(n, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || ih(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, T.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ip),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = i.props[b];
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      T.Gt,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ia);
              return;
            }
            this.isUpdating || this.nodes.forEach(il),
              (this.isUpdating = !1),
              this.nodes.forEach(iu),
              this.nodes.forEach(ie),
              this.nodes.forEach(ii),
              this.clearAllSnapshots();
            let t = eV.k.now();
            (T.uv.delta = (0, tH.q)(0, 1e3 / 60, t - T.uv.timestamp)),
              (T.uv.timestamp = t),
              (T.uv.isProcessing = !0),
              T.PP.update.process(T.uv),
              T.PP.preRender.process(T.uv),
              T.PP.render.process(T.uv),
              (T.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), eT.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(io), this.sharedNodes.forEach(im);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              T.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            T.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = t3()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !eZ(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || t8(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              iP((e = s).x),
              iP(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return t3();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(iw)
              )
            ) {
              let { scroll: t } = this.root;
              t && (es(i.x, t.offset.x), es(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = t3();
            if (
              (eW(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: n, options: r } = s;
              s !== this.root &&
                n &&
                r.layoutScroll &&
                (n.wasRoot && eW(i, t),
                es(i.x, n.offset.x),
                es(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = t3();
            eW(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                er(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                t8(s.latestValues) && er(i, s.latestValues);
            }
            return t8(this.latestValues) && er(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = t3();
            eW(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !t8(i.latestValues)) continue;
              t9(i.latestValues) && i.updateSnapshot();
              let s = t3();
              eW(s, i.measurePageBox()),
                eH(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return t8(this.latestValues) && eH(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== T.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = T.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = t3()),
                    (this.relativeTargetOrigin = t3()),
                    tK(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    eW(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = t3()), (this.targetWithTransforms = t3())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      tq(i.x, s.x, n.x),
                      tq(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : eW(this.target, this.layout.layoutBox),
                      ei(this.target, this.targetDelta))
                    : eW(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = t3()),
                      (this.relativeTargetOrigin = t3()),
                      tK(this.relativeTargetOrigin, this.target, t.target),
                      eW(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                e4 && e2.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              t9(this.parent.latestValues) ||
              t7(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === T.uv.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            eW(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      er(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), ei(t, r)),
                    s && t8(n.latestValues) && er(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = t3()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (ez(this.prevProjectionDelta.x, this.projectionDelta.x),
                ez(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              tG(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                e5(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                e5(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              e4 && e2.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = t1()),
              (this.projectionDelta = t1()),
              (this.projectionDeltaWithTransform = t1());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = t1();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = t3(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ig)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (iv(o.x, t.x, s),
                  iv(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, f;
                  tK(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    iy(p.x, f.x, a.x, s),
                    iy(p.y, f.y, a.y, s),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      eQ(u.x, c.x) && eQ(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = t3()),
                    eW(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = (0, t$.k)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          eI(s)
                        )),
                        (t.opacityExit = (0, t$.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eU(s)
                        )))
                      : r &&
                        (t.opacity = (0, t$.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < eL; n++) {
                      let r = `border${eF[n]}Radius`,
                        o = eB(e, r),
                        a = eB(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || eO(o) === eO(a)
                          ? ((t[r] = Math.max((0, t$.k)(e_(o), e_(a), s), 0)),
                            (O.KN.test(a) || O.KN.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, t$.k)(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, T.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = T.Gt.update(() => {
                (ex.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, g.S)(0) ? 0 : (0, y.OQ)(0);
                    return s.start(tv("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                iT(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || t3();
                let e = tW(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = tW(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              eW(e, i),
                er(e, n),
                tG(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new e3()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && e7("z", t, s, this.animationValues);
            for (let e = 0; e < e6.length; e++)
              e7(`rotate${e6[e]}`, t, s, this.animationValues),
                e7(`skew${e6[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return e9;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  eD(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    eD(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !t8(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = "",
                  n = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || r || o) &&
                    (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: r,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    n && (s += `rotateX(${n}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    o && (s += `skewX(${o}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            eP)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = eP[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? eD(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ia),
              this.root.sharedNodes.clear();
          }
        };
      }
      function ie(t) {
        t.updateLayout();
      }
      function ii(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? t2((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = tW(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : iT(n, i.layoutBox, e) &&
              t2((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = tW(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = t1();
          tG(o, e, i.layoutBox);
          let a = t1();
          r
            ? tG(a, t.applyTransform(s, !0), i.measuredBox)
            : tG(a, e, i.layoutBox);
          let l = !eZ(o),
            u = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = t3();
                tK(o, i.layoutBox, n.layoutBox);
                let a = t3();
                tK(a, e, r.layoutBox),
                  e0(o, a) || (u = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function is(t) {
        e4 && e2.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ir(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function io(t) {
        t.clearSnapshot();
      }
      function ia(t) {
        t.clearMeasurements();
      }
      function il(t) {
        t.isLayoutDirty = !1;
      }
      function iu(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ih(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function id(t) {
        t.resolveTargetDelta();
      }
      function ic(t) {
        t.calcProjection();
      }
      function ip(t) {
        t.resetSkewAndRotation();
      }
      function im(t) {
        t.removeLeadSnapshot();
      }
      function iv(t, e, i) {
        (t.translate = (0, t$.k)(e.translate, 0, i)),
          (t.scale = (0, t$.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iy(t, e, i, s) {
        (t.min = (0, t$.k)(e.min, i.min, s)),
          (t.max = (0, t$.k)(e.max, i.max, s));
      }
      function ig(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ix = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iS = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ib = iS("applewebkit/") && !iS("chrome/") ? Math.round : E.l;
      function iP(t) {
        (t.min = ib(t.min)), (t.max = ib(t.max));
      }
      function iT(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(e1(e) - e1(i))))
        );
      }
      function iw(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let iA = it({
          attachResizeListener: (t, e) => tM(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iE = { current: void 0 },
        iC = it({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iE.current) {
              let t = new iA({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iE.current = t);
            }
            return iE.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function iV(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = s["onHover" + i];
        n && T.Gt.postRender(() => n(e, tk(e)));
      }
      class iM extends tA {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, p.PT)(
              t,
              (t) => (iV(this.node, t, "Start"), (t) => iV(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class ik extends tA {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tF.F)(
            tM(this.node.current, "focus", () => this.onFocus()),
            tM(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function iR(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && T.Gt.postRender(() => n(e, tk(e)));
      }
      class ij extends tA {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, p.c$)(
              t,
              (t) => (
                iR(this.node, t, "Start"),
                (t, { success: e }) => iR(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let iD = new WeakMap(),
        iF = new WeakMap(),
        iL = (t) => {
          let e = iD.get(t.target);
          e && e(t);
        },
        i_ = (t) => {
          t.forEach(iL);
        },
        iO = { some: 0, all: 1 };
      class iB extends tA {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : iO[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              iF.has(i) || iF.set(i, {});
              let s = iF.get(i),
                n = JSON.stringify(e);
              return (
                s[n] ||
                  (s[n] = new IntersectionObserver(i_, { root: t, ...e })),
                s[n]
              );
            })(e);
            return (
              iD.set(t, i),
              s.observe(t),
              () => {
                iD.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let iI = (0, em.createContext)({ strict: !1 });
      var iU = i(5446);
      let iN = (0, em.createContext)({});
      function i$(t) {
        return s(t.animate) || h.some((e) => o(t[e]));
      }
      function iW(t) {
        return !!(i$(t) || t.variants);
      }
      function iz(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var iG = i(8288);
      let iq = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        iX = {};
      for (let t in iq) iX[t] = { isEnabled: (e) => iq[t].some((t) => !!e[t]) };
      let iK = Symbol.for("motionComponentSymbol");
      var iH = i(5128);
      let iY = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function iZ(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (iY.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function iQ(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let iJ = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function i0(t, e, i, s) {
        for (let i in (iQ(t, e, void 0, s), e.attrs))
          t.setAttribute(iJ.has(i) ? i : S(i), e.attrs[i]);
      }
      function i1(t, { layout: e, layoutId: i }) {
        return (
          f.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eP[t] || "opacity" === t))
        );
      }
      function i5(t, e, i) {
        var s;
        let { style: n } = t,
          r = {};
        for (let o in n)
          ((0, g.S)(n[o]) ||
            (e.style && (0, g.S)(e.style[o])) ||
            i1(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (r[o] = n[o]);
        return r;
      }
      function i3(t, e, i) {
        let s = i5(t, e, i);
        for (let i in t)
          ((0, g.S)(t[i]) || (0, g.S)(e[i])) &&
            (s[
              -1 !== f.U.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      var i2 = i(8601);
      let i4 = (t) => (e, i) => {
          let n = (0, em.useContext)(iN),
            r = (0, em.useContext)(ev.t),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                r,
                o
              ) {
                let l = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      o = n(t, {});
                    for (let t in o) r[t] = eD(o[t]);
                    let { initial: l, animate: u } = t,
                      h = i$(t),
                      d = iW(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === l && (l = e.initial),
                      void 0 === u && (u = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === l) ? u : l;
                    if (p && "boolean" != typeof p && !s(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let s = a(t, e[i]);
                        if (s) {
                          let { transitionEnd: t, transition: e, ...i } = s;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(n, r, o, t),
                  renderState: e(),
                };
                return i && (l.mount = (t) => i(n, t, l)), l;
              })(t, e, n, r);
          return i ? o() : (0, i2.M)(o);
        },
        i6 = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        i9 = () => ({ ...i6(), attrs: {} }),
        i8 = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        i7 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        st = f.U.length;
      function se(t, e, i) {
        let { style: s, vars: n, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (f.f.has(t)) {
            o = !0;
            continue;
          }
          if ((0, D.j)(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = i8(i, Q[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (s.transform = (function (t, e, i) {
                  let s = "",
                    n = !0;
                  for (let r = 0; r < st; r++) {
                    let o = f.U[r],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = i8(a, Q[o]);
                      if (!l) {
                        n = !1;
                        let e = i7[o] || o;
                        s += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (s = s.trim()),
                    i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
                    s
                  );
                })(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function si(t, e, i) {
        return "string" == typeof t ? t : O.px.transform(e + i * t);
      }
      let ss = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        sn = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function sr(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((se(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: f } = t;
        c.transform && (f && (p.transform = c.transform), delete c.transform),
          f &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let s = si(e, t.x, t.width),
                n = si(i, t.y, t.height);
              return `${s} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s && (c.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? ss : sn;
              t[r.offset] = O.px.transform(-s);
              let o = O.px.transform(e),
                a = O.px.transform(i);
              t[r.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let so = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        sa = {
          useVisualState: i4({
            scrapeMotionValuesFromProps: i3,
            createRenderState: i9,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              T.Gt.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                T.Gt.render(() => {
                  sr(i, s, so(e.tagName), t.transformTemplate), i0(e, i);
                });
            },
          }),
        },
        sl = {
          useVisualState: i4({
            scrapeMotionValuesFromProps: i5,
            createRenderState: i6,
          }),
        };
      function su(t, e, i) {
        for (let s in e) (0, g.S)(e[s]) || i1(s, i) || (t[s] = e[s]);
      }
      let sh = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function sd(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          sh.has(t)
        );
      }
      let sc = (t) => !sd(t);
      try {
        !(function (t) {
          t && (sc = (e) => (e.startsWith("on") ? !sd(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let sp = { current: null },
        sf = { current: !1 },
        sm = new WeakMap(),
        sv = [...I, K.y, $.f],
        sy = (t) => sv.find(B(t)),
        sg = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sx {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = N.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = eV.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                T.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = i$(e)),
            (this.isVariantNode = iW(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, g.S)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sm.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sf.current ||
              (function () {
                if (((sf.current = !0), iG.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (sp.current = t.matches);
                    t.addListener(e), e();
                  } else sp.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sp.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (sm.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, T.WG)(this.notifyUpdate),
          (0, T.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let s = f.f.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && T.Gt.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), r(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in iX) {
            let e = iX[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t3();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < sg.length; e++) {
            let i = sg[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if ((0, g.S)(n)) t.addValue(s, n);
              else if ((0, g.S)(r)) t.addValue(s, (0, y.OQ)(n, { owner: t }));
              else if (r !== n) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, (0, y.OQ)(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, y.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (j(s) || k(s))
                ? (s = parseFloat(s))
                : !sy(s) && $.f.test(e) && (s = te(t, e)),
              this.setBaseTarget(t, (0, g.S)(s) ? s.get() : s)),
            (0, g.S)(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let n = a(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (s && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, g.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ej.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sS extends sx {
        constructor() {
          super(...arguments), (this.KeyframeResolver = ts);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, g.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sb extends sS {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = iQ);
        }
        readValueFromInstance(t, e) {
          if (f.f.has(e)) {
            let t = tt(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = ((0, D.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return eo(t, e);
        }
        build(t, e, i) {
          se(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return i5(t, e, i);
        }
      }
      class sP extends sS {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = t3);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (f.f.has(e)) {
            let t = tt(e);
            return (t && t.default) || 0;
          }
          return (e = iJ.has(e) ? e : S(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return i3(t, e, i);
        }
        build(t, e, i) {
          sr(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          i0(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = so(t.tagName)), super.mount(t);
        }
      }
      let sT = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, s) =>
            "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
        });
      })(
        ((d = {
          animation: { Feature: tE },
          exit: { Feature: tV },
          inView: { Feature: iB },
          tap: { Feature: ij },
          focus: { Feature: ik },
          hover: { Feature: iM },
          pan: { Feature: ep },
          drag: { Feature: ed, ProjectionNode: iC, MeasureLayout: eE },
          layout: { ProjectionNode: iC, MeasureLayout: eE },
        }),
        (c = (t, e) =>
          iZ(t)
            ? new sP(e)
            : new sb(e, { allowProjection: t !== em.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: i,
            useVisualState: s,
            Component: n,
          }) {
            var r, a;
            function l(t, r) {
              var a;
              let l;
              let u = {
                  ...(0, em.useContext)(iU.Q),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, em.useContext)(ey.L).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (i$(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || o(e) ? e : void 0,
                        animate: o(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, em.useContext)(iN));
                  return (0, em.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [iz(e), iz(i)]
                  );
                })(t),
                c = s(t, h);
              if (!h && iG.B) {
                (0, em.useContext)(iI).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = iX;
                  if (!e && !i) return {};
                  let s = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? s.MeasureLayout
                        : void 0,
                    ProjectionNode: s.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, s, n) {
                    var r, o;
                    let { visualElement: a } = (0, em.useContext)(iN),
                      l = (0, em.useContext)(iI),
                      u = (0, em.useContext)(ev.t),
                      h = (0, em.useContext)(iU.Q).reducedMotion,
                      d = (0, em.useRef)(null);
                    (s = s || l.renderer),
                      !d.current &&
                        s &&
                        (d.current = s(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, em.useContext)(eg);
                    c &&
                      !c.projection &&
                      n &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, s) {
                        let {
                          layoutId: n,
                          layout: r,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: r,
                            alwaysMeasureLayout: !!o || (a && tU(a)),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, n, p);
                    let f = (0, em.useRef)(!1);
                    (0, em.useInsertionEffect)(() => {
                      c && f.current && c.update(i, u);
                    });
                    let m = i[b],
                      v = (0, em.useRef)(
                        !!m &&
                          !(null === (r = window.MotionHandoffIsComplete) ||
                          void 0 === r
                            ? void 0
                            : r.call(window, m)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m))
                      );
                    return (
                      (0, iH.E)(() => {
                        c &&
                          ((f.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          eT.render(c.render),
                          v.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, em.useEffect)(() => {
                        c &&
                          (!v.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (v.current = !1)));
                      }),
                      c
                    );
                  })(n, c, u, e, t.ProjectionNode));
              }
              return (0, ef.jsxs)(iN.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, ef.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  i(
                    n,
                    t,
                    ((a = d.visualElement),
                    (0, em.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          a && (t ? a.mount(t) : a.unmount()),
                          r &&
                            ("function" == typeof r
                              ? r(t)
                              : tU(r) && (r.current = t));
                      },
                      [a]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            }
            t &&
              (function (t) {
                for (let e in t) iX[e] = { ...iX[e], ...t[e] };
              })(t),
              (l.displayName = `motion.${
                "string" == typeof n
                  ? n
                  : `create(${
                      null !==
                        (a =
                          null !== (r = n.displayName) && void 0 !== r
                            ? r
                            : n.name) && void 0 !== a
                        ? a
                        : ""
                    })`
              }`);
            let u = (0, em.forwardRef)(l);
            return (u[iK] = n), u;
          })({
            ...(iZ(t) ? sa : sl),
            preloadedFeatures: d,
            useRender: (function (t = !1) {
              return (e, i, s, { latestValues: n }, r) => {
                let o = (
                    iZ(e)
                      ? function (t, e, i, s) {
                          let n = (0, em.useMemo)(() => {
                            let i = i9();
                            return (
                              sr(i, e, so(s), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            su(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            s = (function (t, e) {
                              let i = t.style || {},
                                s = {};
                              return (
                                su(s, i, t),
                                Object.assign(
                                  s,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, em.useMemo)(() => {
                                      let i = i6();
                                      return (
                                        se(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                s
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (s.userSelect =
                                s.WebkitUserSelect =
                                s.WebkitTouchCallout =
                                  "none"),
                              (s.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = s),
                            i
                          );
                        }
                  )(i, n, r, e),
                  a = (function (t, e, i) {
                    let s = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (sc(n) ||
                          (!0 === i && sd(n)) ||
                          (!e && !sd(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (s[n] = t[n]);
                    return s;
                  })(i, "string" == typeof e, t),
                  l = e !== em.Fragment ? { ...a, ...o, ref: s } : {},
                  { children: u } = i,
                  h = (0, em.useMemo)(() => ((0, g.S)(u) ? u.get() : u), [u]);
                return (0, em.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: c,
            Component: t,
          });
        })
      );
    },
    568: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => n, p: () => o });
      let s = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = s("--"),
        r = s("var(--"),
        o = (t) => !!r(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    3420: (t, e, i) => {
      "use strict";
      i.d(e, { $y: () => o, E4: () => a, Hr: () => p, W9: () => c });
      var s = i(2200),
        n = i(2944),
        r = i(5269);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === n.ai || t === r.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return l(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        d = s.U.filter((t) => !h.has(t));
      function c(t) {
        let e = [];
        return (
          d.forEach((i) => {
            let s = t.getValue(i);
            void 0 !== s &&
              (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    2200: (t, e, i) => {
      "use strict";
      i.d(e, { U: () => s, f: () => n });
      let s = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(s);
    },
    4835: (t, e, i) => {
      "use strict";
      i.d(e, { h: () => d, q: () => h });
      var s = i(3420),
        n = i(104);
      let r = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(r).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, s.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), r.forEach((t) => t.complete()), r.clear();
      }
      function u() {
        r.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (r.add(this),
                o || ((o = !0), n.Gt.read(u), n.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            r.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), r.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    4668: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => s });
      let s = { skipAnimations: !1, useManualTiming: !1 };
    },
    2358: (t, e, i) => {
      "use strict";
      function s(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => n, Kq: () => s });
    },
    2464: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => s });
      let s = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    8844: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => u });
      var s = i(1533),
        n = i(8104),
        r = i(6896),
        o = i(2464),
        a = i(8955),
        l = i(1339);
      function u(t, e, { clamp: i = !0, ease: h, mixer: d } = {}) {
        let c = t.length;
        if (
          ((0, n.V)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let p = (function (t, e, i) {
            let n = [],
              r = i || a.j,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || s.l : e;
                o = (0, l.F)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, h, d),
          f = p.length,
          m = (e) => {
            let i = 0;
            if (f > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let s = (0, r.q)(t[i], t[i + 1], e);
            return p[i](s);
          };
        return i ? (e) => m((0, o.q)(t[0], t[c - 1], e)) : m;
      }
    },
    8288: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => s });
      let s = "undefined" != typeof window;
    },
    8955: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => A });
      var s = i(9713),
        n = i(8104);
      function r(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var o = i(5252),
        a = i(3735),
        l = i(2027);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        d = [o.u, a.B, l.V],
        c = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = c(t);
        if (
          ((0, n.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - s;
                (n = r(l, s, t + 1 / 3)),
                  (o = r(l, s, t)),
                  (a = r(l, s, t - 1 / 3));
              } else n = o = a = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          n = p(e);
        if (!i || !n) return u(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = h(i.red, n.red, t)),
          (r.green = h(i.green, n.green, t)),
          (r.blue = h(i.blue, n.blue, t)),
          (r.alpha = (0, s.k)(i.alpha, n.alpha, t)),
          a.B.transform(r)
        );
      };
      var m = i(1339),
        v = i(7739),
        y = i(615),
        g = i(568);
      let x = new Set(["none", "hidden"]);
      function S(t, e) {
        return (i) => (0, s.k)(t, e, i);
      }
      function b(t) {
        return "number" == typeof t
          ? S
          : "string" == typeof t
          ? (0, g.p)(t)
            ? u
            : v.y.test(t)
            ? f
            : w
          : Array.isArray(t)
          ? P
          : "object" == typeof t
          ? v.y.test(t)
            ? f
            : T
          : u;
      }
      function P(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => b(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function T(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = b(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let w = (t, e) => {
        let i = y.f.createTransformer(e),
          s = (0, y.V)(t),
          r = (0, y.V)(e);
        return s.indexes.var.length === r.indexes.var.length &&
          s.indexes.color.length === r.indexes.color.length &&
          s.indexes.number.length >= r.indexes.number.length
          ? (x.has(t) && !r.values.length) || (x.has(e) && !s.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, m.F)(
                P(
                  (function (t, e) {
                    var i;
                    let s = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[r] = l), n[o]++;
                    }
                    return s;
                  })(s, r),
                  r.values
                ),
                i
              )
          : ((0, n.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, s.k)(t, e, i)
          : b(t)(t, e);
      }
    },
    9713: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => s });
      let s = (t, e, i) => t + (e - t) * i;
    },
    1339: (t, e, i) => {
      "use strict";
      i.d(e, { F: () => n });
      let s = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(s);
    },
    2606: (t, e, i) => {
      "use strict";
      i.d(e, { v: () => n });
      var s = i(2358);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, s.Kq)(this.subscriptions, t),
            () => (0, s.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    8601: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => n });
      var s = i(6540);
      function n(t) {
        let e = (0, s.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9652: (t, e, i) => {
      "use strict";
      i.d(e, { d: () => s });
      let s = { current: !1 };
    },
    5128: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => n });
      var s = i(6540);
      let n = i(8288).B ? s.useLayoutEffect : s.useEffect;
    },
    7177: (t, e, i) => {
      "use strict";
      function s(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, { f: () => s });
    },
    4785: (t, e, i) => {
      "use strict";
      i.d(e, { OQ: () => h, bt: () => l });
      var s = i(4582),
        n = i(2606),
        r = i(7177),
        o = i(104);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.16.4"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.k.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5252: (t, e, i) => {
      "use strict";
      i.d(e, { u: () => n });
      var s = i(3735);
      let n = {
        test: (0, i(8521).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            s = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (s = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (s = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (s += s),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(s, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: s.B.transform,
      };
    },
    2027: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => a });
      var s = i(2944),
        n = i(5269),
        r = i(6046),
        o = i(8521);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.KN.transform((0, r.a)(e)) +
          ", " +
          n.KN.transform((0, r.a)(i)) +
          ", " +
          (0, r.a)(s.X4.transform(o)) +
          ")",
      };
    },
    7739: (t, e, i) => {
      "use strict";
      i.d(e, { y: () => o });
      var s = i(5252),
        n = i(2027),
        r = i(3735);
      let o = {
        test: (t) => r.B.test(t) || s.u.test(t) || n.V.test(t),
        parse: (t) =>
          r.B.test(t)
            ? r.B.parse(t)
            : n.V.test(t)
            ? n.V.parse(t)
            : s.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? r.B.transform(t)
            : n.V.transform(t),
      };
    },
    3735: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => u });
      var s = i(2464),
        n = i(2944),
        r = i(6046),
        o = i(8521);
      let a = (t) => (0, s.q)(0, 255, t),
        l = { ...n.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, r.a)(n.X4.transform(s)) +
            ")",
        };
    },
    8521: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => r, q: () => o });
      var s = i(849);
      let n =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        r = (t, e) => (i) =>
          !!(
            ("string" == typeof i && n.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        o = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, o, a, l] = n.match(s.S);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    615: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => h, f: () => f });
      var s = i(7739);
      let n =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var r = i(849),
        o = i(6046);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                s.y.test(t)
                  ? (n.color.push(o), r.push(l), i.push(s.y.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(o), r.push("var"), i.push(t))
                  : (n.number.push(o), r.push(a), i.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: n, types: r };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: i } = h(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let u = 0; u < n; u++)
            if (((r += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === a
                ? (r += (0, o.a)(t[u]))
                : e === l
                ? (r += s.y.transform(t[u]))
                : (r += t[u]);
            }
          return r;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        f = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(r.S)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(n)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    2944: (t, e, i) => {
      "use strict";
      i.d(e, { X4: () => r, ai: () => n, hs: () => o });
      var s = i(2464);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        r = { ...n, transform: (t) => (0, s.q)(0, 1, t) },
        o = { ...n, default: 1 };
    },
    5269: (t, e, i) => {
      "use strict";
      i.d(e, {
        KN: () => r,
        gQ: () => u,
        px: () => o,
        uj: () => n,
        vh: () => a,
        vw: () => l,
      });
      let s = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        n = s("deg"),
        r = s("%"),
        o = s("px"),
        a = s("vh"),
        l = s("vw"),
        u = {
          ...r,
          parse: (t) => r.parse(t) / 100,
          transform: (t) => r.transform(100 * t),
        };
    },
    849: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => s });
      let s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    6046: (t, e, i) => {
      "use strict";
      i.d(e, { a: () => s });
      let s = (t) => Math.round(1e5 * t) / 1e5;
    },
    9896: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => s });
      let s = (t) => !!(t && t.getVelocity);
    },
    3033: (t, e, i) => {
      "use strict";
      i.d(e, {
        P6: () => o,
        vG: () => d,
        tu: () => u,
        KZ: () => v,
        rU: () => a,
        PT: () => T,
        DW: () => c,
        WH: () => h,
        Mc: () => A,
        yL: () => y,
        TU: () =>
          function t(e, i) {
            if (e)
              return "function" == typeof e && f()
                ? v(e, i)
                : c(e)
                ? g(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, i) || x.easeOut)
                : x[e];
          },
        YE: () => l,
        c$: () => j,
        Wp: () => D,
        nL: () => f,
      });
      var s = i(4435);
      let n = (0, s.p)(() => void 0 !== window.ScrollTimeline);
      class r {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            n() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
              ? e(i)
              : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class o extends r {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function a(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < l; ) (e += 50), (i = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function h(t) {
        return "function" == typeof t;
      }
      function d(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let c = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        f = (function (t, e) {
          let i = (0, s.p)(t);
          return () => {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = i(6896);
      let v = (t, e, i = 10) => {
        let s = "",
          n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++) s += t((0, m.q)(0, n - 1, e)) + ", ";
        return `linear(${s.substring(0, s.length - 2)})`;
      };
      function y(t) {
        return !!(
          ("function" == typeof t && f()) ||
          !t ||
          ("string" == typeof t && (t in x || f())) ||
          c(t) ||
          (Array.isArray(t) && t.every(y))
        );
      }
      let g = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        x = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: g([0, 0.65, 0.55, 1]),
          circOut: g([0.55, 0, 1, 0.45]),
          backIn: g([0.31, 0.01, 0.66, -0.59]),
          backOut: g([0.33, 1.53, 0.69, 0.99]),
        },
        S = { x: !1, y: !1 };
      function b(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          s = new AbortController();
        return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
      }
      function P(t) {
        return (e) => {
          "touch" === e.pointerType || S.x || S.y || t(e);
        };
      }
      function T(t, e, i = {}) {
        let [s, n, r] = b(t, i),
          o = P((t) => {
            let { target: i } = t,
              s = e(t);
            if ("function" != typeof s || !i) return;
            let r = P((t) => {
              s(t), i.removeEventListener("pointerleave", r);
            });
            i.addEventListener("pointerleave", r, n);
          });
        return (
          s.forEach((t) => {
            t.addEventListener("pointerenter", o, n);
          }),
          r
        );
      }
      let w = (t, e) => !!e && (t === e || w(t, e.parentElement)),
        A = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        C = new WeakSet();
      function V(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function M(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let k = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let s = V(() => {
          if (C.has(i)) return;
          M(i, "down");
          let t = V(() => {
            M(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => M(i, "cancel"), e);
        });
        i.addEventListener("keydown", s, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", s),
            e
          );
      };
      function R(t) {
        return A(t) && !(S.x || S.y);
      }
      function j(t, e, i = {}) {
        let [s, n, r] = b(t, i),
          o = (t) => {
            let s = t.currentTarget;
            if (!R(t) || C.has(s)) return;
            C.add(s);
            let r = e(t),
              o = (t, e) => {
                window.removeEventListener("pointerup", a),
                  window.removeEventListener("pointercancel", l),
                  R(t) &&
                    C.has(s) &&
                    (C.delete(s),
                    "function" == typeof r && r(t, { success: e }));
              },
              a = (t) => {
                o(t, i.useGlobalTarget || w(s, t.target));
              },
              l = (t) => {
                o(t, !1);
              };
            window.addEventListener("pointerup", a, n),
              window.addEventListener("pointercancel", l, n);
          };
        return (
          s.forEach((t) => {
            E.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (i.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                o,
                n
              ),
              t.addEventListener("focus", (t) => k(t, n), n);
          }),
          r
        );
      }
      function D(t) {
        return "x" === t || "y" === t
          ? S[t]
            ? null
            : ((S[t] = !0),
              () => {
                S[t] = !1;
              })
          : S.x || S.y
          ? null
          : ((S.x = S.y = !0),
            () => {
              S.x = S.y = !1;
            });
      }
      i(7331), i(1533);
    },
    8104: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => n, V: () => r });
      var s = i(1533);
      let n = s.l,
        r = s.l;
    },
    4435: (t, e, i) => {
      "use strict";
      function s(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, { p: () => s });
    },
    1533: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => s });
      let s = (t) => t;
    },
    6896: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => s });
      let s = (t, e, i) => {
        let s = e - t;
        return 0 === s ? 1 : (i - t) / s;
      };
    },
    7331: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => n, f: () => s });
      let s = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
  },
]);
