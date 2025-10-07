'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'

export function usePageTransition() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Configurar NProgress
    NProgress.configure({
      showSpinner: false,
      speed: 500,
      minimum: 0.3,
    })

    const handleStart = () => {
      setIsLoading(true)
      NProgress.start()
    }

    const handleComplete = () => {
      setIsLoading(false)
      NProgress.done()
    }

    // Simular loading quando a rota muda
    handleStart()
    
    const timer = setTimeout(() => {
      handleComplete()
    }, 600) // 600ms de loading

    return () => {
      clearTimeout(timer)
      handleComplete()
    }
  }, [pathname])

  return { isLoading }
}