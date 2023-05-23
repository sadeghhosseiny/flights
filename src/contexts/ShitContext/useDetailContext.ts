import { useContext } from "react"
import DetailContext from './DetailContext'

const useDetailContext = () => {
  return useContext(DetailContext)
}

export default useDetailContext