//  ต้อง import เอง
// ไม่สามารถ import มาจาก Host App ได้
import { useAuth } from 'HostApp/useAuth'
import Bethezank from 'HostApp/bethezank'

const Home = () => {

  const auth = useAuth()

  return (
    <>
      <div>Rework Home</div>
      <p>
        Rework app auth = {auth ? 'ok' : 'no'}
      </p>
      <p>
        Bethezank Component from Rework
      </p>
      <Bethezank/>
    </>
  )
}

export default Home