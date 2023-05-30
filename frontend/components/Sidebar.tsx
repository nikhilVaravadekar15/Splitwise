import {
    FiSearch
} from "react-icons/fi";
import {
    MdLocalActivity
} from "react-icons/md";
import {
    RiUserSettingsLine
} from "react-icons/ri";
import {
    AiOutlineLogout
} from "react-icons/ai";
import {
    HiSparkles, HiUserGroup, HiPresentationChartBar
} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { TSidebar } from "../types/types";
import {
    Avatar, Menu, Button
} from "@mantine/core";

const sidebarData: TSidebar[] = [
    {
        icon: <HiPresentationChartBar className="h-5 w-5" />,
        title: "Dashboard",
        link: "/dashboard/board"
    },
    {
        icon: <HiSparkles className="h-5 w-5" />,
        title: "Friends",
        link: "/dashboard/friends"
    },
    {
        icon: <HiUserGroup className="h-5 w-5" />,
        title: "Groups",
        link: "/dashboard/groups"
    },
    {
        icon: <MdLocalActivity className="h-5 w-5" />,
        title: "Activities",
        link: "/dashboard/activities"
    },
]

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div
            className="p-4 h-full flex flex-col justify-between border-r bg-white shadow-xl">
            <div className="flex gap-4 flex-col">
                <Link href="/dashboard" className="w-full flex gap-2 items-center justify-start cursor-pointer">
                    <Image
                        className="rounded-lg"
                        width={48} height={48} draggable={false}
                        src="/assets/images/logo/apple-touch-icon-precomposed.png" alt="logo" />
                    <span className="text-xl font-bold tracking-tighter">
                        Splitwise
                    </span>
                </Link>
                <div className="flex gap-2 flex-col">
                    <Button
                        fullWidth={true}
                        radius={"md"}
                        variant="default"
                        className="w-full mt-2 p-4 h-full flex gap-2 items-center text-gray-700 cursor-pointer border rounded-lg hover:bg-gray-100">
                        <FiSearch />
                        <span className="select-none">Search</span>
                    </Button>
                    <div className="-mx-3 space-y-6 ">
                        <div className="space-y-3">
                            {
                                sidebarData.map((item: TSidebar, index: number) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            title={item.title}
                                            onClick={() => setActiveTab(index)}
                                            className="flex transform items-center cursor-pointer rounded-lg px-3 py-4 text-gray-600 transition-colors duration-300 hover:text-gray-700 hover:bg-gray-100"
                                            style={{
                                                backgroundColor: activeTab === index ? "#E8E8E8" : "",
                                                color: activeTab === index ? "#20C997" : ""
                                            }}
                                        >
                                            {item.icon}
                                            <span className="mx-2 text-sm font-medium">
                                                {item.title}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Menu
                    shadow="md" width={200}
                    position="top-start" offset={8}
                >
                    <Menu.Target>
                        <Button
                            fullWidth={true}
                            radius={"md"}
                            variant="default"
                            className="p-4 h-full flex items-center">
                            <Avatar
                                radius={"xl"}
                                alt="Dan Abromov"
                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                            />
                            <span className="text-base font-bold tracking-tighter text-gray-800 hover:bg-teal-100">Dan Abromov</span>
                        </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>User Setting</Menu.Label>
                        <Menu.Item icon={<RiUserSettingsLine size={16} />}>Profile</Menu.Item>
                        <Menu.Item color="red" icon={<AiOutlineLogout size={14} />}>Delete my account</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>
    )
}
