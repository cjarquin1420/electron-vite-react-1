import { useDispatch } from "react-redux"
import { open as openAlert, close as closeAlert, IAlert } from '../providers/slice/alert'

export const useAlert = () => {
    const dispatch = useDispatch()
    
    const open = (params: Omit<IAlert, 'isOpen'>) => {
        dispatch(openAlert(params))
    } 

    const close = () => {
        dispatch(closeAlert())
    }

    return { open, close }
}