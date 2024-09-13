import env from "../service/env"

const menu = [
    {
        path: env("VITE_SITE_URL"),
        label: "Rework Home"
    },
    {
        path: `${env("VITE_SITE_URL")}/about`,
        label: "Rework About"
    },
    {
        path: `${env("VITE_SITE_URL")}/contact`,
        label: "Rework Contact"
    },
]

export default menu