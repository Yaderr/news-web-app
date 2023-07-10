import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { saveComment } from '../../../firebase'

export const InputComment = ({ ibuDocId }) => {

    const { status, uid } = useSelector(state => state.auth)

    const onSubmitComment = async(event) => {
        event.preventDefault()
        
        await saveComment(uid, event.target.comment.value, ibuDocId)
        event.target.comment.value = ''
    }

    const onInputCommentClick = () => {
        // TODO: a way to show a modal with login alert
        console.log('Clicked');
    }

    if(status !== 'authenticated') {
        return (
            <div className='py-5'>
                <form disabled className='flex bg-athens-gray rounded-[20px] px-5 py-4'>
                    <input autoComplete='off' onClick={onInputCommentClick} name='comment' placeholder='Escribe tu comentario...' type="text" className='hover:cursor-pointer w-full bg-transparent border-none placeholder:text-lynch/50 text-blue-vogue p-0 order-transparent focus:border-transparent focus:ring-0' />
                    <button type="submit" disabled>
                        <PaperAirplaneIcon className='text-blue-vogue w-8' />
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className='py-5'>
            <form onSubmit={onSubmitComment} className='flex bg-athens-gray rounded-[20px] px-5 py-4'>
                <input autoComplete='off' name='comment' placeholder='Escribe tu comentario...' type="text" className='w-full bg-transparent border-none placeholder:text-lynch/50 text-blue-vogue p-0 order-transparent focus:border-transparent focus:ring-0' />
                <button type="submit">
                    <PaperAirplaneIcon className='text-blue-vogue w-8' />
                </button>
            </form>
        </div>
    )
}