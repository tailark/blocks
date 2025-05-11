import React from 'react'

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex min-h-56 items-center justify-center">
            <div className="border-primary size-6 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
    )
}

export default LoadingSpinner
