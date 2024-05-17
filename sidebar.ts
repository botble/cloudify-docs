import {DefaultTheme} from 'vitepress';

export default [
    {
        text: 'Getting Started',
        items: [
            { text: 'Installation', link: '/cloudify/installation' },
            { text: 'Upgrade Guide', link: '/cloudify/upgrade' },
            { text: 'License', link: '/cloudify/license' },
        ],
    },
    {
        text: 'Configuration',
        items: [
            { text: 'SSL', link: '/cloudify/ssl' },
            { text: 'Cronjob', link: '/cloudify/cronjob' },
            { text: 'Email', link: '/cloudify/email' },
            { text: 'Media', link: '/cloudify/media' },
        ],
    },
    { text: 'API Integration', link: '/cloudify/api' },
    { text: 'Frequent Questions', link: '/cloudify/faq' },
] satisfies DefaultTheme.SidebarItem[];
