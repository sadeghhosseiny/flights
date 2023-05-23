import { FunctionComponent, HTMLAttributes, useContext } from 'react'
import Collapse from '../../components/Collapse/Collapse'
import Text from '../../components/Text/Text'
import CheckBox from '../../components/CheckBox/CheckBox'
import { FlightsContext } from '../../../contexts/FlightsContext'

interface ISideBarProps extends HTMLAttributes<Element> {}

const SideBar: FunctionComponent<ISideBarProps> = () => {
  const { state, actions, dispatch } = useContext(FlightsContext)
  const handleCharterFlights = (e: React.ChangeEvent<HTMLInputElement>) => {
    actions.filterCharterFlights(e.target.checked)(dispatch)
  }

  return (
    <div className='appearance-none'>
      <Text>نوع پرواز</Text>
      <div className='flex gap-4 m-3 items-center'>
        <CheckBox id='system-checkbox' type='checkbox' />
        <label htmlFor='system-checkbox'>پروازهای سیستمی</label>
      </div>
      <div className='flex gap-4 m-3 items-center'>
        <CheckBox id='charter-checkbox' type='checkbox' onChange={handleCharterFlights} />
        <label htmlFor='charter-checkbox'>پروازهای چارتری</label>
      </div>
    </div>
  )
}

export default SideBar
