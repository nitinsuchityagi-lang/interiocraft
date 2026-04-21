'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  })

  const [loading, setLoading] = useState(false)

  const submit = async (e: any) => {
    e.preventDefault()

    if (!form.name || !form.phone) {
      alert("Please fill all fields")
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        "service_swrqzpx",     // 🔁 replace
        "template_kehe4dn",    // 🔁 replace
        {
          name: form.name,
          phone: form.phone,
        },
        "vbK1_V-tDOEIJB5fq"      // 🔁 replace
      )

      alert("Enquiry sent successfully!")

      setForm({
        name: '',
        phone: '',
      })

    } catch (error) {
      console.error(error)
      alert("Something went wrong. Try again.")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl mb-6 text-center">Contact Us</h2>

      <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
        
        <input
          placeholder="Name"
          value={form.name}
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          value={form.phone}
          className="w-full border p-2"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  )
}