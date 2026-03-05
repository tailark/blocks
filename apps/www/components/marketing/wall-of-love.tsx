import Link from 'next/link'
import Image from 'next/image'
import { testimonials } from '@/lib/testimonials'
import { WallOfLoveWrapper } from './wall-of-love-wrapper'

const testimonialsPerColumn = Math.ceil(testimonials.length / 4)
const allGroups = [testimonials.slice(0, testimonialsPerColumn), testimonials.slice(testimonialsPerColumn, testimonialsPerColumn * 2), testimonials.slice(testimonialsPerColumn * 2, testimonialsPerColumn * 3), testimonials.slice(testimonialsPerColumn * 3)]

export function WallOfLove() {
    return (
        <section
            data-theme="global"
            id="wall-of-love"
            className="bg-linear-to-b not-dark:via-muted overflow-hidden via-25%">
            <div className="relative pb-16 md:pb-32">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-foreground/55 mb-12 block font-mono text-sm tracking-wider">Wall of love</h2>
                        <p className="text-balance text-3xl font-medium tracking-tight">Trusted by founders on X</p>
                    </div>
                </div>
                <div className="relative mt-6 md:mt-12">
                    <div className="relative mx-auto max-w-7xl">
                        <WallOfLoveWrapper>
                            <div className="grid gap-4 rounded-3xl p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                {allGroups.map((group, index) => (
                                    <div
                                        key={index}
                                        className="group space-y-4 lg:max-xl:last:hidden">
                                        {group.map((testimonial, index) => (
                                            <div
                                                className="testimonial-card bg-card hover:bg-card/75 lg:first:bg-linear-to-b lg:first:from-card shadow-black/6.5 lg:first:shadow-indigo-950/3 ring-border relative space-y-4 rounded-xl p-6 shadow ring lg:first:to-indigo-50/35 dark:lg:first:to-indigo-500/5"
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
                                ))}
                            </div>
                        </WallOfLoveWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}
