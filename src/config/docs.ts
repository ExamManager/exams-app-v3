/**
 * Docs navigation items
 * @type {DocsSidebarNavItems[]}
 * @property {string} id - The unique id of the navigation item.
 * @property {string} label - The label of the navigation item.
 * @property {DocsNavItem[]} items - The sub navigation items.
 *
 * @example
 * export const docsNavigation = [
 *  {
 *     id: "getting-started",
 *    label: "Getting Started",
 *   items: [
 *     {
 *      id: "installation",
 *     label: "Installation",
 *    href: "/docs/getting-started/installation",
 *  },
 * ]
 *
 * @returns The navigation items for the docs sidebar.
 *
 */

type DocsNavItem = {
    id: string;
    label: string;
    badge?: string;
} & (
    | { href: string; subItems?: never; disabled?: boolean }
    | {
          href?: never;
          subItems: {
              id: string;
              label: string;
              href: string;
              disabled?: boolean;
              badge?: string;
          }[];
      }
);

type DocsSidebarNavItems = {
    id: string;
    label: string;
    items: DocsNavItem[];
};

const nav: DocsSidebarNavItems[] = [
    {
        id: "introduction",
        label: "Introduction",
        items: [
            {
                id: "introduction",
                label: "What is ExamManager V3?",
                href: "/docs/introduction",
            },
        ],
    },
    {
        id: "getting-started",
        label: "Getting Started",
        items: [
            {
                id: "installation",
                label: "Installation",
                href: "/docs/getting-started/installation",
            },
        ],
    },
];

export const docsConfig = {
    nav,
};