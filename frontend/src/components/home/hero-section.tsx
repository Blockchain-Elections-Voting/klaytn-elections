/* eslint-disable @next/next/no-img-element */
/**
 * @since 2023/07/25
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

import TenLuaImage from '@/assets/tenlua.svg'
import TenLua2Image from '@/assets/tenlua2.svg'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen max-h-[1000px]" id="home">
      <div className="relative overflow-hidden h-full bg-indigo-900">
        <div className="container relative h-full z-10 mx-auto flex items-center px-6 py-24 md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className="font-mitr uppercase text-white">Voting</span>

            <h1 className="font-roboto-slab mt-4 text-4xl leading-tight text-red-400 sm:text-6xl">
              Let's go <br /> to the moon
            </h1>

            <div className="max-w-md">
              <p className="font-source-sans-pro mt-6 text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt cras sociis,
                parturient enim montes.
              </p>
            </div>

            <a
              href="#voting"
              className="font-mitr mt-10 block rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-white hover:bg-indigo-400"
            >
              Get started
            </a>
          </div>
          <img
            className="absolute bottom-0 right-0 -mr-40 hidden sm:block lg:mr-0"
            src={TenLuaImage.src}
          />
        </div>
        <img className="absolute bottom-0 left-0 h-full w-full" src={TenLua2Image.src} />
      </div>
    </div>
  )
}

export default HeroSection
