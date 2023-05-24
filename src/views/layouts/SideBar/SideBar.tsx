import { FunctionComponent, HTMLAttributes, useCallback, useContext, useState } from 'react'
import Text from '../../components/Text/Text'
import CheckBox from '../../components/CheckBox/CheckBox'
import { FlightsContext } from '../../../contexts/FlightsContext'
import { flushSync } from 'react-dom'

interface ISideBarProps extends HTMLAttributes<Element> {}

const SideBar: FunctionComponent<ISideBarProps> = () => {
  const { actions, dispatch } = useContext(FlightsContext)
  const [range, setRange] = useState('')

  const deb = useCallback(
    (() => {
      let timerReference: any = null
      return (type: string, name: string, obj: any) => {
        if (timerReference) {
          clearTimeout(timerReference)
        }

        timerReference = setTimeout(() => {
          actions.filters(type, { [name]: obj })(dispatch)
        }, 1000)
      }
    })(),
    [range],
  )

  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type } = e.target

    flushSync(() => {
      type === 'range' && setRange(e.target.value)
    })

    let obj = null

    type === 'checkbox' ? (obj = checked) : (obj = { from: 0, to: e.target.value })
    type === 'range' ? deb(type, name, obj) : actions.filters(type, { [name]: obj })(dispatch)
  }

  return (
    <div>
      <Text className='text-base'>نوع پرواز</Text>
      <div className='flex flex-col gap-4 m-3 items-start'>
        <div className='flex m-3 flex-col'>
          <input name='totalFare' min={0} max={2000000} type='range' onChange={handleFilters} />
          <div className='flex justify-between'>
            <Text className='text-base'>0</Text>
            <Text className='text-base'>{range}</Text>
          </div>
        </div>
        <div className='flex gap-4 m-3 items-center'>
          <CheckBox id='system-checkbox' name='isSystem' type='checkbox' onChange={handleFilters} />
          <Text className='text-base'>
            <label htmlFor='system-checkbox'>پروازهای سیستمی</label>
          </Text>
        </div>
        <div className='flex gap-4 m-3 items-center'>
          <CheckBox
            id='charter-checkbox'
            name='isCharter'
            type='checkbox'
            onChange={handleFilters}
          />
          <Text className='text-base'>
            <label htmlFor='charter-checkbox'>پروازهای چارتری</label>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default SideBar
