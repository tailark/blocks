import { SiteFooter } from '@/components/site-footer'
import { Button } from '@tailark/core/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { mainTestimonials as testimonials } from '@/lib/testimonials'
import { ChevronRight } from 'lucide-react'
import { BlocksCanvas } from '@/components/marketing/blocks-canvas'
import { PagesSection } from '@/components/marketing/pages'
import { Pricing } from '@/components/marketing/pricing'
import { WallOfLove } from '@/components/marketing/wall-of-love'
import FAQs from '@/components/marketing/faqs'
import { LogoCloud } from '@/components/marketing/logo-cloud'
import { IllustrationsSection } from '@/components/marketing/illustrations'
import { getAllKitCategories } from '@/lib/catalog'

export default async function Home() {
    return (
        <>
            <section
                data-theme="global"
                className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 md:pt-36">
                    <div className="mx-auto max-w-xl text-center">
                        <div className="group relative mx-auto flex w-fit items-center gap-3 text-sm max-md:justify-center">
                            <svg
                                aria-hidden
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="size-4 text-emerald-600 dark:text-emerald-300">
                                <path d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Z" />
                                <path
                                    className="opacity-60"
                                    d="M6.949 5.684a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Z"
                                />
                                <path
                                    className="opacity-50"
                                    d="M13.949 13.684a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"
                                />
                            </svg>

                            <span className="text-muted-foreground group-hover:text-foreground font-medium">Introducing Veil Kit</span>
                            <Link
                                href="/veil"
                                aria-label="Veil"
                                className="before:absolute before:-inset-4">
                                <div className="relative size-3">
                                    <ChevronRight
                                        aria-hidden
                                        strokeWidth={2.5}
                                        className="not-group-hover:-translate-x-2 size-3 translate-y-px opacity-50 duration-200 group-hover:opacity-100"
                                    />
                                    <ChevronRight
                                        aria-hidden
                                        strokeWidth={2.5}
                                        className="absolute inset-0 size-3 -translate-x-2 translate-y-px opacity-0 duration-200 group-hover:-translate-x-1 group-hover:opacity-25"
                                    />
                                    <ChevronRight
                                        aria-hidden
                                        strokeWidth={2.5}
                                        className="absolute inset-0 size-3 -translate-x-3 translate-y-px opacity-0 duration-200 group-hover:-translate-x-2 group-hover:opacity-10"
                                    />
                                </div>
                            </Link>
                        </div>

                        <h1 className="mb-7 mt-8 text-balance text-3xl font-medium tracking-tight">
                            Build modern marketing websites with <span className="bg-linear-to-b hover:animate-hue-rotate from-emerald-400 to-emerald-600 bg-clip-text text-transparent dark:from-emerald-200 dark:to-emerald-500">Shadcn blocks.</span>
                        </h1>

                        <div className="flex flex-wrap justify-center gap-2">
                            <Button
                                asChild
                                size="sm"
                                className="bg-primary/90 text-shadow-sm shadow-md shadow-black/10 [--color-primary-foreground:var(--color-background)] [--color-primary:var(--foreground)]">
                                <a
                                    href="/#pricing"
                                    className="text-sm!">
                                    Get full access
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-primary/90 text-shadow-sm shadow-md shadow-black/10 [--color-primary-foreground:var(--color-background)] [--color-primary:var(--foreground)]">
                                <a
                                    href="/#pricing"
                                    className="text-sm!">
                                    Get full access
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                variant="ghost">
                                <Link
                                    href="/blocks"
                                    className="text-sm!">
                                    Explore kits
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <BlocksCanvasServer />
            </section>

            <LogoCloud />

            <div
                data-theme="global"
                className="@container mx-auto px-4 pt-24 lg:px-6 2xl:max-w-7xl">
                <div className="mx-auto lg:w-1/2">
                    <Link
                        href="https://vercel.com/oss"
                        className="mx-auto block w-fit"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            alt="Vercel OSS Program"
                            src="https://vercel.com/oss/program-badge.svg"
                        />
                    </Link>
                    <h2 className="sr-only">Testimonials</h2>
                    <div className="ring-border-illustration bg-card @md:grid-cols-2 @max-md:divide-y @md:divide-x mx-auto mt-12 grid max-w-xl rounded-xl border border-transparent shadow-md shadow-black/5 ring-1">
                        {testimonials.map((testimonial, index) => (
                            <div
                                className="relative space-y-4 p-6"
                                key={index}>
                                <p>{testimonial.post}</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <div className="before:border-foreground/25 relative size-10 rounded-full shadow-md shadow-black/5 before:absolute before:inset-0 before:rounded-full before:border">
                                        <Image
                                            className="aspect-square rounded-full object-cover"
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            height="400"
                                            width="400"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-1 text-sm font-medium">
                                            <Link
                                                target="_blank" rel="noopener noreferrer"
                                                href={testimonial.link}
                                                className="line-clamp-1 capitalize before:absolute before:inset-0">
                                                {testimonial.name}
                                            </Link>
                                            {testimonial.certified && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    height="14"
                                                    width="14">
                                                    <clipPath id="A">
                                                        <path d="M0 0h14v14H0z" />
                                                    </clipPath>
                                                    <g clipPath="url(#A)">
                                                        <path
                                                            d="M10.811 2.479c.133.322.388.577.71.711l1.127.467a1.31 1.31 0 0 1 .71.71c.133.322.133.683 0 1.005l-.466 1.126a1.31 1.31 0 0 0 0 1.005l.466 1.126a1.31 1.31 0 0 1 .1.502c0 .172-.034.343-.1.502a1.31 1.31 0 0 1-.711.71l-1.126.466a1.31 1.31 0 0 0-.711.71l-.467 1.127a1.31 1.31 0 0 1-1.715.71l-1.126-.466a1.31 1.31 0 0 0-1.004.001l-1.127.466c-.321.133-.682.133-1.004 0s-.577-.388-.71-.71l-.467-1.127c-.133-.322-.388-.577-.71-.711l-1.127-.467a1.31 1.31 0 0 1-.71-.71C.511 9.312.51 8.951.643 8.629l.466-1.126c.133-.322.133-.683-.001-1.004L.643 5.371a1.31 1.31 0 0 1 0-1.005 1.31 1.31 0 0 1 .711-.71l1.126-.466c.321-.133.577-.388.71-.709l.467-1.127c.133-.322.389-.577.71-.71a1.31 1.31 0 0 1 1.005 0l1.126.466c.322.133.683.133 1.004-.001L8.63.644c.322-.133.683-.133 1.004 0s.577.389.71.71l.467 1.127z"
                                                            fill="#0788f5"
                                                        />
                                                        <path
                                                            d="M9.742 5.165c.094-.147.125-.325.087-.495s-.141-.318-.288-.412-.325-.125-.495-.087-.318.141-.412.288l-2.57 4.038-1.176-1.47c-.109-.136-.267-.223-.44-.242s-.347.031-.483.14-.223.267-.243.44.031.347.14.483l1.75 2.188c.065.082.149.146.244.189s.2.062.304.056.206-.036.296-.089.166-.126.222-.215z"
                                                            fill="#fff"
                                                            fillRule="evenodd"
                                                        />
                                                    </g>
                                                </svg>
                                            )}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">@{testimonial.handler}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <IllustrationsSection />
            <PagesSection />

            <Pricing />
            <WallOfLove />
            <FAQs />

            <div className="pt-24">
                <SiteFooter />
            </div>
        </>
    )
}

async function BlocksCanvasServer() {
    'use cache'
    const catalogData = await getAllKitCategories()
    return <BlocksCanvas initialData={catalogData} />
}
