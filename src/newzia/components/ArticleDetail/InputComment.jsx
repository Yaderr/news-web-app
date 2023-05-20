import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export const InputComment = () => {

    return (
        <div className='py-5'>
            <form action="" className='flex bg-athens-gray rounded-[20px] px-5 py-4'>
                <input placeholder='Escribe tu comentario...' type="text" className='w-full bg-transparent border-none placeholder:text-lynch/50 text-blue-vogue p-0 order-transparent focus:border-transparent focus:ring-0' />
                <button type="submit">
                    <PaperAirplaneIcon className='text-blue-vogue w-8' />
                </button>
            </form>
        </div>
    )
}