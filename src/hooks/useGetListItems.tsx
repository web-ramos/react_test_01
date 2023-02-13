import { useEffect, useState } from "react"

export const useGetListItems = ( useStore: any, useStoreParam?: string) => {

  const [ dataState, setDataState ] = useState(Array<any>)
  const { data, error, isLoading } = useStore(useStoreParam)

  useEffect(()=>{
    if (!isLoading && data) {
      setDataState(data)
    }
  }, [isLoading, data])

  return { dataState, error, isLoading }
}