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
    primary: "bg-green-800 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/30 border border-green-800",
    outline: "border-2 border-green-800 text-green-800 hover:bg-green-50",
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function KarangMulyaLanding() {
  // State untuk Menu Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Tutup menu saat link diklik
  const closeMenu = () => setIsMobileMenuOpen(false);
  
  // DATA SPESIFIKASI
  const specs = [
    { label: "Pondasi", value: "Batu Belah", icon: <ShieldCheck size={20} /> },
    { label: "Dinding", value: "Batako Press (Plester Aci + Cat)", icon: <Home size={20} /> },
    { label: "Kusen", value: "Kayu Ulin (Kelas 1)", icon: <TreeIcon /> }, 
    { label: "Rangka Atap", value: "Baja Ringan + Multi Roof", icon: <HardHat size={20} /> },
    { label: "Lantai", value: "Keramik 30x30 CM", icon: <CheckCircle size={20} /> },
    { label: "Listrik & Air", value: "900 Watt & PDAM", icon: <Banknote size={20} /> },
  ];

  // DATA HARGA
  const pricing = [
    { years: 10, monthly: "Rp 1.866.000" },
    { years: 15, monthly: "Rp 1.389.000" },
    { years: 20, monthly: "Rp 1.157.000" },
  ];

  // SYARAT
  const requirements = [
    "KTP Pemohon & Pasangan (Min 21th)",
    "Kartu Keluarga & NPWP",
    "Buku Nikah / Cerai / Ket. Belum Nikah",
    "Pas Foto & Rekening Koran 3 Bulan",
    "Slip Gaji & SK Kerja (Karyawan/PNS)"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- NAVBAR RESPONSIF --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-700 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold">M</div>
              <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">MPM<span className="text-green-700">Property</span></span>
            </div>

            {/* Desktop Menu (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#home" className="hover:text-green-700 transition">Beranda</a>
              <a href="#specs" className="hover:text-green-700 transition">Spesifikasi</a>
              <a href="#price" className="hover:text-green-700 transition">Pricelist</a>
              <a href="#location" className="hover:text-green-700 transition">Lokasi</a>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:block">
                <Button onClick={() => window.open('https://wa.me/6281234567890', '_blank')}>
                <Phone size={18} className="mr-2"/> Hubungi Kami
                </Button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-600 hover:text-green-700 focus:outline-none">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Muncul saat diklik) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                >
                    <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
                        <a onClick={closeMenu} href="#home" className="block text-base font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md">Beranda</a>
                        <a onClick={closeMenu} href="#specs" className="block text-base font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md">Spesifikasi</a>
                        <a onClick={closeMenu} href="#price" className="block text-base font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md">Pricelist</a>
                        <a onClick={closeMenu} href="#location" className="block text-base font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md">Lokasi</a>
                        <div className="pt-4">
                            <Button className="w-full justify-center" onClick={() => window.open('https://wa.me/6281234567890', '_blank')}>
                                <Phone size={18} className="mr-2"/> Chat WhatsApp
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold tracking-wider mb-6 border border-yellow-200">
              <StarIcon /> RUMAH SUBSIDI RASA KOMERSIL
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Wujudkan <span className="text-green-700">Rumah Impian</span> Keluarga Anda!
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>Karang Mulya Residence</strong> menawarkan hunian subsidi Tipe 36 dengan <span className="bg-green-100 text-green-800 font-bold px-1">Tanah Super Luas 120m²</span>. 
              Kualitas bangunan kokoh dengan kusen Kayu Ulin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>Lihat Simulasi KPR</Button>
              <Button variant="outline">Download Brosur</Button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center lg:justify-start gap-4 md:gap-8 text-center lg:text-left">
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">182<span className="text-sm font-normal text-gray-500">jt</span></p>
                    <p className="text-xs text-gray-400 uppercase font-semibold mt-1">Harga Cash</p>
                </div>
                <div className="w-px bg-gray-200 h-12 hidden md:block"></div>
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">120<span className="text-sm font-normal text-gray-500">m²</span></p>
                    <p className="text-xs text-gray-400 uppercase font-semibold mt-1">Luas Tanah</p>
                </div>
                <div className="w-px bg-gray-200 h-12 hidden md:block"></div>
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-green-700">1<span className="text-sm font-normal text-gray-500">jt-an</span></p>
                    <p className="text-xs text-gray-400 uppercase font-semibold mt-1">Angsuran</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative mt-8 lg:mt-0"
          >
            {/* Frame Foto Rumah Responsif */}
            <div className="rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-white bg-gray-200 h-[300px] sm:h-[400px] lg:h-[450px] relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-medium text-center p-4 text-sm md:text-base">
                    SIMPAN FOTO RUMAH DARI BROSUR<br/>KE FOLDER public DENGAN NAMA rumah.jpeg
                </div>
                <img src="/rumah.jpeg" alt="Foto Rumah Karang Mulya" className="w-full h-full object-cover absolute inset-0" onError={(e) => e.currentTarget.style.display = 'none'} />

                {/* Badge Promo */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-red-600 text-white p-2 md:p-3 rounded-xl shadow-lg text-center transform rotate-12 group-hover:rotate-0 transition-all duration-300 z-10">
                    <p className="text-[10px] md:text-xs font-bold uppercase">Promo</p>
                    <p className="font-bold text-sm md:text-lg leading-none">FREE</p>
                    <p className="text-[8px] md:text-[10px]">BPHTB</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SPESIFIKASI & DENAH --- */}
      <section id="specs" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Kolom Kiri: Denah */}
                <div className="order-2 lg:order-1">
                    <div className="bg-green-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Denah Rumah Luas</h3>
                            <p className="text-green-100 mb-6 md:mb-8 text-sm md:text-base">Tipe 36 / 120 m² (8 x 15 Meter)</p>
                            
                            {/* FOTO DENAH */}
                            <div className="rounded-xl overflow-hidden border-4 border-white/20 shadow-lg relative bg-white/5 aspect-[3/4] md:aspect-auto">
                                <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-xs md:text-sm text-white/60">
                                    <p>PASTIKAN FILE <strong>denah.jpeg</strong> SUDAH ADA DI FOLDER <strong>public</strong></p>
                                </div>
                                <img
                                    src="/denah.jpeg" 
                                    alt="Denah Rumah Tipe 36/120"
                                    className="w-full h-full object-cover relative z-10"
                                    onError={(e) => e.currentTarget.style.opacity = '0'}
                                />
                            </div>
                            <p className="text-center text-xs mt-4 text-green-200">*Ilustrasi denah sesuai gambar.</p>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Detail Specs */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Bahan Dasar Kuat & Kokoh</h2>
                    <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                        Kami mengutamakan kualitas jangka panjang. Tidak seperti rumah subsidi biasa, kami menggunakan <strong>Kayu Ulin</strong> (Kayu Besi) yang tahan rayap dan cuaca.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {specs.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
                                <div className="p-2 bg-green-50 text-green-700 rounded-lg flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</h4>
                                    <p className="font-semibold text-sm md:text-base text-gray-900">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- HARGA & PERSYARATAN --- */}
      <section id="price" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Penawaran Harga Subsidi</h2>
                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500">Cicilan ringan flat sampai lunas. Wujudkan rumah sendiri dengan modal DP terjangkau.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Card Harga */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
                    <div className="bg-gray-900 p-6 md:p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-sm opacity-80">Harga Unit</p>
                            <p className="text-2xl md:text-3xl font-bold">Rp 182.000.000</p>
                        </div>
                        <div className="text-left sm:text-right">
                            <p className="text-sm opacity-80">Uang Muka (DP)</p>
                            <p className="text-lg md:text-xl font-bold text-green-400">Rp 5.000.000</p>
                        </div>
                    </div>
                    
                    {/* Container Tabel dengan Scroll Horizontal di Mobile */}
                    <div className="p-6 md:p-8 overflow-x-auto">
                        <table className="w-full min-w-[300px]">
                            <thead>
                                <tr className="text-left border-b border-gray-100">
                                    <th className="pb-4 text-gray-500 font-medium text-sm md:text-base">Tenor (Tahun)</th>
                                    <th className="pb-4 text-gray-500 font-medium text-sm md:text-base">Angsuran / Bulan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {pricing.map((plan, idx) => (
                                    <tr key={idx}>
                                        <td className="py-3 md:py-4 font-bold text-gray-900 text-sm md:text-base">{plan.years} Tahun</td>
                                        <td className="py-3 md:py-4 font-bold text-green-700 text-base md:text-lg">{plan.monthly}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-6 p-4 bg-blue-50 text-blue-800 text-xs md:text-sm rounded-xl flex gap-3 items-start">
                           <FileText size={20} className="flex-shrink-0 mt-0.5"/>
                           <p>Harga sudah termasuk IMB, Listrik 900 Watt, dan Air PDAM. Angsuran Flat 5%.</p>
                        </div>
                    </div>
                </div>

                {/* Card Syarat */}
                <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200 h-fit">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-4 md:mb-6">Syarat & Ketentuan</h3>
                    <ul className="space-y-3 md:space-y-4">
                        {requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                                {req}
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-6 md:mt-8 text-sm md:text-base" onClick={() => window.open('https://wa.me/6281234567890', '_blank')}>
                        Ajukan Sekarang <ArrowRight size={16} className="ml-2"/>
                    </Button>
                </div>
            </div>

            {/* Logo Bank Support */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100 text-center">
                <p className="text-xs md:text-sm text-gray-400 mb-6 font-semibold uppercase tracking-widest">Didukung Oleh</p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-bold text-lg md:text-xl text-blue-900">BTN</span>
                    <span className="font-bold text-lg md:text-xl text-red-600">Bank Kalteng</span>
                    <span className="font-bold text-lg md:text-xl text-orange-500">BNI</span>
                    <span className="font-bold text-lg md:text-xl text-teal-600">BSI</span>
                    <span className="font-bold text-lg md:text-xl text-blue-800">Mandiri</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- LOKASI (MAPS BERSIH TANPA TOMBOL) --- */}
      <section id="location" className="py-16 lg:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lokasi Strategis</h2>
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-2xl mx-auto">
                Terletak di jalur utama Pangkalan Bun - Sampit. Akses mudah, tepat di seberang Bank BNI Karang Mulya.
            </p>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                <div className="grid md:grid-cols-2">
                    
                    {/* BAGIAN KIRI: MAPS BERSIH */}
                    <div className="h-64 md:h-auto bg-gray-200 relative">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            title="Lokasi Karang Mulya Residence"
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0} 
                            // Maps Bersih ke Bank BNI Karang Mulya
                            src="https://maps.google.com/maps?q=Bank+BNI+Karang+Mulya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            style={{ minHeight: '100%', border: 0 }}
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* BAGIAN KANAN: DETAIL ALAMAT */}
                    <div className="p-6 md:p-8 text-left flex flex-col justify-center">
                        <div className="mb-6">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                                <MapPin className="text-red-500" size={20}/> Alamat Lengkap
                            </h4>
                            <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
                                <strong>Jl. A. Yani Km.68</strong><br/>
                                (Komplek Ruko Seberang Bank BNI)<br/>
                                Desa Karang Mulya, Kec. Pangkalan Banteng,<br/>
                                Kotawaringin Barat.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600 font-bold text-[10px] md:text-xs">3 MIN</div>
                                <span className="text-xs md:text-sm font-medium text-gray-600">Ke Polsek Pangkalan Banteng</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold text-[10px] md:text-xs">1 MIN</div>
                                <span className="text-xs md:text-sm font-medium text-gray-600">Ke Bank BNI (Seberang Jalan)</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                <div className="bg-orange-100 p-2 rounded-full text-orange-600 font-bold text-[10px] md:text-xs">DEKAT</div>
                                <span className="text-xs md:text-sm font-medium text-gray-600">Ke Pasar Karang Mulya</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 md:mt-8">
                             <Button 
                                className="w-full justify-center bg-white border-2 border-green-700 text-green-700 hover:bg-green-50 text-sm md:text-base"
                                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Bank+BNI+Karang+Mulya', '_blank')}
                             >
                                <MapPin size={18} className="mr-2"/> Buka Google Maps
                             </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight">MPM Property</h4>
                <p className="text-gray-400 text-xs md:text-sm mt-2">Pangkalan Bun, Kalimantan Tengah</p>
            </div>
            <div className="text-gray-500 text-xs md:text-sm">
                &copy; 2025 MPM Property. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB KOMPONEN KECIL ---

function TreeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19v-9"/><path d="M10 10l2-2 2 2"/><path d="M8 14l4-4 4 4"/><path d="M6 18l6-6 6 6"/><path d="M12 19h.01"/></svg>
    )
}

function StarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
}