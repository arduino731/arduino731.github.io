import { useEffect, useState, useRef } from 'react'

export default function useHandleScroll(sectionIds = []) {
  const [handleScroll, setHandleScroll] = useState(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2

      for (let id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const inView = rect.top <= middle && rect.bottom >= middle

        if (inView) {
          setHandleScroll(id)

          if (id === 'keyFeatures' && !hasAnimated.current) {
            hasAnimated.current = true // prevent future triggers

            const boldEls = el.querySelectorAll('.keyFeatures')
            boldEls.forEach((bold, index) => {
              setTimeout(() => {
                bold.classList.add('animate')
              }, index * 200)
            })
          }

          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return handleScroll
}
