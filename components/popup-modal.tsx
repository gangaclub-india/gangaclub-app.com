'use client'

import { useState, useEffect } from 'react'

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000) // Tampilkan modal setelah 1 detik
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg bg-secondary-dark p-6 text-text-light shadow-2xl md:p-8">
        <h3 className="text-2xl font-bold text-accent-cyan">Test Popup</h3>
        <p className="mt-2 text-text-muted">This is a simplified popup to test the build issue.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsOpen(false)}
        >
          Close Test Popup
        </button>
      </div>
    </div>
  )
}
