/*! art-template@4.1.0 | https://github.com/aui/art-template */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.template = t() : e.template = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r])return n[r].exports;
            var o = n[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 20)
    }([function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(17), i = n(1), u = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            "object" === (void 0 === t ? "undefined" : r(t)) ? n = t : n.source = t, n = i.$extend(n), t = n.source, n.debug && (n.cache = !1, n.bail = !1, n.compileDebug = !0);
            var u = n.debuger, c = n.filename, s = n.cache, a = n.caches;
            if (s && c) {
                var l = a.get(c);
                if (l)return l
            }
            if (!t) {
                var f = n.resolveFilename(c, n);
                try {
                    t = n.loader(f), n.filename = f, n.source = t
                } catch (e) {
                    var p = {
                        path: c,
                        name: "CompileError",
                        message: "template not found: " + e.message,
                        stack: e.stack
                    };
                    if (n.bail)throw p;
                    return u(p)
                }
            }
            var y = new o(n), h = function t(r, o) {
                try {
                    return t.source(r, o)
                } catch (t) {
                    if (!n.compileDebug)return n.cache = !1, n.compileDebug = !0, e(n)(r, o);
                    if (n.bail)throw t;
                    return u(t)()
                }
            };
            try {
                h.source = y.build(), s && c && a.set(c, h)
            } catch (e) {
                if (n.bail)throw e;
                return u(e)
            }
            return h.toString = function () {
                return h.source.toString()
            }, h
        };
        e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = n(9), o = n(8), i = n(11), u = n(13), c = n(12), s = n(10), a = n(16), l = n(15), f = n(14), p = {
            source: null,
            filename: null,
            rules: [a, l],
            escape: !0,
            debug: !1,
            cache: !0,
            compileDebug: !1,
            bail: !1,
            resolveFilename: f,
            compressor: null,
            debuger: r,
            loader: u,
            caches: o,
            root: "/",
            extname: ".art",
            imports: {$each: s, $escape: i, $include: c}
        };
        p.$extend = function (e) {
            var t = Object.create(this);
            for (var n in e)t[n] = e[n];
            return t
        }, e.exports = p
    }, function (e, t, n) {
        "use strict";
        var r = {
            abstract: !0,
            await: !0,
            boolean: !0,
            break: !0,
            byte: !0,
            case: !0,
            catch: !0,
            char: !0,
            class: !0,
            const: !0,
            continue: !0,
            debugger: !0,
            default: !0,
            delete: !0,
            do: !0,
            double: !0,
            else: !0,
            enum: !0,
            export: !0,
            extends: !0,
            false: !0,
            final: !0,
            finally: !0,
            float: !0,
            for: !0,
            function: !0,
            goto: !0,
            if: !0,
            implements: !0,
            import: !0,
            in: !0,
            instanceof: !0,
            int: !0,
            interface: !0,
            let: !0,
            long: !0,
            native: !0,
            new: !0,
            null: !0,
            package: !0,
            private: !0,
            protected: !0,
            public: !0,
            return: !0,
            short: !0,
            static: !0,
            super: !0,
            switch: !0,
            synchronized: !0,
            this: !0,
            throw: !0,
            transient: !0,
            true: !0,
            try: !0,
            typeof: !0,
            var: !0,
            void: !0,
            volatile: !0,
            while: !0,
            with: !0,
            yield: !0
        };
        e.exports = function (e) {
            return r.hasOwnProperty(e)
        }
    }, function (e, t, n) {
        "use strict"
    }, function (e, t, n) {
        "use strict";
        (function (t) {
            e.exports = !1;
            try {
                e.exports = "[object process]" === Object.prototype.toString.call(t.process)
            } catch (e) {
            }
        }).call(t, n(7))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
            var t = {type: "invalid", value: e[0]};
            return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = function (e, t, n) {
            return r(e, n)(t)
        };
        e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function () {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
        }
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = {
            __data: Object.create(null), set: function (e, t) {
                this.__data[e] = t
            }, get: function (e) {
                return this.__data[e]
            }, reset: function () {
                this.__data = {}
            }
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = function (e) {
            if ("object" === ("undefined" == typeof console ? "undefined" : r(console))) {
                var t = e.stack;
                delete e.stack, e = JSON.stringify(e, null, 4), console.error("Template Error: " + e + "\n\n" + t)
            }
            return function () {
                return "{Template Error}"
            }
        };
        e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = function (e, t) {
            if (Array.isArray(e))for (var n = 0, r = e.length; n < r; n++)t(e[n], n, e); else for (var o in e)t(e[o], o)
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = function (e) {
            var t = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"};
            return function e(t) {
                return "string" != typeof t && (t = "function" == typeof t ? e(t.call(t)) : null === t ? "" : JSON.stringify(t) || ""), t
            }(e).replace(/&(?![\w#]+;)|[<>"']/g, function (e) {
                return t[e]
            })
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = function (e, t, r, o) {
            var i = n(0);
            return o = o.$extend({filename: o.resolveFilename(e, o), source: null}), i(o)(t, r)
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = n(4), o = function (e) {
            if (r) {
                return n(3).readFileSync(e, "utf8")
            }
            var t = document.getElementById(e);
            return t.value || t.innerHTML
        };
        e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = n(4), o = function (e, t) {
            if (r) {
                var o = n(3), i = t.root, u = t.extname, c = e !== t.filename && t.filename, s = c ? o.dirname(c) : "";
                return o.extname(e) || (e += u), o.resolve(i, s, e)
            }
            return e
        };
        e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = {
            test: /{{([@#]?)(\/?)([\w\W]*?)}}/, use: function (e, t, n, r) {
                var i = this, u = i.options, c = i.getEsTokens(r.trim()), s = c.map(function (e) {
                    return e.value
                }), a = {}, l = void 0, f = !!t && "raw", p = n + s.shift(), y = function (e, t) {
                    console.warn("Template upgrade:", "{{" + e + "}}", ">>>", "{{" + t + "}}", "\n", u.filename || "")
                };
                switch ("#" === t && y("#value", "@value"), p) {
                    case"set":
                        r = "var " + s.join("");
                        break;
                    case"if":
                        r = "if(" + s.join("") + "){";
                        break;
                    case"else":
                        var h = s.indexOf("if");
                        h > -1 ? (s.splice(0, h + 1), r = "}else if(" + s.join("") + "){") : r = "}else{";
                        break;
                    case"/if":
                        r = "}";
                        break;
                    case"each":
                        l = o(c), l.shift(), "as" === l[1] && (y("each object as value index", "each object value index"), l.splice(1, 1));
                        var d = l[0] || "$data", m = l[1] || "$value", v = l[2] || "$index";
                        r = "$each(" + d + ",function(" + m + "," + v + "){";
                        break;
                    case"/each":
                        r = "})";
                        break;
                    case"echo":
                        p = "print", y("echo value", "value");
                    case"print":
                    case"include":
                    case"extend":
                        l = o(c), l.shift(), r = p + "(" + l.join(",") + ")";
                        break;
                    case"block":
                        r = "block(" + s.join("") + ",function(){";
                        break;
                    case"/block":
                        r = "})";
                        break;
                    default:
                        if (-1 !== s.indexOf("|")) {
                            for (var b = p, $ = [], g = s.filter(function (e) {
                                return !/^\s+$/.test(e)
                            }); "|" !== g[0];)b += g.shift();
                            g.filter(function (e) {
                                return ":" !== e
                            }).forEach(function (e) {
                                "|" === e ? $.push([]) : $[$.length - 1].push(e)
                            }), $.reduce(function (e, t) {
                                var n = t.shift();
                                return t.unshift(e), r = n + "(" + t.join(",") + ")"
                            }, b)
                        } else u.imports[p] ? (y("filterName value", "value | filterName"), l = o(c), l.shift(), r = p + "(" + l.join(",") + ")", f = "raw") : r = "" + p + s.join("");
                        f || (f = "escape")
                }
                return a.code = r, a.output = f, a
            }
        }, o = function (e) {
            for (var t = 0, n = e.shift(), r = [[n]]; t < e.length;) {
                var o = e[t], i = o.type;
                "whitespace" !== i && "comment" !== i && ("punctuator" === n.type && "]" !== n.value || "punctuator" === i ? r[r.length - 1].push(o) : r.push([o]), n = o), t++
            }
            return r.map(function (e) {
                return e.map(function (e) {
                    return e.value
                }).join("")
            })
        };
        r._split = o, e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = {
            test: /<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/, use: function (e, t, n, r) {
                var o = {"-": "raw", "=": "escape", "": !1, "==": "raw", "=#": "raw"};
                return t && (r = "//" + r), {code: r, output: o[n]}
            }
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(18), s = n(19), a = n(2), l = "$data", f = "$imports", p = "$options", y = function (e, t) {
            return e.hasOwnProperty(t)
        }, h = JSON.stringify, d = function () {
            function e(t) {
                var n, r = this;
                i(this, e), this.options = t, this.scripts = [], this.context = [], this.CONTEXT_MAP = {}, this.external = (n = {}, o(n, l, !0), o(n, f, !0), o(n, p, !0), n), this.internal = {
                    $$out: "''",
                    $$line: "[0,0,'']",
                    $$block: "arguments[1]||{}",
                    $$extend: "null",
                    $$layout: "function(){return $include($$extend," + l + ",$$block," + p + ")}",
                    print: "function(){$$out+=''.concat.apply('',arguments)}",
                    include: "function(src,data,block){$$out+=$include(src,data||" + l + ",block," + p + ")}",
                    extend: "function(src){$$extend=src}",
                    block: "function(name,callback){if($$extend){$$out='';callback();$$block[name]=$$out}else{if(typeof $$block[name]==='string'){$$out+=$$block[name]}else{callback()}}}"
                }, this.dependencies = {
                    print: ["$$out"],
                    include: ["$$out", "$include", l, p],
                    extend: ["$$extend", "$$layout"],
                    block: ["$$extend", "$$out", "$$block"],
                    $$layout: ["$include", "$$extend", l, "$$block", p]
                }, this.importContext("$$out"), t.compileDebug && this.importContext("$$line"), this.getTplTokens(t.source, t.rules, this).forEach(function (e) {
                    e.type === s.TYPE_STRING ? r.parseString(e) : r.parseExpression(e)
                })
            }

            return u(e, [{
                key: "getTplTokens", value: function () {
                    return s.apply(void 0, arguments)
                }
            }, {
                key: "getEsTokens", value: function (e) {
                    return c(e)
                }
            }, {
                key: "getVariables", value: function (e) {
                    var t = !1;
                    return e.filter(function (e) {
                        return "whitespace" !== e.type && "comment" !== e.type
                    }).filter(function (e) {
                        return "name" === e.type && !t || (t = "punctuator" === e.type && "." === e.value, !1)
                    }).map(function (e) {
                        return e.value
                    })
                }
            }, {
                key: "importContext", value: function (e) {
                    var t = this, n = "", r = this.internal, o = this.dependencies, i = this.external, u = this.context, c = this.options, s = c.imports, p = this.CONTEXT_MAP;
                    y(p, e) || y(i, e) || a(e) || (y(r, e) ? (n = r[e], y(o, e) && o[e].forEach(function (e) {
                        return t.importContext(e)
                    })) : n = y(s, e) ? f + "." + e : l + "." + e, p[e] = n, u.push({name: e, value: n}))
                }
            }, {
                key: "parseString", value: function (e) {
                    var t = e.value, n = this.options, r = n.compressor;
                    if (r && (t = r(t)), t) {
                        var o = "$$out+=" + h(t);
                        this.scripts.push({source: t, tplToken: e, code: o})
                    }
                }
            }, {
                key: "parseExpression", value: function (e) {
                    var t = this, n = e.value, r = e.line, o = e.start, i = this.options, u = i.compileDebug, c = e.script, a = c.output, l = c.code.trim();
                    if (a && (l = !1 === escape || a === s.TYPE_RAW ? "$$out+=" + c.code : "$$out+=$escape(" + c.code + ")"), u) {
                        var f = [r, o, h(n)].join(",");
                        this.scripts.push({source: n, tplToken: e, code: "$$line=[" + f + "]"})
                    }
                    var p = this.getEsTokens(l);
                    this.getVariables(p).forEach(function (e) {
                        return t.importContext(e)
                    }), this.scripts.push({source: n, tplToken: e, code: l})
                }
            }, {
                key: "checkExpression", value: function (e) {
                    for (var t = [[/^\s*?}.*?{?[\s;]*?$/, ""], [/(^[\w\W]*?\s*?function\s*?\([\w\W]*?\)\s*?{[\s;]*?$)/, "$1})"], [/(^.*?\(\s*?[\w\W]*?=>\s*?{[\s;]*?$)/, "$1})"], [/(^[\w\W]*?\([\w\W]*?\)\s*?{[\s;]*?$)/, "$1}"]], n = 0; n < t.length;) {
                        if (t[n][0].test(e)) {
                            var o;
                            e = (o = e).replace.apply(o, r(t[n]));
                            break
                        }
                        n++
                    }
                    try {
                        return new Function(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "build", value: function () {
                    var e = this.options, t = this.context, n = this.scripts, r = e.source, o = e.filename, i = e.imports, u = y(this.CONTEXT_MAP, "extend"), c = "var " + t.map(function (e) {
                            return e.name + "=" + e.value
                        }).join(","), s = n.map(function (e) {
                        return e.code
                    }).join("\n"), a = u ? "return $$layout()" : "return $$out", d = ["'use strict'", c, s, a].join("\n");
                    if (e.compileDebug) {
                        var m = "{" + ["path:" + h(o), "name:'RuntimeError'", "message:e.message", "line:$$line[0]+1", "start:$$line[1]+1", "source:$$line[2]", "stack:e.stack"].join(",") + "}";
                        d = "try{" + d + "}catch(e){throw " + m + "}"
                    }
                    d = "function(" + l + "){\n" + d + "\n}";
                    try {
                        return new Function(f, p, "return " + d)(i, e)
                    } catch (e) {
                        for (var v = 0, b = 0, $ = 0, g = r; v < n.length;) {
                            var x = n[v];
                            if (!this.checkExpression(x.code)) {
                                g = x.source, b = x.tplToken.line, $ = x.tplToken.start;
                                break
                            }
                            v++
                        }
                        throw{
                            path: o,
                            name: "CompileError",
                            message: e.message,
                            line: b + 1,
                            start: $ + 1,
                            source: g,
                            script: d,
                            stack: e.stack
                        }
                    }
                }
            }]), e
        }();
        e.exports = d
    }, function (e, t, n) {
        "use strict";
        var r = n(5).default, o = n(5).matchToToken, i = n(2), u = function (e) {
            return e.match(r).map(function (e) {
                return r.lastIndex = 0, o(r.exec(e))
            }).map(function (e) {
                return "name" === e.type && i(e.value) && (e.type = "keyword"), e
            })
        };
        e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = function (e, t, n) {
            for (var r = [{
                type: "string",
                value: e,
                line: 0,
                start: 0,
                end: e.length
            }], o = 0; o < t.length; o++)!function (e) {
                for (var t = e.test.ignoreCase ? "ig" : "g", o = e.test.source + "|^$|[\\w\\W]", i = new RegExp(o, t), u = 0; u < r.length; u++)if ("string" === r[u].type) {
                    for (var c = r[u].line, s = r[u].start, a = r[u].end, l = r[u].value.match(i), f = [], p = 0; p < l.length; p++) {
                        var y = l[p];
                        e.test.lastIndex = 0;
                        var h = e.test.exec(y), d = h ? "expression" : "string", m = f[f.length - 1], v = m || r[u], b = v.value;
                        s = v.line === c ? m ? m.end : s : b.length - b.lastIndexOf("\n") - 1, a = s + y.length;
                        var $ = {type: d, value: y, line: c, start: s, end: a};
                        if ("string" === d)m && "string" === m.type ? (m.value += y, m.end += y.length) : f.push($); else {
                            var g = e.use.apply(n, h);
                            $.script = g, f.push($)
                        }
                        c += y.split(/\n/).length - 1
                    }
                    r.splice.apply(r, [u, 1].concat(f)), u += f.length - 1
                }
            }(t[o]);
            return r
        };
        r.TYPE_STRING = "string", r.TYPE_EXPRESSION = "expression", r.TYPE_RAW = "raw", r.TYPE_ESCAPE = "escape", e.exports = r
    }, function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(6), i = n(0), u = n(1), c = function (e, t) {
            return "object" === (void 0 === t ? "undefined" : r(t)) ? o({filename: e}, t) : i({filename: e, source: t})
        };
        c.render = o, c.compile = i, c.defaults = u, e.exports = c
    }])
});