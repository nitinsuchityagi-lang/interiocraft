'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  })

  const submit = (e: any) => {
    e.preventDefault()
    alert("We'll contact you soon!")
  }

  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl mb-6 text-center">Contact Us</h2>

      <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
        <input
          placeholder="Name"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="w-full border p-2"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="w-full bg-black text-white py-2">
          Submit
        </button>
      </form>
    </section>
  )
}