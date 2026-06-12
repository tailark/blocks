import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
    {
      name: "veil-call-to-action-1",
      type: "registry:block",
      title: "Call To Action 1",
      description: "Tailark Veil call-to-action variant 1 block",
      files: [
        {
          path: "veil/call-to-action/one.tsx",
          type: "registry:component",
          target: "@components/call-to-action-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button"
      ]
    },
    {
      name: "veil-call-to-action-2",
      type: "registry:block",
      title: "Call To Action 2",
      description: "Tailark Veil call-to-action variant 2 block",
      files: [
        {
          path: "veil/call-to-action/two.tsx",
          type: "registry:component",
          target: "@components/call-to-action-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-call-to-action-3",
      type: "registry:block",
      title: "Call To Action 3",
      description: "Tailark Veil call-to-action variant 3 block",
      files: [
        {
          path: "veil/call-to-action/three.tsx",
          type: "registry:component",
          target: "@components/call-to-action-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button"
      ]
    },
    {
      name: "veil-call-to-action-4",
      type: "registry:block",
      title: "Call To Action 4",
      description: "Tailark Veil call-to-action variant 4 block",
      files: [
        {
          path: "veil/call-to-action/four.tsx",
          type: "registry:component",
          target: "@components/call-to-action-4.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-comparator-1",
      type: "registry:block",
      title: "Comparator 1",
      description: "Tailark Veil comparator variant 1 block",
      files: [
        {
          path: "veil/comparator/one.tsx",
          type: "registry:component",
          target: "@components/comparator-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-comparator-2",
      type: "registry:block",
      title: "Comparator 2",
      description: "Tailark Veil comparator variant 2 block",
      files: [
        {
          path: "veil/comparator/two.tsx",
          type: "registry:component",
          target: "@components/comparator-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-comparator-3",
      type: "registry:block",
      title: "Comparator 3",
      description: "Tailark Veil comparator variant 3 block",
      files: [
        {
          path: "veil/comparator/three.tsx",
          type: "registry:component",
          target: "@components/comparator-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-contact-1",
      type: "registry:block",
      title: "Contact 1",
      description: "Tailark Veil contact variant 1 block",
      files: [
        {
          path: "veil/contact/one.tsx",
          type: "registry:component",
          target: "@components/contact-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/veil-input",
        "@tailark/veil-textarea",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-contact-2",
      type: "registry:block",
      title: "Contact 2",
      description: "Tailark Veil contact variant 2 block",
      files: [
        {
          path: "veil/contact/two.tsx",
          type: "registry:component",
          target: "@components/contact-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/veil-input",
        "@tailark/veil-textarea",
        "@shadcn/label",
        "@shadcn/select"
      ]
    },
    {
      name: "veil-content-1",
      type: "registry:block",
      title: "Content 1",
      description: "Tailark Veil content variant 1 block",
      files: [
        {
          path: "veil/content/one.tsx",
          type: "registry:component",
          target: "@components/content-1.tsx"
        }
      ]
    },
    {
      name: "veil-content-2",
      type: "registry:block",
      title: "Content 2",
      description: "Tailark Veil content variant 2 block",
      files: [
        {
          path: "veil/content/two.tsx",
          type: "registry:component",
          target: "@components/content-2.tsx"
        }
      ]
    },
    {
      name: "veil-content-3",
      type: "registry:block",
      title: "Content 3",
      description: "Tailark Veil content variant 3 block",
      files: [
        {
          path: "veil/content/three.tsx",
          type: "registry:component",
          target: "@components/content-3.tsx"
        }
      ]
    },
    {
      name: "veil-faqs-1",
      type: "registry:block",
      title: "Faqs 1",
      description: "Tailark Veil faqs variant 1 block",
      files: [
        {
          path: "veil/faqs/one.tsx",
          type: "registry:component",
          target: "@components/faqs-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card",
        "@shadcn/accordion"
      ]
    },
    {
      name: "veil-faqs-2",
      type: "registry:block",
      title: "Faqs 2",
      description: "Tailark Veil faqs variant 2 block",
      files: [
        {
          path: "veil/faqs/two.tsx",
          type: "registry:component",
          target: "@components/faqs-2.tsx"
        }
      ],
      registryDependencies: [
        "@shadcn/accordion"
      ]
    },
    {
      name: "veil-faqs-3",
      type: "registry:block",
      title: "Faqs 3",
      description: "Tailark Veil faqs variant 3 block",
      files: [
        {
          path: "veil/faqs/three.tsx",
          type: "registry:component",
          target: "@components/faqs-3.tsx"
        }
      ],
      registryDependencies: [
        "@shadcn/accordion"
      ]
    },
    {
      name: "veil-faqs-4",
      type: "registry:block",
      title: "Faqs 4",
      description: "Tailark Veil faqs variant 4 block",
      files: [
        {
          path: "veil/faqs/four.tsx",
          type: "registry:component",
          target: "@components/faqs-4.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-faqs-5",
      type: "registry:block",
      title: "Faqs 5",
      description: "Tailark Veil faqs variant 5 block",
      files: [
        {
          path: "veil/faqs/five.tsx",
          type: "registry:component",
          target: "@components/faqs-5.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card",
        "@shadcn/accordion"
      ]
    },
    {
      name: "veil-features-1",
      type: "registry:block",
      title: "Features 1",
      description: "Tailark Veil features variant 1 block",
      files: [
        {
          path: "veil/features/one.tsx",
          type: "registry:component",
          target: "@components/features-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card",
        "@tailark/core-clerk",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-features-2",
      type: "registry:block",
      title: "Features 2",
      description: "Tailark Veil features variant 2 block",
      files: [
        {
          path: "veil/features/two.tsx",
          type: "registry:component",
          target: "@components/features-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card",
        "@tailark/core-clerk",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-features-3",
      type: "registry:block",
      title: "Features 3",
      description: "Tailark Veil features variant 3 block",
      files: [
        {
          path: "veil/features/three.tsx",
          type: "registry:component",
          target: "@components/features-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/core-clerk",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-footer-1",
      type: "registry:block",
      title: "Footer 1",
      description: "Tailark Veil footer variant 1 block",
      files: [
        {
          path: "veil/footer/one.tsx",
          type: "registry:component",
          target: "@components/footer-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-footer-2",
      type: "registry:block",
      title: "Footer 2",
      description: "Tailark Veil footer variant 2 block",
      files: [
        {
          path: "veil/footer/two.tsx",
          type: "registry:component",
          target: "@components/footer-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-footer-3",
      type: "registry:block",
      title: "Footer 3",
      description: "Tailark Veil footer variant 3 block",
      files: [
        {
          path: "veil/footer/three.tsx",
          type: "registry:component",
          target: "@components/footer-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-footer-4",
      type: "registry:block",
      title: "Footer 4",
      description: "Tailark Veil footer variant 4 block",
      files: [
        {
          path: "veil/footer/four.tsx",
          type: "registry:component",
          target: "@components/footer-4.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-footer-5-theme-switcher",
      type: "registry:component",
      title: "Footer 5 Theme Switcher",
      description: "Tailark Veil footer variant 5 theme switcher component",
      files: [
        {
          path: "veil/footer/five/theme-switcher.tsx",
          type: "registry:component",
        }
      ],
      registryDependencies: [
        "@tailark/veil-button"
      ],
      dependencies: [
        "next-themes"
      ]
    },
    {
      name: "veil-footer-5",
      type: "registry:block",
      title: "Footer 5",
      description: "Tailark Veil footer variant 5 block",
      files: [
        {
          path: "veil/footer/five/footer.tsx",
          type: "registry:component",
          target: "@components/footer-5.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-logo",
        "@tailark/veil-footer-5-theme-switcher"
      ]
    },
    {
      name: "veil-footer-6-theme-switcher",
      type: "registry:component",
      title: "Footer 6 Theme Switcher",
      description: "Tailark Veil footer variant 6 theme switcher component",
      files: [
        {
          path: "veil/footer/six/theme-switcher.tsx",
          type: "registry:component",
        }
      ],
      registryDependencies: [
        "@tailark/veil-button"
      ],
      dependencies: [
        "next-themes"
      ]
    },
    {
      name: "veil-footer-6-social-medias",
      type: "registry:component",
      title: "Footer 6 Social Medias",
      description: "Tailark Veil footer variant 6 social media links component",
      files: [
        {
          path: "veil/footer/six/social-medias.tsx",
          type: "registry:component",
        }
      ],
      registryDependencies: [
        "@tailark/veil-button"
      ]
    },
    {
      name: "veil-footer-6",
      type: "registry:block",
      title: "Footer 6",
      description: "Tailark Veil footer variant 6 block",
      files: [
        {
          path: "veil/footer/six/footer.tsx",
          type: "registry:component",
          target: "@components/footer-6.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-footer-6-theme-switcher",
        "@tailark/veil-footer-6-social-medias",
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-forgot-password-1",
      type: "registry:block",
      title: "Forgot Password 1",
      description: "Tailark Veil forgot-password variant 1 block",
      files: [
        {
          path: "veil/forgot-password/one.tsx",
          type: "registry:component",
          target: "@components/forgot-password-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-forgot-password-2",
      type: "registry:block",
      title: "Forgot Password 2",
      description: "Tailark Veil forgot-password variant 2 block",
      files: [
        {
          path: "veil/forgot-password/two.tsx",
          type: "registry:component",
          target: "@components/forgot-password-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-forgot-password-3",
      type: "registry:block",
      title: "Forgot Password 3",
      description: "Tailark Veil forgot-password variant 3 block",
      files: [
        {
          path: "veil/forgot-password/three.tsx",
          type: "registry:component",
          target: "@components/forgot-password-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-hero-section-1-header",
      type: "registry:component",
      title: "Hero Section 1 Header",
      description: "Tailark Veil hero-section variant 1 header component",
      files: [
        {
          path: "veil/hero-section/one/header.tsx",
          type: "registry:component",
        },
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-logo",
      ]
    },
    {
      name: "veil-hero-section-1",
      type: "registry:block",
      title: "Hero Section 1",
      description: "Tailark Veil hero-section variant 1 block",
      files: [
        {
          path: "veil/hero-section/one/hero-section.tsx",
          type: "registry:component",
          target: "@components/hero-section-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-hero-section-1-header",
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/core-claude",
        "@tailark/core-clerk",
        "@tailark/core-figma",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-twilio",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-hero-section-2-header",
      type: "registry:component",
      title: "Hero Section 2 Header",
      description: "Tailark Veil hero-section variant 2 header component",
      files: [
        {
          path: "veil/hero-section/two/header.tsx",
          type: "registry:component",
        },
      ],
      dependencies: [
        "motion"
      ],
      registryDependencies: [
        "@tailark/use-media",
        "@tailark/veil-button",
        "@tailark/veil-logo",
      ]
    },
    {
      name: "veil-hero-section-2",
      type: "registry:block",
      title: "Hero Section 2",
      description: "Tailark Veil hero-section variant 2 block",
      files: [
        {
          path: "veil/hero-section/two/hero-section.tsx",
          type: "registry:component",
          target: "@components/hero-section-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-hero-section-2-header",
        "@tailark/veil-card",
        "@tailark/core-claude",
        "@tailark/core-clerk",
        "@tailark/core-figma",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-twilio",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-hero-section-3-header",
      type: "registry:component",
      title: "Hero Section 3 Header",
      description: "Tailark Veil hero-section variant 3 header component",
      files: [
        {
          path: "veil/hero-section/three/header.tsx",
          type: "registry:component",
        },
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-logo",
      ]
    },
    {
      name: "veil-hero-section-3",
      type: "registry:block",
      title: "Hero Section 3",
      description: "Tailark Veil hero-section variant 3 block",
      files: [
        {
          path: "veil/hero-section/three/hero-section.tsx",
          type: "registry:component",
          target: "@components/hero-section-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-hero-section-3-header",
        "@tailark/veil-card",
        "@tailark/core-claude",
        "@tailark/core-clerk",
        "@tailark/core-figma",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-twilio",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-hero-section-4-header",
      type: "registry:component",
      title: "Hero Section 4 Header",
      description: "Tailark Veil hero-section variant 4 header component",
      files: [
        {
          path: "veil/hero-section/four/header.tsx",
          type: "registry:component",
        },
      ],
      registryDependencies: [
        "@tailark/use-media",
        "@tailark/veil-button",
        "@tailark/veil-logo",
      ],
      dependencies: [
        "motion"
      ]
    },
    {
      name: "veil-hero-section-4",
      type: "registry:block",
      title: "Hero Section 4",  
      description: "Tailark Veil hero-section variant 4 block",
      files: [
        {
          path: "veil/hero-section/four/hero-section.tsx",
          type: "registry:component",
          target: "@components/hero-section-4.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-hero-section-4-header",
      ]
    },
    {
      name: "veil-hero-section-5",
      type: "registry:block",
      title: "Hero Section 5",
      description: "Tailark Veil hero-section variant 5 block",
      files: [
        {
          path: "veil/hero-section/five.tsx",
          type: "registry:component",
          target: "@components/hero-section-5.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-logo"
      ]
    },
    {
      name: "veil-integrations-1",
      type: "registry:block",
      title: "Integrations 1",
      description: "Tailark Veil integrations variant 1 block",
      files: [
        {
          path: "veil/integrations/one.tsx",
          type: "registry:component",
          target: "@components/integrations-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/core-clerk",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/veil-logo",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-integrations-2",
      type: "registry:block",
      title: "Integrations 2",
      description: "Tailark Veil integrations variant 2 block",
      files: [
        {
          path: "veil/integrations/two.tsx",
          type: "registry:component",
          target: "@components/integrations-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/core-clerk",
        "@tailark/core-firebase",
        "@tailark/core-linear",
        "@tailark/veil-logo",
        "@tailark/core-slack",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-login-1",
      type: "registry:block",
      title: "Login 1",
      description: "Tailark Veil login variant 1 block",
      files: [
        {
          path: "veil/login/one.tsx",
          type: "registry:component",
          target: "@components/login-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-login-2",
      type: "registry:block",
      title: "Login 2",
      description: "Tailark Veil login variant 2 block",
      files: [
        {
          path: "veil/login/two.tsx",
          type: "registry:component",
          target: "@components/login-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-login-3",
      type: "registry:block",
      title: "Login 3",
      description: "Tailark Veil login variant 3 block",
      files: [
        {
          path: "veil/login/three.tsx",
          type: "registry:component",
          target: "@components/login-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-logo-cloud-1",
      type: "registry:block",
      title: "Logo Cloud 1",
      description: "Tailark Veil logo-cloud variant 1 block",
      files: [
        {
          path: "veil/logo-cloud/one.tsx",
          type: "registry:component",
          target: "@components/logo-cloud-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/core-beacon",
        "@tailark/core-bolt",
        "@tailark/core-cisco",
        "@tailark/core-hulu",
        "@tailark/core-linear",
        "@tailark/core-spotify",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ]
    },
    {
      name: "veil-logo-cloud-2",
      type: "registry:block",
      title: "Logo Cloud 2",
      description: "Tailark Veil logo-cloud variant 2 block",
      files: [
        {
          path: "veil/logo-cloud/two.tsx",
          type: "registry:component",
          target: "@components/logo-cloud-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/core-beacon",
        "@tailark/core-bolt",
        "@tailark/core-cisco",
        "@tailark/core-hulu",
        "@tailark/core-spotify",
        "@tailark/core-supabase",
        "@tailark/core-vercel"
      ],
      dependencies: [
        "motion"
      ]
    },
    {
      name: "veil-pricing-1",
      type: "registry:block",
      title: "Pricing 1",
      description: "Tailark Veil pricing variant 1 block",
      files: [
        {
          path: "veil/pricing/one.tsx",
          type: "registry:component",
          target: "@components/pricing-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-pricing-2",
      type: "registry:block",
      title: "Pricing 2",
      description: "Tailark Veil pricing variant 2 block",
      files: [
        {
          path: "veil/pricing/two.tsx",
          type: "registry:component",
          target: "@components/pricing-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-pricing-3",
      type: "registry:block",
      title: "Pricing 3",
      description: "Tailark Veil pricing variant 3 block",
      files: [
        {
          path: "veil/pricing/three.tsx",
          type: "registry:component",
          target: "@components/pricing-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-sign-up-1",
      type: "registry:block",
      title: "Sign Up 1",
      description: "Tailark Veil sign-up variant 1 block",
      files: [
        {
          path: "veil/sign-up/one.tsx",
          type: "registry:component",
          target: "@components/sign-up-1.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-card",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-sign-up-2",
      type: "registry:block",
      title: "Sign Up 2",
      description: "Tailark Veil sign-up variant 2 block",
      files: [
        {
          path: "veil/sign-up/two.tsx",
          type: "registry:component",
          target: "@components/sign-up-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-sign-up-3",
      type: "registry:block",
      title: "Sign Up 3",
      description: "Tailark Veil sign-up variant 3 block",
      files: [
        {
          path: "veil/sign-up/three.tsx",
          type: "registry:component",
          target: "@components/sign-up-3.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-button",
        "@tailark/veil-input",
        "@tailark/veil-logo",
        "@shadcn/label"
      ]
    },
    {
      name: "veil-stats-1",
      type: "registry:block",
      title: "Stats 1",
      description: "Tailark Veil stats variant 1 block",
      files: [
        {
          path: "veil/stats/one.tsx",
          type: "registry:component",
          target: "@components/stats-1.tsx"
        }
      ]
    },
    {
      name: "veil-stats-2",
      type: "registry:block",
      title: "Stats 2",
      description: "Tailark Veil stats variant 2 block",
      files: [
        {
          path: "veil/stats/two.tsx",
          type: "registry:component",
          target: "@components/stats-2.tsx"
        }
      ]
    },
    {
      name: "veil-stats-3",
      type: "registry:block",
      title: "Stats 3",
      description: "Tailark Veil stats variant 3 block",
      files: [
        {
          path: "veil/stats/three.tsx",
          type: "registry:component",
          target: "@components/stats-3.tsx"
        }
      ]
    },
    {
      name: "veil-stats-4",
      type: "registry:block",
      title: "Stats 4",
      description: "Tailark Veil stats variant 4 block",
      files: [
        {
          path: "veil/stats/four.tsx",
          type: "registry:component",
          target: "@components/stats-4.tsx"
        }
      ]
    },
    {
      name: "veil-team-1",
      type: "registry:block",
      title: "Team 1",
      description: "Tailark Veil team variant 1 block",
      files: [
        {
          path: "veil/team/one.tsx",
          type: "registry:component",
          target: "@components/team-1.tsx"
        }
      ]
    },
    {
      name: "veil-team-2",
      type: "registry:block",
      title: "Team 2",
      description: "Tailark Veil team variant 2 block",
      files: [
        {
          path: "veil/team/two.tsx",
          type: "registry:component",
          target: "@components/team-2.tsx"
        }
      ]
    },
    {
      name: "veil-testimonials-1",
      type: "registry:block",
      title: "Testimonials 1",
      description: "Tailark Veil testimonials variant 1 block",
      files: [
        {
          path: "veil/testimonials/one.tsx",
          type: "registry:component",
          target: "@components/testimonials-1.tsx"
        }
      ]
    },
    {
      name: "veil-testimonials-2",
      type: "registry:block",
      title: "Testimonials 2",
      description: "Tailark Veil testimonials variant 2 block",
      files: [
        {
          path: "veil/testimonials/two.tsx",
          type: "registry:component",
          target: "@components/testimonials-2.tsx"
        }
      ],
      registryDependencies: [
        "@tailark/veil-card"
      ]
    },
    {
      name: "veil-testimonials-3",
      type: "registry:block",
      title: "Testimonials 3",
      description: "Tailark Veil testimonials variant 3 block",
      files: [
        {
          path: "veil/testimonials/three.tsx",
          type: "registry:component",
          target: "@components/testimonials-3.tsx"
        }
      ]
    },
    {
      name: "veil-testimonials-4",
      type: "registry:block",
      title: "Testimonials 4",
      description: "Tailark Veil testimonials variant 4 block",
      files: [
        {
          path: "veil/testimonials/four.tsx",
          type: "registry:component",
          target: "@components/testimonials-4.tsx"
        }
      ]
    }
]