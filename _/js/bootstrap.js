! function(e, t) {
    function n(e) {
        var t = e.length,
            n = ot.type(e);
        return ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = ht[e] = {};
        return ot.each(e.match(at) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function i() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = ot.expando + Math.random()
    }

    function o(e, n, r) {
        var i;
        if (r === t && 1 === e.nodeType)
            if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : yt.test(r) ? JSON.parse(r) : r
                } catch (o) {}
                gt.set(e, n, r)
            } else r = t;
        return r
    }

    function s() {
        return !0
    }

    function a() {
        return !1
    }

    function u() {
        try {
            return X.activeElement
        } catch (e) {}
    }

    function l(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function c(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ot.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (jt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e, function(e) {
            return tt.call(t, e) >= 0 !== n
        })
    }

    function f(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function d(e) {
        var t = Wt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function h(e, t) {
        for (var n = e.length, r = 0; n > r; r++) mt.set(e[r], "globalEval", !t || mt.get(t[r], "globalEval"))
    }

    function g(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (mt.hasData(e) && (o = mt.access(e), s = mt.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) ot.event.add(t, i, l[i][n])
            }
            gt.hasData(e) && (a = gt.access(e), u = ot.extend({}, a), gt.set(t, u))
        }
    }

    function m(e, n) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
        return n === t || n && ot.nodeName(e, n) ? ot.merge([e], r) : r
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Pt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function v(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Zt.length; i--;)
            if (t = Zt[i] + n, t in e) return t;
        return r
    }

    function x(e, t) {
        return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    }

    function b(t) {
        return e.getComputedStyle(t, null)
    }

    function w(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = mt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && x(r) && (o[s] = mt.access(r, "olddisplay", k(r.nodeName)))) : o[s] || (i = x(r), (n && "none" !== n || !i) && mt.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function T(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(e, n + Kt[o], !0, i)), r ? ("content" === n && (s -= ot.css(e, "padding" + Kt[o], !0, i)), "margin" !== n && (s -= ot.css(e, "border" + Kt[o] + "Width", !0, i))) : (s += ot.css(e, "padding" + Kt[o], !0, i), "padding" !== n && (s += ot.css(e, "border" + Kt[o] + "Width", !0, i)));
        return s
    }

    function N(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = b(e),
            s = ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = It(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = s && (ot.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function k(e) {
        var t = X,
            n = Gt[e];
        return n || (n = E(e, t), "none" !== n && n || (zt = (zt || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (zt[0].contentWindow || zt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), zt.detach()), Gt[e] = n), n
    }

    function E(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body),
            r = ot.css(n[0], "display");
        return n.remove(), r
    }

    function S(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t, function(t, i) {
            n || tn.test(e) ? r(e, i) : S(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ot.type(t)) r(e, t);
        else
            for (i in t) S(e + "[" + i + "]", t[i], n, r)
    }

    function j(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(at) || [];
            if (ot.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, ot.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === xn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function A(e, n) {
        var r, i, o = ot.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ot.extend(!0, e, i), e
    }

    function L(e, n, r) {
        for (var i, o, s, a, u = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in r) s = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== l[0] && l.unshift(s), r[s]) : void 0
    }

    function q(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function H() {
        return setTimeout(function() {
            jn = t
        }), jn = ot.now()
    }

    function O(e, t, n) {
        for (var r, i = (On[t] || []).concat(On["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o = 0,
            s = Hn.length,
            a = ot.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = jn || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: ot.extend({}, t),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: jn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (P(c, l.opts.specialEasing); s > o; o++)
            if (r = Hn[o].call(l, e, c, l.opts)) return r;
        return ot.map(c, O, l), ot.isFunction(l.opts.start) && l.opts.start.call(e, l), ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ot.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, n, r) {
        var i, o, s, a, u, l, c = this,
            f = {},
            p = e.style,
            d = e.nodeType && x(e),
            h = mt.get(e, "fxshow");
        r.queue || (u = ot._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, l = u.empty.fire, u.empty.fire = function() {
            u.unqueued || l()
        }), u.unqueued++, c.always(function() {
            c.always(function() {
                u.unqueued--, ot.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ot.css(e, "display") && "none" === ot.css(e, "float") && (p.display = "inline-block")), r.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = r.overflow[0], p.overflowX = r.overflow[1], p.overflowY = r.overflow[2]
        }));
        for (i in n)
            if (o = n[i], An.exec(o)) {
                if (delete n[i], s = s || "toggle" === o, o === (d ? "hide" : "show")) {
                    if ("show" !== o || !h || h[i] === t) continue;
                    d = !0
                }
                f[i] = h && h[i] || ot.style(e, i)
            }
        if (!ot.isEmptyObject(f)) {
            h ? "hidden" in h && (d = h.hidden) : h = mt.access(e, "fxshow", {}), s && (h.hidden = !d), d ? ot(e).show() : c.done(function() {
                ot(e).hide()
            }), c.done(function() {
                var t;
                mt.remove(e, "fxshow");
                for (t in f) ot.style(e, t, f[t])
            });
            for (i in f) a = O(d ? h[i] : 0, i, c), i in h || (h[i] = a.start, d && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i)
    }

    function W(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Kt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function $(e) {
        return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B, I, z = typeof t,
        _ = e.location,
        X = e.document,
        U = X.documentElement,
        Y = e.jQuery,
        V = e.$,
        G = {},
        J = [],
        Q = "2.0.3",
        K = J.concat,
        Z = J.push,
        et = J.slice,
        tt = J.indexOf,
        nt = G.toString,
        rt = G.hasOwnProperty,
        it = Q.trim,
        ot = function(e, t) {
            return new ot.fn.init(e, t, B)
        },
        st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        at = /\S+/g,
        ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        lt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ct = /^-ms-/,
        ft = /-([\da-z])/gi,
        pt = function(e, t) {
            return t.toUpperCase()
        },
        dt = function() {
            X.removeEventListener("DOMContentLoaded", dt, !1), e.removeEventListener("load", dt, !1), ot.ready()
        };
    ot.fn = ot.prototype = {
            jquery: Q,
            constructor: ot,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ut.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), lt.test(i[1]) && ot.isPlainObject(n))
                            for (i in n) ot.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    return o = X.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = X, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return et.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ot.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ot.each(this, e, t)
            },
            ready: function(e) {
                return ot.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(et.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ot.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: [].sort,
            splice: [].splice
        }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function() {
            var e, n, r, i, o, s, a = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, u = 2), "object" == typeof a || ot.isFunction(a) || (a = {}), l === u && (a = this, --u); l > u; u++)
                if (null != (e = arguments[u]))
                    for (n in e) r = a[n], i = e[n], a !== i && (c && i && (ot.isPlainObject(i) || (o = ot.isArray(i))) ? (o ? (o = !1, s = r && ot.isArray(r) ? r : []) : s = r && ot.isPlainObject(r) ? r : {}, a[n] = ot.extend(c, s, i)) : i !== t && (a[n] = i));
            return a
        }, ot.extend({
            expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === ot && (e.$ = V), t && e.jQuery === ot && (e.jQuery = Y), ot
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (I.resolveWith(X, [ot]), ot.fn.trigger && ot(X).trigger("ready").off("ready")))
            },
            isFunction: function(e) {
                return "function" === ot.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? G[nt.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
                try {
                    if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || X;
                var r = lt.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && ot(i).remove(), ot.merge([], r.childNodes))
            },
            parseJSON: JSON.parse,
            parseXML: function(e) {
                var n, r;
                if (!e || "string" != typeof e) return null;
                try {
                    r = new DOMParser, n = r.parseFromString(e, "text/xml")
                } catch (i) {
                    n = t
                }
                return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
            },
            noop: function() {},
            globalEval: function(e) {
                var t, n = eval;
                e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(ct, "ms-").replace(ft, pt)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e);
                if (r) {
                    if (a)
                        for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (a)
                    for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : it.call(e)
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : Z.call(r, e)), r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : tt.call(t, e, n)
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e),
                    u = [];
                if (a)
                    for (; s > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
                return K.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (r = e[n], n = e, e = r), ot.isFunction(e) ? (i = et.call(arguments, 2), o = function() {
                    return e.apply(n || this, i.concat(et.call(arguments)))
                }, o.guid = e.guid = e.guid || ot.guid++, o) : t
            },
            access: function(e, n, r, i, o, s, a) {
                var u = 0,
                    l = e.length,
                    c = null == r;
                if ("object" === ot.type(r)) {
                    o = !0;
                    for (u in r) ot.access(e, n, u, r[u], !0, s, a)
                } else if (i !== t && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(ot(e), n)
                    })), n))
                    for (; l > u; u++) n(e[u], r, a ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : s
            },
            now: Date.now,
            swap: function(e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            }
        }), ot.ready.promise = function(t) {
            return I || (I = ot.Deferred(), "complete" === X.readyState ? setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", dt, !1))), I.promise(t)
        }, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        }), B = ot(X),
        function(e, t) {
            function n(e, t, n, r) {
                var i, o, s, a, u, l, c, f, h, g;
                if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (O && !r) {
                    if (i = xt.exec(e))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (C.qsa && (!F || !F.test(e))) {
                        if (f = c = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (l = p(e), (c = t.getAttribute("id")) ? f = c.replace(Tt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + d(l[u]);
                            h = dt.test(e) && t.parentNode || t, g = l.join(",")
                        }
                        if (g) try {
                            return et.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return w(e.replace(ct, "$1"), t, n, r)
            }

            function r() {
                function e(n, r) {
                    return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[W] = !0, e
            }

            function o(e) {
                var t = q.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function f() {}

            function p(e, t) {
                var r, i, o, s, a, u, l, c = _[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, u = [], l = k.preFilter; a;) {
                    (!r || (i = ft.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = pt.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ct, " ")
                    }), a = a.slice(r.length));
                    for (s in k.filter) !(i = yt[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return t ? a.length : a ? n.error(e) : _(e, u).slice(0)
            }

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function h(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = I++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, s) {
                    var a, u, l, c = B + " " + o;
                    if (s) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (l = t[W] || (t[W] = {}), (u = l[r]) && u[0] === c) {
                                    if ((a = u[1]) === !0 || a === N) return a === !0
                                } else if (u = l[r] = [c], u[1] = e(t, n, s) || N, u[1] === !0) return !0
                }
            }

            function g(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
                return s
            }

            function y(e, t, n, r, o, s) {
                return r && !r[W] && (r = y(r)), o && !o[W] && (o = y(o, s)), i(function(i, s, a, u) {
                    var l, c, f, p = [],
                        d = [],
                        h = s.length,
                        g = i || b(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? g : m(g, p, e, a, u),
                        v = n ? o || (i ? e : h || r) ? [] : s : y;
                    if (n && n(y, v, a, u), r)
                        for (l = m(v, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (l = o ? nt.call(i, f) : p[c]) > -1 && (i[l] = !(s[l] = f))
                        }
                    } else v = m(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, u) : et.apply(s, v)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, u = h(function(e) {
                        return e === t
                    }, s, !0), l = h(function(e) {
                        return nt.call(t, e) > -1
                    }, s, !0), c = [function(e, n, r) {
                        return !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                    }]; i > a; a++)
                    if (n = k.relative[e[a].type]) c = [h(g(c), n)];
                    else {
                        if (n = k.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                            for (r = ++a; i > r && !k.relative[e[r].type]; r++);
                            return y(a > 1 && g(c), a > 1 && d(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ct, "$1"), n, r > a && v(e.slice(a, r)), i > r && v(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                return g(c)
            }

            function x(e, t) {
                var r = 0,
                    o = t.length > 0,
                    s = e.length > 0,
                    a = function(i, a, u, l, c) {
                        var f, p, d, h = [],
                            g = 0,
                            y = "0",
                            v = i && [],
                            x = null != c,
                            b = D,
                            w = i || s && k.find.TAG("*", c && a.parentNode || a),
                            T = B += null == b ? 1 : Math.random() || .1;
                        for (x && (D = a !== q && a, N = r); null != (f = w[y]); y++) {
                            if (s && f) {
                                for (p = 0; d = e[p++];)
                                    if (d(f, a, u)) {
                                        l.push(f);
                                        break
                                    }
                                x && (B = T, N = ++r)
                            }
                            o && ((f = !d && f) && g--, i && v.push(f))
                        }
                        if (g += y, o && y !== g) {
                            for (p = 0; d = t[p++];) d(v, h, a, u);
                            if (i) {
                                if (g > 0)
                                    for (; y--;) v[y] || h[y] || (h[y] = K.call(l));
                                h = m(h)
                            }
                            et.apply(l, h), x && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(l)
                        }
                        return x && (B = T, D = b), v
                    };
                return o ? i(a) : a
            }

            function b(e, t, r) {
                for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }

            function w(e, t, n, r) {
                var i, o, s, a, u, l = p(e);
                if (!r && 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === t.nodeType && O && k.relative[o[1].type]) {
                        if (t = (k.find.ID(s.matches[0].replace(Ct, Nt), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !k.relative[a = s.type]);)
                        if ((u = k.find[a]) && (r = u(s.matches[0].replace(Ct, Nt), dt.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return et.apply(n, r), n;
                            break
                        }
                }
                return j(e, l)(r, t, !O, n, dt.test(e)), n
            }
            var T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, R, M, W = "sizzle" + -new Date,
                $ = e.document,
                B = 0,
                I = 0,
                z = r(),
                _ = r(),
                X = r(),
                U = !1,
                Y = function(e, t) {
                    return e === t ? (U = !0, 0) : 0
                },
                V = typeof t,
                G = 1 << 31,
                J = {}.hasOwnProperty,
                Q = [],
                K = Q.pop,
                Z = Q.push,
                et = Q.push,
                tt = Q.slice,
                nt = Q.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = st.replace("w", "w#"),
                ut = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
                lt = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ut.replace(3, 8) + ")*)|.*)\\)|)",
                ct = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ft = new RegExp("^" + it + "*," + it + "*"),
                pt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp(it + "*[+~]"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
                gt = new RegExp(lt),
                mt = new RegExp("^" + at + "$"),
                yt = {
                    ID: new RegExp("^#(" + st + ")"),
                    CLASS: new RegExp("^\\.(" + st + ")"),
                    TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ut),
                    PSEUDO: new RegExp("^" + lt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + rt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                vt = /^[^{]+\{\s*\[native \w/,
                xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /^(?:input|select|textarea|button)$/i,
                wt = /^h\d$/i,
                Tt = /'|\\/g,
                Ct = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                Nt = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                et.apply(Q = tt.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
            } catch (kt) {
                et = {
                    apply: Q.length ? function(e, t) {
                        Z.apply(e, tt.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            S = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, C = n.support = {}, L = n.setDocument = function(e) {
                var t = e ? e.ownerDocument || e : $,
                    n = t.defaultView;
                return t !== q && 9 === t.nodeType && t.documentElement ? (q = t, H = t.documentElement, O = !S(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                    L()
                }), C.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), C.getElementsByTagName = o(function(e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), C.getById = o(function(e) {
                    return H.appendChild(e).id = W, !t.getElementsByName || !t.getElementsByName(W).length
                }), C.getById ? (k.find.ID = function(e, t) {
                    if (typeof t.getElementById !== V && O) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(e) {
                    var t = e.replace(Ct, Nt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function(e) {
                    var t = e.replace(Ct, Nt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = C.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, k.find.CLASS = C.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
                }, P = [], F = [], (C.qsa = vt.test(t.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
                }), o(function(e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (C.matchesSelector = vt.test(R = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                    C.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", lt)
                }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), M = vt.test(H.contains) || H.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = H.compareDocumentPosition ? function(e, n) {
                    if (e === n) return U = !0, 0;
                    var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    return r ? 1 & r || !C.sortDetached && n.compareDocumentPosition(e) === r ? e === t || M($, e) ? -1 : n === t || M($, n) ? 1 : A ? nt.call(A, e) - nt.call(A, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, n) {
                    var r, i = 0,
                        o = e.parentNode,
                        s = n.parentNode,
                        u = [e],
                        l = [n];
                    if (e === n) return U = !0, 0;
                    if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : A ? nt.call(A, e) - nt.call(A, n) : 0;
                    if (o === s) return a(e, n);
                    for (r = e; r = r.parentNode;) u.unshift(r);
                    for (r = n; r = r.parentNode;) l.unshift(r);
                    for (; u[i] === l[i];) i++;
                    return i ? a(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
                }, t) : q
            }, n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== q && L(e), t = t.replace(ht, "='$1']"), !(!C.matchesSelector || !O || P && P.test(t) || F && F.test(t))) try {
                    var r = R.call(e, t);
                    if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return n(t, q, null, [e]).length > 0
            }, n.contains = function(e, t) {
                return (e.ownerDocument || e) !== q && L(e), M(e, t)
            }, n.attr = function(e, n) {
                (e.ownerDocument || e) !== q && L(e);
                var r = k.attrHandle[n.toLowerCase()],
                    i = r && J.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !O) : t;
                return i === t ? C.attributes || !O ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (U = !C.detectDuplicates, A = !C.sortStable && e.slice(0), e.sort(Y), U) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, E = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += E(t);
                return n
            }, k = n.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: yt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Ct, Nt), e[3] = (e[4] || e[5] || "").replace(Ct, Nt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && gt.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Ct, Nt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                v = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++p && f === t) {
                                            c[e] = [B, d, p];
                                            break
                                        }
                                } else if (v && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                                else
                                    for (;
                                        (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                                return p -= i, p === r || 0 === p % r && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return o[W] ? o(t) : o.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var r, i = o(e, t), s = i.length; s--;) r = nt.call(e, i[s]), e[r] = !(n[r] = i[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = j(e.replace(ct, "$1"));
                        return r[W] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ct, Nt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return wt.test(e.nodeName)
                    },
                    input: function(e) {
                        return bt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[T] = u(T);
            for (T in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[T] = l(T);
            f.prototype = k.filters = k.pseudos, k.setFilters = new f, j = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]), o[W] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r))
                }
                return o
            }, C.sortStable = W.split("").sort(Y).join("") === W, C.detectDuplicates = U, L(), C.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(q.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), C.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || s(rt, function(e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
            }), ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = n.uniqueSort, ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains
        }(e);
    var ht = {};
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || r(e) : ot.extend({}, e);
        var n, i, o, s, a, u, l = [],
            c = !e.once && [],
            f = function(t) {
                for (n = e.memory && t, i = !0, u = s || 0, s = 0, a = l.length, o = !0; l && a > u; u++)
                    if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                o = !1, l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        ! function r(t) {
                            ot.each(t, function(t, n) {
                                var i = ot.type(n);
                                "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), o ? a = l.length : n && (s = t, f(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(e, t) {
                        for (var n;
                            (n = ot.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (a >= n && a--, u >= n && u--)
                    }), this
                },
                has: function(e) {
                    return e ? ot.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = c = n = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, n || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || i && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], o ? c.push(t) : f(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, ot.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(t, function(t, o) {
                                var s = o[0],
                                    a = ot.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ot.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ot.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = et.call(arguments),
                s = o.length,
                a = 1 !== s || e && ot.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : ot.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), ot.support = function(t) {
        var n = X.createElement("input"),
            r = X.createDocumentFragment(),
            i = X.createElement("div"),
            o = X.createElement("select"),
            s = o.appendChild(X.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled, n = X.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, ot(function() {
            var n, r, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                s = X.getElementsByTagName("body")[0];
            s && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", ot.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === i.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(X.createElement("div")), r.style.cssText = i.style.cssText = o, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), s.removeChild(n))
        }), t) : t
    }({});
    var gt, mt, yt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        vt = /([A-Z])/g;
    i.uid = 1, i.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, i.prototype = {
        key: function(e) {
            if (!i.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = i.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, ot.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (ot.isEmptyObject(o)) ot.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, n) {
            var r = this.cache[this.key(e)];
            return n === t ? r : r[n]
        },
        access: function(e, n, r) {
            var i;
            return n === t || n && "string" == typeof n && r === t ? (i = this.get(e, n), i !== t ? i : this.get(e, ot.camelCase(n))) : (this.set(e, n, r), r !== t ? r : n)
        },
        remove: function(e, n) {
            var r, i, o, s = this.key(e),
                a = this.cache[s];
            if (n === t) this.cache[s] = {};
            else {
                ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) : (o = ot.camelCase(n), n in a ? i = [n, o] : (i = o, i = i in a ? [i] : i.match(at) || [])), r = i.length;
                for (; r--;) delete a[i[r]]
            }
        },
        hasData: function(e) {
            return !ot.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    }, gt = new i, mt = new i, ot.extend({
        acceptData: i.accepts,
        hasData: function(e) {
            return gt.hasData(e) || mt.hasData(e)
        },
        data: function(e, t, n) {
            return gt.access(e, t, n)
        },
        removeData: function(e, t) {
            gt.remove(e, t)
        },
        _data: function(e, t, n) {
            return mt.access(e, t, n)
        },
        _removeData: function(e, t) {
            mt.remove(e, t)
        }
    }), ot.fn.extend({
        data: function(e, n) {
            var r, i, s = this[0],
                a = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = gt.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
                    for (r = s.attributes; a < r.length; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), o(s, i, u[i]));
                    mt.set(s, "hasDataAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                gt.set(this, e)
            }) : ot.access(this, function(n) {
                var r, i = ot.camelCase(e);
                if (s && n === t) {
                    if (r = gt.get(s, e), r !== t) return r;
                    if (r = gt.get(s, i), r !== t) return r;
                    if (r = o(s, i, t), r !== t) return r
                } else this.each(function() {
                    var r = gt.get(this, i);
                    gt.set(this, i, n), -1 !== e.indexOf("-") && r !== t && gt.set(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                gt.remove(this, e)
            })
        }
    }), ot.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = mt.get(e, t), n && (!r || ot.isArray(n) ? r = mt.access(e, t, ot.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ot._queueHooks(e, t),
                s = function() {
                    ot.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return mt.get(e, n) || mt.access(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    mt.remove(e, [t + "queue", n])
                })
            })
        }
    }), ot.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ot.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ot.queue(this, e, n);
                ot._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = ot.Deferred(),
                s = this,
                a = this.length,
                u = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = mt.get(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var xt, bt, wt = /[\t\r\n\f]/g,
        Tt = /\r/g,
        Ct = /^(?:input|select|textarea|button)$/i;
    ot.fn.extend({
        attr: function(e, t) {
            return ot.access(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ot.access(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ot.propFix[e] || e]
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(at) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = ot.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(at) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ot.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ot.isFunction(e) ? this.each(function(n) {
                ot(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ot(this), o = e.match(at) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === z || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ot.isFunction(e), this.each(function(r) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, r, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(Tt, "") : null == r ? "" : r)
            }
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (ot.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ot(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ot.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ot.inArray(ot(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === z ? ot.prop(e, n, r) : (1 === s && ot.isXMLDoc(e) || (n = n.toLowerCase(), i = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? bt : xt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ot.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ot.removeAttr(e, n), void 0))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(at);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ot.support.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ot.isXMLDoc(e), s && (n = ot.propFix[n] || n, o = ot.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ct.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), bt = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ot.expr.attrHandle[n] || ot.find.attr;
        ot.expr.attrHandle[n] = function(e, n, i) {
            var o = ot.expr.attrHandle[n],
                s = i ? t : (ot.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ot.expr.attrHandle[n] = o, s
        }
    }), ot.support.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) >= 0 : void 0
            }
        }, ot.support.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Nt = /^key/,
        kt = /^(?:mouse|contextmenu)|click/,
        Et = /^(?:focusinfocus|focusoutblur)$/,
        St = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var s, a, u, l, c, f, p, d, h, g, m, y = mt.get(e);
            if (y) {
                for (r.handler && (s = r, r = s.handler, o = s.selector), r.guid || (r.guid = ot.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
                        return typeof ot === z || e && ot.event.triggered === e.type ? t : ot.event.dispatch.apply(a.elem, arguments)
                    }, a.elem = e), n = (n || "").match(at) || [""], c = n.length; c--;) u = St.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (p = ot.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ot.event.special[h] || {}, f = ot.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ot.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = mt.hasData(e) && mt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(at) || [""], l = t.length; l--;)
                    if (a = St.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = ot.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ot.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) ot.event.remove(e, d + t[l], n, r, !0);
                ot.isEmptyObject(u) && (delete m.handle, mt.remove(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, a, u, l, c, f, p, d = [i || X],
                h = rt.call(n, "type") ? n.type : n,
                g = rt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (a = u = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(h + ot.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, n = n[ot.expando] ? n : new ot.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ot.makeArray(r, [n]), p = ot.event.special[h] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !ot.isWindow(i)) {
                    for (l = p.delegateType || h, Et.test(l + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (i.ownerDocument || X) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (s = 0;
                    (a = d[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? l : p.bindType || h, f = (mt.get(a, "events") || {})[n.type] && mt.get(a, "handle"), f && f.apply(a, r), f = c && a[c], f && ot.acceptData(a) && f.apply && f.apply(a, r) === !1 && n.preventDefault();
                return n.type = h, o || n.isDefaultPrevented() || p._default && p._default.apply(d.pop(), r) !== !1 || !ot.acceptData(i) || c && ot.isFunction(i[h]) && !ot.isWindow(i) && (u = i[c], u && (i[c] = null), ot.event.triggered = h, i[h](), ot.event.triggered = t, u && (i[c] = u)), n.result
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var n, r, i, o, s, a = [],
                u = et.call(arguments),
                l = (mt.get(this, "events") || {})[e.type] || [],
                c = ot.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ot.event.handlers.call(this, e, l), n = 0;
                    (o = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (s = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((ot.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, s, a = [],
                u = n.delegateCount,
                l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], r = 0; u > r; r++) s = n[r], o = s.selector + " ", i[o] === t && (i[o] = s.needsContext ? ot(o, this).index(l) >= 0 : ot.find(o, this, null, [l]).length), i[o] && i.push(s);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return u < n.length && a.push({
                elem: this,
                handlers: n.slice(u)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || X, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = kt.test(i) ? this.mouseHooks : Nt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), this[ot.expando] = !0, void 0) : new ot.Event(e, t)
    }, ot.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ot.support.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                ot.event.simulate(t, e.target, ot.event.fix(e), !0)
            };
        ot.event.special[t] = {
            setup: function() {
                0 === n++ && X.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && X.removeEventListener(e, r, !0)
            }
        }
    }), ot.fn.extend({
        on: function(e, n, r, i, o) {
            var s, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = a;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ot().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = a), this.each(function() {
                ot.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    });
    var jt = /^.[^:#\[\.,]*$/,
        Dt = /^(?:parents|prev(?:Until|All))/,
        At = ot.expr.match.needsContext,
        Lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ot.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ot.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t = ot(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (ot.contains(this, t[e])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(c(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(c(this, e || [], !1))
        },
        is: function(e) {
            return !!c(this, "string" == typeof e && At.test(e) ? ot(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = At.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? tt.call(ot(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ot(e, t) : ot.makeArray(e && e.nodeType ? [e] : e),
                r = ot.merge(this.get(), n);
            return this.pushStack(ot.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ot.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ot.dir(e, "parentNode", n)
        },
        next: function(e) {
            return l(e, "nextSibling")
        },
        prev: function(e) {
            return l(e, "previousSibling")
        },
        nextAll: function(e) {
            return ot.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ot.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ot.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ot.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ot.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ot.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ot.merge([], e.childNodes)
        }
    }, function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (Lt[e] || ot.unique(i), Dt.test(e) && i.reverse()), this.pushStack(i)
        }
    }), ot.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = r !== t;
                (e = e[n]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ot(e).is(r)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ht = /<([\w:]+)/,
        Ot = /<|&#?\w+;/,
        Ft = /<(?:script|style|link)/i,
        Pt = /^(?:checkbox|radio)$/i,
        Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^$|\/(?:java|ecma)script/i,
        Wt = /^true\/(.*)/,
        $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Bt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td, ot.fn.extend({
        text: function(e) {
            return ot.access(this, function(e) {
                return e === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(m(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && h(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return ot.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof e && !Ft.test(e) && !Bt[(Ht.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(qt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ot.cleanData(m(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ot.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ot(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = K.apply([], e);
            var r, i, o, s, a, u, l = 0,
                c = this.length,
                f = this,
                h = c - 1,
                g = e[0],
                y = ot.isFunction(g);
            if (y || !(1 >= c || "string" != typeof g || ot.support.checkClone) && Rt.test(g)) return this.each(function(r) {
                var i = f.eq(r);
                y && (e[0] = g.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (r = ot.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (o = ot.map(m(r, "script"), p), s = o.length; c > l; l++) a = r, l !== h && (a = ot.clone(a, !0, !0), s && ot.merge(o, m(a, "script"))), t.call(this[l], a, l);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, ot.map(o, d), l = 0; s > l; l++) a = o[l], Mt.test(a.type || "") && !mt.access(a, "globalEval") && ot.contains(u, a) && (a.src ? ot._evalUrl(a.src) : ot.globalEval(a.textContent.replace($t, "")))
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = [], i = ot(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(i[s])[t](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    }), ot.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = ot.contains(e.ownerDocument, e);
            if (!(ot.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
                for (s = m(a), o = m(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || m(e), s = s || m(a), r = 0, i = o.length; i > r; r++) g(o[r], s[r]);
                else g(e, a);
            return s = m(a, "script"), s.length > 0 && h(s, !u && m(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = 0, f = e.length, p = t.createDocumentFragment(), d = []; f > c; c++)
                if (i = e[c], i || 0 === i)
                    if ("object" === ot.type(i)) ot.merge(d, i.nodeType ? [i] : i);
                    else if (Ot.test(i)) {
                for (o = o || p.appendChild(t.createElement("div")), s = (Ht.exec(i) || ["", ""])[1].toLowerCase(), a = Bt[s] || Bt._default, o.innerHTML = a[1] + i.replace(qt, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                ot.merge(d, o.childNodes), o = p.firstChild, o.textContent = ""
            } else d.push(t.createTextNode(i));
            for (p.textContent = "", c = 0; i = d[c++];)
                if ((!r || -1 === ot.inArray(i, r)) && (u = ot.contains(i.ownerDocument, i), o = m(p.appendChild(i), "script"), u && h(o), n))
                    for (l = 0; i = o[l++];) Mt.test(i.type || "") && n.push(i);
            return p
        },
        cleanData: function(e) {
            for (var n, r, o, s, a, u, l = ot.event.special, c = 0;
                (r = e[c]) !== t; c++) {
                if (i.accepts(r) && (a = r[mt.expando], a && (n = mt.cache[a]))) {
                    if (o = Object.keys(n.events || {}), o.length)
                        for (u = 0;
                            (s = o[u]) !== t; u++) l[s] ? ot.event.remove(r, s) : ot.removeEvent(r, s, n.handle);
                    mt.cache[a] && delete mt.cache[a]
                }
                delete gt.cache[r[gt.expando]]
            }
        },
        _evalUrl: function(e) {
            return ot.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ot.fn.extend({
        wrapAll: function(e) {
            var t;
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ot(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, zt, _t = /^(none|table(?!-c[ea]).+)/,
        Xt = /^margin/,
        Ut = new RegExp("^(" + st + ")(.*)$", "i"),
        Yt = new RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
        Vt = new RegExp("^([+-])=(" + st + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Jt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Kt = ["Top", "Right", "Bottom", "Left"],
        Zt = ["Webkit", "O", "Moz", "ms"];
    ot.fn.extend({
        css: function(e, n) {
            return ot.access(this, function(e, n, r) {
                var i, o, s = {},
                    a = 0;
                if (ot.isArray(n)) {
                    for (i = b(e), o = n.length; o > a; a++) s[n[a]] = ot.css(e, n[a], !1, i);
                    return s
                }
                return r !== t ? ot.style(e, n, r) : ot.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                x(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = It(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, u = ot.camelCase(n),
                    l = e.style;
                return n = ot.cssProps[u] || (ot.cssProps[u] = v(l, u)), a = ot.cssHooks[n] || ot.cssHooks[u], r === t ? a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : l[n] : (s = typeof r, "string" === s && (o = Vt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ot.css(e, n)), s = "number"), null == r || "number" === s && isNaN(r) || ("number" !== s || ot.cssNumber[u] || (r += "px"), ot.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t || (l[n] = r)), void 0)
            }
        },
        css: function(e, n, r, i) {
            var o, s, a, u = ot.camelCase(n);
            return n = ot.cssProps[u] || (ot.cssProps[u] = v(e.style, u)), a = ot.cssHooks[n] || ot.cssHooks[u], a && "get" in a && (o = a.get(e, !0, r)), o === t && (o = It(e, n, i)), "normal" === o && n in Qt && (o = Qt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || ot.isNumeric(s) ? s || 0 : o) : o
        }
    }), It = function(e, n, r) {
        var i, o, s, a = r || b(e),
            u = a ? a.getPropertyValue(n) || a[n] : t,
            l = e.style;
        return a && ("" !== u || ot.contains(e.ownerDocument, e) || (u = ot.style(e, n)), Yt.test(u) && Xt.test(n) && (i = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = a.width, l.width = i, l.minWidth = o, l.maxWidth = s)), u
    }, ot.each(["height", "width"], function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && _t.test(ot.css(e, "display")) ? ot.swap(e, Jt, function() {
                    return N(e, t, r)
                }) : N(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && b(e);
                return T(e, n, r ? C(e, t, r, ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ot(function() {
        ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? ot.swap(e, {
                    display: "inline-block"
                }, It, [e, "marginRight"]) : void 0
            }
        }), !ot.support.pixelPosition && ot.fn.position && ot.each(["top", "left"], function(e, t) {
            ot.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = It(e, t), Yt.test(n) ? ot(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, ot.expr.filters.visible = function(e) {
        return !ot.expr.filters.hidden(e)
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Kt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Xt.test(e) || (ot.cssHooks[e + t].set = T)
    });
    var en = /%20/g,
        tn = /\[\]$/,
        nn = /\r?\n/g,
        rn = /^(?:submit|button|image|reset|file)$/i,
        on = /^(?:input|select|textarea|keygen)/i;
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Pt.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(nn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(nn, "\r\n")
                }
            }).get()
        }
    }), ot.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) S(r, e[r], n, o);
        return i.join("&").replace(en, "+")
    }, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var sn, an, un = ot.now(),
        ln = /\?/,
        cn = /#.*$/,
        fn = /([?&])_=[^&]*/,
        pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        hn = /^(?:GET|HEAD)$/,
        gn = /^\/\//,
        mn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        yn = ot.fn.load,
        vn = {},
        xn = {},
        bn = "*/".concat("*");
    try {
        an = _.href
    } catch (wn) {
        an = X.createElement("a"), an.href = "", an = an.href
    }
    sn = mn.exec(an.toLowerCase()) || [], ot.fn.load = function(e, n, r) {
        if ("string" != typeof e && yn) return yn.apply(this, arguments);
        var i, o, s, a = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u), e = e.slice(0, u)), ot.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ot.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            a.each(r, s || [e.responseText, t, e])
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: an,
            type: "GET",
            isLocal: dn.test(sn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? A(A(e, ot.ajaxSettings), t) : A(ot.ajaxSettings, e)
        },
        ajaxPrefilter: j(vn),
        ajaxTransport: j(xn),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                var l, f, v, x, w, C = n;
                2 !== b && (b = 2, u && clearTimeout(u), i = t, s = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, r && (x = L(p, T, r)), x = q(p, x, T, l), l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, v]), T.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : v]), m.fireWith(d, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, u, l, c, f, p = ot.ajaxSetup({}, n),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
                g = ot.Deferred(),
                m = ot.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = pn.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) y[t] = [y[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || an) + "").replace(cn, "").replace(gn, sn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(at) || [""], null == p.crossDomain && (l = mn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === sn[1] && l[2] === sn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (sn[3] || ("http:" === sn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), D(vn, p, n, T), 2 === b) return T;
            c = p.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !hn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ln.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = fn.test(o) ? o.replace(fn, "$1_=" + un++) : o + (ln.test(o) ? "&" : "?") + "_=" + un++)), p.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](p[f]);
            if (i = D(xn, p, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(v, r)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ot.get(e, t, n, "script")
        }
    }), ot.each(["get", "post"], function(e, n) {
        ot[n] = function(e, r, i, o) {
            return ot.isFunction(r) && (o = o || i, i = r, r = t), ot.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e), e
            }
        }
    }), ot.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ot.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ot("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), X.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Tn = [],
        Cn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Tn.pop() || ot.expando + "_" + un++;
            return this[e] = !0, e
        }
    }), ot.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, s, a, u = n.jsonp !== !1 && (Cn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Cn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Cn, "$1" + o) : n.jsonp !== !1 && (n.url += (ln.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return a || ot.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function() {
            a = arguments
        }, i.always(function() {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Tn.push(o)), a && ot.isFunction(s) && s(a[0]), a = s = t
        }), "script") : void 0
    }), ot.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Nn = ot.ajaxSettings.xhr(),
        kn = {
            0: 200,
            1223: 204
        },
        En = 0,
        Sn = {};
    e.ActiveXObject && ot(e).on("unload", function() {
        for (var e in Sn) Sn[e]();
        Sn = t
    }), ot.support.cors = !!Nn && "withCredentials" in Nn, ot.support.ajax = Nn = !!Nn, ot.ajaxTransport(function(e) {
        var n;
        return ot.support.cors || Nn && !e.crossDomain ? {
            send: function(r, i) {
                var o, s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function(e) {
                    return function() {
                        n && (delete Sn[s], n = a.onload = a.onerror = null, "abort" === e ? a.abort() : "error" === e ? i(a.status || 404, a.statusText) : i(kn[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : t, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), a.onerror = n("error"), n = Sn[s = En++] = n("abort"), a.send(e.hasContent && e.data || null)
            },
            abort: function() {
                n && n()
            }
        } : void 0
    });
    var jn, Dn, An = /^(?:toggle|show|hide)$/,
        Ln = new RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
        qn = /queueHooks$/,
        Hn = [R],
        On = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Ln.exec(t),
                    o = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                    s = (ot.cssNumber[e] || "px" !== o && +r) && Ln.exec(ot.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, ot.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ot.Animation = ot.extend(F, {
        tweener: function(e, t) {
            ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], On[n] = On[n] || [], On[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Hn.unshift(e) : Hn.push(e)
        }
    }), ot.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ot.each(["toggle", "show", "hide"], function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), ot.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ot.isEmptyObject(e),
                o = ot.speed(t, n, r),
                s = function() {
                    var t = F(this, ot.extend({}, e), o);
                    (i || mt.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ot.timers,
                    s = mt.get(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && qn.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ot.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = mt.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ot.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ot.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ot.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ot.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({}, e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
        }, r
    }, ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ot.timers = [], ot.fx = M.prototype.init, ot.fx.tick = function() {
        var e, n = ot.timers,
            r = 0;
        for (jn = ot.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ot.fx.stop(), jn = t
    }, ot.fx.timer = function(e) {
        e() && ot.timers.push(e) && ot.fx.start()
    }, ot.fx.interval = 13, ot.fx.start = function() {
        Dn || (Dn = setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function() {
        clearInterval(Dn), Dn = null
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers, function(t) {
            return e === t.elem
        }).length
    }), ot.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ot.offset.setOffset(this, e, t)
        });
        var n, r, i = this[0],
            o = {
                top: 0,
                left: 0
            },
            s = i && i.ownerDocument;
        if (s) return n = s.documentElement, ot.contains(n, i) ? (typeof i.getBoundingClientRect !== z && (o = i.getBoundingClientRect()), r = $(s), {
            top: o.top + r.pageYOffset - n.clientTop,
            left: o.left + r.pageXOffset - n.clientLeft
        }) : o
    }, ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = ot.css(e, "position"),
                f = ot(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = ot.css(e, "top"), u = ot.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), ot.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, ot.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (r = e.offset()), r.top += ot.css(e[0], "borderTopWidth", !0), r.left += ot.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ot.css(n, "marginTop", !0),
                    left: t.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || U; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || U
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var i = "pageYOffset" === r;
        ot.fn[n] = function(o) {
            return ot.access(this, function(n, o, s) {
                var a = $(n);
                return s === t ? a ? a[r] : n[o] : (a ? a.scrollTo(i ? e.pageXOffset : s, i ? s : e.pageYOffset) : n[o] = s, void 0)
            }, n, o, arguments.length, null)
        }
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ot.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ot.fn[i] = function(i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (i === !0 || o === !0 ? "margin" : "border");
                return ot.access(this, function(n, r, i) {
                    var o;
                    return ot.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ot.css(n, r, a) : ot.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = ot)
}(window); + function(t) {
    "use strict";
    var o = function(i, f) {
        this.options = t.extend({}, o.DEFAULTS, f), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = null, this.checkPosition()
    };
    o.RESET = "affix affix-top affix-bottom", o.DEFAULTS = {
        offset: 0
    }, o.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, o.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var i = t(document).height(),
                f = this.$window.scrollTop(),
                e = this.$element.offset(),
                n = this.options.offset,
                s = n.top,
                h = n.bottom;
            "object" != typeof n && (h = s = n), "function" == typeof s && (s = n.top()), "function" == typeof h && (h = n.bottom());
            var a = null != this.unpin && f + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= i - h ? "bottom" : null != s && s >= f ? "top" : !1;
            this.affixed !== a && (this.unpin && this.$element.css("top", ""), this.affixed = a, this.unpin = "bottom" == a ? e.top - f : null, this.$element.removeClass(o.RESET).addClass("affix" + (a ? "-" + a : "")), "bottom" == a && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }))
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function(i) {
        return this.each(function() {
            var f = t(this),
                e = f.data("bs.affix"),
                n = "object" == typeof i && i;
            e || f.data("bs.affix", e = new o(this, n)), "string" == typeof i && e[i]()
        })
    }, t.fn.affix.Constructor = o, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var o = t(this),
                i = o.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), o.affix(i)
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var n = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in t)
            if (void 0 !== n.style[i]) return {
                end: t[i]
            }
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            o = this;
        n(this).one(n.support.transition.end, function() {
            i = !0
        });
        var r = function() {
            i || n(o).trigger(n.support.transition.end)
        };
        return setTimeout(r, t), this
    }, n(function() {
        n.support.transition = t()
    })
}(jQuery); + function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.prototype.init = function(e, i, o) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o);
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var p = "hover" == r ? "mouseenter" : "focus",
                    h = "hover" == r ? "mouseleave" : "blur";
                this.$element.on(p + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(h + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, e.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show), void 0) : i.show()
    }, e.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide), void 0) : i.hide()
    }, e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var i = this.tip();
            this.setContent(), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                n = /\s?auto?\s?/i,
                s = n.test(o);
            s && (o = o.replace(n, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var r = this.getPosition(),
                p = i[0].offsetWidth,
                h = i[0].offsetHeight;
            if (s) {
                var a = this.$element.parent(),
                    l = o,
                    f = document.documentElement.scrollTop || document.body.scrollTop,
                    c = "body" == this.options.container ? window.innerWidth : a.outerWidth(),
                    d = "body" == this.options.container ? window.innerHeight : a.outerHeight(),
                    u = "body" == this.options.container ? 0 : a.offset().left;
                o = "bottom" == o && r.top + r.height + h - f > d ? "top" : "top" == o && r.top - f - h < 0 ? "bottom" : "right" == o && r.right + p > c ? "left" : "left" == o && r.left - p < u ? "right" : o, i.removeClass(l).addClass(o)
            }
            var y = this.getCalculatedOffset(o, r, p, h);
            this.applyPlacement(y, o), this.$element.trigger("shown.bs." + this.type)
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i, o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            r = parseInt(o.css("margin-top"), 10),
            p = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(p) && (p = 0), t.top = t.top + r, t.left = t.left + p, o.offset(t).addClass("in");
        var h = o[0].offsetWidth,
            a = o[0].offsetHeight;
        if ("top" == e && a != s && (i = !0, t.top = t.top + s - a), /bottom|top/.test(e)) {
            var l = 0;
            t.left < 0 && (l = -2 * t.left, t.left = 0, o.offset(t), h = o[0].offsetWidth, a = o[0].offsetHeight), this.replaceArrow(l - n + h, h, "left")
        } else this.replaceArrow(a - s, a, "top");
        i && o.offset(t)
    }, e.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && o.detach()
        }
        var i = this,
            o = this.tip(),
            n = t.Event("hide.bs." + this.type);
        return this.$element.trigger(n), n.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }, e.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.tooltip"),
                s = "object" == typeof i && i;
            n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery); + function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        a = function(a) {
            t(a).on("click", e, this.close)
        };
    a.prototype.close = function(e) {
        function a() {
            s.trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            n = r.attr("data-target");
        n || (n = r.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(n);
        e && e.preventDefault(), s.length || (s = r.hasClass("alert") ? r : r.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(t.support.transition.end, a).emulateTransitionEnd(150) : a())
    };
    var r = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var r = t(this),
                n = r.data("bs.alert");
            n || r.data("bs.alert", n = new a(this)), "string" == typeof e && n[e].call(r)
        })
    }, t.fn.alert.Constructor = a, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery); + function(t) {
    "use strict";
    var e = function(n, o) {
        this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, o)
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    }, e.prototype.setState = function(t) {
        var e = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            a = n.data();
        t += "Text", a.resetText || n.data("resetText", n[o]()), n[o](a[t] || this.options[t]), setTimeout(function() {
            "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function() {
        var t = this.$element.closest('[data-toggle="buttons"]'),
            e = !0;
        if (t.length) {
            var n = this.$element.find("input");
            "radio" === n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = function(n) {
        return this.each(function() {
            var o = t(this),
                a = o.data("bs.button"),
                s = "object" == typeof n && n;
            a || o.data("bs.button", a = new e(this, s)), "toggle" == n ? a.toggle() : n && a.setState(n)
        })
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
    })
}(jQuery); + function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, e.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, e.prototype.to = function(e) {
        var i = this,
            s = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid", function() {
            i.to(e)
        }) : s == e ? this.pause().cycle() : this.slide(e > s ? "next" : "prev", t(this.$items[e]))
    }, e.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(e, i) {
        var s = this.$element.find(".item.active"),
            n = i || s[e](),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            o = "next" == e ? "first" : "last",
            l = this;
        if (!n.length) {
            if (!this.options.wrap) return;
            n = this.$element.find(".item")[o]()
        }
        this.sliding = !0, a && this.pause();
        var h = t.Event("slide.bs.carousel", {
            relatedTarget: n[0],
            direction: r
        });
        if (!n.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                    var e = t(l.$indicators.children()[l.getActiveIndex()]);
                    e && e.addClass("active")
                })), t.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one(t.support.transition.end, function() {
                    n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.carousel"),
                a = t.extend({}, e.DEFAULTS, s.data(), "object" == typeof i && i),
                r = "string" == typeof i ? i : a.slide;
            n || s.data("bs.carousel", n = new e(this, a)), "number" == typeof i ? n.to(i) : r ? n[r]() : a.interval && n.pause().cycle()
        })
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var i, s = t(this),
            n = t(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = t.extend({}, n.data(), s.data()),
            r = s.attr("data-slide-to");
        r && (a.interval = !1), n.carousel(a), (r = s.attr("data-slide-to")) && n.data("bs.carousel").to(r), e.preventDefault()
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery); + function(t) {
    "use strict";
    var e = function(s, n) {
        this.$element = t(s), this.options = t.extend({}, e.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    }, e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var s = this.$parent && this.$parent.find("> .panel > .in");
                if (s && s.length) {
                    var n = s.data("bs.collapse");
                    if (n && n.transitioning) return;
                    s.collapse("hide"), n || s.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse"), this.$element.prev().children(".btn-accordion").text("-")
                };
                if (!t.support.transition) return a.call(this);
                var l = t.camelCase(["scroll", i].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(a, this)).emulateTransitionEnd(350)[i](this.$element[0][l])
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var s = this.dimension();
                this.$element[s](this.$element[s]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.$element.prev().children(".btn-accordion").text("+"), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? (this.$element[s](0).one(t.support.transition.end, t.proxy(n, this)).emulateTransitionEnd(350), void 0) : n.call(this)
            }
        }
    }, e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var s = t.fn.collapse;
    t.fn.collapse = function(s) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.collapse"),
                a = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof s && s);
            i || n.data("bs.collapse", i = new e(this, a)), "string" == typeof s && i[s]()
        })
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var s, n = t(this),
            i = n.attr("data-target") || e.preventDefault() || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""),
            a = t(i),
            l = a.data("bs.collapse"),
            o = l ? "toggle" : n.data(),
            r = n.attr("data-parent"),
            h = r && t(r);
        l && l.transitioning || (h && h.find('[data-toggle=collapse][data-parent="' + r + '"]').not(n).addClass("collapsed"), n[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), a.collapse(o)
    })
}(jQuery); + function(o) {
    "use strict";

    function n() {
        o(e).remove(), o(r).each(function(n) {
            var e = t(o(this));
            e.hasClass("open") && (e.trigger(n = o.Event("hide.bs.dropdown")), n.isDefaultPrevented() || e.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function t(n) {
        var t = n.attr("data-target");
        t || (t = n.attr("href"), t = t && /#/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var e = t && o(t);
        return e && e.length ? e : n.parent()
    }
    var e = ".dropdown-backdrop",
        r = "[data-toggle=dropdown]",
        d = function(n) {
            o(n).on("click.bs.dropdown", this.toggle)
        };
    d.prototype.toggle = function(e) {
        var r = o(this);
        if (!r.is(".disabled, :disabled")) {
            var d = t(r),
                i = d.hasClass("open");
            if (n(), !i) {
                if ("ontouchstart" in document.documentElement && !d.closest(".navbar-nav").length && o('<div class="dropdown-backdrop"/>').insertAfter(o(this)).on("click", n), d.trigger(e = o.Event("show.bs.dropdown")), e.isDefaultPrevented()) return;
                d.toggleClass("open").trigger("shown.bs.dropdown"), r.focus()
            }
            return !1
        }
    }, d.prototype.keydown = function(n) {
        if (/(38|40|27)/.test(n.keyCode)) {
            var e = o(this);
            if (n.preventDefault(), n.stopPropagation(), !e.is(".disabled, :disabled")) {
                var d = t(e),
                    i = d.hasClass("open");
                if (!i || i && 27 == n.keyCode) return 27 == n.which && d.find(r).focus(), e.click();
                var a = o("[role=menu] li:not(.divider):visible a", d);
                if (a.length) {
                    var s = a.index(a.filter(":focus"));
                    38 == n.keyCode && s > 0 && s--, 40 == n.keyCode && s < a.length - 1 && s++, ~s || (s = 0), a.eq(s).focus()
                }
            }
        }
    };
    var i = o.fn.dropdown;
    o.fn.dropdown = function(n) {
        return this.each(function() {
            var t = o(this),
                e = t.data("dropdown");
            e || t.data("dropdown", e = new d(this)), "string" == typeof n && e[n].call(t)
        })
    }, o.fn.dropdown.Constructor = d, o.fn.dropdown.noConflict = function() {
        return o.fn.dropdown = i, this
    }, o(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(o) {
        o.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, d.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", d.prototype.keydown)
}(jQuery); + function(t) {
    "use strict";
    var e = function(e, o) {
        this.options = o, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide" : "show"](t)
    }, e.prototype.show = function(e) {
        var o = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(document.body), o.$element.show(), s && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
            var i = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? o.$element.find(".modal-dialog").one(t.support.transition.end, function() {
                o.$element.focus().trigger(i)
            }).emulateTransitionEnd(300) : o.$element.focus().trigger(i)
        }))
    }, e.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        }, this))
    }, e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
        })
    }, e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, e.prototype.backdrop = function(e) {
        var o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    };
    var o = t.fn.modal;
    t.fn.modal = function(o, s) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.modal"),
                a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof o && o);
            n || i.data("bs.modal", n = new e(this, a)), "string" == typeof o ? n[o](s) : a.show && n.show(s)
        })
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var o = t(this),
            s = o.attr("href"),
            i = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            n = i.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, i.data(), o.data());
        e.preventDefault(), i.modal(n, this).one("hide", function() {
            o.is(":visible") && o.focus()
        })
    }), t(document).on("show.bs.modal", ".modal", function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        t(document.body).removeClass("modal-open")
    })
}(jQuery); + function(t) {
    "use strict";
    var o = function(t, o) {
        this.init("popover", t, o)
    };
    if (!t.fn.tooltip) throw new Error("../../www.detheme.com/krypton/Popover%20requires%20tooltip.html");
    o.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), o.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), o.prototype.constructor = o, o.prototype.getDefaults = function() {
        return o.DEFAULTS
    }, o.prototype.setContent = function() {
        var t = this.tip(),
            o = this.getTitle(),
            e = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](o), t.find(".popover-content")[this.options.html ? "html" : "text"](e), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, o.prototype.getContent = function() {
        var t = this.$element,
            o = this.options;
        return t.attr("data-content") || ("function" == typeof o.content ? o.content.call(t[0]) : o.content)
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, o.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var e = t.fn.popover;
    t.fn.popover = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.popover"),
                r = "object" == typeof e && e;
            i || n.data("bs.popover", i = new o(this, r)), "string" == typeof e && i[e]()
        })
    }, t.fn.popover.Constructor = o, t.fn.popover.noConflict = function() {
        return t.fn.popover = e, this
    }
}(jQuery); + function(t) {
    "use strict";

    function s(e, o) {
        var i, r = t.proxy(this.process, this);
        this.$element = t(e).is("body") ? t(window) : t(e), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = t.extend({}, s.DEFAULTS, o), this.selector = (this.options.target || (i = t(e).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
    }
    s.DEFAULTS = {
        offset: 10
    }, s.prototype.refresh = function() {
        var s = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]), this.targets = t([]);
        var e = this;
        this.$body.find(this.selector).map(function() {
            var o = t(this),
                i = o.data("target") || o.attr("href"),
                r = /^#\w/.test(i) && t(i);
            return r && r.length && [
                [r[s]().top + (!t.isWindow(e.$scrollElement.get(0)) && e.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function(t, s) {
            return t[0] - s[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, s.prototype.process = function() {
        var t, s = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            o = e - this.$scrollElement.height(),
            i = this.offsets,
            r = this.targets,
            l = this.activeTarget;
        if (s >= o) return l != (t = r.last()[0]) && this.activate(t);
        for (t = i.length; t--;) l != r[t] && s >= i[t] && (!i[t + 1] || s <= i[t + 1]) && this.activate(r[t])
    }, s.prototype.activate = function(s) {
        this.activeTarget = s, t(this.selector).parents(".active").removeClass("active");
        var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
            o = t(e).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate")
    };
    var e = t.fn.scrollspy;
    t.fn.scrollspy = function(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("bs.scrollspy"),
                r = "object" == typeof e && e;
            i || o.data("bs.scrollspy", i = new s(this, r)), "string" == typeof e && i[e]()
        })
    }, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = e, this
    }, t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var s = t(this);
            s.scrollspy(s.data())
        })
    })
}(jQuery); + function(t) {
    "use strict";
    var a = function(a) {
        this.element = t(a)
    };
    a.prototype.show = function() {
        var a = this.element,
            e = a.closest("ul:not(.dropdown-menu)"),
            n = a.data("target");
        if (n || (n = a.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var i = e.find(".active:last a")[0],
                s = t.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (a.trigger(s), !s.isDefaultPrevented()) {
                var o = t(n);
                this.activate(a.parent("li"), e), this.activate(o, o.parent(), function() {
                    a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, a.prototype.activate = function(a, e, n) {
        function i() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), a.addClass("active"), o ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active"), n && n()
        }
        var s = e.find("> .active"),
            o = n && t.support.transition && s.hasClass("fade");
        o ? s.one(t.support.transition.end, i).emulateTransitionEnd(150) : i(), s.removeClass("in")
    };
    var e = t.fn.tab;
    t.fn.tab = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tab");
            i || n.data("bs.tab", i = new a(this)), "string" == typeof e && i[e]()
        })
    }, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function() {
        return t.fn.tab = e, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(a) {
        a.preventDefault(), t(this).tab("show")
    })
}(jQuery);
! function(t, e, o, i) {
    var s = {
        init: function(e, o) {
            var i = this;
            i.$elem = t(o), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
        },
        loadContent: function() {
            function e(t) {
                if ("function" == typeof o.options.jsonSuccess) o.options.jsonSuccess.apply(this, [t]);
                else {
                    var e = "";
                    for (var i in t.owl) e += t.owl[i].item;
                    o.$elem.html(e)
                }
                o.logIn()
            }
            var o = this;
            if ("function" == typeof o.options.beforeInit && o.options.beforeInit.apply(this, [o.$elem]), "string" == typeof o.options.jsonPath) {
                var i = o.options.jsonPath;
                t.getJSON(i, e)
            } else o.logIn()
        },
        logIn: function() {
            var t = this;
            t.$elem.css({
                opacity: 0
            }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible, t.setVars()
        },
        setVars: function() {
            var t = this;
            return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.currentItem = 0, t.customEvents(), t.onStartup(), void 0)
        },
        onStartup: function() {
            var t = this;
            t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
        },
        eachMoveUpdate: function() {
            var t = this;
            t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
        },
        updateVars: function() {
            var t = this;
            "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
        },
        reload: function() {
            var t = this;
            setTimeout(function() {
                t.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var t = this;
            return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
                opacity: 0
            }), clearInterval(t.autoPlayInterval), clearInterval(t.checkVisible), t.checkVisible = setInterval(function() {
                t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                    opacity: 1
                }, 200), clearInterval(t.checkVisible))
            }, 500), void 0)
        },
        wrapItems: function() {
            var t = this;
            t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
        },
        baseClass: function() {
            var t = this,
                e = t.$elem.hasClass(t.options.baseClass),
                o = t.$elem.hasClass(t.options.theme);
            t.$elem.data("owl-originalStyles", t.$elem.attr("style")).data("owl-originalClasses", t.$elem.attr("class")), e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme)
        },
        updateItems: function() {
            var e = this;
            if (e.options.responsive === !1) return !1;
            if (e.options.singleItem === !0) return e.options.items = e.orignalItems = 1, e.options.itemsDesktop = !1, e.options.itemsDesktopSmall = !1, e.options.itemsTablet = !1, e.options.itemsTabletSmall = !1, e.options.itemsMobile = !1, !1;
            var o = t(e.options.responsiveBaseWidth).width();
            o > (e.options.itemsDesktop[0] || e.orignalItems) && (e.options.items = e.orignalItems), o <= e.options.itemsDesktop[0] && e.options.itemsDesktop !== !1 && (e.options.items = e.options.itemsDesktop[1]), o <= e.options.itemsDesktopSmall[0] && e.options.itemsDesktopSmall !== !1 && (e.options.items = e.options.itemsDesktopSmall[1]), o <= e.options.itemsTablet[0] && e.options.itemsTablet !== !1 && (e.options.items = e.options.itemsTablet[1]), o <= e.options.itemsTabletSmall[0] && e.options.itemsTabletSmall !== !1 && (e.options.items = e.options.itemsTabletSmall[1]), o <= e.options.itemsMobile[0] && e.options.itemsMobile !== !1 && (e.options.items = e.options.itemsMobile[1]), e.options.items > e.itemsAmount && e.options.itemsScaleUp === !0 && (e.options.items = e.itemsAmount)
        },
        response: function() {
            var o, i = this;
            if (i.options.responsive !== !0) return !1;
            var s = t(e).width();
            i.resizer = function() {
                t(e).width() !== s && (i.options.autoPlay !== !1 && clearInterval(i.autoPlayInterval), clearTimeout(o), o = setTimeout(function() {
                    s = t(e).width(), i.updateVars()
                }, i.options.responsiveRefreshRate))
            }, t(e).resize(i.resizer)
        },
        updatePosition: function() {
            var t = this;
            t.browser.support3d === !0 ? t.positionsInArray[t.currentItem] > t.maximumPixels ? t.transition3d(t.positionsInArray[t.currentItem]) : (t.transition3d(0), t.currentItem = 0) : t.positionsInArray[t.currentItem] > t.maximumPixels ? t.css2slide(t.positionsInArray[t.currentItem]) : (t.css2slide(0), t.currentItem = 0), t.options.autoPlay !== !1 && t.checkAp()
        },
        appendItemsSizes: function() {
            var e = this,
                o = 0,
                i = e.itemsAmount - e.options.items;
            e.$owlItems.each(function(s) {
                var n = t(this);
                n.css({
                    width: e.itemWidth
                }).data("owl-item", Number(s)), (0 === s % e.options.items || s === i) && (s > i || (o += 1)), n.data("owl-roundPages", o)
            })
        },
        appendWrapperSizes: function() {
            var t = this,
                e = 0,
                e = t.$owlItems.length * t.itemWidth;
            t.$owlWrapper.css({
                width: 2 * e,
                left: 0
            }), t.appendItemsSizes()
        },
        calculateAll: function() {
            var t = this;
            t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
        },
        calculateWidth: function() {
            var t = this;
            t.itemWidth = Math.round(t.$elem.width() / t.options.items)
        },
        max: function() {
            var t = this,
                e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
            return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
        },
        min: function() {
            return 0
        },
        loops: function() {
            var t = this;
            t.positionsInArray = [0];
            for (var e = 0, o = 0; o < t.itemsAmount; o++) e += t.itemWidth, t.positionsInArray.push(-e)
        },
        buildControls: function() {
            var e = this;
            (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
        },
        buildButtons: function() {
            var e = this,
                o = t('<div class="owl-buttons"/>');
            e.owlControls.append(o), e.buttonPrev = t("<div/>", {
                "class": "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                "class": "owl-next",
                html: e.options.navigationText[1] || ""
            }), o.append(e.buttonPrev).append(e.buttonNext), o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                t.preventDefault()
            }), o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(o) {
                o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(o) {
                o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var e = this;
            if (e.options.pagination === !1) return !1;
            e.paginationWrapper.html("");
            for (var o = 0, i = e.itemsAmount - e.itemsAmount % e.options.items, s = 0; s < e.itemsAmount; s++)
                if (0 === s % e.options.items) {
                    if (o += 1, i === s) var n = e.itemsAmount - e.options.items;
                    var a = t("<div/>", {
                            "class": "owl-page"
                        }),
                        r = t("<span></span>", {
                            text: e.options.paginationNumbers === !0 ? o : "",
                            "class": e.options.paginationNumbers === !0 ? "owl-numbers" : ""
                        });
                    a.append(r), a.data("owl-page", i === s ? n : s), a.data("owl-roundPages", o), e.paginationWrapper.append(a)
                }
            e.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            return e.options.pagination === !1 ? !1 : (e.paginationWrapper.find(".owl-page").each(function() {
                t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
            }), void 0)
        },
        checkNavigation: function() {
            var t = this;
            return t.options.navigation === !1 ? !1 : (t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))), void 0)
        },
        updateControls: function() {
            var t = this;
            t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
        },
        destroyControls: function() {
            var t = this;
            t.owlControls && t.owlControls.remove()
        },
        next: function(t) {
            var e = this;
            if (e.isTransition) return !1;
            if (e.storePrevItem = e.currentItem, e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (1 == e.options.scrollPerPage ? e.options.items - 1 : 0)) {
                if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                e.currentItem = 0, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        prev: function(t) {
            var e = this;
            if (e.isTransition) return !1;
            if (e.storePrevItem = e.currentItem, e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                e.currentItem = e.maximumItem, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        goTo: function(t, e, o) {
            var i = this;
            if (i.isTransition) return !1;
            if (i.getPrevItem(), "function" == typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]), t >= i.maximumItem ? t = i.maximumItem : 0 >= t && (t = 0), i.currentItem = i.owl.currentItem = t, i.options.transitionStyle !== !1 && "drag" !== o && 1 === i.options.items && i.browser.support3d === !0) return i.swapSpeed(0), i.browser.support3d === !0 ? i.transition3d(i.positionsInArray[t]) : i.css2slide(i.positionsInArray[t], 1), i.singleItemTransition(), i.afterGo(), !1;
            var s = i.positionsInArray[t];
            i.browser.support3d === !0 ? (i.isCss3Finish = !1, e === !0 ? (i.swapSpeed("paginationSpeed"), setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.paginationSpeed)) : "rewind" === e ? (i.swapSpeed(i.options.rewindSpeed), setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.slideSpeed)), i.transition3d(s)) : e === !0 ? i.css2slide(s, i.options.paginationSpeed) : "rewind" === e ? i.css2slide(s, i.options.rewindSpeed) : i.css2slide(s, i.options.slideSpeed), i.afterGo()
        },
        getPrevItem: function() {
            var t = this;
            t.prevItem = t.owl.prevItem = t.storePrevItem === i ? t.currentItem : t.storePrevItem, t.storePrevItem = i
        },
        jumpTo: function(t) {
            var e = this;
            e.getPrevItem(), "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
        },
        afterGo: function() {
            var t = this;
            t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), "function" == typeof t.options.afterMove && t.options.afterMove.apply(this, [t.$elem]), t.options.autoPlay !== !1 && t.checkAp()
        },
        stop: function() {
            var t = this;
            t.apStatus = "stop", clearInterval(t.autoPlayInterval)
        },
        checkAp: function() {
            var t = this;
            "stop" !== t.apStatus && t.play()
        },
        play: function() {
            var t = this;
            return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (clearInterval(t.autoPlayInterval), t.autoPlayInterval = setInterval(function() {
                t.next(!0)
            }, t.options.autoPlay), void 0)
        },
        swapSpeed: function(t) {
            var e = this;
            "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
        },
        addCssSpeed: function(t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                "-ms-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-ms-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        },
        transition3d: function(t) {
            var e = this;
            e.$owlWrapper.css(e.doTranslate(t))
        },
        css2move: function(t) {
            var e = this;
            e.$owlWrapper.css({
                left: t
            })
        },
        css2slide: function(t, e) {
            var o = this;
            o.isCssFinish = !1, o.$owlWrapper.stop(!0, !0).animate({
                left: t
            }, {
                duration: e || o.options.slideSpeed,
                complete: function() {
                    o.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var t = this,
                i = "translate3d(0px, 0px, 0px)",
                s = o.createElement("div");
            s.style.cssText = "  -moz-transform:" + i + "; -ms-transform:" + i + "; -o-transform:" + i + "; -webkit-transform:" + i + "; transform:" + i;
            var n = /translate3d\(0px, 0px, 0px\)/g,
                a = s.style.cssText.match(n),
                r = null !== a && 1 === a.length,
                l = "ontouchstart" in e || navigator.msMaxTouchPoints;
            t.browser = {
                support3d: r,
                isTouch: l
            }
        },
        moveEvents: function() {
            var t = this;
            (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
        },
        eventTypes: function() {
            var t = this,
                e = ["s", "e", "x"];
            t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
        },
        disabledEvents: function() {
            var e = this;
            e.$elem.on("dragstart.owl", function(t) {
                t.preventDefault()
            }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                return t(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function s(t) {
                return t.touches ? {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY
                } : t.pageX !== i ? {
                    x: t.pageX,
                    y: t.pageY
                } : {
                    x: t.clientX,
                    y: t.clientY
                }
            }

            function n(e) {
                "on" === e ? (t(o).on(p.ev_types.move, r), t(o).on(p.ev_types.end, l)) : "off" === e && (t(o).off(p.ev_types.move), t(o).off(p.ev_types.end))
            }

            function a(o) {
                var o = o.originalEvent || o || e.event;
                if (3 === o.which) return !1;
                if (p.isCssFinish === !1 && !p.options.dragBeforeAnimFinish) return !1;
                if (p.isCss3Finish === !1 && !p.options.dragBeforeAnimFinish) return !1;
                p.options.autoPlay !== !1 && clearInterval(p.autoPlayInterval), p.browser.isTouch === !0 || p.$owlWrapper.hasClass("grabbing") || p.$owlWrapper.addClass("grabbing"), p.newPosX = 0, p.newRelativeX = 0, t(this).css(p.removeTransition());
                var i = t(this).position();
                m.relativePos = i.left, m.offsetX = s(o).x - i.left, m.offsetY = s(o).y - i.top, n("on"), m.sliding = !1, m.targetElement = o.target || o.srcElement
            }

            function r(i) {
                var i = i.originalEvent || i || e.event;
                p.newPosX = s(i).x - m.offsetX, p.newPosY = s(i).y - m.offsetY, p.newRelativeX = p.newPosX - m.relativePos, "function" == typeof p.options.startDragging && m.dragging !== !0 && 0 !== p.newRelativeX && (m.dragging = !0, p.options.startDragging.apply(this)), (p.newRelativeX > 8 || p.newRelativeX < -8 && p.browser.isTouch === !0) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1, m.sliding = !0), (p.newPosY > 10 || p.newPosY < -10) && m.sliding === !1 && t(o).off("touchmove.owl");
                var n = function() {
                        return p.newRelativeX / 5
                    },
                    a = function() {
                        return p.maximumPixels + p.newRelativeX / 5
                    };
                p.newPosX = Math.max(Math.min(p.newPosX, n()), a()), p.browser.support3d === !0 ? p.transition3d(p.newPosX) : p.css2move(p.newPosX)
            }

            function l(o) {
                var o = o.originalEvent || o || e.event;
                if (o.target = o.target || o.srcElement, m.dragging = !1, p.browser.isTouch !== !0 && p.$owlWrapper.removeClass("grabbing"), 0 !== p.newRelativeX) {
                    var i = p.getNewPosition();
                    if (p.goTo(i, !1, "drag"), m.targetElement === o.target && p.browser.isTouch !== !0) {
                        t(o.target).on("click.disable", function(e) {
                            e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(o.target).off("click.disable")
                        });
                        var s = t._data(o.target, "events").click,
                            a = s.pop();
                        s.splice(0, 0, a)
                    }
                }
                n("off")
            }
            var p = this,
                m = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            p.isCssFinish = !0, p.$elem.on(p.ev_types.start, ".owl-wrapper", a)
        },
        getNewPosition: function() {
            var t, e = this,
                t = e.improveClosest();
            return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
        },
        improveClosest: function() {
            var e = this,
                o = e.positionsInArray,
                i = e.newPosX,
                s = null;
            return t.each(o, function(t, n) {
                i - e.itemWidth / 20 > o[t + 1] && i - e.itemWidth / 20 < n && "left" === e.moveDirection() ? (s = n, e.currentItem = t) : i + e.itemWidth / 20 < n && i + e.itemWidth / 20 > o[t + 1] && "right" === e.moveDirection() && (s = o[t + 1], e.currentItem = t + 1)
            }), e.currentItem
        },
        moveDirection: function() {
            var t, e = this;
            return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
        },
        customEvents: function() {
            var t = this;
            t.$elem.on("owl.next", function() {
                t.next()
            }), t.$elem.on("owl.prev", function() {
                t.prev()
            }), t.$elem.on("owl.play", function(e, o) {
                t.options.autoPlay = o, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function() {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function(e, o) {
                t.goTo(o)
            }), t.$elem.on("owl.jumpTo", function(e, o) {
                t.jumpTo(o)
            })
        },
        stopOnHover: function() {
            var t = this;
            t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                t.stop()
            }), t.$elem.on("mouseout", function() {
                "stop" !== t.hoverStatus && t.play()
            }))
        },
        lazyLoad: function() {
            var e = this;
            if (e.options.lazyLoad === !1) return !1;
            for (var o = 0; o < e.itemsAmount; o++) {
                var s = t(e.$owlItems[o]);
                if ("loaded" !== s.data("owl-loaded")) {
                    var n, a = s.data("owl-item"),
                        r = s.find(".lazyOwl");
                    "string" == typeof r.data("src") ? (s.data("owl-loaded") === i && (r.hide(), s.addClass("loading").data("owl-loaded", "checked")), n = e.options.lazyFollow === !0 ? a >= e.currentItem : !0, n && a < e.currentItem + e.options.items && r.length && e.lazyPreload(s, r)) : s.data("owl-loaded", "loaded")
                }
            }
        },
        lazyPreload: function(t, e) {
            function o() {
                n += 1, s.completeImg(e.get(0)) ? i() : 100 >= n ? setTimeout(o, 100) : i()
            }

            function i() {
                t.data("owl-loaded", "loaded").removeClass("loading"), e.removeAttr("data-src"), "fade" === s.options.lazyEffect ? e.fadeIn(400) : e.show()
            }
            var s = this,
                n = 0;
            e[0].src = e.data("src"), o()
        },
        autoHeight: function() {
            function e() {
                a += 1, s.completeImg(n.get(0)) ? o() : 100 >= a ? setTimeout(e, 100) : s.wrapperOuter.css("height", "")
            }

            function o() {
                var e = t(s.$owlItems[s.currentItem]).height();
                s.wrapperOuter.css("height", e + "px"), s.wrapperOuter.hasClass("autoHeight") || setTimeout(function() {
                    s.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            var s = this,
                n = t(s.$owlItems[s.currentItem]).find("img");
            if (n.get(0) !== i) {
                var a = 0;
                e()
            } else o()
        },
        completeImg: function(t) {
            return t.complete ? "undefined" != typeof t.naturalWidth && 0 == t.naturalWidth ? !1 : !0 : !1
        },
        onVisibleItems: function() {
            var e = this;
            e.options.addClassActive === !0 && e.$owlItems.removeClass("active"), e.visibleItems = [];
            for (var o = e.currentItem; o < e.currentItem + e.options.items; o++) e.visibleItems.push(o), e.options.addClassActive === !0 && t(e.$owlItems[o]).addClass("active");
            e.owl.visibleItems = e.visibleItems
        },
        transitionTypes: function(t) {
            var e = this;
            e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
        },
        singleItemTransition: function() {
            function t(t) {
                return {
                    position: "relative",
                    left: t + "px"
                }
            }
            var e = this;
            e.isTransition = !0;
            var o = e.outClass,
                i = e.inClass,
                s = e.$owlItems.eq(e.currentItem),
                n = e.$owlItems.eq(e.prevItem),
                a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
            e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": r + "px",
                "-moz-perspective-origin": r + "px",
                "-ms-perspective-origin": r + "px",
                "-o-perspective-origin": r + "px",
                "perspective-origin": r + "px"
            });
            var l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            n.css(t(a, 10)).addClass(o).on(l, function() {
                e.endPrev = !0, n.off(l), e.clearTransStyle(n, o)
            }), s.addClass(i).on(l, function() {
                e.endCurrent = !0, s.off(l), e.clearTransStyle(s, i)
            })
        },
        clearTransStyle: function(t, e) {
            var o = this;
            t.css({
                position: "",
                left: ""
            }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), o.endPrev = !1, o.endCurrent = !1, o.isTransition = !1)
        },
        owlStatus: function() {
            var t = this;
            t.owl = {
                userOptions: t.userOptions,
                baseElement: t.$elem,
                userItems: t.$userItems,
                owlItems: t.$owlItems,
                currentItem: t.currentItem,
                prevItem: t.prevItem,
                visibleItems: t.visibleItems,
                isTouch: t.browser.isTouch,
                browser: t.browser
            }
        },
        clearEvents: function() {
            var i = this;
            i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer)
        },
        unWrap: function() {
            var t = this;
            0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            var t = this;
            t.stop(), clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
        },
        reinit: function(e) {
            var o = this,
                i = t.extend({}, o.userOptions, e);
            o.unWrap(), o.init(i, o.$elem)
        },
        addItem: function(t, e) {
            var o, s = this;
            return t ? 0 === s.$elem.children().length ? (s.$elem.append(t), s.setVars(), !1) : (s.unWrap(), o = e === i || -1 === e ? -1 : e, o >= s.$userItems.length || -1 === o ? s.$userItems.eq(-1).after(t) : s.$userItems.eq(o).before(t), s.setVars(), void 0) : !1
        },
        removeItem: function(t) {
            var e, o = this;
            return 0 === o.$elem.children().length ? !1 : (e = t === i || -1 === t ? -1 : t, o.unWrap(), o.$userItems.eq(e).remove(), o.setVars(), void 0)
        }
    };
    t.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (t(this).data("owl-init") === !0) return !1;
            t(this).data("owl-init", !0);
            var o = Object.create(s);
            o.init(e, this), t.data(this, "owlCarousel", o)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1
    }
}(jQuery, window, document);
! function(e) {
    function n(n, i, a) {
        function s() {
            c.afterLoaded(), c.settings.hideFramesUntilPreloaded && void 0 !== c.settings.preloader && c.settings.preloader !== !1 && c.frames.show(), void 0 !== c.settings.preloader && c.settings.preloader !== !1 ? c.settings.hidePreloaderUsingCSS && c.transitionsSupported ? (c.prependPreloadingCompleteTo = c.settings.prependPreloadingComplete === !0 ? c.settings.preloader : e(c.settings.prependPreloadingComplete), c.prependPreloadingCompleteTo.addClass("preloading-complete"), setTimeout(u, c.settings.hidePreloaderDelay)) : c.settings.preloader.fadeOut(c.settings.hidePreloaderDelay, function() {
                clearInterval(c.defaultPreloader), u()
            }) : u()
        }

        function r(n, t) {
            var i = [];
            if (t)
                for (var a = n; a > 0; a--) i.push(e("body").find('img[src="' + c.settings.preloadTheseImages[a - 1] + '"]'));
            else
                for (var s = n; s > 0; s--) c.frames.eq(c.settings.preloadTheseFrames[s - 1] - 1).find("img").each(function() {
                    i.push(e(this)[0])
                });
            return i
        }

        function o(n, t) {
            function i() {
                var n = e(l),
                    i = e(m);
                o && (m.length ? o.reject(c, n, i) : o.resolve(c)), e.isFunction(t) && t.call(r, c, n, i)
            }

            function a(n, t) {
                n.src !== s && -1 === e.inArray(n, d) && (d.push(n), t ? m.push(n) : l.push(n), e.data(n, "imagesLoaded", {
                    isBroken: t,
                    src: n.src
                }), u && o.notifyWith(e(n), [t, c, e(l), e(m)]), c.length === d.length && (setTimeout(i), c.unbind(".imagesLoaded")))
            }
            var s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                r = n,
                o = e.isFunction(e.Deferred) ? e.Deferred() : 0,
                u = e.isFunction(o.notify),
                c = r.find("img").add(r.filter("img")),
                d = [],
                l = [],
                m = [];
            e.isPlainObject(t) && e.each(t, function(e, n) {
                "callback" === e ? t = n : o && o[e](n)
            }), c.length ? c.bind("load.imagesLoaded error.imagesLoaded", function(e) {
                a(e.target, "error" === e.type)
            }).each(function(n, t) {
                var i = t.src,
                    r = e.data(t, "imagesLoaded");
                return r && r.src === i ? (a(t, r.isBroken), void 0) : t.complete && void 0 !== t.naturalWidth ? (a(t, 0 === t.naturalWidth || 0 === t.naturalHeight), void 0) : ((t.readyState || t.complete) && (t.src = s, t.src = i), void 0)
            }) : i()
        }

        function u() {
            function n(e, n) {
                var t, i;
                for (i in n) t = "left" === i || "right" === i ? s[i] : i, e === parseFloat(t) && c._initCustomKeyEvent(n[i])
            }

            function t() {
                c.canvas.on("touchmove.sequence", i), r = null, u = !1
            }

            function i(e) {
                if (c.settings.swipePreventsDefault && e.preventDefault(), u) {
                    var n = e.originalEvent.touches[0].pageX,
                        i = e.originalEvent.touches[0].pageY,
                        a = r - n,
                        s = o - i;
                    Math.abs(a) >= c.settings.swipeThreshold ? (t(), a > 0 ? c._initCustomKeyEvent(c.settings.swipeEvents.left) : c._initCustomKeyEvent(c.settings.swipeEvents.right)) : Math.abs(s) >= c.settings.swipeThreshold && (t(), s > 0 ? c._initCustomKeyEvent(c.settings.swipeEvents.down) : c._initCustomKeyEvent(c.settings.swipeEvents.up))
                }
            }

            function a(e) {
                1 === e.originalEvent.touches.length && (r = e.originalEvent.touches[0].pageX, o = e.originalEvent.touches[0].pageY, u = !0, c.canvas.on("touchmove.sequence", i))
            }
            if (e(c.settings.preloader).remove(), c.nextButton = c._renderUiElements(c.settings.nextButton, ".sequence-next"), c.prevButton = c._renderUiElements(c.settings.prevButton, ".sequence-prev"), c.pauseButton = c._renderUiElements(c.settings.pauseButton, ".sequence-pause"), c.pagination = c._renderUiElements(c.settings.pagination, ".sequence-pagination"), void 0 !== c.nextButton && c.nextButton !== !1 && c.settings.showNextButtonOnInit === !0 && c.nextButton.show(), void 0 !== c.prevButton && c.prevButton !== !1 && c.settings.showPrevButtonOnInit === !0 && c.prevButton.show(), void 0 !== c.pauseButton && c.pauseButton !== !1 && c.settings.showPauseButtonOnInit === !0 && c.pauseButton.show(), c.settings.pauseIcon !== !1 ? (c.pauseIcon = c._renderUiElements(c.settings.pauseIcon, ".sequence-pause-icon"), void 0 !== c.pauseIcon && c.pauseIcon.hide()) : c.pauseIcon = void 0, void 0 !== c.pagination && c.pagination !== !1 && (c.paginationLinks = c.pagination.children(), c.paginationLinks.on("click.sequence", function() {
                    var n = e(this).index() + 1;
                    c.goTo(n)
                }), c.settings.showPaginationOnInit === !0 && c.pagination.show()), c.nextFrameID = c.settings.startingFrameID, c.settings.hashTags === !0 && (c.frames.each(function() {
                    c.frameHashID.push(e(this).prop(c.getHashTagFrom))
                }), c.currentHashTag = location.hash.replace("#", ""), void 0 === c.currentHashTag || "" === c.currentHashTag ? c.nextFrameID = c.settings.startingFrameID : (c.frameHashIndex = e.inArray(c.currentHashTag, c.frameHashID), c.nextFrameID = -1 !== c.frameHashIndex ? c.frameHashIndex + 1 : c.settings.startingFrameID)), c.nextFrame = c.frames.eq(c.nextFrameID - 1), c.nextFrameChildren = c.nextFrame.children(), void 0 !== c.pagination && e(c.paginationLinks[c.settings.startingFrameID - 1]).addClass("current"), c.transitionsSupported ? c.settings.animateStartingFrameIn ? c.settings.reverseAnimationsWhenNavigatingBackwards && c.settings.autoPlayDirection - 1 && c.settings.animateStartingFrameIn ? (c._resetElements(c.transitionPrefix, c.nextFrameChildren, "0s"), c.nextFrame.addClass("animate-out"), c.goTo(c.nextFrameID, -1, !0)) : c.goTo(c.nextFrameID, 1, !0) : (c.currentFrameID = c.nextFrameID, c.settings.moveActiveFrameToTop && c.nextFrame.css("z-index", c.numberOfFrames), c._resetElements(c.transitionPrefix, c.nextFrameChildren, "0s"), c.nextFrame.addClass("animate-in"), c.settings.hashTags && c.settings.hashChangesOnFirstFrame && (c.currentHashTag = c.nextFrame.prop(c.getHashTagFrom), document.location.hash = "#" + c.currentHashTag), setTimeout(function() {
                    c._resetElements(c.transitionPrefix, c.nextFrameChildren, "")
                }, 100), c._resetAutoPlay(!0, c.settings.autoPlayDelay)) : (c.container.addClass("sequence-fallback"), c.currentFrameID = c.nextFrameID, c.settings.hashTags && c.settings.hashChangesOnFirstFrame && (c.currentHashTag = c.nextFrame.prop(c.getHashTagFrom), document.location.hash = "#" + c.currentHashTag), c.frames.addClass("animate-in"), c.frames.not(":eq(" + (c.nextFrameID - 1) + ")").css({
                    display: "none",
                    opacity: 0
                }), c._resetAutoPlay(!0, c.settings.autoPlayDelay)), void 0 !== c.nextButton && c.nextButton.bind("click.sequence", function() {
                    c.next()
                }), void 0 !== c.prevButton && c.prevButton.bind("click.sequence", function() {
                    c.prev()
                }), void 0 !== c.pauseButton && c.pauseButton.bind("click.sequence", function() {
                    c.pause(!0)
                }), c.settings.keyNavigation) {
                var s = {
                    left: 37,
                    right: 39
                };
                e(document).bind("keydown.sequence", function(e) {
                    var t = String.fromCharCode(e.keyCode);
                    t > 0 && t <= c.numberOfFrames && c.settings.numericKeysGoToFrames && (c.nextFrameID = t, c.goTo(c.nextFrameID)), n(e.keyCode, c.settings.keyEvents), n(e.keyCode, c.settings.customKeyEvents)
                })
            }
            if (c.canvas.on({
                    "mouseenter.sequence": function() {
                        c.settings.pauseOnHover && c.settings.autoPlay && !c.hasTouch && (c.isBeingHoveredOver = !0, c.isHardPaused || c.pause())
                    },
                    "mouseleave.sequence": function() {
                        c.settings.pauseOnHover && c.settings.autoPlay && !c.hasTouch && (c.isBeingHoveredOver = !1, c.isHardPaused || c.unpause())
                    }
                }), c.settings.hashTags && e(window).bind("hashchange.sequence", function() {
                    var n = location.hash.replace("#", "");
                    c.currentHashTag !== n && (c.currentHashTag = n, c.frameHashIndex = e.inArray(c.currentHashTag, c.frameHashID), -1 !== c.frameHashIndex && (c.nextFrameID = c.frameHashIndex + 1, c.goTo(c.nextFrameID)))
                }), c.settings.swipeNavigation && c.hasTouch) {
                var r, o, u = !1;
                c.canvas.on("touchstart.sequence", a)
            }
        }
        var c = this;
        c.container = e(n), c.canvas = c.container.children(".sequence-canvas"), c.frames = c.canvas.children("li"), c._modernizrForSequence();
        var d = {
                WebkitTransition: "-webkit-",
                WebkitAnimation: "-webkit-",
                MozTransition: "-moz-",
                "MozAnimation ": "-moz-",
                OTransition: "-o-",
                OAnimation: "-o-",
                msTransition: "-ms-",
                msAnimation: "-ms-",
                transition: "",
                animation: ""
            },
            l = {
                WebkitTransition: "webkitTransitionEnd.sequence",
                WebkitAnimation: "webkitAnimationEnd.sequence",
                MozTransition: "transitionend.sequence",
                MozAnimation: "animationend.sequence",
                OTransition: "otransitionend.sequence",
                OAnimation: "oanimationend.sequence",
                msTransition: "MSTransitionEnd.sequence",
                msAnimation: "MSAnimationEnd.sequence",
                transition: "transitionend.sequence",
                animation: "animationend.sequence"
            };
        c.transitionPrefix = d[ModernizrForSequence.prefixed("transition")], c.animationPrefix = d[ModernizrForSequence.prefixed("animation")], c.transitionProperties = {}, c.transitionEnd = l[ModernizrForSequence.prefixed("transition")] + " " + l[ModernizrForSequence.prefixed("animation")], c.numberOfFrames = c.frames.length, c.transitionsSupported = void 0 !== c.transitionPrefix ? !0 : !1, c.hasTouch = "ontouchstart" in window ? !0 : !1, c.isPaused = !1, c.isBeingHoveredOver = !1, c.container.removeClass("sequence-destroyed"), c.paused = function() {}, c.unpaused = function() {}, c.beforeNextFrameAnimatesIn = function() {}, c.afterNextFrameAnimatesIn = function() {}, c.beforeCurrentFrameAnimatesOut = function() {}, c.afterCurrentFrameAnimatesOut = function() {}, c.afterLoaded = function() {}, c.destroyed = function() {}, c.settings = e.extend({}, a, i), c.settings.preloader = c._renderUiElements(c.settings.preloader, ".sequence-preloader"), c.isStartingFrame = c.settings.animateStartingFrameIn ? !0 : !1, c.settings.unpauseDelay = null === c.settings.unpauseDelay ? c.settings.autoPlayDelay : c.settings.unpauseDelay, c.getHashTagFrom = c.settings.hashDataAttribute ? "data-sequence-hashtag" : "id", c.frameHashID = [], c.direction = c.settings.autoPlayDirection, c.settings.hideFramesUntilPreloaded && void 0 !== c.settings.preloader && c.settings.preloader !== !1 && c.frames.hide(), "-o-" === c.transitionPrefix && (c.transitionsSupported = c._operaTest()), c.frames.removeClass("animate-in");
        var m = c.settings.preloadTheseFrames.length,
            p = c.settings.preloadTheseImages.length;
        if (c.settings.windowLoaded === !0 && (t = c.settings.windowLoaded), void 0 === c.settings.preloader || c.settings.preloader === !1 || 0 === m && 0 === p) t === !0 ? (s(), e(this).unbind("load.sequence")) : e(window).bind("load.sequence", function() {
            s(), e(this).unbind("load.sequence")
        });
        else {
            var g = r(m),
                h = r(p, !0),
                f = e(g.concat(h));
            o(f, s)
        }
    }
    var t = !1;
    e(window).bind("load", function() {
        t = !0
    }), n.prototype = {
        startAutoPlay: function(e) {
            var n = this;
            e = void 0 === e ? n.settings.autoPlayDelay : e, n.unpause(), n._resetAutoPlay(), n.autoPlayTimer = setTimeout(function() {
                1 === n.settings.autoPlayDirection ? n.next() : n.prev()
            }, e)
        },
        stopAutoPlay: function() {
            var e = this;
            e.pause(!0), clearTimeout(e.autoPlayTimer)
        },
        pause: function(e) {
            var n = this;
            n.isSoftPaused ? n.unpause() : (void 0 !== n.pauseButton && (n.pauseButton.addClass("paused"), void 0 !== n.pauseIcon && n.pauseIcon.show()), n.paused(), n.isSoftPaused = !0, n.isHardPaused = e ? !0 : !1, n.isPaused = !0, n._resetAutoPlay())
        },
        unpause: function(e) {
            var n = this;
            void 0 !== n.pauseButton && (n.pauseButton.removeClass("paused"), void 0 !== n.pauseIcon && n.pauseIcon.hide()), n.isSoftPaused = !1, n.isHardPaused = !1, n.isPaused = !1, n.active ? n.delayUnpause = !0 : (e !== !1 && n.unpaused(), n._resetAutoPlay(!0, n.settings.unpauseDelay))
        },
        next: function() {
            var e = this;
            id = e.currentFrameID !== e.numberOfFrames ? e.currentFrameID + 1 : 1, e.active === !1 || void 0 === e.active ? e.goTo(id, 1) : e.goTo(id, 1, !0)
        },
        prev: function() {
            var e = this;
            id = 1 === e.currentFrameID ? e.numberOfFrames : e.currentFrameID - 1, e.active === !1 || void 0 === e.active ? e.goTo(id, -1) : e.goTo(id, -1, !0)
        },
        goTo: function(n, t, i) {
            function a() {
                s._setHashTag(), s.active = !1, s._resetAutoPlay(!0, s.settings.autoPlayDelay)
            }
            var s = this;
            s.nextFrameID = parseFloat(n);
            var r = i === !0 ? 0 : s.settings.transitionThreshold;
            if (s.nextFrameID === s.currentFrameID || s.settings.navigationSkip && s.navigationSkipThresholdActive || !s.settings.navigationSkip && s.active || !s.transitionsSupported && s.active || !s.settings.cycle && 1 === t && s.currentFrameID === s.numberOfFrames || !s.settings.cycle && -1 === t && 1 === s.currentFrameID || s.settings.preventReverseSkipping && s.direction !== t && s.active) return !1;
            if (s.settings.navigationSkip && s.active && (s.navigationSkipThresholdActive = !0, s.settings.fadeFrameWhenSkipped && s.nextFrame.stop().animate({
                    opacity: 0
                }, s.settings.fadeFrameTime), clearTimeout(s.transitionThresholdTimer), setTimeout(function() {
                    s.navigationSkipThresholdActive = !1
                }, s.settings.navigationSkipThreshold)), !s.active || s.settings.navigationSkip) {
                if (s.active = !0, s._resetAutoPlay(), s.direction = void 0 === t ? s.nextFrameID > s.currentFrameID ? 1 : -1 : t, s.currentFrame = s.canvas.children(".animate-in"), s.nextFrame = s.frames.eq(s.nextFrameID - 1), s.currentFrameChildren = s.currentFrame.children(), s.nextFrameChildren = s.nextFrame.children(), void 0 !== s.pagination && (s.paginationLinks.removeClass("current"), e(s.paginationLinks[s.nextFrameID - 1]).addClass("current")), s.transitionsSupported) void 0 !== s.currentFrame.length ? (s.beforeCurrentFrameAnimatesOut(), s.settings.moveActiveFrameToTop && s.currentFrame.css("z-index", 1), s._resetElements(s.transitionPrefix, s.nextFrameChildren, "0s"), s.settings.reverseAnimationsWhenNavigatingBackwards && 1 !== s.direction ? s.settings.reverseAnimationsWhenNavigatingBackwards && -1 === s.direction && (s.nextFrame.addClass("animate-out"), s._reverseTransitionProperties()) : (s.nextFrame.removeClass("animate-out"), s._resetElements(s.transitionPrefix, s.currentFrameChildren, ""))) : s.isStartingFrame = !1, s.active = !0, s.currentFrame.unbind(s.transitionEnd), s.nextFrame.unbind(s.transitionEnd), s.settings.fadeFrameWhenSkipped && s.settings.navigationSkip && s.nextFrame.css("opacity", 1), s.beforeNextFrameAnimatesIn(), s.settings.moveActiveFrameToTop && s.nextFrame.css("z-index", s.numberOfFrames), s.settings.reverseAnimationsWhenNavigatingBackwards && 1 !== s.direction ? s.settings.reverseAnimationsWhenNavigatingBackwards && -1 === s.direction && (setTimeout(function() {
                    s._resetElements(s.transitionPrefix, s.currentFrameChildren, ""), s._resetElements(s.transitionPrefix, s.nextFrameChildren, ""), s._reverseTransitionProperties(), s._waitForAnimationsToComplete(s.nextFrame, s.nextFrameChildren, "in"), ("function () {}" !== s.afterCurrentFrameAnimatesOut || s.settings.transitionThreshold === !0 && i !== !0) && s._waitForAnimationsToComplete(s.currentFrame, s.currentFrameChildren, "out", !0, -1)
                }, 50), setTimeout(function() {
                    s.settings.transitionThreshold === !1 || 0 === s.settings.transitionThreshold || i === !0 ? (s.currentFrame.removeClass("animate-in"), s.nextFrame.toggleClass("animate-out animate-in")) : (s.currentFrame.removeClass("animate-in"), s.settings.transitionThreshold !== !0 && (s.transitionThresholdTimer = setTimeout(function() {
                        s.nextFrame.toggleClass("animate-out animate-in")
                    }, r)))
                }, 50)) : (setTimeout(function() {
                    s._resetElements(s.transitionPrefix, s.nextFrameChildren, ""), s._waitForAnimationsToComplete(s.nextFrame, s.nextFrameChildren, "in"), ("function () {}" !== s.afterCurrentFrameAnimatesOut || s.settings.transitionThreshold === !0 && i !== !0) && s._waitForAnimationsToComplete(s.currentFrame, s.currentFrameChildren, "out", !0, 1)
                }, 50), setTimeout(function() {
                    s.settings.transitionThreshold === !1 || 0 === s.settings.transitionThreshold || i === !0 ? (s.currentFrame.toggleClass("animate-out animate-in"), s.nextFrame.addClass("animate-in")) : (s.currentFrame.toggleClass("animate-out animate-in"), s.settings.transitionThreshold !== !0 && (s.transitionThresholdTimer = setTimeout(function() {
                        s.nextFrame.addClass("animate-in")
                    }, r)))
                }, 50));
                else switch (s.settings.fallback.theme) {
                    case "fade":
                        s.frames.css({
                            position: "relative"
                        }), s.beforeCurrentFrameAnimatesOut(), s.currentFrame = s.frames.eq(s.currentFrameID - 1), s.currentFrame.animate({
                            opacity: 0
                        }, s.settings.fallback.speed, function() {
                            s.currentFrame.css({
                                display: "none",
                                "z-index": "1"
                            }), s.afterCurrentFrameAnimatesOut(), s.beforeNextFrameAnimatesIn(), s.nextFrame.css({
                                display: "block",
                                "z-index": s.numberOfFrames
                            }).animate({
                                opacity: 1
                            }, 500, function() {
                                s.afterNextFrameAnimatesIn()
                            }), a()
                        }), s.frames.css({
                            position: "relative"
                        });
                        break;
                    case "slide":
                    default:
                        var o = {},
                            u = {},
                            c = {};
                        1 === s.direction ? (o.left = "-100%", u.left = "100%") : (o.left = "100%", u.left = "-100%"), c.left = "0", c.opacity = 1, s.currentFrame = s.frames.eq(s.currentFrameID - 1), s.beforeCurrentFrameAnimatesOut(), s.currentFrame.animate(o, s.settings.fallback.speed, function() {
                            s.currentFrame.css({
                                display: "none",
                                "z-index": "1"
                            }), s.afterCurrentFrameAnimatesOut()
                        }), s.beforeNextFrameAnimatesIn(), s.nextFrame.show().css(u), s.nextFrame.css({
                            display: "block",
                            "z-index": s.numberOfFrames
                        }).animate(c, s.settings.fallback.speed, function() {
                            a(), s.afterNextFrameAnimatesIn()
                        })
                }
                s.currentFrameID = s.nextFrameID
            }
        },
        destroy: function(n) {
            var t = this;
            t.container.addClass("sequence-destroyed"), void 0 !== t.nextButton && t.nextButton.unbind("click.sequence"), void 0 !== t.prevButton && t.prevButton.unbind("click.sequence"), void 0 !== t.pauseButton && t.pauseButton.unbind("click.sequence"), void 0 !== t.pagination && t.paginationLinks.unbind("click.sequence"), e(document).unbind("keydown.sequence"), t.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence"), e(window).unbind("hashchange.sequence"), t.stopAutoPlay(), clearTimeout(t.transitionThresholdTimer), t.canvas.children("li").remove(), t.canvas.prepend(t.frames), t.frames.removeClass("animate-in animate-out").removeAttr("style"), t.frames.eq(t.currentFrameID - 1).addClass("animate-in"), void 0 !== t.nextButton && t.nextButton !== !1 && t.nextButton.hide(), void 0 !== t.prevButton && t.prevButton !== !1 && t.prevButton.hide(), void 0 !== t.pauseButton && t.pauseButton !== !1 && t.pauseButton.hide(), void 0 !== t.pauseIcon && t.pauseIcon !== !1 && t.pauseIcon.hide(), void 0 !== t.pagination && t.pagination !== !1 && t.pagination.hide(), void 0 !== n && n(), t.destroyed(), t.container.removeData()
        },
        _initCustomKeyEvent: function(e) {
            var n = this;
            switch (e) {
                case "next":
                    n.next();
                    break;
                case "prev":
                    n.prev();
                    break;
                case "pause":
                    n.pause(!0)
            }
        },
        _resetElements: function(e, n, t) {
            var i = this;
            n.css(i._prefixCSS(e, {
                "transition-duration": t,
                "transition-delay": t,
                "transition-timing-function": ""
            }))
        },
        _reverseTransitionProperties: function() {
            var n = this,
                t = [],
                i = [];
            n.currentFrameChildren.each(function() {
                t.push(parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")) + parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", "")))
            }), n.nextFrameChildren.each(function() {
                i.push(parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")) + parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", "")))
            });
            var a = Math.max.apply(Math, t),
                s = Math.max.apply(Math, i),
                r = a - s,
                o = 0,
                u = 0;
            0 > r && !n.settings.preventDelayWhenReversingAnimations ? o = Math.abs(r) : r > 0 && (u = Math.abs(r));
            var c = function(t, i, a, s) {
                function r(e) {
                    e = e.split(",")[0];
                    var n = {
                        linear: "cubic-bezier(0.0,0.0,1.0,1.0)",
                        ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                        "ease-in": "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
                        "ease-in-out": "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
                        "ease-out": "cubic-bezier(0.0, 0.0, 0.58, 1.0)"
                    };
                    return e.indexOf("cubic-bezier") < 0 && (e = n[e]), e
                }
                i.each(function() {
                    var i = parseFloat(e(this).css(n.transitionPrefix + "transition-duration").replace("s", "")),
                        o = parseFloat(e(this).css(n.transitionPrefix + "transition-delay").replace("s", "")),
                        u = e(this).css(n.transitionPrefix + "transition-timing-function");
                    if (-1 === u.indexOf("cubic")) var u = r(u);
                    if (n.settings.reverseEaseWhenNavigatingBackwards) {
                        var c = u.replace("cubic-bezier(", "").replace(")", "").split(",");
                        e.each(c, function(e, n) {
                            c[e] = parseFloat(n)
                        });
                        var d = [1 - c[2], 1 - c[3], 1 - c[0], 1 - c[1]];
                        u = "cubic-bezier(" + d + ")"
                    }
                    var l = i + o;
                    t["transition-duration"] = i + "s", t["transition-delay"] = a - l + s + "s", t["transition-timing-function"] = u, e(this).css(n._prefixCSS(n.transitionPrefix, t))
                })
            };
            c(n.transitionProperties, n.currentFrameChildren, a, o), c(n.transitionProperties, n.nextFrameChildren, s, u)
        },
        _prefixCSS: function(e, n) {
            var t = {};
            for (var i in n) t[e + i] = n[i];
            return t
        },
        _resetAutoPlay: function(e, n) {
            var t = this;
            e === !0 ? t.settings.autoPlay && !t.isSoftPaused && (clearTimeout(t.autoPlayTimer), t.autoPlayTimer = setTimeout(function() {
                1 === t.settings.autoPlayDirection ? t.next() : t.prev()
            }, n)) : clearTimeout(t.autoPlayTimer)
        },
        _renderUiElements: function(n, t) {
            var i = this;
            switch (n) {
                case !1:
                    return void 0;
                case !0:
                    return ".sequence-preloader" === t && i._defaultPreloader(i.container, i.transitionsSupported, i.animationPrefix), e(t, i.container);
                default:
                    return e(n, i.container)
            }
        },
        _waitForAnimationsToComplete: function(n, t, i, a, s) {
            var r = this;
            if ("out" === i) var o = function() {
                r.afterCurrentFrameAnimatesOut(), r.settings.transitionThreshold === !0 && (1 === s ? r.nextFrame.addClass("animate-in") : -1 === s && r.nextFrame.toggleClass("animate-out animate-in"))
            };
            else if ("in" === i) var o = function() {
                r.afterNextFrameAnimatesIn(), r._setHashTag(), r.active = !1, r.isHardPaused || r.isBeingHoveredOver || (r.delayUnpause ? (r.delayUnpause = !1, r.unpause()) : r.unpause(!1))
            };
            t.data("animationEnded", !1), n.bind(r.transitionEnd, function(i) {
                e(i.target).data("animationEnded", !0);
                var a = !0;
                t.each(function() {
                    return e(this).data("animationEnded") === !1 ? (a = !1, !1) : void 0
                }), a && (n.unbind(r.transitionEnd), o())
            })
        },
        _setHashTag: function() {
            var n = this;
            n.settings.hashTags && (n.currentHashTag = n.nextFrame.prop(n.getHashTagFrom), n.frameHashIndex = e.inArray(n.currentHashTag, n.frameHashID), -1 === n.frameHashIndex || !n.settings.hashChangesOnFirstFrame && n.isStartingFrame && n.transitionsSupported ? (n.nextFrameID = n.settings.startingFrameID, n.isStartingFrame = !1) : (n.nextFrameID = n.frameHashIndex + 1, document.location.hash = "#" + n.currentHashTag))
        },
        _modernizrForSequence: function() {
            window.ModernizrForSequence = function(e, n, t) {
                function i(e) {
                    v.cssText = e
                }

                function a(e, n) {
                    return typeof e === n
                }

                function s(e, n) {
                    return !!~("" + e).indexOf(n)
                }

                function r(e, n) {
                    for (var i in e) {
                        var a = e[i];
                        if (!s(a, "-") && v[a] !== t) return "pfx" == n ? a : !0
                    }
                    return !1
                }

                function o(e, n, i) {
                    for (var s in e) {
                        var r = n[e[s]];
                        if (r !== t) return i === !1 ? e[s] : a(r, "function") ? r.bind(i || n) : r
                    }
                    return !1
                }

                function u(e, n, t) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1),
                        s = (e + " " + x.join(i + " ") + i).split(" ");
                    return a(n, "string") || a(n, "undefined") ? r(s, n) : (s = (e + " " + y.join(i + " ") + i).split(" "), o(s, n, t))
                }
                var c, d, l, m = "2.6.1",
                    p = {},
                    g = n.documentElement,
                    h = "modernizrForSequence",
                    f = n.createElement(h),
                    v = f.style,
                    F = ({}.toString, "Webkit Moz O ms"),
                    x = F.split(" "),
                    y = F.toLowerCase().split(" "),
                    T = {
                        svg: "http://www.w3.org/2000/svg"
                    },
                    P = {},
                    b = [],
                    I = b.slice,
                    w = {}.hasOwnProperty;
                l = a(w, "undefined") || a(w.call, "undefined") ? function(e, n) {
                    return n in e && a(e.constructor.prototype[n], "undefined")
                } : function(e, n) {
                    return w.call(e, n)
                }, Function.prototype.bind || (Function.prototype.bind = function(e) {
                    var n = self;
                    if ("function" != typeof n) throw new TypeError;
                    var t = I.call(arguments, 1),
                        i = function() {
                            if (self instanceof i) {
                                var a = function() {};
                                a.prototype = n.prototype;
                                var s = new a,
                                    r = n.apply(s, t.concat(I.call(arguments)));
                                return Object(r) === r ? r : s
                            }
                            return n.apply(e, t.concat(I.call(arguments)))
                        };
                    return i
                }), P.svg = function() {
                    return !!n.createElementNS && !!n.createElementNS(T.svg, "svg").createSVGRect
                };
                for (var C in P) l(P, C) && (d = C.toLowerCase(), p[d] = P[C](), b.push((p[d] ? "" : "no-") + d));
                return p.addTest = function(e, n) {
                    if ("object" == typeof e)
                        for (var i in e) l(e, i) && p.addTest(i, e[i]);
                    else {
                        if (e = e.toLowerCase(), p[e] !== t) return p;
                        n = "function" == typeof n ? n() : n, enableClasses && (g.className += " " + (n ? "" : "no-") + e), p[e] = n
                    }
                    return p
                }, i(""), f = c = null, p._version = m, p._domPrefixes = y, p._cssomPrefixes = x, p.testProp = function(e) {
                    return r([e])
                }, p.testAllProps = u, p.prefixed = function(e, n, t) {
                    return n ? u(e, n, t) : u(e, "pfx")
                }, p
            }(self, self.document)
        },
        _defaultPreloader: function(n, t, i) {
            var a = '<div class="sequence-preloader">123<svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';
            e("head").append("<style>qweqweqwe.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@" + i + "keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #1abc9c;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;" + i + "animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){" + i + "animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){" + i + "animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;" + i + "transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #1abc9c; margin-right: 4px; float: left;}</style>"), n.prepend(a), ModernizrForSequence.svg || t ? t || setInterval(function() {
                e(".sequence-preloader").fadeToggle(500)
            }, 500) : (e(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>'), setInterval(function() {
                e(".sequence-preloader .circle").fadeToggle(500)
            }, 500))
        },
        _operaTest: function() {
            e("body").append('<span id="sequence-opera-test"></span>');
            var n = e("#sequence-opera-test");
            return n.css("-o-transition", "1s"), "1s" !== n.css("-o-transition") ? (n.remove(), !1) : (n.remove(), !0)
        }
    };
    var i = {
        startingFrameID: 1,
        cycle: !0,
        animateStartingFrameIn: !1,
        transitionThreshold: !1,
        reverseAnimationsWhenNavigatingBackwards: !0,
        reverseEaseWhenNavigatingBackwards: !0,
        preventDelayWhenReversingAnimations: !1,
        moveActiveFrameToTop: !0,
        windowLoaded: !1,
        autoPlay: !1,
        autoPlayDirection: 1,
        autoPlayDelay: 5e3,
        navigationSkip: !0,
        navigationSkipThreshold: 250,
        fadeFrameWhenSkipped: !0,
        fadeFrameTime: 150,
        preventReverseSkipping: !1,
        nextButton: !1,
        showNextButtonOnInit: !0,
        prevButton: !1,
        showPrevButtonOnInit: !0,
        pauseButton: !1,
        unpauseDelay: null,
        pauseOnHover: !0,
        pauseIcon: !1,
        showPauseButtonOnInit: !0,
        pagination: !1,
        showPaginationOnInit: !0,
        preloader: !1,
        preloadTheseFrames: [1],
        preloadTheseImages: [],
        hideFramesUntilPreloaded: !0,
        prependPreloadingComplete: !0,
        hidePreloaderUsingCSS: !0,
        hidePreloaderDelay: 0,
        keyNavigation: !0,
        numericKeysGoToFrames: !0,
        keyEvents: {
            left: "prev",
            right: "next"
        },
        customKeyEvents: {},
        swipeNavigation: !0,
        swipeThreshold: 20,
        swipePreventsDefault: !1,
        swipeEvents: {
            left: "prev",
            right: "next",
            up: !1,
            down: !1
        },
        hashTags: !1,
        hashDataAttribute: !1,
        hashChangesOnFirstFrame: !1,
        fallback: {
            theme: "slide",
            speed: 500
        }
    };
    e.fn.sequence = function(t) {
        return this.each(function() {
            e.data(this, "sequence") || e.data(this, "sequence", new n(e(this), t, i))
        })
    }
}(jQuery);
! function(s) {
    "use strict";

    function e(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }

    function n(s, e) {
        var n = a(s, e) ? c : t;
        n(s, e)
    }
    var a, t, c;
    "classList" in document.documentElement ? (a = function(s, e) {
        return s.classList.contains(e)
    }, t = function(s, e) {
        s.classList.add(e)
    }, c = function(s, e) {
        s.classList.remove(e)
    }) : (a = function(s, n) {
        return e(n).test(s.className)
    }, t = function(s, e) {
        a(s, e) || (s.className = s.className + " " + e)
    }, c = function(s, n) {
        s.className = s.className.replace(e(n), " ")
    });
    var i = {
        hasClass: a,
        addClass: t,
        removeClass: c,
        toggleClass: n,
        has: a,
        add: t,
        remove: c,
        toggle: n
    };
    "function" == typeof define && define.amd ? define(i) : s.classie = i
}(window);
! function(t, i) {
    "use strict";
    var s, e = t.document,
        n = t.Modernizr,
        o = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        r = "Moz Webkit O Ms".split(" "),
        a = function(t) {
            var i, s = e.documentElement.style;
            if ("string" == typeof s[t]) return t;
            t = o(t);
            for (var n = 0, a = r.length; a > n; n++)
                if (i = r[n] + t, "string" == typeof s[i]) return i
        },
        h = a("transform"),
        l = a("transitionProperty"),
        u = {
            csstransforms: function() {
                return !!h
            },
            csstransforms3d: function() {
                var t = !!a("perspective");
                if (t) {
                    var s = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        e = "@media (" + s.join("transform-3d),(") + "modernizr)",
                        n = i("<style>" + e + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        o = i('<div id="modernizr" />').appendTo("html");
                    t = 3 === o.height(), o.remove(), n.remove()
                }
                return t
            },
            csstransitions: function() {
                return !!l
            }
        };
    if (n)
        for (s in u) n.hasOwnProperty(s) || n.addTest(s, u[s]);
    else {
        n = t.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var c, d = " ";
        for (s in u) c = u[s](), n[s] = c, d += " " + (c ? "" : "no-") + s;
        i("html").addClass(d)
    }
    if (n.csstransforms) {
        var f = n.csstransforms3d ? {
                translate: function(t) {
                    return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
                },
                scale: function(t) {
                    return "scale3d(" + t + ", " + t + ", 1) "
                }
            } : {
                translate: function(t) {
                    return "translate(" + t[0] + "px, " + t[1] + "px) "
                },
                scale: function(t) {
                    return "scale(" + t + ") "
                }
            },
            m = function(t, s, e) {
                var n, o, r = i.data(t, "isoTransform") || {},
                    a = {},
                    l = {};
                a[s] = e, i.extend(r, a);
                for (n in r) o = r[n], l[n] = f[n](o);
                var u = l.translate || "",
                    c = l.scale || "",
                    d = u + c;
                i.data(t, "isoTransform", r), t.style[h] = d
            };
        i.cssNumber.scale = !0, i.cssHooks.scale = {
            set: function(t, i) {
                m(t, "scale", i)
            },
            get: function(t) {
                var s = i.data(t, "isoTransform");
                return s && s.scale ? s.scale : 1
            }
        }, i.fx.step.scale = function(t) {
            i.cssHooks.scale.set(t.elem, t.now + t.unit)
        }, i.cssNumber.translate = !0, i.cssHooks.translate = {
            set: function(t, i) {
                m(t, "translate", i)
            },
            get: function(t) {
                var s = i.data(t, "isoTransform");
                return s && s.translate ? s.translate : [0, 0]
            }
        }
    }
    var p, y;
    n.csstransitions && (p = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[l], y = a("transitionDuration"));
    var g, v = i.event,
        _ = i.event.handle ? "handle" : "dispatch";
    v.special.smartresize = {
        setup: function() {
            i(this).bind("resize", v.special.smartresize.handler)
        },
        teardown: function() {
            i(this).unbind("resize", v.special.smartresize.handler)
        },
        handler: function(t, i) {
            var s = this,
                e = arguments;
            t.type = "smartresize", g && clearTimeout(g), g = setTimeout(function() {
                v[_].apply(s, e)
            }, "execAsap" === i ? 0 : 100)
        }
    }, i.fn.smartresize = function(t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, i.Isotope = function(t, s, e) {
        this.element = i(s), this._create(t), this._init(e)
    };
    var A = ["width", "height"],
        w = i(t);
    i.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, i.Isotope.prototype = {
        _create: function(t) {
            this.options = i.extend({}, i.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var s = this.element[0].style;
            this.originalStyle = {};
            var e = A.slice(0);
            for (var n in this.options.containerStyle) e.push(n);
            for (var o = 0, r = e.length; r > o; o++) n = e[o], this.originalStyle[n] = s[n] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var a = {
                "original-order": function(t, i) {
                    return i.elemCount++, i.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = i.extend(this.options.getSortData, a), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var h = this;
            setTimeout(function() {
                h.element.addClass(h.options.containerClass)
            }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                h.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(t) {
            var i = this.options.itemSelector,
                s = i ? t.filter(i).add(t.find(i)) : t,
                e = {
                    position: "absolute"
                };
            return s = s.filter(function(t, i) {
                return 1 === i.nodeType
            }), this.usingTransforms && (e.left = 0, e.top = 0), s.css(e).addClass(this.options.itemClass), this.updateSortData(s, !0), s
        },
        _init: function(t) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
        },
        option: function(t) {
            if (i.isPlainObject(t)) {
                this.options = i.extend(!0, this.options, t);
                var s;
                for (var e in t) s = "_update" + o(e), this[s] && this[s]()
            }
        },
        _updateAnimationEngine: function() {
            var t, i = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
            switch (i) {
                case "css":
                case "none":
                    t = !1;
                    break;
                case "jquery":
                    t = !0;
                    break;
                default:
                    t = !n.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var t = this.usingTransforms = this.options.transformsEnabled && n.csstransforms && n.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        },
        _filter: function(t) {
            var i = "" === this.options.filter ? "*" : this.options.filter;
            if (!i) return t;
            var s = this.options.hiddenClass,
                e = "." + s,
                n = t.filter(e),
                o = n;
            if ("*" !== i) {
                o = n.filter(i);
                var r = t.not(e).not(i).addClass(s);
                this.styleQueue.push({
                    $el: r,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: o,
                style: this.options.visibleStyle
            }), o.removeClass(s), t.filter(i)
        },
        updateSortData: function(t, s) {
            var e, n, o = this,
                r = this.options.getSortData;
            t.each(function() {
                e = i(this), n = {};
                for (var t in r) n[t] = s || "original-order" !== t ? r[t](e, o) : i.data(this, "isotope-sort-data")[t];
                i.data(this, "isotope-sort-data", n)
            })
        },
        _sort: function() {
            var t = this.options.sortBy,
                i = this._getSorter,
                s = this.options.sortAscending ? 1 : -1,
                e = function(e, n) {
                    var o = i(e, t),
                        r = i(n, t);
                    return o === r && "original-order" !== t && (o = i(e, "original-order"), r = i(n, "original-order")), (o > r ? 1 : r > o ? -1 : 0) * s
                };
            this.$filteredAtoms.sort(e)
        },
        _getSorter: function(t, s) {
            return i.data(t, "isotope-sort-data")[s]
        },
        _translate: function(t, i) {
            return {
                translate: [t, i]
            }
        },
        _positionAbs: function(t, i) {
            return {
                left: t,
                top: i
            }
        },
        _pushPosition: function(t, i, s) {
            i = Math.round(i + this.offset.left), s = Math.round(s + this.offset.top);
            var e = this.getPositionStyles(i, s);
            this.styleQueue.push({
                $el: t,
                style: e
            }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
                x: i,
                y: s
            })
        },
        layout: function(t, i) {
            var s = this.options.layoutMode;
            if (this["_" + s + "Layout"](t), this.options.resizesContainer) {
                var e = this["_" + s + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: e
                })
            }
            this._processStyleQueue(t, i), this.isLaidOut = !0
        },
        _processStyleQueue: function(t, s) {
            var e, o, r, a, h = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                l = this.options.animationOptions,
                u = this.options.onLayout;
            if (o = function(t, i) {
                    i.$el[h](i.style, l)
                }, this._isInserting && this.isUsingJQueryAnimation) o = function(t, i) {
                e = i.$el.hasClass("no-transition") ? "css" : h, i.$el[e](i.style, l)
            };
            else if (s || u || l.complete) {
                var c = !1,
                    d = [s, u, l.complete],
                    f = this;
                if (r = !0, a = function() {
                        if (!c) {
                            for (var i, s = 0, e = d.length; e > s; s++) i = d[s], "function" == typeof i && i.call(f.element, t, f);
                            c = !0
                        }
                    }, this.isUsingJQueryAnimation && "animate" === h) l.complete = a, r = !1;
                else if (n.csstransitions) {
                    for (var m, g = 0, v = this.styleQueue[0], _ = v && v.$el; !_ || !_.length;) {
                        if (m = this.styleQueue[g++], !m) return;
                        _ = m.$el
                    }
                    var A = parseFloat(getComputedStyle(_[0])[y]);
                    A > 0 && (o = function(t, i) {
                        i.$el[h](i.style, l).one(p, a)
                    }, r = !1)
                }
            }
            i.each(this.styleQueue, o), r && a(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(t) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
        },
        addItems: function(t, i) {
            var s = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(s), i && i(s)
        },
        insert: function(t, i) {
            this.element.append(t);
            var s = this;
            this.addItems(t, function(t) {
                var e = s._filter(t);
                s._addHideAppended(e), s._sort(), s.reLayout(), s._revealAppended(e, i)
            })
        },
        appended: function(t, i) {
            var s = this;
            this.addItems(t, function(t) {
                s._addHideAppended(t), s.layout(t), s._revealAppended(t, i)
            })
        },
        _addHideAppended: function(t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(t, i) {
            var s = this;
            setTimeout(function() {
                t.removeClass("no-transition"), s.styleQueue.push({
                    $el: t,
                    style: s.options.visibleStyle
                }), s._isInserting = !1, s._processStyleQueue(t, i)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(t, i) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var s = this,
                e = function() {
                    t.remove(), i && i.call(s.element)
                };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(e)) : e()
        },
        shuffle: function(t) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
        },
        destroy: function() {
            var t = this.usingTransforms,
                i = this.options;
            this.$allAtoms.removeClass(i.hiddenClass + " " + i.itemClass).each(function() {
                var i = this.style;
                i.position = "", i.top = "", i.left = "", i.opacity = "", t && (i[h] = "")
            });
            var s = this.element[0].style;
            for (var e in this.originalStyle) s[e] = this.originalStyle[e];
            this.element.unbind(".isotope").undelegate("." + i.hiddenClass, "click").removeClass(i.containerClass).removeData("isotope"), w.unbind(".isotope")
        },
        _getSegments: function(t) {
            var i, s = this.options.layoutMode,
                e = t ? "rowHeight" : "columnWidth",
                n = t ? "height" : "width",
                r = t ? "rows" : "cols",
                a = this.element[n](),
                h = this.options[s] && this.options[s][e] || this.$filteredAtoms["outer" + o(n)](!0) || a;
            i = Math.floor(a / h), i = Math.max(i, 1), this[s][r] = i, this[s][e] = h
        },
        _checkIfSegmentsChanged: function(t) {
            var i = this.options.layoutMode,
                s = t ? "rows" : "cols",
                e = this[i][s];
            return this._getSegments(t), this[i][s] !== e
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(t) {
            var s = this,
                e = s.masonry;
            t.each(function() {
                var t = i(this),
                    n = Math.ceil(t.outerWidth(!0) / e.columnWidth);
                if (n = Math.min(n, e.cols), 1 === n) s._masonryPlaceBrick(t, e.colYs);
                else {
                    var o, r, a = e.cols + 1 - n,
                        h = [];
                    for (r = 0; a > r; r++) o = e.colYs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryPlaceBrick(t, h)
                }
            })
        },
        _masonryPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) {
                    e = n;
                    break
                }
            var r = this.masonry.columnWidth * e,
                a = s;
            this._pushPosition(t, r, a);
            var h = s + t.outerHeight(!0),
                l = this.masonry.cols + 1 - o;
            for (n = 0; l > n; n++) this.masonry.colYs[e + n] = h
        },
        _masonryGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: t
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(t) {
            var s = this,
                e = this.element.width(),
                n = this.fitRows;
            t.each(function() {
                var t = i(this),
                    o = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== n.x && o + n.x > e && (n.x = 0, n.y = n.height), s._pushPosition(t, n.x, n.y), n.height = Math.max(n.y + r, n.height), n.x += o
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(t) {
            var s = this,
                e = this.cellsByRow;
            t.each(function() {
                var t = i(this),
                    n = e.index % e.cols,
                    o = Math.floor(e.index / e.cols),
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(t) {
            var s = this;
            t.each(function() {
                var t = i(this);
                s._pushPosition(t, 0, s.straightDown.y), s.straightDown.y += t.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(t) {
            var s = this,
                e = s.masonryHorizontal;
            t.each(function() {
                var t = i(this),
                    n = Math.ceil(t.outerHeight(!0) / e.rowHeight);
                if (n = Math.min(n, e.rows), 1 === n) s._masonryHorizontalPlaceBrick(t, e.rowXs);
                else {
                    var o, r, a = e.rows + 1 - n,
                        h = [];
                    for (r = 0; a > r; r++) o = e.rowXs.slice(r, r + n), h[r] = Math.max.apply(Math, o);
                    s._masonryHorizontalPlaceBrick(t, h)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(t, i) {
            for (var s = Math.min.apply(Math, i), e = 0, n = 0, o = i.length; o > n; n++)
                if (i[n] === s) {
                    e = n;
                    break
                }
            var r = s,
                a = this.masonryHorizontal.rowHeight * e;
            this._pushPosition(t, r, a);
            var h = s + t.outerWidth(!0),
                l = this.masonryHorizontal.rows + 1 - o;
            for (n = 0; l > n; n++) this.masonryHorizontal.rowXs[e + n] = h
        },
        _masonryHorizontalGetContainerSize: function() {
            var t = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: t
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(t) {
            var s = this,
                e = this.element.height(),
                n = this.fitColumns;
            t.each(function() {
                var t = i(this),
                    o = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== n.y && r + n.y > e && (n.x = n.width, n.y = 0), s._pushPosition(t, n.x, n.y), n.width = Math.max(n.x + o, n.width), n.y += r
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(t) {
            var s = this,
                e = this.cellsByColumn;
            t.each(function() {
                var t = i(this),
                    n = Math.floor(e.index / e.rows),
                    o = e.index % e.rows,
                    r = (n + .5) * e.columnWidth - t.outerWidth(!0) / 2,
                    a = (o + .5) * e.rowHeight - t.outerHeight(!0) / 2;
                s._pushPosition(t, r, a), e.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(t) {
            var s = this;
            t.each(function() {
                var t = i(this);
                s._pushPosition(t, s.straightAcross.x, 0), s.straightAcross.x += t.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, i.fn.imagesLoaded = function(t) {
        function s() {
            t.call(n, o)
        }

        function e(t) {
            var n = t.target;
            n.src !== a && -1 === i.inArray(n, h) && (h.push(n), --r <= 0 && (setTimeout(s), o.unbind(".imagesLoaded", e)))
        }
        var n = this,
            o = n.find("img").add(n.filter("img")),
            r = o.length,
            a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            h = [];
        return r || s(), o.bind("load.imagesLoaded error.imagesLoaded", e).each(function() {
            var t = this.src;
            this.src = a, this.src = t
        }), n
    };
    var C = function(i) {
        t.console && t.console.error(i)
    };
    i.fn.isotope = function(t, s) {
        if ("string" == typeof t) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var s = i.data(this, "isotope");
                return s ? i.isFunction(s[t]) && "_" !== t.charAt(0) ? (s[t].apply(s, e), void 0) : (C("no such method '" + t + "' for isotope instance"), void 0) : (C("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'"), void 0)
            })
        } else this.each(function() {
            var e = i.data(this, "isotope");
            e ? (e.option(t), e._init(s)) : i.data(this, "isotope", new i.Isotope(t, this, s))
        });
        return this
    }
}(window, jQuery);
! function(e) {
    e.fn.appear = function(a, r) {
        var n = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, r);
        return this.each(function() {
            var r = e(this);
            if (r.appeared = !1, !a) return r.trigger("appear", n.data), void 0;
            var p = e(window),
                t = function() {
                    if (!r.is(":visible")) return r.appeared = !1, void 0;
                    var e = p.scrollLeft(),
                        a = p.scrollTop(),
                        t = r.offset(),
                        c = t.left,
                        i = t.top,
                        o = n.accX,
                        f = n.accY,
                        s = r.height(),
                        u = p.height(),
                        d = r.width(),
                        l = p.width();
                    i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1
                },
                c = function() {
                    if (r.appeared = !0, n.one) {
                        p.unbind("scroll", t);
                        var c = e.inArray(t, e.fn.appear.checks);
                        c >= 0 && e.fn.appear.checks.splice(c, 1)
                    }
                    a.apply(this, arguments)
                };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c), p.scroll(t), e.fn.appear.checks.push(t), t()
        })
    }, e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var a = e.fn.appear.checks.length;
            if (a > 0)
                for (; a--;) e.fn.appear.checks[a]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
        var n = e.fn[r];
        n && (e.fn[r] = function() {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(), a
        })
    })
}(jQuery);

function initCounter() {
    "use strict";
    $j(".counter.type2").length && $j(".counter.type2").each(function() {
        $j(this).appear(function() {
            $j(this).parent().css("opacity", "1"), $j(this).absoluteCounter({
                speed: 2e3,
                fadeInDelay: 1e3
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounter() {
    "use strict";
    $j(".counter.type1").length && $j(".counter.type1").each(function() {
        $j(this).appear(function() {
            $j(this).parent().css("opacity", "1");
            var t = parseFloat($j(this).text());
            $j(this).countTo({
                from: 0,
                to: t,
                speed: 1500,
                refreshInterval: 50
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initDoughnutProgressBar() {
    "use strict";
    $j(".normal .percentage").length && $j(".normal .percentage").each(function() {
        $j(this).appear(function() {
            var t = "#69b200",
                e = "#ededed",
                a = 10,
                n = 133,
                i = "square",
                o = 10;
            "" !== $j(this).data("active") && (t = $j(this).data("active")), "" !== $j(this).data("noactive") && (e = $j(this).data("noactive")), "" !== $j(this).data("linecap") && (i = $j(this).data("linecap")), "" !== $j(this).data("linewidth") && (a = $j(this).data("linewidth")), "" !== $j(this).data("trackwidth") && (o = $j(this).data("trackwidth")), "" !== $j(this).data("radius") && (n = $j(this).data("radius")), $j(".tocounter").css("line-height", $j(".normal .percentage").css("height")), $j(".tocounter").css("margin-top", 0 - $j(".normal .percentage").css("height").replace("px", "") - .5 * $j(".tocounter").css("font-size").replace("px", "")), initToCounterPicChart($j(this)), $j(this).parent().css("opacity", "1");
            var n = .85 * $j(".normal .percentage").parent().parent().css("width").replace("px", "");
            $j(this).easyPieChart({
                barColor: t,
                trackColor: e,
                scaleColor: !1,
                lineCap: i,
                lineWidth: a,
                trackWidth: o,
                animate: 1500,
                size: n
            })
        }, {
            accX: 0,
            accY: -100
        })
    })
}

function initLineCharts() {
    "use strict";
    $j("#lineChart").length && $j("#lineChart").each(function() {
        $j(this).appear(function() {
            $("#lineChart").get(0).width = $("#lineChart").parent().css("width").replace("px", ""), $("#lineChart").get(0).height = .6 * $("#lineChart").parent().css("width").replace("px", "");
            var t = $("#lineChart").get(0).getContext("2d"),
                e = {
                    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    datasets: [{
                        fillColor: "rgba(151,187,205,0)",
                        strokeColor: "rgba(26,188,156,1)",
                        pointColor: "rgba(151,187,205,0)",
                        pointStrokeColor: "rgba(255,255,255,0)",
                        data: [3.5, 1.8, 2.5, .5, 2.75, 1.8, 2.5, 1.75, 2, 3.25, 4]
                    }]
                },
                a = !0;
            $(window).width() <= 480 && (a = !1);
            var n = {
                scaleOverlay: !1,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !1,
                scaleLabel: "<%=value%>",
                scaleFontFamily: "'Open Sans'",
                scaleFontSize: 18,
                scaleFontStyle: "normal",
                scaleFontColor: "#a4a8a9",
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                bezierCurve: !1,
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                datasetStroke: !0,
                datasetStrokeWidth: 6,
                datasetFill: !0,
                animation: a,
                animationSteps: 180,
                animationEasing: "easeOutQuart",
                onAnimationComplete: null
            };
            new Chart(t).Line(e, n)
        }, {
            accX: 0,
            accY: -100
        })
    })
}

function initDoughnutProgressBar2() {
    "use strict";
    $j(".doughnutChart").length && $j(".doughnutChart").each(function() {
        $j(this).appear(function() {
            $j(this).get(0).width = $j(this).parent().css("width").replace("px", ""), $j(this).get(0).height = $j(this).get(0).width, $j(this).siblings(".pie_chart_text").find(".tocounter").css("line-height", $j(this).parent().css("width")), $j(this).siblings(".pie_chart_text").css("position", "relative");
            var t = $j(this).get(0).width + 20;
            $j(this).siblings(".pie_chart_text").css("top", "-" + t + "px");
            var e = 1.2 * $j(this).get(0).height;
            $j(this).parent().css("height", e + "px"), $j(this).parent().css("overflow", "hidden");
            var a = $j(this).get(0).getContext("2d"),
                n = [{
                    value: $j(this).data("percent"),
                    color: "#19bd9b"
                }, {
                    value: 100 - $j(this).data("percent"),
                    color: "#ECF0F1"
                }],
                i = !0;
            $(window).width() <= 480 && (i = !1);
            var o = {
                segmentShowStroke: !1,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 87,
                animation: i,
                animationSteps: 100,
                animationEasing: "easeOutCubic",
                animateRotate: !0,
                animateScale: !1,
                onAnimationComplete: null
            };
            i && initToCounterInt($j(this).siblings(".pie_chart_text"), $j(this).data("percent")), new Chart(a).Doughnut(n, o)
        }, {
            accX: 0,
            accY: -100
        })
    })
}

function initToCounterInt(t, e) {
    "use strict";
    $j(t).css("opacity", "1"), $j(t).find(".tocounter").countTo({
        from: 0,
        to: e,
        speed: 1500,
        refreshInterval: 50
    })
}

function initToCounterPicChart(t) {
    "use strict";
    $j(t).css("opacity", "1");
    var e = parseFloat($j(t).find(".tocounter").text());
    $j(t).find(".tocounter").countTo({
        from: 0,
        to: e,
        speed: 1500,
        refreshInterval: 50
    })
}

function initToCounterPicChartTransparent(t) {
    "use strict";
    $j(t).css("opacity", "1");
    var e = parseFloat($j(t).find(".tocounter").text());
    $j(t).find(".tocounter").countTo({
        from: 0,
        to: e,
        speed: 1500,
        refreshInterval: 50
    })
}

function initProgressBars() {
    "use strict";
    $j(".progress_bars").length && $j(".progress_bars").each(function() {
        $j(this).appear(function() {
            var t = !0;
            $(window).width() <= 480 && (t = !1), t && initToCounterHorizontalProgressBar(), $j(this).find(".progress_bar").each(function() {
                var e = $j(this).find(".progress_content").data("percentage"),
                    a = $j(this).find(".progress_number").width();
                t ? ($j(this).find(".progress_content").css("width", "0%"), $j(this).find(".progress_content").animate({
                    width: e + "%"
                }, 2e3)) : ($j(this).find(".progress_content").css("width", e + "%"), $j(this).find(".progress_number").css("opacity", "1")), $j(this).find(".progress_number").css("width", a + "px")
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initPieCharts() {
    "use strict";
    $j(".chart").length && $j(".chart").each(function() {
        $j(this).appear(function() {
            for (var t = $j(this).data("type"), e = $j(this).data("animation"), a = $j(this).data("source"), n = [], i = [], o = $j(this).data("segmencolor"), s = $j(this).data("segmenwidth"), r = $j(this).data("iner"), l = a.split(","), c = 0; c < l.length; c++) {
                var h = l[c].split(":");
                n[c] = {
                    value: parseInt(h[0]),
                    color: h[1]
                }
            }
            e && (i.animationEasing = e), o && (i.segmentStrokeColor = o), s && (i.segmentStrokeWidth = s), r && (i.percentageInnerCutout = r), "doughnut" == t ? new Chart($j(this)[0].getContext("2d")).Doughnut(n, i) : new Chart($j(this)[0].getContext("2d")).Pie(n, i)
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounterHorizontalProgressBar() {
    "use strict";
    $j(".progress_bars .progress_number span").length && $j(".progress_bars .progress_number span").each(function() {
        $j(this).parent().css("opacity", "1");
        var t = parseFloat($j(this).text());
        $j(this).countTo({
            from: 0,
            to: t,
            speed: 1500,
            refreshInterval: 50
        })
    })
}

function totop_button(t) {
    "use strict";
    var e = $j("#back_to_top");
    e.removeClass("off on"), "on" === t ? e.addClass("on") : e.addClass("off")
}

function initProgressBarsVertical() {
    "use strict";
    $j(".progress_bars_vertical_holder").length && $j(".progress_bars_vertical_holder").each(function() {
        var t = 0;
        $j(this).find(".progress_bars_vertical").each(function() {
            t++
        }), $j(this).find(".progress_bars_vertical").css("width", 100 / t - .3 + "%"), $j(this).appear(function() {
            initToCounterVerticalProgressBar(), $j(this).find(".progress_bars_vertical").each(function() {
                var t = $j(this).find(".progress_content").data("percentage");
                $j(this).find(".progress_content").css("height", "0%"), $j(this).find(".progress_content").animate({
                    height: t + "%"
                }, 1500)
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounterVerticalProgressBar() {
    "use strict";
    $j(".progress_bars_vertical .progress_number span").length && $j(".progress_bars_vertical .progress_number span").each(function() {
        var t = parseFloat($j(this).text());
        $j(this).countTo({
            from: 0,
            to: t,
            speed: 1500,
            refreshInterval: 50
        })
    })
}(function() {
    ! function(t) {
        return t.easyPieChart = function(e, a) {
            var n, i, o, s, r, l, c, h = this;
            return this.el = e, this.$el = t(e), this.$el.data("easyPieChart", this), this.init = function() {
                var e;
                return h.options = t.extend({}, t.easyPieChart.defaultOptions, a), e = parseInt(h.$el.data("percent"), 10), h.percentage = 0, h.canvas = t("<canvas width='" + h.options.size + "' height='" + h.options.size + "'></canvas>").get(0), h.$el.append(h.canvas), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(h.canvas), h.ctx = h.canvas.getContext("2d"), window.devicePixelRatio > 1.5 && (t(h.canvas).css({
                    width: h.options.size,
                    height: h.options.size
                }), h.canvas.width *= 2, h.canvas.height *= 2, h.ctx.scale(2, 2)), h.ctx.translate(h.options.size / 2, h.options.size / 2), h.$el.addClass("easyPieChart"), h.$el.css({
                    width: h.options.size,
                    height: h.options.size,
                    lineHeight: "" + h.options.size + "px"
                }), h.update(e), h
            }, this.update = function(t) {
                return h.options.animate === !1 ? o(t) : i(h.percentage, t)
            }, l = function() {
                var t, e, a;
                for (h.ctx.fillStyle = h.options.scaleColor, h.ctx.lineWidth = 1, a = [], t = e = 0; 24 >= e; t = ++e) a.push(n(t));
                return a
            }, n = function(t) {
                var e;
                return e = 0 === t % 6 ? 0 : .017 * h.options.size, h.ctx.save(), h.ctx.rotate(t * Math.PI / 12), h.ctx.fillRect(h.options.size / 2 - e, 0, .05 * -h.options.size + e, 1), h.ctx.restore()
            }, c = function() {
                var t;
                return t = h.options.size / 2 - h.options.lineWidth / 2, h.options.scaleColor !== !1 && (t -= .08 * h.options.size), h.ctx.beginPath(), h.ctx.arc(0, 0, t, 0, 2 * Math.PI, !0), h.ctx.closePath(), h.ctx.strokeStyle = h.options.trackColor, h.ctx.lineWidth = h.options.lineWidth, "undefined" !== h.options.trackWidth && h.options.trackWidth < h.ctx.lineWidth && (h.ctx.lineWidth = h.options.trackWidth), h.ctx.stroke()
            }, r = function() {
                return h.options.scaleColor !== !1 && l(), h.options.trackColor !== !1 ? c() : void 0
            }, o = function(e) {
                var a;
                return h.ctx.strokeStyle = t.isFunction(h.options.barColor) ? h.options.barColor(e) : h.options.barColor, h.ctx.lineCap = h.options.lineCap, h.ctx.lineWidth = h.options.lineWidth, a = h.options.size / 2 - h.options.lineWidth / 2, h.options.scaleColor !== !1 && (a -= .08 * h.options.size), h.ctx.save(), h.ctx.rotate(-Math.PI / 2), h.ctx.beginPath(), h.ctx.arc(0, 0, a, 0, 2 * Math.PI * e / 100, !1), h.ctx.stroke(), h.ctx.restore()
            }, i = function(t, e) {
                var a, n, i;
                return n = 30, i = n * h.options.animate / 1e3, a = 0, h.options.onStart.call(h), h.percentage = e, h.animation && (clearInterval(h.animation), h.animation = !1), h.animation = setInterval(function() {
                    return h.ctx.clearRect(-h.options.size / 2, -h.options.size / 2, h.options.size, h.options.size), r.call(h), o.call(h, [s(a, t, e - t, i)]), a++, a / i > 1 ? (clearInterval(h.animation), h.animation = !1, h.options.onStop.call(h)) : void 0
                }, 1e3 / n)
            }, s = function(t, e, a, n) {
                var i, o;
                return i = function(t) {
                    return Math.pow(t, 2)
                }, o = function(t) {
                    return 1 > t ? i(t) : 2 - i(-2 * (t / 2) + 2)
                }, t /= n / 2, a / 2 * o(t) + e
            }, this.init()
        }, t.easyPieChart.defaultOptions = {
            barColor: "#ef1e25",
            trackColor: "#f2f2f2",
            scaleColor: "#dfe0e0",
            lineCap: "square",
            size: 264,
            trackWidth: 0,
            lineWidth: 3,
            animate: !1,
            onStart: t.noop,
            onStop: t.noop
        }, t.fn.easyPieChart = function(e) {
            return t.each(this, function(a, n) {
                var i;
                return i = t(n), i.data("easyPieChart") ? void 0 : i.data("easyPieChart", new t.easyPieChart(n, e))
            })
        }, void 0
    }(jQuery)
}).call(this), window.Chart = function(t) {
    function e(t, e, a) {
        var n = e.steps * e.stepValue,
            i = t - e.graphMin,
            o = c(i / n, 1, 0);
        return a * e.steps * o
    }

    function a(t, e, a, n) {
        function i() {
            var i = t.animation ? c(r(l), null, 0) : 1;
            m(n), t.scaleOverlay ? (a(i), e()) : (e(), a(i))
        }

        function o() {
            l += s, i(), 1 >= l ? x(o) : "function" == typeof t.onAnimationComplete && t.onAnimationComplete()
        }
        var s = t.animation ? 1 / c(t.animationSteps, Number.MAX_VALUE, 1) : 1,
            r = f[t.animationEasing],
            l = t.animation ? 0 : 1;
        "function" != typeof e && (e = function() {}), x(o)
    }

    function n(t, e, a, n, o, s) {
        function r(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }
        var l, c, h, u, d, p, f;
        for (p = n - o, f = r(p), l = Math.floor(o / (1 * Math.pow(10, f))) * Math.pow(10, f), c = Math.ceil(n / (1 * Math.pow(10, f))) * Math.pow(10, f), h = c - l, u = Math.pow(10, f), d = Math.round(h / u); a > d || d > e;) a > d ? (u /= 2, d = Math.round(h / u)) : (u *= 2, d = Math.round(h / u));
        var g = [];
        return i(s, g, d, l, u), {
            steps: d,
            stepValue: u,
            graphMin: l,
            labels: g
        }
    }

    function i(t, e, a, n, i) {
        if (t)
            for (var o = 1; a + 1 > o; o++) e.push(d(t, {
                value: (n + i * o).toFixed(h(i))
            }))
    }

    function o(t) {
        return Math.max.apply(Math, t)
    }

    function s(t) {
        return Math.min.apply(Math, t)
    }

    function r(t, e) {
        return t ? t : e
    }

    function l(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function c(t, e, a) {
        return l(e) && t > e ? e : l(a) && a > t ? a : t
    }

    function h(t) {
        return 0 != t % 1 ? t.toString().split(".")[1].length : 0
    }

    function u(t, e) {
        var a = {};
        for (var n in t) a[n] = t[n];
        for (var n in e) a[n] = e[n];
        return a
    }

    function d(t, e) {
        var a = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : j[t] = j[t] || d(document.getElementById(t).innerHTML);
        return e ? a(e) : a
    }
    var p = this,
        f = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function(t) {
                return 0 == t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function(t) {
                return 1 == t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function(t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    a = 0,
                    n = 1;
                if (0 == t) return 0;
                if (1 == (t /= 1)) return 1;
                if (a || (a = .3), n < Math.abs(1)) {
                    n = 1;
                    var e = a / 4
                } else var e = a / (2 * Math.PI) * Math.asin(1 / n);
                return -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * 2 * Math.PI / a))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    a = 0,
                    n = 1;
                if (0 == t) return 0;
                if (1 == (t /= 1)) return 1;
                if (a || (a = .3), n < Math.abs(1)) {
                    n = 1;
                    var e = a / 4
                } else var e = a / (2 * Math.PI) * Math.asin(1 / n);
                return n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * 2 * Math.PI / a) + 1
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    a = 0,
                    n = 1;
                if (0 == t) return 0;
                if (2 == (t /= .5)) return 1;
                if (a || (a = 1 * .3 * 1.5), n < Math.abs(1)) {
                    n = 1;
                    var e = a / 4
                } else var e = a / (2 * Math.PI) * Math.asin(1 / n);
                return 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * 2 * Math.PI / a) : .5 * n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * 2 * Math.PI / a) + 1
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - f.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return (t /= 1) < 1 / 2.75 ? 1 * 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function(t) {
                return .5 > t ? .5 * f.easeInBounce(2 * t) : .5 * f.easeOutBounce(2 * t - 1) + .5
            }
        },
        g = t.canvas.width,
        S = t.canvas.height;
    window.devicePixelRatio && (t.canvas.style.width = g + "px", t.canvas.style.height = S + "px", t.canvas.height = S * window.devicePixelRatio, t.canvas.width = g * window.devicePixelRatio, t.scale(window.devicePixelRatio, window.devicePixelRatio)), this.PolarArea = function(e, a) {
        p.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = a ? u(p.PolarArea.defaults, a) : p.PolarArea.defaults;
        return new v(e, n, t)
    }, this.Radar = function(e, a) {
        p.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = a ? u(p.Radar.defaults, a) : p.Radar.defaults;
        return new b(e, n, t)
    }, this.Pie = function(e, a) {
        p.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = a ? u(p.Pie.defaults, a) : p.Pie.defaults;
        return new C(e, n, t)
    }, this.Doughnut = function(e, a) {
        p.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var n = a ? u(p.Doughnut.defaults, a) : p.Doughnut.defaults;
        return new w(e, n, t)
    }, this.Line = function(e, a) {
        p.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = a ? u(p.Line.defaults, a) : p.Line.defaults;
        return new k(e, n, t)
    }, this.Bar = function(e, a) {
        p.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var n = a ? u(p.Bar.defaults, a) : p.Bar.defaults;
        return new $(e, n, t)
    };
    var m = function(t) {
            t.clearRect(0, 0, g, S)
        },
        v = function(t, l, c) {
            function h() {
                f = s([g, S]) / 2, f -= o([.5 * l.scaleFontSize, .5 * l.scaleLineWidth]), b = 2 * l.scaleFontSize, l.scaleShowLabelBackdrop && (b += 2 * l.scaleBackdropPaddingY, f -= 1.5 * l.scaleBackdropPaddingY), C = f, b = r(b, 5)
            }

            function u() {
                for (var t = 0; t < v.steps; t++)
                    if (l.scaleShowLine && (c.beginPath(), c.arc(g / 2, S / 2, m * (t + 1), 0, 2 * Math.PI, !0), c.strokeStyle = l.scaleLineColor, c.lineWidth = l.scaleLineWidth, c.stroke()), l.scaleShowLabels) {
                        c.textAlign = "center", c.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily;
                        var e = v.labels[t];
                        if (l.scaleShowLabelBackdrop) {
                            var a = c.measureText(e).width;
                            c.fillStyle = l.scaleBackdropColor, c.beginPath(), c.rect(Math.round(g / 2 - a / 2 - l.scaleBackdropPaddingX), Math.round(S / 2 - m * (t + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(a + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)), c.fill()
                        }
                        c.textBaseline = "middle", c.fillStyle = l.scaleFontColor, c.fillText(e, g / 2, S / 2 - m * (t + 1))
                    }
            }

            function d(a) {
                var n = -Math.PI / 2,
                    i = 2 * Math.PI / t.length,
                    o = 1,
                    s = 1;
                l.animation && (l.animateScale && (o = a), l.animateRotate && (s = a));
                for (var r = 0; r < t.length; r++) c.beginPath(), c.arc(g / 2, S / 2, o * e(t[r].value, v, m), n, n + s * i, !1), c.lineTo(g / 2, S / 2), c.closePath(), c.fillStyle = t[r].color, c.fill(), l.segmentShowStroke && (c.strokeStyle = l.segmentStrokeColor, c.lineWidth = l.segmentStrokeWidth, c.stroke()), n += s * i
            }

            function p() {
                for (var e = Number.MIN_VALUE, a = Number.MAX_VALUE, n = 0; n < t.length; n++) t[n].value > e && (e = t[n].value), t[n].value < a && (a = t[n].value);
                var i = Math.floor(C / (.66 * b)),
                    o = Math.floor(.5 * (C / b));
                return {
                    maxValue: e,
                    minValue: a,
                    maxSteps: i,
                    minSteps: o
                }
            }
            var f, m, v, b, C, w, k;
            h(), w = p(), k = l.scaleShowLabels ? l.scaleLabel : null, l.scaleOverride ? (v = {
                steps: l.scaleSteps,
                stepValue: l.scaleStepWidth,
                graphMin: l.scaleStartValue,
                labels: []
            }, i(k, v.labels, v.steps, l.scaleStartValue, l.scaleStepWidth)) : v = n(C, w.maxSteps, w.minSteps, w.maxValue, w.minValue, k), m = f / v.steps, a(l, u, d, c)
        },
        b = function(t, l, h) {
            function u(a) {
                var n = 2 * Math.PI / t.datasets[0].data.length;
                h.save(), h.translate(g / 2, S / 2);
                for (var i = 0; i < t.datasets.length; i++) {
                    h.beginPath(), h.moveTo(0, a * -1 * e(t.datasets[i].data[0], b, v));
                    for (var o = 1; o < t.datasets[i].data.length; o++) h.rotate(n), h.lineTo(0, a * -1 * e(t.datasets[i].data[o], b, v));
                    if (h.closePath(), h.fillStyle = t.datasets[i].fillColor, h.strokeStyle = t.datasets[i].strokeColor, h.lineWidth = l.datasetStrokeWidth, h.fill(), h.stroke(), l.pointDot) {
                        h.fillStyle = t.datasets[i].pointColor, h.strokeStyle = t.datasets[i].pointStrokeColor, h.lineWidth = l.pointDotStrokeWidth;
                        for (var s = 0; s < t.datasets[i].data.length; s++) h.rotate(n), h.beginPath(), h.arc(0, a * -1 * e(t.datasets[i].data[s], b, v), l.pointDotRadius, 2 * Math.PI, !1), h.fill(), h.stroke()
                    }
                    h.rotate(n)
                }
                h.restore()
            }

            function d() {
                var e = 2 * Math.PI / t.datasets[0].data.length;
                if (h.save(), h.translate(g / 2, S / 2), l.angleShowLineOut) {
                    h.strokeStyle = l.angleLineColor, h.lineWidth = l.angleLineWidth;
                    for (var a = 0; a < t.datasets[0].data.length; a++) h.rotate(e), h.beginPath(), h.moveTo(0, 0), h.lineTo(0, -m), h.stroke()
                }
                for (var n = 0; n < b.steps; n++) {
                    if (h.beginPath(), l.scaleShowLine) {
                        h.strokeStyle = l.scaleLineColor, h.lineWidth = l.scaleLineWidth, h.moveTo(0, -v * (n + 1));
                        for (var i = 0; i < t.datasets[0].data.length; i++) h.rotate(e), h.lineTo(0, -v * (n + 1));
                        h.closePath(), h.stroke()
                    }
                    if (l.scaleShowLabels) {
                        if (h.textAlign = "center", h.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily, h.textBaseline = "middle", l.scaleShowLabelBackdrop) {
                            var o = h.measureText(b.labels[n]).width;
                            h.fillStyle = l.scaleBackdropColor, h.beginPath(), h.rect(Math.round(-o / 2 - l.scaleBackdropPaddingX), Math.round(-v * (n + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(o + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)), h.fill()
                        }
                        h.fillStyle = l.scaleFontColor, h.fillText(b.labels[n], 0, -v * (n + 1))
                    }
                }
                for (var s = 0; s < t.labels.length; s++) {
                    h.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily, h.fillStyle = l.pointLabelFontColor;
                    var r = Math.sin(e * s) * (m + l.pointLabelFontSize),
                        c = Math.cos(e * s) * (m + l.pointLabelFontSize);
                    h.textAlign = e * s == Math.PI || 0 == e * s ? "center" : e * s > Math.PI ? "right" : "left", h.textBaseline = "middle", h.fillText(t.labels[s], r, -c)
                }
                h.restore()
            }

            function p() {
                m = s([g, S]) / 2, C = 2 * l.scaleFontSize;
                for (var e = 0, a = 0; a < t.labels.length; a++) {
                    h.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily;
                    var n = h.measureText(t.labels[a]).width;
                    n > e && (e = n)
                }
                m -= o([e, 1.5 * (l.pointLabelFontSize / 2)]), m -= l.pointLabelFontSize, m = c(m, null, 0), w = m, C = r(C, 5)
            }

            function f() {
                for (var e = Number.MIN_VALUE, a = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var i = 0; i < t.datasets[n].data.length; i++) t.datasets[n].data[i] > e && (e = t.datasets[n].data[i]), t.datasets[n].data[i] < a && (a = t.datasets[n].data[i]);
                var o = Math.floor(w / (.66 * C)),
                    s = Math.floor(.5 * (w / C));
                return {
                    maxValue: e,
                    minValue: a,
                    maxSteps: o,
                    minSteps: s
                }
            }
            var m, v, b, C, w, k, $;
            t.labels || (t.labels = []), p();
            var k = f();
            $ = l.scaleShowLabels ? l.scaleLabel : null, l.scaleOverride ? (b = {
                steps: l.scaleSteps,
                stepValue: l.scaleStepWidth,
                graphMin: l.scaleStartValue,
                labels: []
            }, i($, b.labels, b.steps, l.scaleStartValue, l.scaleStepWidth)) : b = n(w, k.maxSteps, k.minSteps, k.maxValue, k.minValue, $), v = m / b.steps, a(l, d, u, h)
        },
        C = function(t, e, n) {
            function i(a) {
                var i = -Math.PI / 2,
                    s = 1,
                    l = 1;
                e.animation && (e.animateScale && (s = a), e.animateRotate && (l = a));
                for (var c = 0; c < t.length; c++) {
                    var h = l * t[c].value / o * 2 * Math.PI;
                    n.beginPath(), n.arc(g / 2, S / 2, s * r, i, i + h), n.lineTo(g / 2, S / 2), n.closePath(), n.fillStyle = t[c].color, n.fill(), e.segmentShowStroke && (n.lineWidth = e.segmentStrokeWidth, n.strokeStyle = e.segmentStrokeColor, n.stroke()), i += h
                }
            }
            for (var o = 0, r = s([S / 2, g / 2]) - 5, l = 0; l < t.length; l++) o += t[l].value;
            a(e, null, i, n)
        },
        w = function(t, e, n) {
            function i(a) {
                var i = -Math.PI / 2,
                    s = 1,
                    c = 1;
                e.animation && (e.animateScale && (s = a), e.animateRotate && (c = a));
                for (var h = 0; h < t.length; h++) {
                    var u = c * t[h].value / o * 2 * Math.PI;
                    n.beginPath(), n.arc(g / 2, S / 2, s * r, i, i + u, !1), n.arc(g / 2, S / 2, s * l, i + u, i, !0), n.closePath(), n.fillStyle = t[h].color, n.fill(), e.segmentShowStroke && (n.lineWidth = e.segmentStrokeWidth, n.strokeStyle = e.segmentStrokeColor, n.stroke()), i += u
                }
            }
            for (var o = 0, r = s([S / 2, g / 2]) - 5, l = r * (e.percentageInnerCutout / 100), c = 0; c < t.length; c++) o += t[c].value;
            a(e, null, i, n)
        },
        k = function(t, o, s) {
            function r(a) {
                function n(n, i) {
                    return j - a * e(t.datasets[n].data[i], f, p)
                }

                function i(t) {
                    return x + w * t
                }
                for (var r = 0; r < t.datasets.length; r++) {
                    s.strokeStyle = t.datasets[r].strokeColor, s.lineWidth = o.datasetStrokeWidth, s.beginPath(), s.moveTo(x, j - a * e(t.datasets[r].data[0], f, p));
                    for (var l = 1; l < t.datasets[r].data.length; l++) o.bezierCurve ? s.bezierCurveTo(i(l - .5), n(r, l - 1), i(l - .5), n(r, l), i(l), n(r, l)) : s.lineTo(i(l), n(r, l));
                    if (s.stroke(), o.datasetFill ? (s.lineTo(x + w * (t.datasets[r].data.length - 1), j), s.lineTo(x, j), s.closePath(), s.fillStyle = t.datasets[r].fillColor, s.fill()) : s.closePath(), o.pointDot) {
                        s.fillStyle = t.datasets[r].pointColor, s.strokeStyle = t.datasets[r].pointStrokeColor, s.lineWidth = o.pointDotStrokeWidth;
                        for (var c = 0; c < t.datasets[r].data.length; c++) s.beginPath(), s.arc(x + w * c, j - a * e(t.datasets[r].data[c], f, p), o.pointDotRadius, 0, 2 * Math.PI, !0), s.fill(), s.stroke()
                    }
                }
            }

            function l() {
                s.lineWidth = o.scaleLineWidth, s.strokeStyle = o.scaleLineColor, s.beginPath(), s.moveTo(g - k / 2 + 5, j), s.lineTo(g - k / 2 - $ - 5, j), s.stroke(), M > 0 ? (s.save(), s.textAlign = "right") : s.textAlign = "center", s.fillStyle = o.scaleFontColor;
                for (var e = 0; e < t.labels.length; e++) s.save(), M > 0 ? (s.translate(x + e * w, j + o.scaleFontSize), s.rotate(-(M * (Math.PI / 180))), s.fillText(t.labels[e], 0, 0), s.restore()) : s.fillText(t.labels[e], x + e * w, j + o.scaleFontSize + 3), s.beginPath(), s.moveTo(x + e * w, j + 3), o.scaleShowGridLines && e > 0 ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(x + e * w, 5)) : s.lineTo(x + e * w, j + 3), s.stroke();
                s.lineWidth = o.scaleLineWidth, s.strokeStyle = o.scaleLineColor, s.beginPath(), s.moveTo(x, j + 5), s.lineTo(x, 5), s.stroke(), s.textAlign = "right", s.textBaseline = "middle";
                for (var a = 0; a < f.steps; a++) s.beginPath(), s.moveTo(x - 3, j - (a + 1) * p), o.scaleShowGridLines ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(x + $ + 5, j - (a + 1) * p)) : s.lineTo(x - .5, j - (a + 1) * p), s.stroke(), o.scaleShowLabels && s.fillText(f.labels[a], x - 8, j - (a + 1) * p)
            }

            function c() {
                var e = 1;
                if (o.scaleShowLabels) {
                    s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                    for (var a = 0; a < f.labels.length; a++) {
                        var n = s.measureText(f.labels[a]).width;
                        e = n > e ? n : e
                    }
                    e += 10
                }
                $ = g - e - k, w = Math.floor($ / (t.labels.length - 1)), x = g - k / 2 - $, j = v + o.scaleFontSize / 2
            }

            function h() {
                d = S, s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, k = 1;
                for (var e = 0; e < t.labels.length; e++) {
                    var a = s.measureText(t.labels[e]).width;
                    k = a > k ? a : k
                }
                g / t.labels.length < k ? (M = 45, g / t.labels.length < Math.cos(M) * k ? (M = 90, d -= k) : d -= Math.sin(M) * k) : d -= o.scaleFontSize, d -= 5, m = o.scaleFontSize, d -= m, v = d
            }

            function u() {
                for (var e = Number.MIN_VALUE, a = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var i = 0; i < t.datasets[n].data.length; i++) t.datasets[n].data[i] > e && (e = t.datasets[n].data[i]), t.datasets[n].data[i] < a && (a = t.datasets[n].data[i]);
                var o = Math.floor(v / (.66 * m)),
                    s = Math.floor(.5 * (v / m));
                return {
                    maxValue: e,
                    minValue: a,
                    maxSteps: o,
                    minSteps: s
                }
            }
            var d, p, f, m, v, b, C, w, k, $, x, j, M = 0;
            h(), b = u(), C = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (f = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, i(C, f.labels, f.steps, o.scaleStartValue, o.scaleStepWidth)) : f = n(v, b.maxSteps, b.minSteps, b.maxValue, b.minValue, C), p = Math.floor(v / f.steps), c(), a(o, l, r, s)
        },
        $ = function(t, o, s) {
            function r(a) {
                s.lineWidth = o.barStrokeWidth;
                for (var n = 0; n < t.datasets.length; n++) {
                    s.fillStyle = t.datasets[n].fillColor, s.strokeStyle = t.datasets[n].strokeColor;
                    for (var i = 0; i < t.datasets[n].data.length; i++) {
                        var r = x + o.barValueSpacing + w * i + M * n + o.barDatasetSpacing * n + o.barStrokeWidth * n;
                        s.beginPath(), s.moveTo(r, j), s.lineTo(r, j - a * e(t.datasets[n].data[i], f, p) + o.barStrokeWidth / 2), s.lineTo(r + M, j - a * e(t.datasets[n].data[i], f, p) + o.barStrokeWidth / 2), s.lineTo(r + M, j), o.barShowStroke && s.stroke(), s.closePath(), s.fill()
                    }
                }
            }

            function l() {
                s.lineWidth = o.scaleLineWidth, s.strokeStyle = o.scaleLineColor, s.beginPath(), s.moveTo(g - k / 2 + 5, j), s.lineTo(g - k / 2 - $ - 5, j), s.stroke(), L > 0 ? (s.save(), s.textAlign = "right") : s.textAlign = "center", s.fillStyle = o.scaleFontColor;
                for (var e = 0; e < t.labels.length; e++) s.save(), L > 0 ? (s.translate(x + e * w, j + o.scaleFontSize), s.rotate(-(L * (Math.PI / 180))), s.fillText(t.labels[e], 0, 0), s.restore()) : s.fillText(t.labels[e], x + e * w + w / 2, j + o.scaleFontSize + 3), s.beginPath(), s.moveTo(x + (e + 1) * w, j + 3), s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(x + (e + 1) * w, 5), s.stroke();
                s.lineWidth = o.scaleLineWidth, s.strokeStyle = o.scaleLineColor, s.beginPath(), s.moveTo(x, j + 5), s.lineTo(x, 5), s.stroke(), s.textAlign = "right", s.textBaseline = "middle";
                for (var a = 0; a < f.steps; a++) s.beginPath(), s.moveTo(x - 3, j - (a + 1) * p), o.scaleShowGridLines ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(x + $ + 5, j - (a + 1) * p)) : s.lineTo(x - .5, j - (a + 1) * p), s.stroke(), o.scaleShowLabels && s.fillText(f.labels[a], x - 8, j - (a + 1) * p)
            }

            function c() {
                var e = 1;
                if (o.scaleShowLabels) {
                    s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                    for (var a = 0; a < f.labels.length; a++) {
                        var n = s.measureText(f.labels[a]).width;
                        e = n > e ? n : e
                    }
                    e += 10
                }
                $ = g - e - k, w = Math.floor($ / t.labels.length), M = (w - 2 * o.scaleGridLineWidth - 2 * o.barValueSpacing - (o.barDatasetSpacing * t.datasets.length - 1) - (o.barStrokeWidth / 2 * t.datasets.length - 1)) / t.datasets.length, x = g - k / 2 - $, j = v + o.scaleFontSize / 2
            }

            function h() {
                d = S, s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily, k = 1;
                for (var e = 0; e < t.labels.length; e++) {
                    var a = s.measureText(t.labels[e]).width;
                    k = a > k ? a : k
                }
                g / t.labels.length < k ? (L = 45, g / t.labels.length < Math.cos(L) * k ? (L = 90, d -= k) : d -= Math.sin(L) * k) : d -= o.scaleFontSize, d -= 5, m = o.scaleFontSize, d -= m, v = d
            }

            function u() {
                for (var e = Number.MIN_VALUE, a = Number.MAX_VALUE, n = 0; n < t.datasets.length; n++)
                    for (var i = 0; i < t.datasets[n].data.length; i++) t.datasets[n].data[i] > e && (e = t.datasets[n].data[i]), t.datasets[n].data[i] < a && (a = t.datasets[n].data[i]);
                var o = Math.floor(v / (.66 * m)),
                    s = Math.floor(.5 * (v / m));
                return {
                    maxValue: e,
                    minValue: a,
                    maxSteps: o,
                    minSteps: s
                }
            }
            var d, p, f, m, v, b, C, w, k, $, x, j, M, L = 0;
            h(), b = u(), C = o.scaleShowLabels ? o.scaleLabel : "", o.scaleOverride ? (f = {
                steps: o.scaleSteps,
                stepValue: o.scaleStepWidth,
                graphMin: o.scaleStartValue,
                labels: []
            }, i(C, f.labels, f.steps, o.scaleStartValue, o.scaleStepWidth)) : f = n(v, b.maxSteps, b.minSteps, b.maxValue, b.minValue, C), p = Math.floor(v / f.steps), c(), a(o, l, r, s)
        },
        x = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }(),
        j = {}
};
var $j = jQuery.noConflict(),
    scroll = 0;
$j(document).ready(function() {
        "use strict";
        initDoughnutProgressBar2(), initProgressBars(), initPieCharts(), initProgressBarsVertical(), initLineCharts()
    }),
    function(t) {
        "use strict";
        t.fn.countTo = function(e) {
            e = t.extend({}, t.fn.countTo.defaults, e || {});
            var a = Math.ceil(e.speed / e.refreshInterval),
                n = (e.to - e.from) / a;
            return t(this).each(function() {
                function i() {
                    r += n, s++, t(o).html(r.toFixed(e.decimals)), "function" == typeof e.onUpdate && e.onUpdate.call(o, r), s >= a && (clearInterval(l), r = e.to, "function" == typeof e.onComplete && e.onComplete.call(o, r))
                }
                var o = this,
                    s = 0,
                    r = e.from,
                    l = setInterval(i, e.refreshInterval)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 100,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery);
var $ = jQuery.noConflict();
$(window).resize(function() {
    "use strict";
    initLineCharts(), initDoughnutProgressBar2()
}), $(window).resize();
! function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return this.each(function() {
                e = e && i.element(this)
            }), e
        },
        removeAttrs: function(e) {
            var i = {},
                s = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        },
        rules: function(e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings,
                    n = r.rules,
                    a = t.validator.staticRules(s);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete n[s.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function(t, e) {
                            u[e] = a[e], delete a[e]
                        }), u
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({
                    required: l
                }, o)
            }
            return o
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                        s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function(e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s, function(e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i = t(e).attr("type"),
                    s = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(),
                    r = !1,
                    n = this.elementValue(e);
                for (var a in s) {
                    var u = {
                        method: a,
                        parameters: s[a]
                    };
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                        if (!i) return this.formatAndAdd(e, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var s = this.defaultMessage(e, i.method),
                    r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(e) {
            var i = {},
                s = t(e),
                r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var i, s, r = {},
                n = t(e);
            for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
            return r
        },
        staticRules: function(e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(s, r) {
                if (r === !1) return delete e[s], void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                        case "string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case "function":
                            n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }), t.each(e, function(s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function(e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i = 0,
                    s = 0,
                    r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
                }
                return 0 === i % 10
            },
            minlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            },
            maxlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            },
            rangelength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && r <= s[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === r.val()
            },
            remote: function(e, i, s) {
                if (this.optional(i)) return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
                        url: s
                    } || s, r.old === e) return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function(s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
                        } else {
                            var o = {},
                                l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
                        }
                        r.valid = a, n.stopRequest(i, a)
                    }
                }, s)), "pending"
            }
        }
    }), t.format = t.validator.format
}(jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
    });
    else {
        var i = t.ajax;
        t.ajax = function(s) {
            var r = ("mode" in s ? s : t.ajaxSettings).mode,
                n = ("port" in s ? s : t.ajaxSettings).port;
            return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery),
function(t) {
    t.extend(t.fn, {
        validateDelegate: function(e, i, s) {
            return this.bind(i, function(i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);