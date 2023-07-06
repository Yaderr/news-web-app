import { useSelector } from "react-redux"

export const ProfileData = () => {

    const { userName, photoURL, displayName } = useSelector(state => state.auth)

    return (
        <div className="flex md:flex-col md:items-center w-full space-x-4 md:space-x-0 md:space-y-4">
            <a onClick={() => { console.log('clik');}} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-athens-gray rounded-full cursor-pointer select-none">
                {
                    photoURL ? <img className="rounded-full w-full h-full" src={photoURL} alt={userName} />
                    : <div className="bg-blue-vogue w-full h-full rounded-full uppercase flex items-center justify-center font-semibold text-white text-3xl">{displayName.split('')[0]}</div>
                }
            </a>
            <div className="flex flex-col justify-center md:items-center">
                <h1 className="text-lg md:text-2xl font-bold text-blue-vogue">{displayName}</h1>
                <h2 className="text-sm text-blue-vogue">@{userName}</h2>
            </div>
        </div>
    )
}