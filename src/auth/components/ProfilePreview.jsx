
export const ProfilePreview = ({ profile }) => {

    return (
        <div className="flex h-[400px] w-full items-center justify-center absolute">
            <div className="bg-white/30 backdrop-blur-sm fixed h-[400px] w-[400px]"></div>
            <div className="bg-gray-100 p-7 rounded-full">
                <div className="bg-gray-200 p-6 rounded-full">
                    <div className="bg-gray-300 rounded-full p-5">
                        <div className="space-y-3 text-center text-blue-vogue w-[200px] h-[200px] flex flex-col rounded-full items-center justify-center">
                            <img className="rounded-full w-[100px] h-[100px] ring-4 ring-red-ribbon z-[999]" src={profile.photoURL} alt={`${profile.displayName}`} />
                            <h1 className="font-bold text-xl z-[999]">{ profile.displayName.split(' ')[0] }</h1>
                            <div className="z-[999]">
                                <span className="text-md">{
                                    profile.userName && `@${profile.userName}`
                                }</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}