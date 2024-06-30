const ChildApp1 = () => {
    return (
        <iframe
            src="/App/ChildApp1/index.html"
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms allow-modals allow-top-navigation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-downloads"
            allowFullScreen=""
            style={{ width: '100%', height: '100%', border: 'none' }}
        />
    )
}
export default ChildApp1