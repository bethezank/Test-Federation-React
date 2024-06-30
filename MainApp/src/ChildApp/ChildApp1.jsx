import {ChildApp1 as Child} from './ChildApp1';

const ChildApp1 = () => {

    return (
        <Child/>
        // <iframe
            // ตั้งค่า base url ของ ChildApp ให้เหมือนกัน
            // src="App/ChildApp1/index.html"
            // src="http://localhost:5174/App/ChildApp1"
            // sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms allow-modals allow-top-navigation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-downloads"
            // sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms allow-modals allow-top-navigation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation allow-downloads"
            // allowFullScreen=""
        //     style={{ width: '100%', height: '100%', border: 'none' }}
        // />
    )
}
export default ChildApp1