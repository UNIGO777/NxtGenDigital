import React from "react";

const Footer = ({ serviceRef, workRef, pricingRef, contactRef, scrollToSection }) => {

  const Links = [
    {
      title: "Works",
      ref: workRef
    },
    {
      title: "Services",
      ref: serviceRef
    },

    {
      title: "Pricing",
      ref: pricingRef
    },
    {
      title: "Contact",
      ref: contactRef
    },
  ]
  return (
    <footer className="black-glass-background  text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">About NxtGen</h2>
            <p className="text-gray-400 mb-4">
              NxtGen is a forward-thinking digital agency delivering high-quality websites, apps, and software solutions for businesses around the globe.
            </p>
            <p className="text-gray-400">© 2024 NxtGen Digital. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {




                Links.map((item, key) => {
                  return <p key={key} onClick={() => {

                    scrollToSection(item.ref)
                  }} className='opacity-80 hover:opacity-100 w-fit cursor-pointer hover:scale-[1.1] transition-all'>{item.title}</p>
                })

              }
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/naman----jain" aria-label="Linkedin" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.33 18.21H5.66V9.16h2.67v9.05zm-1.34-10.37a1.54 1.54 0 110-3.08 1.54 1.54 0 010 3.08zm11.52 10.37h-2.67v-4.8c0-1.15-.02-2.64-1.61-2.64-1.61 0-1.86 1.25-1.86 2.55v4.89h-2.67V9.16h2.56v1.24h.04c.35-.66 1.21-1.36 2.49-1.36 2.66 0 3.15 1.75 3.15 4.02v5.15z" />
                </svg>
              </a>
              <a href="" aria-label="Instagram" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.957.248 2.41.416.585.22 1.006.484 1.447.926.442.44.706.86.926 1.445.168.453.36 1.24.416 2.41.058 1.267.07 1.65.07 4.85 0 3.2-.012 3.584-.07 4.85-.056 1.17-.248 1.957-.416 2.41-.22.585-.484 1.006-.926 1.447-.44.442-.86.706-1.445.926-.453.168-1.24.36-2.41.416-1.267.058-1.65.07-4.85.07-3.2 0-3.584-.012-4.85-.07-1.17-.056-1.957-.248-2.41-.416-.585-.22-1.006-.484-1.447-.926-.442-.44-.706-.86-.926-1.445-.168-.453-.36-1.24-.416-2.41-.058-1.267-.07-1.65-.07-4.85 0-3.2.012-3.584.07-4.85.056-1.17.248-1.957.416-2.41.22-.585.484-1.006.926-1.447.44-.442.86-.706 1.445-.926.453-.168 1.24-.36 2.41-.416 1.267-.058 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.332.012 7.052.07 5.758.128 4.834.333 4.08.635 3.294.94 2.623 1.41 1.953 2.082 1.282 2.753.81 3.424.505 4.21.203 4.965 0 5.89.07 7.052c.06 1.28.07 1.688.07 4.948s-.012 3.668-.07 4.948c-.06 1.262-.07 1.67-.07 4.948s.01 3.668.07 4.948c.06 1.262.07 1.67.07 4.948s.012 3.668.07 4.948c.06 1.262.07 1.67.07 4.948" />
                </svg>
              </a>
              <a href="" aria-label="facebook" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.03 3.68 9.17 8.44 9.88v-7H7.9v-3h2.55v-1.58c0-2.52 1.5-3.9 3.77-3.9H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3v3h-3v7.88c4.76-.71 8.44-4.85 8.44-9.88z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M24 4.56a9.93 9.93 0 0 1-2.83.78 4.93 4.93 0 0 0 2.16-2.72 9.84 9.84 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.49A13.94 13.94 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.92 4.92 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.94 4.83 4.91 4.91 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07A13.91 13.91 0 0 0 7.55 21c9.06 0 14.01-7.5 14.01-14 0-.21 0-.42-.01-.63A10.04 10.04 0 0 0 24 4.56z" />
                </svg>
              </a>
              <a href="#" aria-label="Whatsapp" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path d="M12 2.01C6.49 2.01 2 6.5 2 12c0 1.74.45 3.37 1.24 4.79L2 22l5.27-1.34A9.98 9.98 0 0 0 12 21.99c5.51 0 10-4.49 10-10s-4.49-9.98-10-9.98zm4.56 14.77c-.21.59-1.23 1.14-1.71 1.2-.46.05-.83.22-2.82-.58-2.39-.94-3.9-3.24-4.02-3.4-.12-.16-.96-1.28-.96-2.44 0-1.16.61-1.73.83-1.97.21-.24.46-.3.61-.3.15 0 .31.006.45.013.15.008.34-.056.53.406.2.46.67 1.56.73 1.67.06.12.1.24.02.4-.08.16-.12.27-.23.42-.12.16-.25.36-.36.48-.12.13-.25.26-.1.5.14.24.62 1 .9 1.36.3.35.64.53.88.67.23.13.37.12.51-.04.14-.16.57-.66.73-.89.16-.24.3-.18.5-.1.2.08 1.26.58 1.47.68.2.08.33.1.48.16.15.06.23.13.26.2.04.08.04.53-.17 1.12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
