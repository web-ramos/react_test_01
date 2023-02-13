import { FC } from "react";
import { IAlbum } from "../constants/types";
import Article from "./UI/Article";
import SubTitle from "./UI/SubTitle";

type RenderAlbumProps = {
  item: IAlbum
}

const RenderAlbum: FC<RenderAlbumProps> = ({ item }) => {
  return (
    <Article>
      <SubTitle>{item.title}</SubTitle>
    </Article>
  )
}

export default RenderAlbum