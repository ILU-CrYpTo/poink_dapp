(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [122],
  {
    1122: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { __N_SSP: () => j, default: () => y });
      var s = a(4848),
        n = a(5703),
        c = a.n(n),
        i = a(3368),
        o = a.n(i),
        r = a(9965),
        l = a.n(r),
        d = a(3295),
        p = a(9462),
        m = a(3296),
        f = a(6297),
        h = a(8174),
        x = a(6540),
        u = a(1106),
        b = a.n(u),
        w = a(6715);
      let g = {
        monad: {
          name: "Monad",
          icon: "/monad.png",
          apps: [
            {
              name: "NadFun",
              icon: "/nadfunlogo.svg",
              baseUrl: "https://devnet.nad.fun/",
              description: "pumpfun on monad",
            },
            {
              name: "Break Monad",
              icon: "/monad.png",
              baseUrl: "https://devnet.nad.fun/",
              description:
                "Click to send transactions. Mint an NFT representative of you trying to break devnet.",
            },
            {
              name: "PurgeNad",
              icon: "/purgenad.png",
              baseUrl: "https://purgednads.vercel.app/",
              description: "interactive game with NFT mint",
            },
            {
              name: "NadRunner",
              icon: "/monad.png",
              baseUrl: "https://nadrunner.vercel.app/",
              description: "Endless runner game",
            },
            {
              name: "YapMonad",
              icon: "/monad.png",
              baseUrl: "https://yapmonad.xyz/",
              description: "yapping game with a twist",
            },
            {
              name: "GMonad",
              icon: "/monad.png",
              baseUrl: "https://gmonad.club/",
              description: "clicker game",
            },
          ],
        },
        ethereum: {
          name: "Solana",
          icon: "/eth.png",
          apps: [
            {
              name: "Uniswap",
              icon: "/uni.png",
              baseUrl: "https://app.uniswap.org/#/swap",
              description: "Decentralized trading protocol",
              params: {
                type: "query",
                inputParam: "inputCurrency",
                outputParam: "outputCurrency",
                defaultInput: "ETH",
              },
            },
            {
              name: "CoW Swap",
              icon: "/cow.png",
              baseUrl: "https://swap.cow.fi",
              description: "MEV-protected DEX aggregator",
              params: { type: "path", format: "/#/1/swap/ETH/{output}" },
            },
          ],
        },
      };
      var j = !0;
      function y(e) {
        let { timestamp: t, initialChain: a } = e,
          [n, i] = (0, x.useState)(a),
          [r, u] = (0, x.useState)(null),
          [j, y] = (0, x.useState)(null),
          [v, N] = (0, x.useState)({}),
          [k, P] = (0, x.useState)({}),
          [C, U] = (0, x.useState)({}),
          T = { stiffness: 100, damping: 5 },
          S = (0, d.d)(0),
          E = (0, p.z)((0, m.G)(S, [-100, 100], [-45, 45]), T),
          M = (0, p.z)((0, m.G)(S, [-100, 100], [-50, 50]), T),
          A = (e) => {
            let t = e.currentTarget.offsetWidth / 2;
            S.set(e.nativeEvent.offsetX - t);
          },
          z = {
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          },
          H = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
          I = (e) => v[e.name] || e.baseUrl,
          _ = (0, w.useRouter)();
        return (0, s.jsxs)("div", {
          className: "jsx-efb07ffc25e8cd07 bg-black min-h-screen",
          children: [
            (0, s.jsxs)(o(), {
              children: [
                (0, s.jsx)("meta", {
                  charSet: "utf-8",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width,initial-scale=1",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("title", {
                  className: "jsx-efb07ffc25e8cd07",
                  children: n
                    ? "".concat(
                        n.charAt(0).toUpperCase() + n.slice(1),
                        " Apps - Poink"
                      )
                    : "Poink App Store",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:card",
                  content: "player",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:site",
                  content: "https://x.com/ethereum",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:title",
                  content: n
                    ? "".concat(
                        n.charAt(0).toUpperCase() + n.slice(1),
                        " Apps - Poink"
                      )
                    : "Poink App Store",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:description",
                  content: n
                    ? "Discover ".concat(
                        n.charAt(0).toUpperCase() + n.slice(1),
                        " Web3 Apps"
                      )
                    : "Discover Web3 Apps",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:player",
                  content: "https://app.poink.xyz"
                    .concat(n ? "/".concat(n) : "", "?t=")
                    .concat(t),
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:player:width",
                  content: "360",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:player:height",
                  content: "560",
                  className: "jsx-efb07ffc25e8cd07",
                }),
                (0, s.jsx)("meta", {
                  name: "twitter:image",
                  content:
                    "https://avatars.githubusercontent.com/u/194240984?s=200&v=4",
                  className: "jsx-efb07ffc25e8cd07",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "jsx-efb07ffc25e8cd07 container mx-auto px-4 py-6 max-w-md",
              children: (0, s.jsx)(f.N, {
                mode: "wait",
                children: n
                  ? (0, s.jsxs)(h.P.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className: "space-y-6",
                      children: [
                        !a &&
                          (0, s.jsxs)(h.P.button, {
                            onClick: () => _.push("/"),
                            className:
                              "text-white/80 hover:text-white flex items-center gap-2",
                            whileHover: { x: -5 },
                            whileTap: { scale: 0.95 },
                            children: [
                              (0, s.jsx)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-efb07ffc25e8cd07 w-5 h-5",
                                children: (0, s.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 19l-7-7 7-7",
                                  className: "jsx-efb07ffc25e8cd07",
                                }),
                              }),
                              (0, s.jsx)("span", {
                                className: "jsx-efb07ffc25e8cd07",
                                children: "Back",
                              }),
                            ],
                          }),
                        (0, s.jsx)(h.P.div, {
                          variants: z,
                          initial: "hidden",
                          animate: "show",
                          className: "grid grid-cols-3 gap-4",
                          children: g[n].apps.map((e, a) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                onMouseEnter: () => u(a),
                                onMouseLeave: () => u(null),
                                className:
                                  "jsx-efb07ffc25e8cd07 relative group",
                                children: [
                                  (0, s.jsxs)(b(), {
                                    href: "/embed?url="
                                      .concat(
                                        encodeURIComponent(I(e)),
                                        "&chain="
                                      )
                                      .concat(n, "&t=")
                                      .concat(t),
                                    className:
                                      "group flex flex-col items-center",
                                    children: [
                                      (0, s.jsx)(h.P.div, {
                                        className: "relative w-16 h-16 mb-2",
                                        whileHover: {
                                          y: -5,
                                          scale: 1.1,
                                          transition: {
                                            type: "spring",
                                            stiffness: 300,
                                          },
                                        },
                                        whileTap: { scale: 0.9 },
                                        onMouseMove: A,
                                        children: (0, s.jsx)(l(), {
                                          src: e.icon,
                                          alt: e.name,
                                          fill: !0,
                                          className:
                                            "rounded-2xl object-cover shadow-lg group-hover:shadow-white/20 transition-all duration-300",
                                        }),
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "jsx-efb07ffc25e8cd07 text-white/80 text-xs text-center group-hover:text-white",
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(f.N, {
                                    mode: "popLayout",
                                    children:
                                      r === a &&
                                      (0, s.jsx)(h.P.div, {
                                        initial: {
                                          opacity: 0,
                                          y: -20,
                                          scale: 0.6,
                                        },
                                        animate: {
                                          opacity: 1,
                                          y: 0,
                                          scale: 1,
                                          transition: {
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20,
                                            duration: 0.3,
                                          },
                                        },
                                        exit: {
                                          opacity: 0,
                                          y: -20,
                                          scale: 0.6,
                                          transition: {
                                            duration: 0.2,
                                            ease: "easeOut",
                                          },
                                        },
                                        style: { translateX: M, rotate: E },
                                        className:
                                          "absolute top-full left-[40%] -translate-x-1/2 flex text-xs flex-col  items-center justify-center rounded-xl bg-black/30 backdrop-blur-md  z-50 shadow-2xl border border-white/5 p-3 min-w-[180px] max-w-[200px] mt-2 before:absolute before:inset-0 before:rounded-xl  before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-50",
                                        children: (0, s.jsxs)("div", {
                                          className:
                                            "jsx-efb07ffc25e8cd07 relative z-30 space-y-2 w-full",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "jsx-efb07ffc25e8cd07 text-center space-y-1",
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "jsx-efb07ffc25e8cd07 font-medium text-white/90",
                                                  children: e.name,
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "jsx-efb07ffc25e8cd07 text-white/50 text-[10px] break-words",
                                                  children: e.description,
                                                }),
                                              ],
                                            }),
                                            e.params &&
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "jsx-efb07ffc25e8cd07 space-y-2",
                                                children: [
                                                  (0, s.jsx)("input", {
                                                    type: "text",
                                                    placeholder:
                                                      "Token Contract Address (0x...)",
                                                    value: k[e.name] || "",
                                                    onChange: (a) => {
                                                      let s;
                                                      let c = a.target.value;
                                                      P((t) => ({
                                                        ...t,
                                                        [e.name]: c,
                                                      })),
                                                        "query" ===
                                                        e.params.type
                                                          ? (s = ""
                                                              .concat(
                                                                e.baseUrl,
                                                                "?"
                                                              )
                                                              .concat(
                                                                e.params
                                                                  .inputParam,
                                                                "="
                                                              )
                                                              .concat(
                                                                e.params
                                                                  .defaultInput,
                                                                "&"
                                                              )
                                                              .concat(
                                                                e.params
                                                                  .outputParam,
                                                                "="
                                                              )
                                                              .concat(c))
                                                          : "path" ===
                                                              e.params.type &&
                                                            (e.name,
                                                            (s =
                                                              e.baseUrl +
                                                              e.params.format.replace(
                                                                "{output}",
                                                                c
                                                              ))),
                                                        s &&
                                                          (N((t) => ({
                                                            ...t,
                                                            [e.name]: s,
                                                          })),
                                                          y(
                                                            "https://poink-main.vercel.app/embed?url="
                                                              .concat(
                                                                encodeURIComponent(
                                                                  s
                                                                ),
                                                                "&chain="
                                                              )
                                                              .concat(n, "&t=")
                                                              .concat(t)
                                                          ));
                                                    },
                                                    className:
                                                      "jsx-efb07ffc25e8cd07 w-full bg-black/20 border border-white/10 rounded-lg px-2.5 py-1 text-[10px] text-white/90 focus:outline-none focus:border-white/20 placeholder:text-white/30",
                                                  }),
                                                  (0, s.jsxs)("div", {
                                                    className:
                                                      "jsx-efb07ffc25e8cd07 relative group",
                                                    children: [
                                                      (0, s.jsx)(h.P.button, {
                                                        whileHover: {
                                                          scale: 1.02,
                                                        },
                                                        whileTap: {
                                                          scale: 0.98,
                                                        },
                                                        className:
                                                          "w-full bg-gradient-to-r from-emerald-500/20 to-sky-500/20 hover:from-emerald-500/30 hover:to-sky-500/30 border border-white/10 rounded-lg py-1 px-3 text-[11px] text-white/90 font-medium transition-all shadow-lg shadow-black/20",
                                                        onClick: async () => {
                                                          if (j)
                                                            try {
                                                              await navigator.clipboard.writeText(
                                                                j
                                                              ),
                                                                U((t) => ({
                                                                  ...t,
                                                                  [e.name]: !0,
                                                                })),
                                                                setTimeout(
                                                                  () => {
                                                                    U((t) => ({
                                                                      ...t,
                                                                      [e.name]:
                                                                        !1,
                                                                    }));
                                                                  },
                                                                  2e3
                                                                );
                                                            } catch (a) {
                                                              let t =
                                                                document.createElement(
                                                                  "textarea"
                                                                );
                                                              (t.value = j),
                                                                (t.style.position =
                                                                  "fixed"),
                                                                document.body.appendChild(
                                                                  t
                                                                ),
                                                                t.focus(),
                                                                t.select();
                                                              try {
                                                                document.execCommand(
                                                                  "copy"
                                                                ),
                                                                  t.remove(),
                                                                  U((t) => ({
                                                                    ...t,
                                                                    [e.name]:
                                                                      !0,
                                                                  })),
                                                                  setTimeout(
                                                                    () => {
                                                                      U(
                                                                        (
                                                                          t
                                                                        ) => ({
                                                                          ...t,
                                                                          [e.name]:
                                                                            !1,
                                                                        })
                                                                      );
                                                                    },
                                                                    2e3
                                                                  );
                                                              } catch (e) {
                                                                console.error(
                                                                  "Failed to copy:",
                                                                  e
                                                                );
                                                              }
                                                            }
                                                        },
                                                        children: j
                                                          ? C[e.name]
                                                            ? "Copied!"
                                                            : "Copy"
                                                          : "Poink",
                                                      }),
                                                      j &&
                                                        (0, s.jsx)(h.P.div, {
                                                          initial: {
                                                            opacity: 0,
                                                            scale: 0.9,
                                                          },
                                                          animate: {
                                                            opacity: 1,
                                                            scale: 1,
                                                          },
                                                          className:
                                                            "absolute -right-1 -top-1 w-2 h-2 rounded-full  bg-gradient-to-r from-emerald-500 to-sky-500",
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      }),
                                  }),
                                ],
                              },
                              e.name
                            )
                          ),
                        }),
                      ],
                    })
                  : (0, s.jsxs)(h.P.div, {
                      variants: z,
                      initial: "hidden",
                      animate: "show",
                      exit: { opacity: 0, y: -20 },
                      className: "space-y-8",
                      children: [
                        (0, s.jsx)(h.P.div, {
                          className: "w-16 h-16 mx-auto",
                          animate: {
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                          },
                          transition: {
                            duration: 4,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          children: (0, s.jsx)(l(), {
                            src: "/logodark.png",
                            alt: "Poink",
                            width: 64,
                            height: 64,
                            className: "rounded-full",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "jsx-efb07ffc25e8cd07 grid grid-cols-2 gap-4",
                          children: Object.entries(g).map((e) => {
                            let [t, a] = e;
                            return (0, s.jsxs)(
                              h.P.button,
                              {
                                variants: H,
                                onClick: () => {
                                  _.push("/".concat(t));
                                },
                                className:
                                  "group flex flex-col items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300",
                                whileHover: { y: -5 },
                                whileTap: { scale: 0.95 },
                                children: [
                                  (0, s.jsx)(h.P.div, {
                                    className: "relative w-16 h-16 mb-3",
                                    whileHover: { rotate: 360 },
                                    transition: { duration: 0.5 },
                                    children: (0, s.jsx)(l(), {
                                      src: a.icon,
                                      alt: a.name,
                                      fill: !0,
                                      className: "rounded-2xl object-cover",
                                    }),
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "jsx-efb07ffc25e8cd07 text-white font-medium",
                                    children: a.name,
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            (0, s.jsx)(c(), {
              id: "efb07ffc25e8cd07",
              children:
                '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");body{font-family:"Inter",sans-serif;margin:0;padding:0;background:black;-webkit-font-smoothing:antialiased}',
            }),
          ],
        });
      }
    },
    6715: (e, t, a) => {
      e.exports = a(8440);
    },
  },
]);
