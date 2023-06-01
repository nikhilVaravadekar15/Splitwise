"use client"

import { Avatar } from "@mantine/core"
import Image from "next/image"

export default function Activities() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className=" text-slate-900 text-2xl font-black tracking-tighter">
                Activities:
            </div>
            <div className="flex gap-1.5 flex-col">
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
        </div >
    )
}

function Activity() {
    return (
        <div className="p-4 flex gap-8 items-center border rounded-lg bg-slate-50 hover:cursor-pointer hover:bg-white hover:shadow-md">
            <div className="relative cursor-pointer">
                <Avatar
                    alt="elon_musk"
                    className="w-12 h-12 rounded-md"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Image
                    width={24}
                    height={24}
                    alt="elon_musk"
                    className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="text-lg font-semibold tracking-tighter">
                    <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                        <span>@</span>
                        <span>elon_musk</span>
                    </span>
                    <span className="mx-1 font-bold text-base text-gray-700">added</span>
                    <span className="mx-1">
                        &quot;
                        <span className="font-extrabold tracking-tighter">
                            dinner @Wok & Chops
                        </span>
                        &quot;
                    </span>
                    <span className="mx-1 font-bold text-base text-gray-700">in</span>
                    <span className="mx-1 font-medium text-indigo-600 hover:underline hover:text-blue-700 focus:text-blue-700">
                        test_group1
                    </span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <span className="font-bold text-base text-gray-700">you owe</span>
                    <span className="text-xl text-red-500 font-bold tracking-tighter">
                        <span>$</span>
                        <span>40</span>
                    </span>
                    <span className="ml-6 text-xs text-gray-700">
                        Monday 22 May 2023 05:39:37 PM UTC
                    </span>
                </div>
            </div>
        </div>
    )
}
