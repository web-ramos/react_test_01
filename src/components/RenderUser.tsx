import { FC } from "react"
import { Link } from "react-router-dom"
import { IUser } from "../constants/types"
import Albums from "../pages/Albums"
import { Popup } from "./Popup/Popup"
import Article from "./UI/Article"
import Button from "./UI/Button"

type RenderUserProps = {
  item: IUser
}

const RenderUser : FC<RenderUserProps> = ({ item }) => {
  return (
    <Article>
      <div className='mb-5'>{item.name}</div>
      <div className='grid grid-cols-2 gap-5'>
        <Popup openElement={<Button>Albums</Button>}>
            <Albums userId={item.id} />
        </Popup>
        <Link to={`users/${item.id}/posts`}>
          <Button>Posts</Button>
        </Link>
      </div>
    </Article>
  )
}

export default RenderUser