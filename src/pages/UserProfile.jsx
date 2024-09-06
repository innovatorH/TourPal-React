export default function UserProfile() {
    return (
        <div className="bg-[linear-gradient(#FFFFFF,#FFFFFF)] flex flex-col items-center p-[0_0_4.4rem_0] w-[90rem] box-sizing-border">
            <div className="bg-[#282323] relative flex flex-row justify-between p-[2rem_6.7rem_2rem_6.9rem] w-[90rem] box-sizing-border">
                <div className="rounded-[0.3rem] flex flex-row justify-between w-[68.5rem] h-[fit-content] box-sizing-border">
                    <div className="rounded-[0.3rem] bg-[url('assets/images/Logo.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[12.9rem] h-[4.5rem]">
                    </div>
                    <div className="m-[1.3rem_0_1.3rem_0] inline-block break-words font-['Open_Sans'] italic font-bold text-[1.4rem] text-[#FFFFFF]">
                    Desitnations
                    </div>
                    <div className="m-[1.3rem_0_1.3rem_0] inline-block break-words font-['Open_Sans'] italic font-bold text-[1.4rem] text-[#FFFFFF]">
                    Trips
                    </div>
                    <div className="m-[1.3rem_0_1.3rem_0] inline-block break-words font-['Open_Sans'] italic font-bold text-[1.4rem] text-[#FFFFFF]">
                    Reviews
                    </div>
                    <div className="m-[1.3rem_0_1.3rem_0] inline-block break-words font-['Open_Sans'] italic font-bold text-[1.4rem] text-[#FFFFFF]">
                    Things To Do
                    </div>
                </div>
                <div className="m-[1.3rem_0_0.7rem_0] flex w-[2.4rem] h-[2.5rem] box-sizing-border">
                    <div className="rounded-[1.3rem] bg-[url('assets/images/PictureDefaultAvatar202042Jpg.jpeg')] relative flex w-[2.5rem] h-[2.5rem] box-sizing-border">
                        <div className="bg-[url('assets/images/Image34.png')] w-[2.5rem] h-[2.5rem]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F2F2F2] flex flex-col items-center p-[0_0_1.3rem_0] w-[fit-content] box-sizing-border">
                <div className="border-t-[0.1rem_solid_#E0E0E0] bg-[#E0E0E0] flex flex-row p-[7.2rem_0_4.6rem_0] w-[90rem] box-sizing-border">
                    <div className="m-[0.1rem_0.9rem_0.1rem_0] flex w-[1.5rem] h-[1.5rem] box-sizing-border">
                        <img className="w-[1.3rem] h-[1rem]" />
                    </div>
                    <span className="break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.383] text-[#000000]">
                    Add cover photo
                    </span>
                </div>
                <div className="rounded-[0.1rem] bg-[#FFFFFF] m-[0_6.5rem_0_8rem] flex flex-row justify-between p-[1.5rem_0.1rem_0.8rem_1.5rem] w-[75.5rem] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                        <div className="rounded-[7.9rem] bg-[#FFFFFF] relative m-[0_0.9rem_0_0] flex p-[0.2rem_0.2rem_0.2rem_0.2rem] w-[7.9rem] h-[7.9rem] box-sizing-border">
                            <div className="rounded-[7.5rem] bg-[url('assets/images/DefaultAvatar202042Jpg.jpeg')] relative w-[7.5rem] h-[7.5rem]">
                                <div className="bg-[url('assets/images/Image34.png')] bg-[50%_50%] bg-cover bg-no-repeat absolute left-[-0.1rem] top-[-0.2rem] w-[7.6rem] h-[6.6rem]">
                                </div>
                            </div>
                            <div className="rounded-[7.9rem] border-[0.1rem_solid_#FFFFFF] absolute left-[50%] bottom-[0rem] translate-x-[-50%] flex p-[0.2rem_0.2rem_0.2rem_0.2rem] w-[7.9rem] h-[7.9rem] box-sizing-border">
                                <div className="rounded-[7.5rem] border-[0.1rem_solid_rgba(0,0,0,0.1)] w-[7.5rem] h-[7.5rem]">
                                </div>
                            </div>
                        </div>
                        <div className="m-[1.7rem_5.3rem_3.2rem_0] flex flex-col box-sizing-border">
                            <div className="m-[0_0_0rem_0] flex box-sizing-border">
                                <span className="break-words font-['Inter'] font-bold text-[1rem] leading-[1.337] text-[#000000]">
                                Contributions
                                </span>
                            </div>
                            <span className="self-start break-words font-['Inter'] font-bold text-[1.4rem] leading-[1.182] text-[#757575]">
                            0
                            </span>
                        </div>
                        <div className="m-[1.7rem_7.5rem_3.2rem_0] flex flex-col box-sizing-border">
                            <div className="m-[0_0_0rem_0] flex box-sizing-border">
                                <span className="break-words font-['Inter'] font-bold text-[1rem] leading-[1.337] text-[#000000]">
                                Followers
                                </span>
                            </div>
                            <span className="self-start break-words font-['Inter'] font-bold text-[1.4rem] leading-[1.182] text-[#757575]">
                            0
                            </span>
                        </div>
                        <div className="m-[1.7rem_0rem_3.1rem_0] flex flex-col box-sizing-border">
                            <div className="m-[0_0_0.1rem_0] flex box-sizing-border">
                                <span className="break-words font-['Inter'] font-bold text-[1rem] leading-[1.337] text-[#000000]">
                                Following
                                </span>
                            </div>
                            <span className="self-start break-words font-['Inter'] font-bold text-[1.4rem] leading-[1.182] text-[#757575]">
                            0
                            </span>
                        </div>
                    </div>
                    <div className="m-[0rem_0_5.7rem_0] flex flex-row box-sizing-border">
                        <div className="rounded-l-[0.2rem] border-l-[0.1rem_solid_#E0E0E0] border-t-[0.1rem_solid_#E0E0E0] border-b-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] m-[0rem_0rem_0_0] flex p-[0.5rem_1rem_0.5rem_1rem] box-sizing-border">
                            <span className="break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.395] text-[#000000]">
                            Edit profile
                            </span>
                        </div>
                        <div className="rounded-r-[0.2rem] border-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] m-[0_0_0rem_0] flex p-[0.7rem_1.1rem_0.7rem_1.1rem] w-[2.9rem] h-[2.1rem] box-sizing-border">
                            <img className="w-[0.7rem] h-[0.7rem]" />
                        </div>
                    </div>
                </div>
                <div className="m-[0_6.5rem_0_8rem] flex flex-col w-[fit-content] box-sizing-border">
                    <div className="rounded-[0.1rem] bg-[#FFFFFF] m-[0_0_1.5rem_0] p-[0_0.8rem_0_0.8rem] w-[75.5rem] box-sizing-border">
                        <div className="border-b-[0.1rem_solid_#E0E0E0] flex flex-row justify-between p-[0.8rem_0_0.9rem_0.8rem] w-[0.1rem] h-[fit-content] box-sizing-border">
                            <div className="m-[0rem_0_0_0] flex h-[fit-content] box-sizing-border">
                                <span className="break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.407] text-[#000000]">
                                Activity feed
                                </span>
                            </div>
                            <div className="m-[0_0_0rem_0] flex h-[fit-content] box-sizing-border">
                                <p className="break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.36] text-[#333333]">
                                <span className="journeys-sub-1"></span><span href="https://www.figma.com/design/wB5D7oGp6lMY6IeoVynXnS?node-id=1-2"></span>
                                </p>
                            </div>
                            <div className="m-[0rem_0_0_0] flex h-[fit-content] box-sizing-border">
                                <span className="break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.349] text-[#333333]">
                                Photos
                                </span>
                            </div>
                            <div className="flex flex-row w-[8.1rem] h-[fit-content] box-sizing-border">
                                <div className="m-[0rem_0.7rem_0_0] flex box-sizing-border">
                                    <span className="break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.395] text-[#333333]">
                                    Reviews
                                    </span>
                                </div>
                                <div className="m-[0_0_0rem_0] flex box-sizing-border">
                                    <span className="break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.327] text-[#333333]">
                                    Travel map
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-[0_1.5rem_1.5rem_1.5rem] flex flex-row self-start w-[fit-content] box-sizing-border">
                        <div className="bg-[#FFFFFF] m-[0_2.6rem_0_0] flex flex-col p-[1.5rem_1.5rem_1.5rem_1.5rem] box-sizing-border">
                            <div className="m-[0_0_0.5rem_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                                <div className="m-[0_0_0.5rem_0] inline-block break-words font-['Inter'] font-bold text-[1.3rem] leading-[1.357] text-[#000000]">
                                Your Achievements
                                </div>
                                <span className="self-start break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.264] text-[#333333]">
                                Start sharing to unlock
                                </span>
                            </div>
                            <div className="rounded-[0.5rem] border-[0.1rem_solid_#E0E0E0] m-[0_0_0.5rem_0] flex flex-row p-[0.5rem_1.1rem_1rem_0.5rem] w-[fit-content] box-sizing-border">
                                <div className="bg-[#FFFFFF] relative m-[0_0.5rem_0_0] flex w-[3rem] h-[3rem] box-sizing-border">
                                    <div className="opacity-10 relative flex w-[3rem] h-[3rem] box-sizing-border">
                                        <img className="w-[3rem] h-[3rem]" />
                                    </div>
                                    <div className="absolute top-[0.9rem] right-[1rem] flex w-[1.5rem] h-[1.5rem] box-sizing-border">
                                        <img className="w-[1rem] h-[1.2rem]" />
                                    </div>
                                </div>
                                <div className="m-[0.4rem_0_0.4rem_0] flex flex-col items-center box-sizing-border">
                                    <div className="m-[0_0_0.3rem_0] inline-block break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.363] text-[#000000]">
                                    Write your first review
                                    </div>
                                    <span className="m-[0_0.1rem_0_0] break-words font-['Inter'] font-normal text-[0.7rem] leading-[1.244] text-[#333333]">
                                    Unlock review milestones
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-[0.5rem] border-[0.1rem_solid_#E0E0E0] m-[0_0_0.5rem_0] flex flex-row p-[0.5rem_0.9rem_1rem_0.5rem] w-[fit-content] box-sizing-border">
                                <div className="bg-[#FFFFFF] relative m-[0_0.5rem_0_0] flex w-[3rem] h-[fit-content] box-sizing-border">
                                    <div className="opacity-10 relative flex p-[1rem_1rem_1rem_0.8rem] w-[3rem] h-[fit-content] box-sizing-border">
                                        <div className="rounded-[1.5rem] bg-[#FFFFFF] absolute left-[50%] top-[0rem] translate-x-[-50%] w-[3rem] h-[3rem]">
                                        </div>
                                        <div className="relative flex flex-row w-[1.3rem] h-[fit-content] box-sizing-border">
                                            <img className="m-[0_0rem_0.9rem_0] w-[0.2rem] h-[0.2rem]" />
                                            <div className="m-[0.4rem_0_0_0] flex w-[1.1rem] h-[0.7rem] box-sizing-border">
                                                <img className="w-[1.1rem] h-[0.7rem]" />
                                            </div>
                                        </div>
                                        <img className="absolute left-[50%] bottom-[0rem] translate-x-[-50%] w-[3rem] h-[3rem]" />
                                    </div>
                                    <div className="absolute top-[0.9rem] right-[1rem] flex w-[1.5rem] h-[1.5rem] box-sizing-border">
                                        <img className="w-[1rem] h-[1.2rem]" />
                                    </div>
                                </div>
                                <div className="m-[0.4rem_0_0.4rem_0] flex flex-col items-center box-sizing-border">
                                    <div className="m-[0_0_0.3rem_0] inline-block break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.317] text-[#000000]">
                                    Upload your first photo
                                    </div>
                                    <span className="m-[0_0.3rem_0_0] break-words font-['Inter'] font-normal text-[0.7rem] leading-[1.224] text-[#333333]">
                                    Unlock photo milestones
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-[1.3rem] bg-[#000000] flex p-[0.6rem_0_1.1rem_1.1rem] w-[14rem] box-sizing-border">
                                <span className="break-words font-['Inter'] font-bold text-[0.9rem] leading-[1.379] text-[#FFFFFF]">
                                View all
                                </span>
                            </div>
                        </div>
                        <div className="rounded-[0.1rem] bg-[#FFFFFF] relative m-[0_0_9.6rem_0] flex p-[3rem_0_6rem_0rem] w-[33.3rem] h-[fit-content] box-sizing-border">
                            <span className="relative break-words font-['Inter'] font-bold text-[1.1rem] leading-[1.324] text-[#000000]">
                            Fill Out Your Profile
                            </span>
                            <span className="absolute left-[50%] bottom-[2.4rem] translate-x-[-50%] text-center break-words font-['Inter'] font-normal text-[1rem] leading-[1.301] text-[#757575]">
                            Add photos and info to your profile so people can find you<br />
                            easily and get to know you better!
                            </span>
                        </div>
                    </div>
                    <div className="rounded-[0.1rem] bg-[#FFFFFF] m-[0_1.5rem_0.8rem_1.5rem] flex flex-col items-center self-start p-[1.5rem_1.5rem_2.3rem_1.5rem] w-[fit-content] box-sizing-border">
                        <div className="m-[0_0_0.9rem_0] flex self-start box-sizing-border">
                            <span className="break-words font-['Inter'] font-bold text-[0.9rem] leading-[1.368] text-[#000000]">
                            Intro
                            </span>
                        </div>
                        <div className="m-[0_2.1rem_0.9rem_0] flex flex-row w-[fit-content] box-sizing-border">
                            <div className="m-[0.1rem_0.4rem_0.2rem_0] flex w-[1rem] h-[1rem] box-sizing-border">
                                <img className="w-[0.6rem] h-[0.8rem]" />
                            </div>
                            <span className="break-words font-['Inter'] font-normal text-[0.9rem] leading-[1.296] text-[#333333]">
                            Addis Ababa, Ethiopia
                            </span>
                        </div>
                        <div className="m-[0_3.7rem_1rem_0] flex flex-row w-[fit-content] box-sizing-border">
                            <div className="m-[0.1rem_0.4rem_0.2rem_0] flex w-[1rem] h-[1rem] box-sizing-border">
                                <img className="w-[0.8rem] h-[0.8rem]" />
                            </div>
                            <span className="break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.383] text-[#333333]">
                            Joined in Aug 2024
                            </span>
                        </div>
                        <div className="relative m-[0_11.5rem_1.1rem_0] flex w-[12.5rem] h-[1.2rem] box-sizing-border">
                            <div className="flex w-[1rem] h-[1rem] box-sizing-border">
                                <img className="w-[0.8rem] h-[0.8rem]" />
                            </div>
                            <span className="absolute right-[-11.7rem] bottom-[-0.2rem] break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.395] text-[#000000]">
                            markontech.yegaratech.com
                            </span>
                        </div>
                        <span className="self-start break-words font-['Inter'] font-normal text-[0.8rem] leading-[1.338] text-[#333333]">
                        travel enthusiastic.
                        </span>
                    </div>
                    <div className="rounded-[0.1rem] bg-[#FFFFFF] m-[0_1.5rem_0_1.5rem] flex flex-col items-center self-start p-[1.5rem_1.5rem_2.1rem_1.5rem] w-[fit-content] box-sizing-border">
                        <div className="m-[0_0_1.5rem_0] inline-block self-start break-words font-['Inter'] font-bold text-[0.9rem] leading-[1.345] text-[#2C2C2C]">
                        Share your travel advice
                        </div>
                        <div className="m-[0_5.6rem_1.6rem_0] flex flex-row w-[fit-content] box-sizing-border">
                            <div className="m-[0.1rem_1.1rem_0.2rem_0] flex w-[1.3rem] h-[1.3rem] box-sizing-border">
                                <img className="w-[1rem] h-[0.8rem]" />
                            </div>
                            <span className="break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.419] text-[#000000]">
                            Post photos
                            </span>
                        </div>
                        <div className="m-[0_5.5rem_0_0] flex flex-row w-[fit-content] box-sizing-border">
                            <div className="m-[0_1.1rem_0.1rem_0] flex w-[1.3rem] h-[1.3rem] box-sizing-border">
                                <img className="w-[1rem] h-[1rem]" />
                            </div>
                            <div className="m-[0rem_0_0_0] inline-block break-words font-['Inter'] font-bold text-[0.8rem] leading-[1.431] text-[#000000]">
                            Write review
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}