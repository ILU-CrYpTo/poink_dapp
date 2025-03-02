"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [477],
  {
    6297: (e, t, r) => {
      r.d(t, { N: () => x });
      var n = r(4848),
        u = r(6540),
        s = r(6719),
        i = r(8601),
        o = r(5446);
      class l extends u.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({ children: e, isPresent: t }) {
        let r = (0, u.useId)(),
          s = (0, u.useRef)(null),
          i = (0, u.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, u.useContext)(o.Q);
        return (
          (0, u.useInsertionEffect)(() => {
            let { width: e, height: n, top: u, left: o } = i.current;
            if (t || !s.current || !e || !n) return;
            s.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              c && (l.nonce = c),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${u}px !important;
            left: ${o}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          (0, n.jsx)(l, {
            isPresent: t,
            childRef: s,
            sizeRef: i,
            children: u.cloneElement(e, { ref: s }),
          })
        );
      }
      let f = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: o,
        custom: l,
        presenceAffectsLayout: f,
        mode: p,
      }) => {
        let d = (0, i.M)(a),
          h = (0, u.useId)(),
          m = (0, u.useCallback)(
            (e) => {
              for (let t of (d.set(e, !0), d.values())) if (!t) return;
              o && o();
            },
            [d, o]
          ),
          g = (0, u.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: r,
              custom: l,
              onExitComplete: m,
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            f ? [Math.random(), m] : [r, m]
          );
        return (
          (0, u.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [r]),
          u.useEffect(() => {
            r || d.size || !o || o();
          }, [r]),
          "popLayout" === p &&
            (e = (0, n.jsx)(c, { isPresent: r, children: e })),
          (0, n.jsx)(s.t.Provider, { value: g, children: e })
        );
      };
      function a() {
        return new Map();
      }
      var p = r(9473),
        d = r(8104);
      let h = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          u.Children.forEach(e, (e) => {
            (0, u.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var g = r(5128);
      let x = ({
        children: e,
        exitBeforeEnter: t,
        custom: r,
        initial: s = !0,
        onExitComplete: o,
        presenceAffectsLayout: l = !0,
        mode: c = "sync",
      }) => {
        (0, d.V)(!t, "Replace exitBeforeEnter with mode='wait'");
        let a = (0, u.useMemo)(() => m(e), [e]),
          x = a.map(h),
          v = (0, u.useRef)(!0),
          E = (0, u.useRef)(a),
          y = (0, i.M)(() => new Map()),
          [R, C] = (0, u.useState)(a),
          [w, M] = (0, u.useState)(a);
        (0, g.E)(() => {
          (v.current = !1), (E.current = a);
          for (let e = 0; e < w.length; e++) {
            let t = h(w[e]);
            x.includes(t) ? y.delete(t) : !0 !== y.get(t) && y.set(t, !1);
          }
        }, [w, x.length, x.join("-")]);
        let b = [];
        if (a !== R) {
          let e = [...a];
          for (let t = 0; t < w.length; t++) {
            let r = w[t],
              n = h(r);
            x.includes(n) || (e.splice(t, 0, r), b.push(r));
          }
          "wait" === c && b.length && (e = b), M(m(e)), C(a);
          return;
        }
        let { forceRender: S } = (0, u.useContext)(p.L);
        return (0, n.jsx)(n.Fragment, {
          children: w.map((e) => {
            let t = h(e),
              u = a === w || x.includes(t);
            return (0, n.jsx)(
              f,
              {
                isPresent: u,
                initial: (!v.current || !!s) && void 0,
                custom: u ? void 0 : r,
                presenceAffectsLayout: l,
                mode: c,
                onExitComplete: u
                  ? void 0
                  : () => {
                      if (!y.has(t)) return;
                      y.set(t, !0);
                      let e = !0;
                      y.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == S || S(), M(E.current), o && o());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    3295: (e, t, r) => {
      r.d(t, { d: () => o });
      var n = r(6540),
        u = r(4785),
        s = r(5446),
        i = r(8601);
      function o(e) {
        let t = (0, i.M)(() => (0, u.OQ)(e)),
          { isStatic: r } = (0, n.useContext)(s.Q);
        if (r) {
          let [, r] = (0, n.useState)(e);
          (0, n.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
    9462: (e, t, r) => {
      r.d(t, { z: () => a });
      var n = r(6540),
        u = r(2348),
        s = r(5446),
        i = r(5128),
        o = r(3295),
        l = r(9896),
        c = r(104);
      function f(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function a(e, t = {}) {
        let { isStatic: r } = (0, n.useContext)(s.Q),
          p = (0, n.useRef)(null),
          d = (0, o.d)((0, l.S)(e) ? f(e.get()) : e),
          h = (0, n.useRef)(d.get()),
          m = (0, n.useRef)(() => {}),
          g = () => {
            let e = p.current;
            e && 0 === e.time && e.sample(c.uv.delta),
              x(),
              (p.current = (0, u.L)({
                keyframes: [d.get(), h.current],
                velocity: d.getVelocity(),
                type: "spring",
                restDelta: 0.001,
                restSpeed: 0.01,
                ...t,
                onUpdate: m.current,
              }));
          },
          x = () => {
            p.current && p.current.stop();
          };
        return (
          (0, n.useInsertionEffect)(
            () =>
              d.attach(
                (e, t) =>
                  r
                    ? t(e)
                    : ((h.current = e),
                      (m.current = t),
                      c.Gt.update(g),
                      d.get()),
                x
              ),
            [JSON.stringify(t)]
          ),
          (0, i.E)(() => {
            if ((0, l.S)(e)) return e.on("change", (e) => d.set(f(e)));
          }, [d]),
          d
        );
      }
    },
    3296: (e, t, r) => {
      r.d(t, { G: () => p });
      var n = r(8844);
      let u = (e) => e && "object" == typeof e && e.mix,
        s = (e) => (u(e) ? e.mix : void 0);
      var i = r(3295),
        o = r(5128),
        l = r(104);
      function c(e, t) {
        let r = (0, i.d)(t()),
          n = () => r.set(t());
        return (
          n(),
          (0, o.E)(() => {
            let t = () => l.Gt.preRender(n, !1, !0),
              r = e.map((e) => e.on("change", t));
            return () => {
              r.forEach((e) => e()), (0, l.WG)(n);
            };
          }),
          r
        );
      }
      var f = r(8601),
        a = r(4785);
      function p(e, t, r, u) {
        if ("function" == typeof e)
          return (function (e) {
            (a.bt.current = []), e();
            let t = c(a.bt.current, e);
            return (a.bt.current = void 0), t;
          })(e);
        let i =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  r = t ? 0 : -1,
                  u = e[0 + r],
                  i = e[1 + r],
                  o = e[2 + r],
                  l = e[3 + r],
                  c = (0, n.G)(i, o, { mixer: s(o[0]), ...l });
                return t ? c(u) : c;
              })(t, r, u);
        return Array.isArray(e) ? d(e, i) : d([e], ([e]) => i(e));
      }
      function d(e, t) {
        let r = (0, f.M)(() => []);
        return c(e, () => {
          r.length = 0;
          let n = e.length;
          for (let t = 0; t < n; t++) r[t] = e[t].get();
          return t(r);
        });
      }
    },
  },
]);
