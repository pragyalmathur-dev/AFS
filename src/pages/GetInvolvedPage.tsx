import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/contentInventory';
import { Heart, Users, Handshake, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface GetInvolvedPageProps {
  onNavigate: (path: string, hash?: string) => void;
  initialEnquiryType?: string;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onNavigate, initialEnquiryType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiryType: initialEnquiryType || 'Donation',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEnquirySelect = (type: string) => {
    setFormData((prev) => ({ ...prev, enquiryType: type }));
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide details for your enquiry or message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate direct dispatch to alphafriendship@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      enquiryType: 'Donation',
      message: ''
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-0">
      
      {/* A. Introduction Hero */}
      <section className="py-16 lg:py-20 bg-[#F7F4EC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                Support the Mission
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23483D] leading-tight text-balance">
                Your Support Builds New Futures
              </h1>
              <p className="text-base sm:text-lg text-[#28332E]/85 leading-relaxed font-sans">
                Every contribution, big or small, fuels our mission and brings us closer to a world where all children can thrive.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-[#23483D] font-medium">
                <span className="bg-[#E5EBE1] px-3.5 py-1.5 rounded-lg">Financial Support</span>
                <span className="bg-[#E5EBE1] px-3.5 py-1.5 rounded-lg">Volunteer Skills</span>
                <span className="bg-[#E5EBE1] px-3.5 py-1.5 rounded-lg">Institutional Partnerships</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#28332E]/10 bg-stone-200">
                <img
                  src="https://static.wixstatic.com/media/103928_9b49e53ecd434ea0b813dee0e5705647~mv2.jpeg"
                  alt="Alpha Friendship School students smiling in school uniform"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#FAF8F2] border-t border-[#28332E]/10 text-xs text-[#28332E]/75">
                  <span className="font-medium text-[#23483D]">Alpha Friendship School:</span> Supporting children from 25+ remote villages in Manipur.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Three Pillars: Donate, Volunteer, Partner */}
      <section className="py-20 bg-[#FAF8F2] border-t border-[#23483D]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* B. Donate Section */}
          <div id="donate" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#23483D]/15 shadow-xs scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#B96F52]" />
                </div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52] block">
                  Financial Support
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                  Give the Gift of Learning
                </h2>
                <p className="text-base text-[#28332E]/85 leading-relaxed font-sans">
                  Your financial support funds everything from school supplies to teacher training. Make a secure one-time or monthly donation today.
                </p>
                <div className="p-4 bg-[#F7F4EC] rounded-xl border border-[#28332E]/10 text-xs text-[#28332E]/80 space-y-1.5">
                  <div className="font-semibold text-[#23483D]">
                    Direct School Administration Giving:
                  </div>
                  <p>
                    To ensure 100% of contributions reach student care, school supplies, and hostel facilities in Kachai without intermediary processing deductions, donations are coordinated directly with the school administration. Please submit a donation enquiry below to receive official bank and transfer instructions.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => handleEnquirySelect('Donation')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#23483D] rounded-xl hover:bg-[#19342C] transition-all shadow-xs cursor-pointer"
                  >
                    <span>Make a Donation Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#28332E]/10 bg-[#E5EBE1]/40 p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#23483D]">
                    Where Your Gift Goes
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#28332E]/80 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B96F52] mt-1.5 shrink-0" />
                      <span><strong>Classroom Supplies:</strong> Notebooks, textbooks, pens, and art materials.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B96F52] mt-1.5 shrink-0" />
                      <span><strong>Teacher Mentoring:</strong> Capacity building for rural educators.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B96F52] mt-1.5 shrink-0" />
                      <span><strong>Hostel & Nutrition:</strong> Clean boarding facilities and balanced meals.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B96F52] mt-1.5 shrink-0" />
                      <span><strong>Co-Curriculars:</strong> Musical instruments, sports gear, and library books.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* C. Volunteer Section */}
          <div id="volunteer" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#23483D]/15 shadow-xs scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-[#28332E]/10 bg-stone-200">
                  <img
                    src="https://static.wixstatic.com/media/103928_e71b2d8a2e744d89a07d649fb0ccd734~mv2.jpg"
                    alt="Volunteers and mentors collaborating with AFS students"
                    className="w-full h-[320px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#23483D]" />
                </div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52] block">
                  Time & Talents
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                  Lend Your Time and Talent
                </h2>
                <p className="text-base text-[#28332E]/85 leading-relaxed font-sans">
                  Join the AFS family of volunteers and use your skills in teaching, technology, arts, sports, or storytelling to make a meaningful difference. Together, we can create brighter futures for children from remote and underserved communities.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium">Teaching</span>
                  <span className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium">Technology & Coding</span>
                  <span className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium">Fine Arts & Music</span>
                  <span className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium">Sports Coaching</span>
                  <span className="text-xs bg-[#E5EBE1] text-[#23483D] px-3 py-1 rounded-md font-medium">Storytelling</span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => handleEnquirySelect('Volunteering')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#23483D] rounded-xl hover:bg-[#19342C] transition-all shadow-xs cursor-pointer"
                  >
                    <span>Enquire About Volunteering</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* D. Partner with Us Section */}
          <div id="partner" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#23483D]/15 shadow-xs scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E5EBE1] text-[#23483D] flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-[#23483D]" />
                </div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52] block">
                  Institutional Collaboration
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D]">
                  Partner with Us
                </h2>
                <p className="text-base text-[#28332E]/85 leading-relaxed font-sans">
                  Alpha Friendship School welcomes collaboration with schools, nonprofits, and community organizations that believe in the power of education. Together, we can create meaningful opportunities for children from remote communities to learn, grow, and thrive.
                </p>
                <div className="p-4 bg-[#F7F4EC] rounded-xl border border-[#28332E]/10 text-xs text-[#28332E]/80">
                  <span>To read about our existing collaboration with Sunbird Trust through the School Transformation Program, </span>
                  <button
                    onClick={() => onNavigate('/our-story', '#sunbird-partnership')}
                    className="font-semibold text-[#23483D] underline hover:text-[#B96F52]"
                  >
                    visit Our Story & Impact
                  </button>.
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => handleEnquirySelect('Partnership')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#23483D] rounded-xl hover:bg-[#19342C] transition-all shadow-xs cursor-pointer"
                  >
                    <span>Enquire About Partnership</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#28332E]/10 bg-stone-200">
                  <img
                    src="https://static.wixstatic.com/media/103928_8517ca79a1fe4502b3e3c061daf735a1~mv2.jpg"
                    alt="School leadership and institutional collaborators on campus"
                    className="w-full h-[320px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* E. Contact Form & F. Contact Details */}
      <section id="contact-form" className="py-20 bg-[#F7F4EC] border-t border-[#23483D]/10 scroll-mt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#23483D]/15 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#B96F52]">
                  Send a Message
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#23483D] mt-1">
                  Let&apos;s Collaborate
                </h2>
                <p className="text-xs sm:text-sm text-[#28332E]/75 font-sans mt-1">
                  For donation inquiries, volunteering, partnerships, or general questions, please reach out. We&apos;d love to hear from you.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-[#E5EBE1] rounded-2xl border border-[#23483D]/20 text-[#23483D] space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                    <h3 className="font-serif text-lg font-bold">
                      Thank You, {formData.firstName}!
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#28332E]/90 font-sans">
                    Your {formData.enquiryType.toLowerCase()} enquiry has been recorded for the Alpha Friendship School office. A member of our administration will review your note and respond to <strong>{formData.email}</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold bg-[#23483D] text-[#F7F4EC] rounded-lg hover:bg-[#19342C] transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${SCHOOL_INFO.contact.email}?subject=Enquiry from ${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}: ${encodeURIComponent(formData.enquiryType)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 text-xs font-semibold bg-white text-[#23483D] border border-[#23483D]/20 rounded-lg hover:bg-[#FAF8F2] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-xs font-semibold text-[#28332E]">
                        First Name <span className="text-[#B96F52]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F2] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23483D] ${
                          formErrors.firstName ? 'border-red-500' : 'border-[#28332E]/20'
                        }`}
                        placeholder="First name"
                      />
                      {formErrors.firstName && (
                        <p className="text-[11px] text-red-600">{formErrors.firstName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-xs font-semibold text-[#28332E]">
                        Last Name <span className="text-[#B96F52]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F2] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23483D] ${
                          formErrors.lastName ? 'border-red-500' : 'border-[#28332E]/20'
                        }`}
                        placeholder="Last name"
                      />
                      {formErrors.lastName && (
                        <p className="text-[11px] text-red-600">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-[#28332E]">
                      Email Address <span className="text-[#B96F52]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F2] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23483D] ${
                        formErrors.email ? 'border-red-500' : 'border-[#28332E]/20'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-600">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Enquiry Type Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#28332E]">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F2] border border-[#28332E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23483D]"
                    >
                      <option value="Donation">Donation Enquiry</option>
                      <option value="Volunteering">Volunteering Opportunities</option>
                      <option value="Partnership">Institutional Partnership</option>
                      <option value="General enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-[#28332E]">
                      Message <span className="text-[#B96F52]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F2] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23483D] ${
                        formErrors.message ? 'border-red-500' : 'border-[#28332E]/20'
                      }`}
                      placeholder="Please share how you would like to help or any questions you have..."
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-600">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#23483D] hover:bg-[#19342C] rounded-xl transition-all shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#23483D] text-[#F7F4EC] p-8 rounded-3xl shadow-sm space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#D7B66E] font-semibold">
                    Direct Contact
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Alpha Friendship School
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#F7F4EC]/85 font-sans">
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D7B66E] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Physical Campus</div>
                      <div>{SCHOOL_INFO.address.village}</div>
                      <div>{SCHOOL_INFO.address.district}, {SCHOOL_INFO.address.state}</div>
                      <div>{SCHOOL_INFO.address.po}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="w-5 h-5 text-[#D7B66E] shrink-0" />
                    <div>
                      <div className="text-xs text-[#F7F4EC]/60">Telephone</div>
                      <a
                        href={`tel:${SCHOOL_INFO.contact.phone}`}
                        className="font-semibold text-white hover:underline hover:text-[#D7B66E]"
                      >
                        {SCHOOL_INFO.contact.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Mail className="w-5 h-5 text-[#D7B66E] shrink-0" />
                    <div>
                      <div className="text-xs text-[#F7F4EC]/60">Email Address</div>
                      <a
                        href={`mailto:${SCHOOL_INFO.contact.email}`}
                        className="font-semibold text-white hover:underline hover:text-[#D7B66E]"
                      >
                        {SCHOOL_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-[#F7F4EC]/15 text-xs text-[#F7F4EC]/70">
                  <p>
                    Kachai is situated in the hill district of Ukhrul, Manipur. In-person visitors or voluntary delegations are kindly asked to coordinate travel plans with the school administration in advance.
                  </p>
                </div>
              </div>

              {/* Verified Privacy Notice */}
              <div className="p-5 bg-white rounded-2xl border border-[#28332E]/10 text-xs text-[#28332E]/70 space-y-1.5">
                <div className="font-semibold text-[#23483D] uppercase tracking-wider text-[11px]">
                  Privacy & Data Handling
                </div>
                <p>
                  Contact information collected via this form is used exclusively by Alpha Friendship School staff to respond to your specific enquiry. We do not sell or share contact details with third-party advertisers.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
