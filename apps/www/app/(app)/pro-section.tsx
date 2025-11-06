import { Button } from '@tailark/core/ui/button'
import { PreviewCanvas } from './preview-canvas'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const ProSection = () => {
    return (
        <>
            <section className="bg-linear-to-b relative overflow-hidden to-gray-100 to-35%">
                <div
                    aria-hidden
                    className="mask-y-from-55% pointer-events-none absolute inset-0 z-0 opacity-50"
                    style={{
                        background: `
        radial-gradient(ellipse 85% 65% at 8% 8%, var(--color-background), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, var(--color-rose-50), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, var(--color-blue-100), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, var(--color-indigo-200), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, var(--color-teal-200) 100%)
      `,
                    }}
                />

                <div className="relative z-10 pt-6 lg:pt-20">
                    <div className="mx-auto px-4 lg:px-6 2xl:max-w-7xl">
                        <div className="mx-auto lg:w-1/2">
                            <div className="max-w-xl max-md:mx-auto max-md:text-center">
                                <span className="bg-linear-to-r mb-6 block from-emerald-600 to-indigo-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-indigo-400">Pro</span>
                                <h2 className="text-balance text-4xl font-semibold sm:text-5xl">Build enterprise-grade websites, faster.</h2>
                                <div className="mb-4 mt-4">
                                    <p className="text-muted-foreground text-balance lg:text-lg">Tailark Pro is your complete Shadcn kit, packed with pages and blocks crafted for speed and quality.</p>
                                </div>

                                <Button
                                    asChild
                                    className="mt-3 border-white/10 px-4 shadow-lg shadow-black/35 [--color-primary:var(--color-zinc-700)]">
                                    <Link href="https://pro.tailark.com/#pricing">Get full access</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="ml-3 mt-3 px-4">
                                    <Link href="https://pro.tailark.com/blocks">Explore</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative py-12 max-lg:hidden 2xl:mx-auto 2xl:max-w-7xl">
                    <div className="size-120 absolute inset-0 m-auto bg-white blur-2xl"></div>
                    <PreviewCanvas />
                </div>
                <div className="aspect-16/15 relative max-md:-mt-12 lg:hidden">
                    <div className="mask-t-from-95% mask-b-from-75% w-[250vw] max-sm:-translate-x-[40%] sm:w-[150vw]">
                        <Image
                            src="https://pro.tailark.com/hero-illustration.png"
                            alt="Hero illustration"
                            width={2060}
                            height={1931}
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 768px) 300vw, (max-width: 1024px) 150vw, 0vw"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-muted border-b pb-12 md:pb-24 md:pt-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h2>Trusted by people from</h2>
                    <div className="mx-auto mt-12 max-w-3xl">
                        <div className="grid grid-cols-3 gap-4 gap-y-8 md:grid-cols-4 md:gap-y-10">
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/gradial.svg"
                                    alt="Gradial"
                                    width="215"
                                    height="65"
                                    className="h-6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/promptwatch.svg"
                                    alt="Promptwatch"
                                    width="740"
                                    height="114"
                                    className="h-6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/hyper.svg"
                                    alt="Hyper AI"
                                    width="163"
                                    height="40"
                                    className="h-6"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/terac.svg"
                                    alt="Terac"
                                    width="32"
                                    height="32"
                                    className="size-6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/classet.svg"
                                    alt="Classet"
                                    width="294"
                                    height="76"
                                    className="h-6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/nura.avif"
                                    alt="Nura"
                                    width="156"
                                    height="48"
                                    className="h-6 w-fit"
                                />
                            </div>

                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/throne.avif"
                                    alt="Throne"
                                    width="1286"
                                    height="317"
                                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 25vw"
                                    className="h-6 w-fit"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://pro.tailark.com/clients/roopairs.png"
                                    alt="RooPairs"
                                    width="201"
                                    height="48"
                                    className="h-6 w-fit invert"
                                />
                            </div>
                            <div className="flex justify-center md:hidden">
                                <Image
                                    src="https://pro.tailark.com/clients/abler.webp"
                                    alt="Abler"
                                    width="637"
                                    height="165"
                                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 25vw"
                                    className="h-6 w-fit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
