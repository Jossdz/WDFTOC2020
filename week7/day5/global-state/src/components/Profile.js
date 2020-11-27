import { useUserCtx } from '../hooks/context'
import UploadProfilePic from './UploadProfilePic'

function Profile() {
  const { user } = useUserCtx()

  return user ? (
    <div>
      <h3>{user.name}</h3>
      {user.img && <img width="90px" src={user.img} alt="kwueh" />}
      <br />

      <p>{user.description}</p>
      <small>{user.email}</small>
      <UploadProfilePic />
    </div>
  ) : (<p> Please Login </p>)
}

export default Profile
