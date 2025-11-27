import { SiteFooter } from '@/components/site-footer'
import { cn } from '@/lib/utils'
import { Button } from '@tailark/core/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { testimonials } from '@/lib/testimonials'

const imageClasses = 'ring-black/10 relative overflow-hidden rounded-xl shadow-md shadow-black/6.5 ring-1 border-4 border-white'

export default function Home() {
    return (
        <>
            <section className="overflow-hidden pb-24">
                <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
                    <div className="max-w-md">
                        <h1 className="text-foreground text-balance text-4xl font-semibold leading-10 tracking-tight">Build modern marketing websites with Shadcn blocks</h1>
                        <Button
                            asChild
                            className="mt-5 rounded-full">
                            <Link href="/hero-section">
                                Explore blocks <span className="border-l-primary-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <h2 className="sr-only">Kits</h2>
                    <div
                        aria-hidden="true"
                        className="mask-x-from-75% pointer-events-none absolute -inset-x-32 -inset-y-px border-y border-dashed"
                    />
                    <div className="relative mx-auto max-w-7xl px-2.5 max-xl:px-1.5">
                        <div
                            aria-hidden="true"
                            className="mask-y-from-90% pointer-events-none absolute -inset-y-32 inset-x-[5px] border-x border-dashed lg:inset-x-[9px]"
                        />
                        <div className="bg-foreground/5 dark:bg-foreground/5 ring-foreground/15 relative overflow-hidden rounded-[18px] shadow-md shadow-black/10 ring-1">
                            <div className="grid gap-1.5 p-1.5 lg:grid-cols-2">
                                <div className="bg-card ring-foreground/6.5 relative z-10 overflow-hidden rounded-2xl px-6 pt-6 shadow-md shadow-black/5 ring-1">
                                    <div className="absolute inset-0 -z-10">
                                        <Image
                                            src="https://pro.tailark.com/grid-2-bg.png"
                                            alt="tailark hero section background"
                                            className="size-full object-cover object-top"
                                            width={987}
                                            height={1481}
                                            sizes="(max-width: 1280px) 100vw, (min-width: 1280px) 960px"
                                        />
                                    </div>

                                    <div className="-mb-4">
                                        <div className="mb-4 space-y-0.5">
                                            <h3 className="text-sm font-medium text-white">
                                                <Link
                                                    href="https://pro.tailark.com"
                                                    className="before:absolute before:inset-0">
                                                    Tailark Pro
                                                </Link>
                                            </h3>
                                            <p className="text-sm text-white/75">Enterprise-level blocks and pages</p>
                                        </div>
                                        <ImageWrapper>
                                            <Image
                                                src="https://pro.tailark.com/pages/full-grid-2-landing-one.png"
                                                alt="Tailark Quartz libre pricing page"
                                                width={936}
                                                height={1184}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 936px"
                                                className="border-background shadow-black/3 pointer-events-none rounded-xl border-[0.5px] object-cover"
                                            />
                                        </ImageWrapper>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="ring-foreground/6.5 relative z-10 overflow-hidden rounded-2xl bg-white p-6 shadow-md shadow-black/5 ring-1">
                                        <div>
                                            <div className="mb-4 space-y-0.5">
                                                <h3 className="text-sm font-medium text-black">
                                                    <Link
                                                        href="/hero-section"
                                                        className="before:absolute before:inset-0 before:z-10">
                                                        Tailark Dusk
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-black/65">Perfect for dark mode websites</p>
                                            </div>
                                            <div className="max-h-81 grid grid-cols-2 gap-1.5">
                                                <div className={cn(imageClasses, 'aspect-45/52')}>
                                                    <Image
                                                        src="/dusk/hero.png"
                                                        alt="Tailark Dusk features section"
                                                        width={960}
                                                        height={1097.33}
                                                        sizes="(max-width: 1024px) 400px, 320px"
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className={cn(imageClasses, 'aspect-90/81')}>
                                                        <Image
                                                            src="/dusk/features-nine-light.png"
                                                            alt="Tailark Dusk features section"
                                                            width={960}
                                                            height={855.33}
                                                            sizes="(max-width: 1024px) 400px, 600px"
                                                            className="size-full object-cover"
                                                        />
                                                    </div>

                                                    <div className={cn(imageClasses, 'aspect-70/42')}>
                                                        <Image
                                                            src="/dusk/features-6.png"
                                                            alt="Tailark Dusk features section"
                                                            width={960}
                                                            height={664.66}
                                                            sizes="(max-width: 1024px) 400px, 320px"
                                                            className="size-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ring-foreground/6.5 relative z-10 overflow-hidden rounded-2xl bg-white p-6 shadow-md shadow-black/5 ring-1">
                                        <div>
                                            <div className="mb-4 space-y-0.5">
                                                <h3 className="text-sm font-medium text-black">
                                                    <Link
                                                        href="/mist"
                                                        className="before:absolute before:inset-0">
                                                        Tailark Mist
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-black/65">Notion-Inspired Marketing Blocks.</p>
                                            </div>

                                            <div className="relative">
                                                <div className="peer -m-2 overflow-hidden p-2 duration-300 ease-in-out [clip-path:inset(0px_50%_0px_0px)] hover:[clip-path:inset(0px_25%_0px_0px)]">
                                                    <div className={cn(imageClasses, 'aspect-72/38')}>
                                                        <Image
                                                            src="/mist/hero.png"
                                                            alt="Tailark Mist hero section"
                                                            width={960}
                                                            height={493.33}
                                                            sizes="(max-width: 1024px) 1024px, 686px"
                                                            className="size-full object-cover object-top"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="peer/dark absolute -inset-x-2 -bottom-2 top-0 p-2 duration-300 ease-in-out [clip-path:inset(0px_0px_0px_50%)] hover:[clip-path:inset(0px_0px_0px_25%)] peer-hover:[clip-path:inset(0px_0px_0px_75%)]">
                                                    <div className={cn(imageClasses, 'aspect-72/38')}>
                                                        <Image
                                                            src="/mist/features.png"
                                                            alt="Tailark Mist features section"
                                                            width={960}
                                                            height={482.66}
                                                            sizes="(max-width: 1024px) 1024px, 686px"
                                                            className="size-full object-cover object-top"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    aria-hidden
                                                    className="z-1 pointer-events-none absolute inset-0 flex duration-300 ease-in-out peer-hover/dark:translate-x-[-25.5%] peer-hover:translate-x-[25.5%]">
                                                    <div className="mx-auto h-full w-0.5 rounded bg-white shadow shadow-black/25" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="@container mx-auto px-4 lg:px-6 2xl:max-w-7xl">
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
                    <div className="ring-foreground/6.5 bg-card @md:grid-cols-2 @max-md:divide-y @md:divide-x mx-auto mt-12 grid max-w-xl rounded-xl border border-transparent shadow-md shadow-black/5 ring-1">
                        {testimonials.map((testimonial, index) => (
                            <div
                                className="relative space-y-4 p-6"
                                key={index}>
                                <p>{testimonial.post}</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <div className="ring-foreground/10 bg-muted size-10 rounded-full border border-transparent shadow-md shadow-black/5 ring-1">
                                        <Image
                                            className="aspect-square rounded-full object-cover"
                                            src={`https://pro.tailark.com/${testimonial.avatar}`}
                                            alt={testimonial.name}
                                            height="400"
                                            width="400"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="flex items-center gap-1 text-sm font-medium">
                                            <Link
                                                target="_blank"
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

            <div className="pt-24">
                <SiteFooter />
            </div>
        </>
    )
}

const ImageWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                'bg-card rounded-xl shadow-black/5 [--color-border-illustration:--alpha(var(--color-foreground)/6.5%)] [box-shadow:0_0_0_1px_var(--color-border-illustration),0_2px_4px_-0.5px_var(--tw-shadow-color),0_4px_8px_-1px_var(--tw-shadow-color),0_8px_16px_-2px_var(--tw-shadow-color),0_16px_32px_-4px_var(--tw-shadow-color),0_24px_48px_-6px_var(--tw-shadow-color),0_32px_64px_-8px_var(--tw-shadow-color),0_40px_80px_-10px_var(--tw-shadow-color),0_48px_96px_-12px_var(--tw-shadow-color)]',
                className
            )}>
            <div className="max-xl:aspect-20/25 aspect-20/27 overflow-hidden rounded-xl">{children}</div>
        </div>
    )
}
