import { cn } from '@/lib/utils'
import { Button } from '@tailark/core/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { mistTestimonials as testimonials } from '@/lib/testimonials'

const imageClasses = 'ring-foreground/5 relative overflow-hidden rounded-xl shadow-2xl shadow-black/25 ring-1 before:absolute before:inset-0 before:rounded-xl before:border-background before:border'

export const MistSection = () => {
    return (
        <section className="bg-linear-to-b not-dark:to-muted/50 overflow-hidden border-b to-35% pb-4 md:pb-20">
            <div className="mx-auto px-4 pt-6 md:pt-20 lg:px-6 2xl:max-w-7xl">
                <div className="mx-auto lg:w-1/2">
                    <div className="max-w-xl max-md:mx-auto max-md:text-center">
                        <span className="mb-6 block text-sm text-indigo-500 dark:text-indigo-400">Mist</span>
                        <h2 className="text-foreground text-balance text-3xl font-semibold sm:text-4xl">Shadcn Blocks for Wiki-Style Websites</h2>
                        <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Craft Sleek, Notion-Inspired Marketing Pages. </p>

                        <Button
                            asChild
                            className="shadow-lg shadow-black/35">
                            <Link href="/mist/hero-section">Explore blocks</Link>
                        </Button>
                        <Button
                            asChild
                            className="ml-3"
                            variant="ghost">
                            <Link
                                target="_blank"
                                href="https://github.com/tailark/blocks/blob/main/packages/mist-kit/README.md">
                                Docs
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mask-radial-from-75% mask-radial-at-top mask-radial-[75%_100%] relative px-4 pt-12 md:pt-20 2xl:mx-auto 2xl:max-w-7xl">
                <div
                    aria-hidden
                    className="mask-t-from-90% pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="size-full"
                        style={{
                            backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
                            backgroundSize: '20px 20px',
                            backgroundPosition: '0 0, 0 0',
                            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in',
                        }}
                    />
                </div>

                <div className="grid grid-cols-6 gap-3 md:grid-cols-4">
                    <div className="-ml-67 space-y-3">
                        <div className={cn(imageClasses, 'aspect-90/72')}>
                            <Image
                                src="/mist/comparator.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={2222}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className={cn(imageClasses, 'aspect-90/66')}>
                            <Image
                                src="/mist/contact.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={2108}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="relative z-10 col-span-4 space-y-3 md:col-span-2">
                        <div
                            aria-hidden
                            className="bg-linear-to-b/increasing not-dark:from-emerald-300 absolute inset-0 via-indigo-500 to-purple-500 opacity-5 blur-2xl md:-inset-12 dark:hidden dark:via-white"
                        />
                        <div className={cn(imageClasses, 'aspect-72/37')}>
                            <Image
                                src="/mist/hero.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={1480}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>

                        <div className={cn(imageClasses, 'aspect-72/70')}>
                            <Image
                                src="/mist/features-2.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={2780}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="-mr-53 space-y-3">
                        <div className={cn(imageClasses, 'aspect-90/46')}>
                            <Image
                                src="/mist/features.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={1448}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>

                        <div className={cn(imageClasses, 'aspect-90/71')}>
                            <Image
                                src="/mist/pricing.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={2264}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>
                        <div className={cn(imageClasses, 'aspect-90/46')}>
                            <Image
                                src="/mist/login.png"
                                alt="Dusk hero section"
                                width={2880}
                                height={2108}
                                sizes="(max-width: 1024px) 686px, 1024px"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="@container mx-auto px-4 pt-12 lg:px-6 2xl:max-w-7xl">
                <div className="mx-auto lg:w-1/2">
                    <div className="ring-foreground/6.5 bg-card @md:grid-cols-2 @max-md:divide-y @md:divide-x mx-auto grid max-w-xl rounded-xl border border-transparent shadow-md shadow-black/5 ring-1">
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
        </section>
    )
}
