module.exports = {
    title: 'OSAP for Muslims',
    description: 'A guide on avoiding interest',
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated', {
            dateOptions: {
                year: 'numeric', month: 'long', day: 'numeric'
            }
        }]
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
                title: 'Islamic Rulings',   // required
                //path: '../rulings/fatwa',
                collapsable: false, // optional, defaults to true
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                    'rulings/fatwa'
                ]

            },
            {
                title: 'Terminology',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    'terminology/grace',
                    'terminology/studentStatus',
                    'terminology/probation'
                ]
            },
            {
                title: 'Avoiding Interest',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    'avoidingInterest/avgStudent',
                    'avoidingInterest/break',
                    'avoidingInterest/onProbation',
                    'avoidingInterest/partTime',
                    'avoidingInterest/internships',
                ]
            },
            {
                title: 'Repayment',   // required
                //path: 'repayment/payOff',
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    'repayment/payOff',
                    'repayment/rap'
                ]
            },
            {
                title: 'Advice',   // required
                path: 'advice',
                sidebarDepth: 0,    // optional, defaults to 1
            },
            {
                title: 'Miscellaneous',   // required
                path: 'miscellaneous',
                sidebarDepth: 0,    // optional, defaults to 1
            },
            {
                title: 'Disclaimer',   // required
                path: 'disclaimer',
                sidebarDepth: 0,    // optional, defaults to 1
            },
            {
                title: 'FAQ',   // required
                path: 'faq',
                sidebarDepth: 0,
            },
            {
                title: 'Donate',   // required
                path: 'about',
                sidebarDepth: 0,
            },
        ]
    }
}
