import { type SVGProps } from 'react'

export function Gemini(props: SVGProps) {
    return (
        <svg
            height="1em"
            style={{
                flex: 'none',
                lineHeight: 1,
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            {...props}
        >
            <title>{'Gemini'}</title>
            <path
                d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    )
}
