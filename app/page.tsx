"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, CheckCircle, Phone, ShieldCheck, Banknote, HardHat, FileText, ArrowRight, Menu, X } from 'lucide-react';

// --- TIPE DATA ---
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
}

// --- KOMPONEN TOMBOL ---
const Button = ({ children, className = "", onClick, variant = 'primary' }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer";
  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800 shadow-lg hover:shadow-green-500/30",
    outline: "border-2 border-white text-white hover:bg-white hover:text-green-900",
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- LOGO MPM CUSTOM (MIRIP ASLI) ---
const MPMLogo = ({ isFooter = false }) => (
  <div className="flex items-center gap-3">
    {/* Ikon Atap Rumah Stilasi */}
    <div className={`relative w-10 h-10 flex items-center justify-center border-2 rounded-lg ${isFooter ? 'border-white text-white' : 'border-green-800 text-green-800'}`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> 
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    </div>

    {/* Teks Logo */}
    <div className="flex flex-col justify-center h-full leading-none">
      <h1 className={`text-3xl font-black tracking-tighter ${isFooter ? 'text-white' : 'text-green-900'}`} style={{ fontFamily: 'Arial Black, sans-serif' }}>
        MPM
      </h1>
      <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isFooter ? 'text-gray-300' : 'text-green-700'}`}>
        PROPERTY
      </p>
    </div>
  </div>
);

export default function KarangMulyaLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  
  const specs = [
    { label: "Pondasi", value: "Batu Belah", icon: <ShieldCheck size={20} /> },
    { label: "Dinding", value: "Batako Press (Plester Aci + Cat)", icon: <Home size={20} /> },
    { label: "Kusen", value: "Kayu Ulin (Kelas 1)", icon: <TreeIcon /> }, 
    { label: "Rangka Atap", value: "Baja Ringan + Multi Roof", icon: <HardHat size={20} /> },
    { label: "Lantai", value: "Keramik 30x30 CM", icon: <CheckCircle size={20} /> },
    { label: "Listrik & Air", value: "900 Watt & PDAM", icon: <Banknote size={20} /> },
  ];

  const pricing = [
    { years: 10, monthly: "Rp 1.866.000" },
    { years: 15, monthly: "Rp 1.389.000" },
    { years: 20, monthly: "Rp 1.157.000" },
  ];

  const requirements = [
    "KTP Pemohon & Pasangan (Min 21th)",
    "Kartu Keluarga & NPWP",
    "Buku Nikah / Cerai / Ket. Belum Nikah",
    "Pas Foto & Rekening Koran 3 Bulan",
    "Slip Gaji & SK Kerja (Karyawan/PNS)"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm h-20 flex items-center transition-all duration-300">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            
            <MPMLogo />

            <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600">
              <a href="#home" className="hover:text-green-700 transition">Beranda</a>
              <a href="#specs" className="hover:text-green-700 transition">Spesifikasi</a>
              <a href="#price" className="hover:text-green-700 transition">Pricelist</a>
              <a href="#location" className="hover:text-green-700 transition">Lokasi</a>
            </div>

            <div className="hidden md:block">
                <button 
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-full font-bold text-sm transition shadow-lg shadow-green-700/20 flex items-center gap-2"
                >
                  <Phone size={16} /> Hubungi Kami
                </button>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-gray-600">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="absolute top-20 left-0 w-full bg-white border-b md:hidden overflow-hidden shadow-xl">
                    <div className="flex flex-col p-4 space-y-2">
                        <a onClick={closeMenu} href="#home" className="text-gray-700 font-bold p-3 hover:bg-green-50 rounded-lg">Beranda</a>
                        <a onClick={closeMenu} href="#specs" className="text-gray-700 font-bold p-3 hover:bg-green-50 rounded-lg">Spesifikasi</a>
                        <a onClick={closeMenu} href="#price" className="text-gray-700 font-bold p-3 hover:bg-green-50 rounded-lg">Pricelist</a>
                        <a onClick={closeMenu} href="#location" className="text-gray-700 font-bold p-3 hover:bg-green-50 rounded-lg">Lokasi</a>
                         <button onClick={() => window.open('https://wa.me/6281234567890', '_blank')} className="bg-green-700 text-white py-3 rounded-lg font-bold w-full mt-2">Chat WhatsApp</button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION (BACKGROUND RUMAH) --- */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image Fullscreen */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/rumah.jpeg" 
                alt="Background Rumah Karang Mulya" 
                className="w-full h-full object-cover"
                // Placeholder error handling
                onError={(e) => e.currentTarget.style.display = 'none'} 
            />
            {/* Overlay Gelap agar teks terbaca */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="max-w-2xl text-white"
            >
                <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-yellow-500/20 border border-yellow-400 text-yellow-300 text-xs font-bold tracking-wider mb-6 backdrop-blur-sm">
                    <StarIcon /> RUMAH SUBSIDI RASA KOMERSIL
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
                    Karang Mulya <br/><span className="text-green-400">Residence</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light leading-relaxed drop-shadow-md max-w-xl">
                    Wujudkan impian memiliki hunian <strong>Tipe 36</strong> dengan keistimewaan <span className="text-white font-bold underline decoration-green-500 decoration-4 underline-offset-4">Tanah Super Luas 120m²</span>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button>Lihat Simulasi KPR</Button>
                    <Button variant="outline">Cek Spesifikasi</Button>
                </div>

                {/* Info Cepat */}
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8 max-w-lg">
                    <div>
                        <p className="text-3xl font-bold">182<span className="text-sm font-normal text-gray-300">jt</span></p>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Harga Cash</p>
                    </div>
                    <div className="border-l border-white/20 pl-6">
                        <p className="text-3xl font-bold">120<span className="text-sm font-normal text-gray-300">m²</span></p>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Luas Tanah</p>
                    </div>
                    <div className="border-l border-white/20 pl-6">
                        <p className="text-3xl font-bold text-green-400">5<span className="text-sm font-normal text-gray-300">jt</span></p>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">DP All In</p>
                    </div>
                </div>
            </motion.div>

            {/* Badge Promo di Kanan Atas */}
            <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.5, type: "spring" }} 
                className="absolute top-24 right-4 md:top-32 md:right-10 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white transform rotate-12 z-20 text-yellow-900"
            >
                <p className="text-[10px] font-bold uppercase tracking-wider">Promo</p>
                <p className="text-xl md:text-2xl font-black leading-none">FREE</p>
                <p className="text-[10px] font-bold">BPHTB</p>
            </motion.div>
        </div>
      </section>

      {/* --- SPESIFIKASI --- */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Spesifikasi Bangunan</h2>
                <p className="text-gray-500 mt-2">Kualitas premium dengan material pilihan terbaik.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
                        <div className="p-3 bg-green-50 text-green-700 rounded-xl">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</h4>
                            <p className="text-lg font-bold text-gray-900 mt-1">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- DENAH --- */}
      <section id="denah" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
             {/* KIRI: FOTO DENAH */}
             <div className="relative p-8 bg-gray-100 rounded-[2.5rem]">
                 <div className="relative bg-white p-2 shadow-2xl border border-gray-200 rounded-xl transform -rotate-2 hover:rotate-0 transition duration-500">
                     <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden rounded-lg">
                        <img src="/denah.jpeg" alt="Denah" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.opacity = '0'} />
                        <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-gray-400 -z-10">
                            FOTO DENAH BELUM ADA<br/>(denah.jpeg)
                        </div>
                     </div>
                 </div>
             </div>

             {/* KANAN: INFO DENAH */}
             <div className="text-center lg:text-left">
                 <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Denah Tanah Luas</h2>
                 <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-lg font-bold mb-6">
                    Tipe 36 / LT 120m² (8 x 15 Meter)
                 </div>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                     Desain tata ruang yang optimal. Nikmati <strong>sisa tanah belakang yang sangat luas</strong>, bisa untuk pengembangan dapur, taman asri, atau kamar tambahan di masa depan.
                 </p>
                 <ul className="space-y-3 text-left max-w-sm mx-auto lg:mx-0">
                     <li className="flex items-center gap-3 text-gray-700">
                         <CheckCircle size={20} className="text-green-500" /> 2 Kamar Tidur Nyaman
                     </li>
                     <li className="flex items-center gap-3 text-gray-700">
                         <CheckCircle size={20} className="text-green-500" /> 1 Kamar Mandi
                     </li>
                     <li className="flex items-center gap-3 text-gray-700">
                         <CheckCircle size={20} className="text-green-500" /> Halaman Belakang Luas
                     </li>
                 </ul>
             </div>
        </div>
      </section>

      {/* --- HARGA --- */}
      <section id="price" className="py-20 bg-green-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-4xl font-bold mb-6">Penawaran Spesial</h2>
                     <p className="text-green-100 text-lg mb-8">
                         Miliki rumah impian dengan cicilan ringan flat sampai lunas. Subsidi pemerintah untuk keluarga sejahtera.
                     </p>
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                         <div className="flex justify-between items-center mb-4">
                             <span className="text-green-200">Harga Cash</span>
                             <span className="text-3xl font-bold">Rp 182 Juta</span>
                         </div>
                         <div className="w-full h-px bg-white/20 mb-4"></div>
                         <div className="flex justify-between items-center">
                             <span className="text-green-200">Uang Muka (DP)</span>
                             <span className="text-2xl font-bold text-yellow-400">Rp 5 Juta</span>
                         </div>
                     </div>
                 </div>

                 <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
                     <h3 className="text-xl font-bold mb-6 text-center">Simulasi Angsuran KPR</h3>
                     <div className="space-y-4">
                         {pricing.map((plan, idx) => (
                             <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                 <span className="font-bold text-gray-600">{plan.years} Tahun</span>
                                 <span className="font-bold text-green-700 text-lg">{plan.monthly}</span>
                             </div>
                         ))}
                     </div>
                     <p className="text-xs text-gray-400 text-center mt-6">*Syarat & Ketentuan Berlaku. Suku Bunga Flat 5%.</p>
                     
                     <div className="mt-8">
                        <h4 className="font-bold text-sm mb-4">Persyaratan Dokumen:</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            {requirements.slice(0,3).map((req, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-green-500">•</span> {req}
                                </li>
                            ))}
                            <li className="text-green-600 font-semibold cursor-pointer text-xs">+ Lihat selengkapnya...</li>
                        </ul>
                     </div>

                     <button 
                        onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                        className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-4 rounded-xl mt-8 transition shadow-lg"
                     >
                         Ajukan KPR Sekarang
                     </button>
                 </div>
             </div>
         </div>
      </section>

      {/* --- LOKASI --- */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lokasi Strategis</h2>
            
            <div className="bg-white p-4 rounded-3xl shadow-xl">
                <div className="h-80 w-full bg-gray-200 rounded-2xl overflow-hidden relative mb-6">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        title="Lokasi"
                        src="https://maps.google.com/maps?q=Bank+BNI+Karang+Mulya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full absolute inset-0"
                    ></iframe>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center px-4 pb-4">
                    <div className="text-left mb-4 md:mb-0">
                        <h4 className="font-bold text-xl text-gray-900">Jl. A. Yani Km.68</h4>
                        <p className="text-gray-500">Ds. Karang Mulya (Seberang Bank BNI)</p>
                    </div>
                    <button 
                        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Bank+BNI+Karang+Mulya', '_blank')}
                        className="bg-green-100 hover:bg-green-200 text-green-800 font-bold py-3 px-6 rounded-xl transition flex items-center gap-2"
                    >
                        <MapPin size={18} /> Buka Google Maps
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-200 text-center">
          <div className="flex justify-center mb-6">
             <MPMLogo />
          </div>
          <p className="text-gray-500 text-sm">
             Jl. A. Yani Km.68, Karang Mulya, Pangkalan Bun.<br/>
             © 2025 MPM Property. All rights reserved.
          </p>
      </footer>
    </div>
  );
}

// --- SUB KOMPONEN ICON ---
function TreeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19v-9"/><path d="M10 10l2-2 2 2"/><path d="M8 14l4-4 4 4"/><path d="M6 18l6-6 6 6"/><path d="M12 19h.01"/></svg>;
}
function StarIcon() { 
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>; 
}