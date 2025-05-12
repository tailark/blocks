import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const size = {
    width: 1200,
    height: 630,
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const type = searchParams.get('type') || 'default'

        const slugParam = searchParams.get('slug') || ''
        const slug = slugParam ? slugParam.split(',') : []

        const kit = searchParams.get('kit') || slug[0] || ''
        const category = searchParams.get('category') || slug[1] || ''
        const variant = searchParams.get('variant') || slug[2] || ''

        let title = 'Tailark'

        if (type === 'category') {
            if (slug.length === 2 || (kit && category)) {
                title = `Tailark ${kit} - ${category} blocks`
            } else if (slug.length === 1 || (!category && kit)) {
                title = kit
            }
        } else if (type === 'preview') {
            if (slug.length >= 3 || (kit && category && variant)) {
                title = `Tailark ${kit} - ${category} ${variant} preview`
            } else if (slug.length > 0 || kit) {
                const parts = [kit, category, variant].filter(Boolean)
                title = parts.join(' / ')
            }
        }

        return new ImageResponse(
            (
                <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem', width: '100%', height: '100%', background: '#030510' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, top: '3rem', bottom: '3rem', borderTop: '1px dashed rgba(255,255,255,0.15)', borderBottom: '1px dashed rgba(255,255,255,0.15)' }}></div>
                    <div style={{ position: 'absolute', left: '3rem', right: '3rem', top: 0, bottom: 0, borderLeft: '1px dashed rgba(255,255,255,0.15)', borderRight: '1px dashed rgba(255,255,255,0.15)' }}></div>

                    <div style={{ position: 'absolute', left: '3rem', right: '3rem', top: '3rem', height: '1rem', width: '1rem', borderLeft: '1px solid white', borderTop: '1px solid white' }}></div>
                    <div style={{ position: 'absolute', right: '3rem', bottom: '3rem', height: '1rem', width: '1rem', borderRight: '1px solid white', borderBottom: '1px solid white' }}></div>

                    <div style={{ position: 'absolute', right: '2.9rem', top: '2.9rem', width: '0.25rem', height: '0.25rem', borderRadius: '100%', background: 'white' }}></div>
                    <div style={{ position: 'absolute', left: '2.9rem', bottom: '2.9rem', width: '0.25rem', height: '0.25rem', borderRadius: '100%', background: 'white' }}></div>
                    <div style={{ position: 'absolute', left: '6rem', bottom: '6rem', color: '#9D9D9D' }}>Cooked with ♥️💛💙 in DR Congo 🇨🇩</div>
                    <svg
                        style={{ position: 'absolute', left: '0', top: '-50%', width: '100vw', height: '100%' }}
                        viewBox="0 0 200 198"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_346_89)">
                            <path
                                d="M56.5 -445L66.6703 -255.747L109.55 -440.359L86.7018 -252.214L160.987 -426.576L105.816 -245.258L209.25 -404.071L123.431 -235.087L252.872 -373.527L139.013 -222.013L290.527 -335.872L152.087 -206.431L321.071 -292.25L162.258 -188.816L343.576 -243.987L169.214 -169.702L357.359 -192.55L172.747 -149.67L362 -139.5L172.747 -129.33L357.359 -86.4505L169.214 -109.298L343.576 -35.0128L162.258 -90.1844L321.071 13.25L152.087 -72.569L290.527 56.8716L139.013 -56.9873L252.872 94.5266L123.431 -43.9127L209.25 125.071L105.816 -33.7424L160.987 147.576L86.7018 -26.7855L109.55 161.359L66.6703 -23.2534L56.5 166L46.3297 -23.2534L3.45049 161.359L26.2982 -26.7855L-47.9872 147.576L7.18442 -33.7424L-96.25 125.071L-10.431 -43.9127L-139.872 94.5266L-26.0127 -56.9873L-177.527 56.8716L-39.0874 -72.569L-208.071 13.25L-49.2576 -90.1844L-230.576 -35.0128L-56.2145 -109.298L-244.359 -86.4505L-59.7466 -129.33L-249 -139.5L-59.7466 -149.67L-244.359 -192.55L-56.2145 -169.702L-230.576 -243.987L-49.2576 -188.816L-208.071 -292.25L-39.0874 -206.431L-177.527 -335.872L-26.0127 -222.013L-139.872 -373.527L-10.431 -235.087L-96.25 -404.071L7.18442 -245.258L-47.9872 -426.576L26.2982 -252.214L3.45049 -440.359L46.3297 -255.747L56.5 -445Z"
                                fill="url(#paint0_linear_346_89)"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_346_89"
                                x="-281"
                                y="-477"
                                width="675"
                                height="675"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="16"
                                    result="effect1_foregroundBlur_346_89"
                                />
                            </filter>
                            <linearGradient
                                id="paint0_linear_346_89"
                                x1="89.0301"
                                y1="-89.5262"
                                x2="270.539"
                                y2="81.1389"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop
                                    offset="1"
                                    stop-color="white"
                                />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '3rem', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.025)' }}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                                fill="url(#logo-gradient)"
                            />
                            <defs>
                                <linearGradient
                                    id="logo-gradient"
                                    x1="10"
                                    y1="0"
                                    x2="10"
                                    y2="20"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#9B99FE" />
                                    <stop
                                        offset="1"
                                        stopColor="#2BC8B7"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div style={{ maxWidth: '75%', fontFamily: 'sans-serif', lineHeight: '1.125em', marginBottom: '6rem', fontSize: '4rem', fontWeight: '700', textTransform: 'capitalize', letterSpacing: '-0.05em', color: 'transparent', textWrap: 'balance', backgroundClip: 'text', backgroundImage: 'linear-gradient(to bottom, white, #686868)' }}>{title}</div>
                    </div>
                </div>
            ),
            {
                ...size,
            }
        )
    } catch (e) {
        console.error(e)
        return new Response(`Failed to generate image: ${e}`, {
            status: 500,
        })
    }
}
