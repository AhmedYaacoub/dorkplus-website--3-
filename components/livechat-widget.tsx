"use client"

import { useEffect } from "react"

export function LiveChatWidget() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize LiveChat configuration
      window.__lc = window.__lc || {}
      window.__lc.license = 19325131
      window.__lc.integration_name = "manual_channels"
      window.__lc.product_name = "livechat"

      // LiveChat initialization function
      ;((n, t, c) => {
        function i(n) {
          return e._h ? e._h.apply(null, n) : e._q.push(n)
        }
        var e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: () => {
            i(["on", c.call(arguments)])
          },
          once: () => {
            i(["once", c.call(arguments)])
          },
          off: () => {
            i(["off", c.call(arguments)])
          },
          get: () => {
            if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.")
            return i(["get", c.call(arguments)])
          },
          call: () => {
            i(["call", c.call(arguments)])
          },
          init: () => {
            var n = t.createElement("script")
            n.async = !0
            n.type = "text/javascript"
            n.src = "https://cdn.livechatinc.com/tracking.js"
            t.head.appendChild(n)
          },
        }
        if (!n.__lc.asyncInit && e.init) {
          e.init()
        }
        n.LiveChatWidget = n.LiveChatWidget || e
      })(window, document, [].slice)
    }
  }, [])

  return null
}
