import React from 'react'
import { IoBagCheckSharp, IoDocument } from "react-icons/io5";
import { LiaInternetExplorer } from "react-icons/lia";
import { FaHeadset, FaInstagram, FaPhone, FaShoppingBag, FaSimCard, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaBandage, FaMessage, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer grid grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-12 px-10 pt-10 bg-blue-900">

          <div className='col-span-12 md:col-span-3 mb-8 text-white'>
            <h1 className='text-xl font-bold'>Newtronic Solution</h1>
            <p className="pt-4 p-footer">
              Jl. Ciwulan No.28, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114
            </p>

            <h1 className='text-xl font-bold mt-4'>Jam Opersional</h1>
            <p className="pt-4 p-footer">
              Senin – Jum’at : 08.00 – 17.00 WIB
            </p>
          </div>
          <div className='col-span-12 md:col-span-2 mb-8 text-white'>
            <h1 className='text-xl font-bold'>Temukan Produk</h1>
            
            <div className='flex gap-2 pt-4 items-center'>
              <IoBagCheckSharp/>
              <p className="p-footer">
                Padi UMKM
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <LiaInternetExplorer/>
              <p className="p-footer">
                E-Katalog
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaWhatsapp/>
              <p className="p-footer">
                Marketing 1
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaWhatsapp/>
              <p className="p-footer">
                Marketing 2
              </p>
            </div>

          </div>
          <div className='col-span-12 md:col-span-2 mb-8 text-white'>
            <h1 className='text-xl font-bold'>Ikuti Kami</h1>
            <div className='flex gap-2 pt-4 items-center'>
              <FaFacebookF/>
              <p className="p-footer">
                Facebook
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaInstagram/>
              <p className="p-footer">
                Instagram
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaTwitter/>
              <p className="p-footer">
               Twitter
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaYoutube/>
              <p className="p-footer">
                Youtube
              </p>
            </div>
          </div>

          <div className='col-span-12 md:col-span-2 mb-8 text-white'>
            <h1 className='text-xl font-bold'>Link</h1>
            <div className='flex gap-2 pt-4 items-center'>
              <IoBagCheckSharp/>
              <p className="p-footer">
               Karir
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <IoDocument/>
              <p className="p-footer">
                Minta Penawaran
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaHeadset/>
              <p className="p-footer">
                Dukungan Teknis
              </p>
            </div>

          </div>
          <div className='col-span-12 md:col-span-3 mb-8 text-white'>
            <h1 className='text-xl font-bold'>Kontak</h1>
            
            <div className='flex gap-2 pt-4 items-center'>
              <FaPhone/>
              <p className="p-footer">
              +62 22 7234 248
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaSimCard/>
              <p className="p-footer">
              +62 22 7273 865
              </p>
            </div>

            <div className='flex gap-2 pt-4 items-center'>
              <FaMessage/>
              <p className="p-footer">
              info@newtronic-solution.com
              </p>
            </div>

          </div>
          <hr className="col-span-12" />
        </div>




        <div className=" grid grid-cols-1 md:grid-cols-2 bg-blue-900">
          <div className="px-10 pt-10 mb-0 md:mb-10">
            <img className='w-50 h-10' src="/newtroniclogo.png" alt="logowhite" />
          </div>
          <div className="flex justify-start px-10 md:justify-end gap-10 pr-10 pt-4 md:pt-10 text-white">
            <p className="p-footer">EDUTRONICS. All right reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
