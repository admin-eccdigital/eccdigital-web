"use client"

import { useEffect, useRef } from "react"

export function EmbeddedForm() {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data && typeof e.data === "object" && (e.data as any).eccFormHeight) {
        const h = (e.data as any).eccFormHeight as number
        if (ref.current) ref.current.style.height = h + 24 + "px"
      }
    }
    window.addEventListener("message", onMsg)
    return () => window.removeEventListener("message", onMsg)
  }, [])

  return (
    <iframe
      ref={ref}
      src="/dotaznik-web.html"
      title="Dotazník pro nacenění webu"
      loading="lazy"
      style={{ width: "100%", border: 0, display: "block", minHeight: 1400 }}
    />
  )
}
