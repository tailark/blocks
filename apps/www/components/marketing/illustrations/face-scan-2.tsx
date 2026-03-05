'use client'
import { cn } from '@tailark/core/lib/utils'
import { motion } from 'motion/react'
import Image from 'next/image'

export const FaceScan2Illustration = () => {
    return (
        <div
            aria-hidden
            className="group relative [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div className="group relative">
                <div className="inset-x-17 bg-radial z-1 absolute bottom-1/4 top-1/4 mx-auto rounded border border-white/10 bg-white/15 from-sky-500/25 to-transparent">
                    <CardDecorator className="animate-breathing" />
                </div>
                <div className="aspect-square size-56">
                    <Image
                        src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530872/human-face_kf9mt7.png"
                        alt="Woman face"
                        className="inverted contrast-105 size-full object-cover grayscale"
                        width={224}
                        height={224}
                    />
                </div>

                <div className="absolute inset-0 isolate mix-blend-plus-lighter duration-300">
                    <motion.div
                        initial={{ opacity: 0.5, maskSize: '100% 0%' }}
                        animate={{ opacity: 1, maskSize: ['100% 0%', '100% 100%', '100% 500%'] }}
                        transition={{
                            opacity: { duration: 0.75, delay: 2 },
                            maskSize: { duration: 5, delay: 2, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className="mask-[url('https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530871/mask-bg_v7vpk7.png')] mask-no-repeat absolute inset-0 aspect-square size-56 max-w-xs bg-[url('https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530872/human-wire-face_lryi6q.png')] bg-cover bg-[50%_50%] bg-no-repeat group-hover:opacity-95"
                    />
                </div>
            </div>
        </div>
    )
}

export const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('absolute -left-px -top-px block size-2 rounded-tl border-l-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -right-px -top-px block size-2 rounded-tr border-r-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -bottom-px -left-px block size-2 rounded-bl border-b-[1.5px] border-l-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -bottom-px -right-px block size-2 rounded-br border-b-[1.5px] border-r-[1.5px] border-white', className)}></span>
    </>
)

export default FaceScan2Illustration
