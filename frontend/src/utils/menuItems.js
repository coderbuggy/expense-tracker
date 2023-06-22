import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Özet',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Girdi / Çıktı",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Gelirler",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Giderler",
        icon: expenses,
        link: "/dashboard",
    },
]