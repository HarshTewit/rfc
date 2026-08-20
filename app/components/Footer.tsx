import { footer, nav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <span className="font-display text-3xl tracking-widest text-accent uppercase">
            {nav.wordmark}
          </span>
          <p className="mt-3 font-body text-xs text-off-white/40 leading-relaxed max-w-xs">
            {footer.tagline}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-body text-xs uppercase tracking-widest text-off-white/30 mb-3">
            Contact
          </h4>
          <p className="font-body text-sm text-off-white/60">{footer.address}</p>
          <a
            href={`tel:${footer.phone.replace(/\s/g, "")}`}
            className="block font-body text-sm text-off-white/60 hover:text-off-white transition-colors"
          >
            {footer.phone}
          </a>
          <a
            href={footer.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {footer.instagram}
          </a>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest text-off-white/30 mb-3">
            Navigate
          </h4>
          <ul className="space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-off-white/60 hover:text-off-white transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center">
        <p className="font-body text-xs text-off-white/20">
          &copy; {new Date().getFullYear()} Revive Fight Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
