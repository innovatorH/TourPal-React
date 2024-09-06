export default function TripType() {
    return (
        <div className="bg-[linear-gradient(#FFFFFF,#FFFFFF)] flex flex-col items-center p-[10rem_0_9rem_0] w-[90rem] box-sizing-border">
            <div className="rounded-[0.2rem] bg-[rgba(0,0,0,0.1)] m-[0_0_4rem_0] w-[55.6rem] h-[0.4rem] box-sizing-border">
                <div className="rounded-[0.2rem] bg-[#000000] w-[27.8rem] h-[0.4rem]">
                </div>
            </div>
            <div className="m-[0_0_1rem_0rem] inline-block break-words font-['Inter'] font-extrabold text-[1.6rem] leading-[1.334] text-[#000000]">
            What kind of trip are you planning?
            </div>
            <div className="m-[0_0_3rem_0rem] inline-block break-words font-['Inter'] font-normal text-[1rem] leading-[1.431] text-[#757575]">
            Select one.
            </div>
            <div className="m-[0_0_2.7rem_0] flex flex-row gap-[0_1rem] w-[fit-content] box-sizing-border">
                <div className="rounded-[0.8rem] border-[0.1rem_solid_#000000] bg-[#FFFFFF] flex flex-col p-[1rem_0_1rem_1rem] w-[10.5rem] box-sizing-border">
                    <div className="rounded-[1.5rem] bg-[#DFD3EE] m-[0_0.1rem_0.8rem_0.1rem] flex self-start p-[0.7rem_0.8rem_0.7rem_0.8rem] w-[3rem] h-[3rem] box-sizing-border">
                        <img className="w-[1.4rem] h-[1.5rem]" />
                    </div>
                    <span className="self-start break-words font-['Inter'] font-bold text-[1rem] leading-[1.337] text-[#000000]">
                    Solo Trip
                    </span>
                </div>
                <div className="rounded-[0.8rem] border-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] flex flex-col p-[1.5rem_0_1rem_1.1rem] w-[10.5rem] box-sizing-border">
                    <img className="m-[0_2.9rem_1.2rem_0] self-center w-[2.1rem] h-[2.1rem]" />
                    <span className="self-start break-words font-['Inter'] font-bold text-[1rem] leading-[1.326] text-[#000000]">
                    Partner trip
                    </span>
                </div>
                <div className="rounded-[0.8rem] border-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] flex flex-col p-[1.8rem_0_1rem_1.1rem] w-[10.5rem] box-sizing-border">
                    <div className="m-[0_2.9rem_1.5rem_0] flex self-center w-[2.1rem] h-[2.1rem] box-sizing-border">
                        <img className="w-[1.7rem] h-[1.5rem]" />
                    </div>
                    <span className="self-start break-words font-['Inter'] font-bold text-[1rem] leading-[1.372] text-[#000000]">
                    Friends Trip
                    </span>
                </div>
                <div className="rounded-[0.8rem] border-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] flex flex-col p-[1.5rem_0_1rem_1rem] w-[10.5rem] box-sizing-border">
                    <img className="m-[0_2.3rem_1.2rem_0] self-center w-[2.1rem] h-[2.1rem]" />
                    <span className="self-start break-words font-['Inter'] font-bold text-[1rem] leading-[1.349] text-[#000000]">
                    Family trip
                    </span>
                </div>
            </div>
            <div className="m-[0_0_6.6rem_0.2rem] flex flex-row w-[fit-content] box-sizing-border">
                <span className="m-[0_0.2rem_0_0] break-words font-['Inter'] font-normal text-[0.9rem] leading-[1.455] text-[#757575]">
                Are you traveling with pets?
                </span>
                <div className="m-[0.2rem_0_0.2rem_0] flex w-[1rem] h-[1.4rem] box-sizing-border">
                    <img className="w-[1rem] h-[1rem]" />
                </div>
            </div>
            <div className="m-[0_0_9.1rem_0] flex flex-row w-[19.8rem] box-sizing-border">
                <div className="rounded-[1.5rem] border-[0.1rem_solid_#E0E0E0] bg-[#FFFFFF] m-[0_1rem_0_0] flex p-[0.8rem_0_0.8rem_0rem] w-[9.4rem] box-sizing-border">
                    <span className="break-words font-['Inter'] font-bold text-[0.9rem] leading-[1.468] text-[#000000]">
                    Yes
                    </span>
                </div>
                <div className="rounded-[1.5rem] bg-[#34E0A1] flex flex-row p-[0.9rem_0_0.9rem_0] w-[9.4rem] box-sizing-border">
                    <div className="m-[0.4rem_0.7rem_0.4rem_0] flex w-[1rem] h-[1rem] box-sizing-border">
                        <img className="w-[0.7rem] h-[0.5rem]" />
                    </div>
                    <span className="break-words font-['Inter'] font-bold text-[1rem] leading-[1.29] text-[#000000]">
                    No
                    </span>
                </div>
            </div>
            <div className="m-[0_0_0_0rem] flex flex-row justify-between w-[45rem] box-sizing-border">
                <div className="m-[0.9rem_0_0.9rem_0] flex box-sizing-border">
                    <span className="break-words font-['Inter'] font-bold text-[0.9rem] underline leading-[1.277] text-[#333333]">
                    Back
                    </span>
                </div>
                <div className="rounded-[1.5rem] bg-[#000000] flex p-[0.9rem_0_0.9rem_0rem] w-[5.1rem] box-sizing-border">
                    <span className="break-words font-['Inter'] font-bold text-[0.9rem] leading-[1.356] text-[#FFFFFF]">
                    Next
                    </span>
                </div>
            </div>
        </div>
    )
}