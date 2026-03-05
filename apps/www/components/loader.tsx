'use client'

const paths = ['M12 2v4', 'm16.2 7.8 2.9-2.9', 'M18 12h4', 'm16.2 16.2 2.9 2.9', 'M12 18v4', 'm4.9 19.1 2.9-2.9', 'M2 12h4', 'm4.9 4.9 2.9 2.9']

export const Loader = ({ duration = 0.5 }: { duration?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto mb-4 size-4">
        {paths.map((d, i) => (
            <path
                key={i}
                d={d}
                opacity="0.2">
                <animate
                    attributeName="opacity"
                    values="1;0.2"
                    dur={`${duration}s`}
                    begin={`${(i / paths.length) * duration}s`}
                    repeatCount="indefinite"
                />
            </path>
        ))}
    </svg>
)
