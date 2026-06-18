import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

export function useActiveSection(ids: string[], ref: RefObject<HTMLDivElement | null>): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const scrollTop = el.scrollTop
      const vh = el.clientHeight
      let found = ids[0]
      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= scrollTop + vh * 0.45) {
          found = id
        }
      }
      setActive(found)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [ids, ref])

  return active
}
