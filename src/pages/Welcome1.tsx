import c from 'classnames'
import s from './Welcome1.module.scss'
export const Welcome1: React.FC = () => {
  return (
    <div className={c(s.wrapper, s.blue)}>
    <div className='frank'>
   蓝莓记账
    </div>
  </div>
  )
}
