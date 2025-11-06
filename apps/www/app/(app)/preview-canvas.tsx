import { ReactNode } from 'react'
import Image from 'next/image'
import { AspectRatio } from '@tailark/core/ui/aspect-ratio'
import { HeroPagesIllustration } from './hero-pages-illustration'

interface PreviewCanvasProps {
    className?: string
}

const imageClasses = 'border-1 [--color-border-illustration:--alpha(var(--color-foreground)/6.5%)] [box-shadow:0_0_0_1px_var(--color-border-illustration),0_3px_3px_-0.5px_var(--tw-shadow-color),0_6px_6px_-1px_var(--tw-shadow-color),0_12px_12px_-2px_var(--tw-shadow-color),0_16px_16px_-4px_var(--tw-shadow-color),0_24px_24px_-6px_var(--tw-shadow-color),0_32px_32px_-8px_var(--tw-shadow-color)] pointer-events-none border-background rounded-xl object-cover shadow-black/3'

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ className = '' }) => {
    return (
        <div
            data-theme="quartz"
            className={`before:mask-t-from-50% relative -mt-10 ${className}`}>
            <div className="lg:*:nth-3:mt-44 lg:*:nth-2:mt-24 grid grid-flow-dense grid-cols-4 gap-3 p-3 lg:*:first:mt-56">
                <GridCol>
                    <div>
                        <HeroPagesIllustration
                            src="https://pro.tailark.com/pages/full-libre-landing-one.png"
                            alt="Tailark Quartz libre landing page"
                            width={686}
                            height={1906}
                            className={imageClasses}
                        />
                    </div>
                    <AspectRatio ratio={40 / 23}>
                        <Image
                            src="https://pro.tailark.com/preview/content.png"
                            alt="Tailark Quartz content section"
                            width={686}
                            height={383}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <AspectRatio ratio={90 / 51}>
                        <Image
                            src="https://pro.tailark.com/preview/features.png"
                            alt="Tailark Quartz features"
                            width={686}
                            height={383}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                </GridCol>
                <GridCol>
                    <AspectRatio ratio={80 / 61}>
                        <Image
                            src="https://pro.tailark.com/preview/secondary-hero.png"
                            alt="Tailark Quartz secondary hero section"
                            width={686}
                            height={523}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <AspectRatio ratio={81 / 58}>
                        <Image
                            src="https://pro.tailark.com/preview/comparator.png"
                            alt="Tailark Quartz pricing comparator"
                            width={686}
                            height={489}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <AspectRatio ratio={90 / 66}>
                        <Image
                            src="https://pro.tailark.com/preview/bento-1.png"
                            alt="Tailark Quartz bento 1"
                            width={686}
                            height={435}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <div>
                        <HeroPagesIllustration
                            src="https://pro.tailark.com/pages/full-libre-customers-one.png"
                            alt="Tailark Quartz libre customers"
                            width={686}
                            height={1906}
                            className={imageClasses}
                        />
                    </div>
                </GridCol>
                <GridCol>
                    <div>
                        <HeroPagesIllustration
                            src="https://pro.tailark.com/pages/full-dark-landing-one.png"
                            alt="Tailark Quartz dark landing page"
                            width={686}
                            height={1906}
                            className={imageClasses}
                        />
                    </div>
                    <AspectRatio ratio={90 / 85}>
                        <Image
                            src="https://pro.tailark.com/preview/bento-3.png"
                            alt="Tailark Quartz bento 3"
                            width={686}
                            height={645}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <AspectRatio ratio={80 / 60}>
                        <Image
                            src="https://pro.tailark.com/preview/secondary-hero-4.png"
                            alt="Tailark Quartz secondary hero section four"
                            width={686}
                            height={510}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                </GridCol>
                <GridCol>
                    <AspectRatio ratio={80 / 51}>
                        <Image
                            src="https://pro.tailark.com/preview/blog.png"
                            alt="Tailark Quartz blog"
                            width={686}
                            height={1827}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                    <AspectRatio ratio={90 / 94}>
                        <Image
                            src="https://pro.tailark.com/preview/pricing.png"
                            alt="Tailark Quartz pricing"
                            width={686}
                            height={709}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>

                    <div>
                        <HeroPagesIllustration
                            src="https://pro.tailark.com/pages/full-grid-2-landing-one.png"
                            alt="Tailark Quartz grid 2 landing page"
                            width={686}
                            height={1906}
                            className={imageClasses}
                        />
                    </div>
                    <AspectRatio ratio={90 / 54}>
                        <Image
                            src="https://pro.tailark.com/preview/faqs.png"
                            alt="Tailark Quartz faqs"
                            width={686}
                            height={407}
                            sizes="(max-width: 1024px) 0px, 686px"
                            className={imageClasses}
                        />
                    </AspectRatio>
                </GridCol>
            </div>
        </div>
    )
}

const GridCol = ({ children }: { children: ReactNode }) => <div className="flex flex-col gap-3 *:duration-300 *:hover:scale-[1.005]">{children}</div>
