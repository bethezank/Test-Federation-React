import env from './env';


const isEnterFromHost = () => {
    
    const hostURL = env('VITE_HOST_URL')
    const currentURL = window.origin

    return hostURL === currentURL ? true : false
}
export default isEnterFromHost