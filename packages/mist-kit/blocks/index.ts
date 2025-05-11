export const mistKitBlockMap = {
    'hero-section': {
        one: () => import('./hero-section/one').then((mod) => mod.default),
        two: () => import('./hero-section/two').then((mod) => mod.default),
        three: () => import('./hero-section/three').then((mod) => mod.default),
        four: () => import('./hero-section/four').then((mod) => mod.default),
        five: () => import('./hero-section/five').then((mod) => mod.default),
        six: () => import('./hero-section/six').then((mod) => mod.default),
    },
    'logo-cloud': {
        one: () => import('./logo-cloud/one').then((mod) => mod.default),
        two: () => import('./logo-cloud/two').then((mod) => mod.default),
    },
    features: {
        one: () => import('./features/one').then((mod) => mod.default),
        two: () => import('./features/two').then((mod) => mod.default),
        three: () => import('./features/three').then((mod) => mod.default),
        four: () => import('./features/four').then((mod) => mod.default),
        five: () => import('./features/five').then((mod) => mod.default),
        six: () => import('./features/six').then((mod) => mod.default),
        seven: () => import('./features/seven').then((mod) => mod.default),
        eight: () => import('./features/eight').then((mod) => mod.default),
        nine: () => import('./features/nine').then((mod) => mod.default),
        ten: () => import('./features/ten').then((mod) => mod.default),
        eleven: () => import('./features/eleven').then((mod) => mod.default),
    },
    footer: {
        one: () => import('./footer/one').then((mod) => mod.default),
        two: () => import('./footer/two').then((mod) => mod.default),
        three: () => import('./footer/three').then((mod) => mod.default),
        four: () => import('./footer/four').then((mod) => mod.default),
    },
    content: {
        one: () => import('./content/one').then((mod) => mod.default),
        two: () => import('./content/two').then((mod) => mod.default),
        three: () => import('./content/three').then((mod) => mod.default),
        four: () => import('./content/four').then((mod) => mod.default),
    },
    'call-to-action': {
        one: () => import('./call-to-action/one').then((mod) => mod.default),
        two: () => import('./call-to-action/two').then((mod) => mod.default),
        three: () => import('./call-to-action/three').then((mod) => mod.default),
    },
    integrations: {
        one: () => import('./integrations/one').then((mod) => mod.default),
        two: () => import('./integrations/two').then((mod) => mod.default),
        three: () => import('./integrations/three').then((mod) => mod.default),
    },
    stats: {
        one: () => import('./stats/one').then((mod) => mod.default),
        two: () => import('./stats/two').then((mod) => mod.default),
        three: () => import('./stats/three').then((mod) => mod.default),
        four: () => import('./stats/four').then((mod) => mod.default),
    },
    team: {
        one: () => import('./team/one').then((mod) => mod.default),
        two: () => import('./team/two').then((mod) => mod.default),
    },
    testimonials: {
        one: () => import('./testimonials/one').then((mod) => mod.default),
        two: () => import('./testimonials/two').then((mod) => mod.default),
        three: () => import('./testimonials/three').then((mod) => mod.default),
        four: () => import('./testimonials/four').then((mod) => mod.default),
        five: () => import('./testimonials/five').then((mod) => mod.default),
    },
    pricing: {
        one: () => import('./pricing/one').then((mod) => mod.default),
        two: () => import('./pricing/two').then((mod) => mod.default),
    },
    comparator: {
        one: () => import('./comparator/one').then((mod) => mod.default),
    },
    faqs: {
        one: () => import('./faqs/one').then((mod) => mod.default),
        two: () => import('./faqs/two').then((mod) => mod.default),
        three: () => import('./faqs/three').then((mod) => mod.default),
    },
    contact: {
        one: () => import('./contact/one').then((mod) => mod.default),
    },
    login: {
        one: () => import('./login/one').then((mod) => mod.default),
    },
    'sign-up': {
        one: () => import('./sign-up/one').then((mod) => mod.default),
    },
    'forgot-password': {
        one: () => import('./forgot-password/one').then((mod) => mod.default),
    },
}
