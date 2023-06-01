"use client"

import Link from "next/link"
import { FaSlackHash } from "react-icons/fa"
import {
    Text, Avatar, Timeline
} from '@mantine/core';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function Groups() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className=" text-slate-900 text-2xl font-black tracking-tighter">
                Groups:
            </div>

            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    408: 1,
                    768: 2,
                    1024: 3
                }}
                className="present-groups"
            >
                <Masonry
                    gutter={"16px"}
                    style={{
                        gap: "16px"
                    }}
                >
                    
                    <GroupComponent />
                    <GroupComponent />
                    <GroupComponent />
                    <GroupComponent />

                    <div className="no-group-tansaction p-4 flex gap-4 flex-col border rounded-md bg-slate-50 hover:bg-white hover:shadow-md">
                        <div className="flex gap-4 items-center">
                            <FaSlackHash className="p-1 w-8 h-8 text-purple-600 cursor-pointer rounded-full" />
                            <div className="text-2xl font-black tracking-tighter">No Group transactions</div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div className="px-6">
                                <Text className="flex gap-3 items-center text-teal-600">
                                    <span className="text-lg">You are owed</span>
                                    <span className="text-2xl font-black tracking-tighter">
                                        <span>$</span>
                                        <span>00.0</span>
                                    </span>
                                </Text>
                                <Timeline
                                    bulletSize={16}
                                    className="p-4"
                                >
                                    <Timeline.Item
                                        title={
                                            (
                                                <Text className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                        <span>owes you</span>

                                                    </span>
                                                    <span className="text-teal-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>00.0</span>
                                                    </span>
                                                </Text>
                                            )
                                        }
                                        bullet={
                                            <Avatar
                                                size={22}
                                                radius="xl"
                                                src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                            />
                                        }
                                    >
                                        <Text color="dimmed" size="xs">2 hours ago</Text>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div className="px-6">
                                <Text className="flex gap-3 items-center text-red-600">
                                    <span className="text-lg">You owe</span>
                                    <span className="text-2xl font-black tracking-tighter">
                                        <span>$</span>
                                        <span>50.0</span>
                                    </span>
                                </Text>
                                <Timeline
                                    bulletSize={16}
                                    className="p-4"
                                >
                                    <Timeline.Item
                                        title={
                                            (
                                                <Text className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span>You owe</span>
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                    </span>
                                                    <span className="text-red-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>20.0</span>
                                                    </span>
                                                </Text>
                                            )
                                        }
                                        bullet={
                                            <Avatar
                                                size={22}
                                                radius="xl"
                                                src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                            />
                                        }
                                    >
                                        <Text color="dimmed" size="xs">2 hours ago</Text>
                                    </Timeline.Item>
                                    <Timeline.Item
                                        title={
                                            (
                                                <Text className="flex gap-1 items-center justify-between">
                                                    <span className="flex items-center gap-1">
                                                        <span>You owe</span>
                                                        <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                            <span>@</span>
                                                            <span>Elon musk</span>
                                                        </span>
                                                    </span>
                                                    <span className="text-red-600 font-black tracking-tighter">
                                                        <span>$</span>
                                                        <span>30.0</span>
                                                    </span>
                                                </Text>
                                            )
                                        }
                                        bullet={
                                            <Avatar
                                                size={22}
                                                radius="xl"
                                                src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                            />
                                        }
                                    >
                                        <Text color="dimmed" size="xs">2 hours ago</Text>
                                    </Timeline.Item>

                                </Timeline>
                            </div>
                        </div>
                    </div>

                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

function GroupComponent() {
    return (
        <Link
            href={"/dashboard/group/asdasf-asdasd-asd-asd-asfqed"}
            className="group p-4 flex gap-4 flex-col items-stretch border rounded-lg bg-slate-50 hover:bg-white hover:shadow-md"
        >
            <div className="flex gap-4 items-center">
                <Avatar
                    variant="circular"
                    alt="elon_musk"
                    className="w-10 h-10 cursor-pointer rounded-full border border-blue-500"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="text-2xl font-black tracking-tighter">Test Group</div>
            </div>
            <div className="flex gap-4 flex-col">
                <div className="px-6">
                    <Text className="flex gap-3 items-center text-teal-600">
                        <span className="text-lg">You are owed</span>
                        <span className="text-2xl font-black tracking-tighter">
                            <span>$</span>
                            <span>00.0</span>
                        </span>
                    </Text>
                    <Timeline
                        bulletSize={16}
                        className="p-4"
                    >
                        <Timeline.Item
                            title={
                                (
                                    <Text className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                            <span>owes you</span>

                                        </span>
                                        <span className="text-teal-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>00.0</span>
                                        </span>
                                    </Text>
                                )
                            }
                            bullet={
                                <Avatar
                                    size={22}
                                    radius="xl"
                                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                />
                            }
                        >
                            <Text color="dimmed" size="xs">2 hours ago</Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div className="px-6">
                    <Text className="flex gap-3 items-center text-red-600">
                        <span className="text-lg">You owe</span>
                        <span className="text-2xl font-black tracking-tighter">
                            <span>$</span>
                            <span>50.0</span>
                        </span>
                    </Text>
                    <Timeline
                        bulletSize={16}
                        className="p-4"
                    >
                        <Timeline.Item
                            title={
                                (
                                    <Text className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>20.0</span>
                                        </span>
                                    </Text>
                                )
                            }
                            bullet={
                                <Avatar
                                    size={22}
                                    radius="xl"
                                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                />
                            }
                        >
                            <Text color="dimmed" size="xs">2 hours ago</Text>
                        </Timeline.Item>
                        <Timeline.Item
                            title={
                                (
                                    <Text className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>30.0</span>
                                        </span>
                                    </Text>
                                )
                            }
                            bullet={
                                <Avatar
                                    size={22}
                                    radius="xl"
                                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                />
                            }
                        >
                            <Text color="dimmed" size="xs">2 hours ago</Text>
                        </Timeline.Item>
                        <Timeline.Item
                            title={
                                (
                                    <Text className="flex gap-1 items-center justify-between">
                                        <span className="flex items-center gap-1">
                                            <span>You owe</span>
                                            <span className="font-bold tracking-tighter text-blue-500 cursor-pointer">
                                                <span>@</span>
                                                <span>Elon musk</span>
                                            </span>
                                        </span>
                                        <span className="text-red-600 font-black tracking-tighter">
                                            <span>$</span>
                                            <span>30.0</span>
                                        </span>
                                    </Text>
                                )
                            }
                            bullet={
                                <Avatar
                                    size={22}
                                    radius="xl"
                                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                                />
                            }
                        >
                            <Text color="dimmed" size="xs">2 hours ago</Text>
                        </Timeline.Item>

                    </Timeline>
                </div>
            </div>
        </Link>
    )
}
