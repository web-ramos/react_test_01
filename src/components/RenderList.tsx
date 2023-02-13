import { FC } from "react";
import Loader from "./UI/Loader";
import Title from "./UI/Title";

type RenderListProps = {
  title: string,
  isLoading: boolean,
  items: Array<any>,
  RenderProp: FC<any>
}

const RenderList: FC<RenderListProps> = ({title, isLoading, items, RenderProp }) => {

  return (
    <div className='flex flex-col align-middle justify-center p-5'>
      <Title>{title}</Title>
      <section className='grid grid-cols-1 gap-3 w-full md:w-1/2 2xl:w-1/3 self-center'>
        {!isLoading && items.map((item) => {
          return (
            <RenderProp key={item.id} item={item} />
          )
        })}
        {isLoading && <Loader />}
      </section>
    </div>
  )
}

export default RenderList