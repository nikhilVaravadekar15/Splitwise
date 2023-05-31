"use client"

import BarChart from "../../../../components/BarChart";
import LineChart from "../../../../components/LineChart";

export default function board() {

    return (
        <div className="w-full h-full p-4 flex gap-4 flex-col overflow-y-scroll">
            <div className=" text-slate-900 text-2xl font-black tracking-tighter">
                Groups you are in:
            </div>
            <div className="flex gap-1 flex-col">
                <div className=" text-slate-900 text-xl font-bold tracking-tighter">test group 1</div>
                <div className="flex gap-2 items-center justify-center">
                    <LineChart />
                    <BarChart />
                </div>
            </div>
            <div className="flex gap-1 flex-col">
                <div className=" text-slate-900 text-xl font-bold tracking-tighter">test group 2</div>
                <div className="flex gap-2 items-center justify-center">
                    <LineChart />
                    <BarChart />
                </div>
            </div>
        </div>
    )
}
