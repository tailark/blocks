import { type Registry } from "shadcn/schema"

export const components: Registry["items"] = [
  {
    name: "veil-button",
    title: "Button",
    description: "Tailark Veil button component",
    type: "registry:ui",
    files: [
      {
        path: "veil/ui/button.tsx",
        type: "registry:ui",
      }
    ]
  },
  {
    name: "veil-card",
    title: "Card",
    description: "Tailark Veil card component",
    type: "registry:ui",
    files: [
      {
        path: "veil/ui/card.tsx",
        type: "registry:ui",
      }
    ]
  },
  {
    name: "veil-input",
    title: "Input",
    description: "Tailark Veil input component",
    type: "registry:ui",
    files: [
      {
        path: "veil/ui/input.tsx",
        type: "registry:ui",
      }
    ]
  },
  {
    name: "veil-textarea",
    title: "Textarea",
    description: "Tailark Veil textarea component",
    type: "registry:ui",
    files: [
      {
        path: "veil/ui/textarea.tsx",
        type: "registry:ui",
      }
    ]
  },
  {
    name: "veil-logo",
    title: "Logo",
    description: "Tailark Veil logo component",
    type: "registry:ui",
    files: [
      {
        path: "veil/logo.tsx",
        type: "registry:ui",
      }
    ]
  },
    {
        name: "veil-beacon",
        title: "Beacon logo",
        description: "Shadcn/ui beacon svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/beacon.tsx",
                type: "registry:ui",
                target:"@ui/svgs/beacon.tsx"
            }
        ]
    },
    {
        name: "veil-bolt",
        title: "Bolt logo",
        description: "Shadcn/ui bolt svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/bolt.tsx",
                type: "registry:ui",
                target:"@ui/svgs/bolt.tsx"
            }
        ]
    },
    {
        name: "veil-cisco",
        title: "Cisco logo",
        description: "Shadcn/ui cisco svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/cisco.tsx",
                type: "registry:ui",
                target: "@ui/svgs/cisco.tsx"
            }
        ]
    },
    {
        name: "veil-claude",
        title: "Claude logo",
        description: "Shadcn/ui claude svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/claude.tsx",
                type: "registry:ui",
                target: "@ui/svgs/claude.tsx"
            }
        ]
    },
    {
        name: "veil-clerk",
        title: "Clerk logo",
        description: "Shadcn/ui clerk svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/clerk.tsx",
                type: "registry:ui",
                target: "@ui/svgs/clerk.tsx"
            }
        ]
    },
    {
        name: "veil-figma",
        title: "Figma logo",
        description: "Shadcn/ui figma svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/figma.tsx",
                type: "registry:ui",
                target: "@ui/svgs/figma.tsx"
            }
        ]
    },
    {
        name: "veil-firebase",
        title: "Firebase logo",
        description: "Shadcn/ui firebase svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/firebase.tsx",
                type: "registry:ui",
                target: "@ui/svgs/firebase.tsx"
            }
        ]
    },
    {
        name: "veil-hulu",
        title: "Hulu logo",
        description: "Shadcn/ui hulu svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/hulu.tsx",
                type: "registry:ui",
                target: "@ui/svgs/hulu.tsx"
            }
        ]
    },
    {
        name: "veil-linear",
        title: "Linear logo",
        description: "Shadcn/ui linear svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/linear.tsx",
                type: "registry:ui",
                target: "@ui/svgs/linear.tsx"
            }
        ]
    },
    {
        name: "veil-slack",
        title: "Slack logo",
        description: "Shadcn/ui slack svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/slack.tsx",
                type: "registry:ui",
                target: "@ui/svgs/slack.tsx"
            }
        ]
    },
    {
        name: "veil-spotify",
        title: "Spotify logo",
        description: "Shadcn/ui spotify svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/spotify.tsx",
                type: "registry:ui",
                target: "@ui/svgs/spotify.tsx"
            }
        ]
    },
    {
        name: "veil-supabase",
        title: "Supabase logo",
        description: "Shadcn/ui supabase svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/supabase.tsx",
                type: "registry:ui",
                target: "@ui/svgs/supabase.tsx"
            }
        ]
    },
    {
        name: "veil-twilio",
        title: "Twilio logo",
        description: "Shadcn/ui twilio svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/twilio.tsx",
                type: "registry:ui",
                target: "@ui/svgs/twilio.tsx"
            }
        ]
    },
    {
        name: "veil-vercel",
        title: "Vercel logo",
        description: "Shadcn/ui vercel svg logo",
        type: "registry:ui",
        files: [
            {
                path: "veil/ui/svgs/vercel.tsx",
                type: "registry:ui",
                target: "@ui/svgs/vercel.tsx"
            }
        ]
    },
]