'use client'

import { useEffect } from 'react'
import { registerServiceWorker } from '@/lib/serviceWorker'

export default function ServiceWorkerInit() {
    useEffect(() => {
        registerServiceWorker()
    }, [])

    // This is a hidden component that just handles service worker registration
    return null
}
