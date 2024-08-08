const isDev = () => {
    return import.meta.env.MODE === "development" ? true : false
}
export default isDev