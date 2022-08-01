import { FC } from 'react'

export interface MilestoneProps {
  time: string
  ampm: 'am' | 'pm'
}
const Milestone: FC<MilestoneProps> = ({ time, ampm, children }) => (
  <li className='flex items-center gap-4 mb-1'>
    <span className='basis-1/6'>
      <span className='font-black text-lg'>{time}</span>
      <span className='font-thin'>{ampm}</span>
    </span>
    <span className='basis-5/6'>{children}</span>
  </li>
)

export default Milestone
