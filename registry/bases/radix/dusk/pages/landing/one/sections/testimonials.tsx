import { Openai } from '@/registry/core/ui/svgs/openai'
import { Gemini } from '@/registry/core/ui/svgs/gemini'
import { Button } from '@/registry/bases/radix/dusk/ui/button'
import { Play } from 'lucide-react'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <h2 className="text-balance text-4xl font-medium tracking-tight lg:text-5xl">By makers, loved by thousand developers</h2>
                </div>

                <div className="grid gap-3 lg:grid-cols-5">
                    <div className="after:border-foreground/10 relative overflow-hidden rounded-xl bg-stone-100 p-8 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border lg:col-span-3 lg:row-span-2">
                        <video
                            autoPlay
                            loop
                            className="mask-l-from-foreground absolute inset-0 ml-auto h-full w-2/3 object-cover"
                            src="https://videos.pexels.com/video-files/7732814/7732814-hd_1920_1080_25fps.mp4"
                        />

                        <div className="min-h-100 relative flex flex-col justify-between">
                            <p className="max-w-lg text-3xl text-black">Congrats on your launch! Looks awesome! Still can't wait for your "animated AI gradient circle"</p>

                            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                                <Openai className="**:fill-black size-10" />
                                <div className="border-l border-black/10 pl-4">
                                    <p className="text-sm font-medium text-black">Shekinah Tshiokufila</p>
                                    <span className="block text-sm text-black/65">Software Engineer</span>
                                </div>
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="inset-ring inset-ring-black/10 self-end bg-black/20"
                                >
                                    <Play
                                        fill="white"
                                        stroke="white"
                                        className="drop-shadow-black/25 translate-x-px drop-shadow-md"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="inset-ring inset-ring-foreground/10 min-h-100 relative grid gap-8 overflow-hidden rounded-xl bg-emerald-600 p-8 lg:col-span-2 lg:row-span-2 lg:grid-rows-subgrid">
                        <div className="bg-linear-to-b pointer-events-none absolute inset-0 to-black/25"></div>
                        <p className="max-w-lg text-balance text-3xl">Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                        <div className="relative grid grid-cols-[auto_1fr] items-center gap-4 self-end">
                            <Gemini className="size-10" />
                            <div className="border-foreground/10 border-l pl-4">
                                <p className="text-sm font-medium">Shekinah Tshiokufila</p>
                                <span className="text-foreground/65 block text-sm">Software Engineer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
