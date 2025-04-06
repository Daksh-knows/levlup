"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Fall 2021",
    gpa: 3.2,
  },
  {
    name: "Spring 2022",
    gpa: 3.4,
  },
  {
    name: "Fall 2022",
    gpa: 3.6,
  },
  {
    name: "Spring 2023",
    gpa: 3.75,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          domain={[0, 4]}
          ticks={[0, 1, 2, 3, 4]}
        />
        <Tooltip />
        <Bar dataKey="gpa" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

