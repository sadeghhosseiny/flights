import { FunctionComponent, HTMLAttributes, useContext } from 'react'
import Collapse from '../../components/Collapse/Collapse'
import Text from '../../components/Text/Text'
import CheckBox from '../../components/CheckBox/CheckBox'
import { FlightsContext } from '../../../contexts/FlightsContext'

interface ISideBarProps extends HTMLAttributes<Element> {}

const SideBar: FunctionComponent<ISideBarProps> = () => {
  const { state, actions, dispatch } = useContext(FlightsContext)
  const handleCharterFlights = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type } = e.target
    actions.filterCharterFlights(type, { [name]: checked })(dispatch)
  }

  return (
    <div className='appearance-none'>
      <Text>نوع پرواز</Text>
      <div className='flex gap-4 m-3 items-center'>
        <CheckBox
          id='system-checkbox'
          name='isSystem'
          type='checkbox'
          onChange={handleCharterFlights}
        />
        <Text className='text-base'>
          <label htmlFor='system-checkbox'>پروازهای سیستمی</label>
        </Text>
      </div>
      <div className='flex gap-4 m-3 items-center'>
        <CheckBox
          id='charter-checkbox'
          name='isCharter'
          type='checkbox'
          onChange={handleCharterFlights}
        />
        <Text className='text-base'>
          <label htmlFor='charter-checkbox'>پروازهای چارتری</label>
        </Text>
      </div>
    </div>
  )
}

export default SideBar
