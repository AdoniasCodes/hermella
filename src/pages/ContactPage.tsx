import { useState } from 'react'
import { architectProfile } from '../data/profile'
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Employment / Studio Position',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-20 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-black/[0.08] pb-10 mb-14">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Dialogue & Inquiries
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl text-neutral-900 tracking-tight font-normal">
          Initiate Conversation
        </h1>
        <p className="font-sans text-sm sm:text-base text-neutral-600 mt-2 max-w-xl leading-relaxed">
          For studio employment opportunities, architectural commissions, academic lectures, or collaborative research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Coordinates (Col 1) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Direct Contact
            </h3>
            
            <div className="space-y-4 font-mono text-xs text-neutral-700">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neutral-400" />
                <a href={`mailto:${architectProfile.email}`} className="text-neutral-900 hover:underline font-medium text-sm">
                  {architectProfile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neutral-400" />
                <a href={`tel:${architectProfile.phone}`} className="text-neutral-900 hover:underline">
                  {architectProfile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-neutral-400" />
                <span>{architectProfile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-neutral-400" />
                <span>East Africa Time (EAT • UTC+3)</span>
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 bg-[#E9E7E1] p-6 rounded-xs space-y-3">
            <div className="font-mono text-xs text-neutral-800 font-semibold uppercase tracking-wider">
              Studio & Practice Status
            </div>
            <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed">
              Actively interviewing for Junior / Intermediate Architectural Designer positions in boutique and international design studios. Also available for select private residential commissions.
            </p>
          </div>

          <div className="font-mono text-[11px] text-neutral-500 space-y-1">
            <div>PORTFOLIO REVISION: 2025.2</div>
            <div>CAD STANDARDS: ISO 128 / AIA LAYER SYSTEM</div>
            <div>BIM COMPLIANCE: ISO 19650</div>
          </div>
        </div>

        {/* Inquiry Form (Col 2) */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="border border-neutral-300 bg-white p-10 rounded-xs text-center space-y-4 shadow-sm animate-in fade-in">
              <CheckCircle2 size={40} className="mx-auto text-emerald-600" />
              <h3 className="font-serif text-3xl text-neutral-900">Message Dispatched</h3>
              <p className="text-sm font-sans text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for your inquiry. Your message has been routed to {architectProfile.name}. A response will follow within 24 to 48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 font-mono text-xs uppercase tracking-wider text-neutral-800 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600">
                    Your Name / Studio
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Chipperfield Architects / Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xs font-sans text-sm focus:outline-none focus:border-neutral-900 bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xs font-sans text-sm focus:outline-none focus:border-neutral-900 bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xs font-sans text-sm focus:outline-none focus:border-neutral-900 bg-white transition-colors"
                  >
                    <option>Employment / Studio Position</option>
                    <option>Private Architectural Commission</option>
                    <option>Collaboration / Competition</option>
                    <option>Press / Publication Request</option>
                    <option>Academic / Speaking Invitation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600">
                    Project / Studio Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Addis Ababa / London / Basel"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xs font-sans text-sm focus:outline-none focus:border-neutral-900 bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600">
                  Project Details / Role Specifications
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe the opportunity, site conditions, program, or design challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xs font-sans text-sm focus:outline-none focus:border-neutral-900 bg-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider rounded-xs hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
              >
                <span>Send Architectural Inquiry</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
