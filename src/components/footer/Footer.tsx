import { MapPin, Phone, MessageCircle } from "lucide-react";
// import QRCode from "react-qr-code";

export default function Footer() {
  return (
    <footer className="bg-white backdrop-blur-md py-8  bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Welcome Luggage & Repairing Center
            </h3>
            <p className="text-gray-600 mt-2">
              Your one-stop shop for repairs and sales on wholesale price.
            </p>
            <div>
              <h3 className="text-lg mt-10 font-semibold text-gray-800">
                Contact Us
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <MapPin size={20} />
                  G.B Road Infront Of Sony Optical Gaya Bihar
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={20} />
                  <a href="tel:+9194305836">+91 9430965836</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <a href="https://wa.me/9430965836">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Google Maps
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.724167301735!2d85.00585077536883!3d24.79609907797135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b30ac38c101%3A0xe819c1eb6ae9ec9a!2sWelcome%20Trolley%20Repairing%20Center!5e1!3m2!1sen!2sin!4v1757327240962!5m2!1sen!2sin"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Welcome Luggage & Repairing Center.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
