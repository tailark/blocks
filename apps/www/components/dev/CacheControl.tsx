'use client'

import { useState } from 'react'
import { clearIframeCache, updateServiceWorker } from '@/lib/serviceWorker'
import { Button } from '@tailark/core/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@tailark/core/ui/card'

export function CacheControl() {
    const [isClearing, setIsClearing] = useState(false)

    const handleClearCache = () => {
        setIsClearing(true)
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key && key.startsWith('iframe-cache-')) {
                    localStorage.removeItem(key)
                }
            }

            clearIframeCache()

            updateServiceWorker()

            setTimeout(() => {
                setIsClearing(false)
            }, 1000)
        } catch (error) {
            console.error('Error clearing cache:', error)
            setIsClearing(false)
        }
    }

    return (
        <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-lg">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm">Developer Controls</CardTitle>
                <CardDescription>Manage iframe caching</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-xs">Clear iframe caches to see the latest content. This will remove both browser and service worker caches.</p>
            </CardContent>
            <CardFooter>
                <Button
                    size="sm"
                    variant="destructive"
                    onClick={handleClearCache}
                    disabled={isClearing}>
                    {isClearing ? 'Clearing...' : 'Clear All Iframe Caches'}
                </Button>
            </CardFooter>
        </Card>
    )
}
