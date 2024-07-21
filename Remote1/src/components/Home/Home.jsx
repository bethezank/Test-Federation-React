//  ต้อง import เอง
// ไม่สามารถ import มาจาก Host App ได้
import { useAuth } from 'HostApp/useAuth'
import Bethezank from 'HostApp/bethezank'

const Home = () => {

  const auth = useAuth()

  return (
    <>
      <div>Remote1 Home</div>
      <p>
        Remote1 app auth = {auth ? 'ok' : 'no'}
      </p>
      <p>
        Bethezank Component from Remote1
        <Bethezank/>
      </p>
    </>
  )
}

export default Home