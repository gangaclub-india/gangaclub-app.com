"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
endTime: Date
}

export default function CountdownTimer({ endTime }: CountdownTimerProps) {
const [timeLeft, setTimeLeft] = useState(null)

useEffect(() => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft
  }

  setTimeLeft(calculateTimeLeft())

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft())
  }, 1000)

  return () => clearInterval(timer)
}, [endTime])

if (timeLeft === null) {
  return null
}

const timerComponents: JSX.Element[] = []

Object.keys(timeLeft).forEach((interval) => {
  // @ts-ignore
  if (!timeLeft[interval]) {
    return
  }

  timerComponents.push(
    <span key={interval} className="font-semibold text-accent-cyan">
      {/* @ts-ignore */}
      {timeLeft[interval]} {interval}{" "}
    </span>
  )
})

return (
  <div className="text-sm text-text-muted">
    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
  </div>
)
}
