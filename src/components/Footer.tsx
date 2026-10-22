import React from 'react';
import { SCHOOL_INFO } from '../data/contentInventory';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Database } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
  onOpenInventory: () => void;
  onOpenLoginModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInventory,
  onOpenLoginModal
}) => {
  return (
    <footer className="bg-[#23483D] text-[#F7F4EC] border-t border-[#19342C]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#F7F4EC]/15">
          
          {/* Col 1: Identity & Editorial Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E5EBE1] text-[#23483D] flex items-center justify-center font-serif font-bold text-lg">
                AFS
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#F7F4EC] block leading-tight">
                  {SCHOOL_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D7B66E] font-medium">
                  Est. {SCHOOL_INFO.establishedYear} · Kachai, Manipur
                </span>
              </div>
            </div>
            <p className="text-sm text-[#F7F4EC]/80 leading-relaxed max-w-md pt-2">
              A residential community institution in Kachai village, Ukhrul district, Manipur, providing quality education from Kindergarten to Grade 10 for first-generation learners and children from remote and underserved villages.
            </p>
            <div className="pt-2 text-xs text-[#F7F4EC]/60">
              Founded by {SCHOOL_INFO.founders.join(' and ')}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#D7B66E]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-[#F7F4EC]/85 hover:text-[#F7F4EC] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/our-story')}
                  className="text-[#F7F4EC]/85 hover:text-[#F7F4EC] transition-colors"
                >
                  Our Story & Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/life-at-afs')}
                  className="text-[#F7F4EC]/85 hover:text-[#F7F4EC] transition-colors"
                >
                  Life at AFS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/get-involved')}
                  className="text-[#F7F4EC]/85 hover:text-[#F7F4EC] transition-colors"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/get-involved', '#donate')}
                  className="inline-flex items-center gap-1 text-[#D7B66E] hover:underline transition-colors font-medium"
                >
                  <span>Support the School</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact & Address */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#D7B66E]">
              Campus & Office
            </h3>
            <div className="space-y-3 text-sm text-[#F7F4EC]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D7B66E] shrink-0 mt-1" />
                <span>
                  {SCHOOL_INFO.address.village}, {SCHOOL_INFO.address.district}, {SCHOOL_INFO.address.state}, {SCHOOL_INFO.address.po}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7B66E] shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.contact.phone}`}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {SCHOOL_INFO.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7B66E] shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.contact.email}`}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {SCHOOL_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Privacy, Content Inventory, and Member portal utility link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EC]/60">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All substantive content and authentic photographs preserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenInventory}
              className="inline-flex items-center gap-1.5 text-[#F7F4EC]/80 hover:text-white hover:underline transition-colors cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Migration Content & Media Inventory</span>
            </button>
            <button
              onClick={onOpenLoginModal}
              className="text-[#F7F4EC]/60 hover:text-white hover:underline transition-colors cursor-pointer"
            >
              School Portal Login
            </button>
            <span className="flex items-center gap-1 text-[#F7F4EC]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D7B66E]" />
              <span>Enquiries handled securely</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
