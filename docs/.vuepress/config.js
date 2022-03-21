module.exports = {
    title: 'OSAP for Muslims',
    description: 'A guide on avoiding interest',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/o4m.png' }]
    ],
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated', {
            dateOptions: {
                year: 'numeric', month: 'long', day: 'numeric'
            }
        }],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-185764182-1 '
            }
        ]
    ],
    postcss: {
        plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
        ]
    },
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'Updates', link: '/updates/news' },
            { text: 'About Us', link: '/about' }
        ],
        sidebar: [
            {
                title: 'Islamic Rulings',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    'rulings/fatwa'
                ]

            },
            {
                title: 'Terminology',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'terminology/grace',
                    'terminology/studentStatus',
                    'terminology/probation'
                ]
            },
            {
                title: 'Avoiding Interest',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'avoidingInterest/avgStudent',
                    'avoidingInterest/break',
                    'avoidingInterest/restriction',
                    'avoidingInterest/partTime',
                    'avoidingInterest/internships',
                ]
            },
            {
                title: 'Repayment',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    'repayment/payOff',
                    'repayment/rap'
                ]
            },
            {
                title: 'Advice',
                path: 'advice',
                sidebarDepth: 0,
            },
            {
                title: 'Miscellaneous',
                path: 'miscellaneous',
                sidebarDepth: 0,
            },
            {
                title: 'Disclaimer',
                path: 'disclaimer',
                sidebarDepth: 0,
            },
            {
                title: 'FAQ',
                path: 'faq',
                sidebarDepth: 0,
            },
            {
                title: 'Donate',
                path: 'about',
                sidebarDepth: 0,
            },
        ]
    }
}
