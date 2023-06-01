"use client"

import { Avatar } from '@mantine/core';
import { Timeline, Text } from '@mantine/core';

export default function Friends() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className=" text-slate-900 text-2xl font-black tracking-tighter">
                Friends:
            </div>
            <div className="flex gap-2 flex-col">
                <div className="flex flex-col">
                    <div className="p-4 flex items-center justify-between border rounded-tl-lg rounded-tr-lg bg-slate-50">
                        <div className="flex gap-4 items-center">
                            <Avatar
                                draggable="false"
                                variant="circular"
                                alt="elon_musk"
                                className="w-10 h-10 cursor-pointer rounded-full border border-blue-500"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                            <div className="text-lg font-semibold tracking-tighter">elon_musk</div>
                        </div>
                        <div className="flex gap-4 items-center justify-evenly">
                            <span className="text-gray-700">you owe</span>
                            <span className="text-xl text-red-500 font-bold tracking-tighter">
                                <span>$</span>
                                <span>40</span>
                            </span>
                        </div>
                    </div>
                    <div className="border rounded-bl-lg rounded-br-lg">
                        <Timeline
                            color="teal"
                            active={3}
                            bulletSize={16}
                            className="px-10 py-4"
                        >
                            <Timeline.Item title={
                                (
                                    <Text className="w-fit flex gap-1 items-center">
                                        <span>You owe</span>
                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                            <span>@</span>
                                            <span>Elon musk</span>
                                        </span>
                                        <span className="text-red-600 font-bold tracking-tighter">
                                            <span>$</span>
                                            <span>40</span>
                                        </span>
                                        <span>for</span>
                                        <span className="font-medium text-indigo-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                        >test_group1</span>
                                    </Text>
                                )
                            }>
                                <Text color="dark" size="sm">2 hours ago</Text>
                            </Timeline.Item>
                            <Timeline.Item title={
                                (
                                    <Text className="w-fit flex gap-1 items-center">
                                        <span>You owe</span>
                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                            <span>@</span>
                                            <span>Elon musk</span>
                                        </span>
                                        <span className="text-red-600 font-bold tracking-tighter">
                                            <span>$</span>
                                            <span>40</span>
                                        </span>
                                        <span>for</span>
                                        <span className="font-medium text-indigo-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                        >test_group1</span>
                                    </Text>
                                )
                            }>
                                <Text color="dark" size="sm">2 hours ago</Text>
                            </Timeline.Item>
                            <Timeline.Item title={
                                (
                                    <Text className="w-fit flex gap-1 items-center">
                                        <span>You owe</span>
                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                            <span>@</span>
                                            <span>Elon musk</span>
                                        </span>
                                        <span className="text-red-600 font-bold tracking-tighter">
                                            <span>$</span>
                                            <span>40</span>
                                        </span>
                                        <span>for</span>
                                        <span className="font-medium text-indigo-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                                        >test_group1</span>
                                    </Text>
                                )
                            }>
                                <Text color="dark" size="sm">2 hours ago</Text>
                            </Timeline.Item>

                        </Timeline>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-4 flex items-center justify-between border rounded-lg bg-slate-50">
                        <div className="flex gap-4 items-center">
                            <Avatar
                                variant="circular"
                                alt="elon_musk"
                                className="w-10 h-10 cursor-pointer rounded-full border border-blue-500"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                            <div className="text-lg font-semibold tracking-tighter">jeff bezos</div>
                        </div>
                        <div className="flex gap-4 items-center justify-evenly">
                            <span className="text-gray-700">No expense</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
