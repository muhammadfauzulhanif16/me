import React, { type JSX } from 'react'
import { Avatar } from '@nextui-org/avatar'

const Home = (): JSX.Element => {
  return (
    <section className='flex flex-col justify-center items-center gap-20 p-16'>
      <Avatar
        src='https://bnz06pap001files.storage.live.com/y4mt4fAzEYOlzOBDp3Qj6o0qpQ_7VI65u5aG6RpvCzbcuhUPONA9KChw3WgXjq9hhZFd1vBfviUyIIId_VMmS0TScwKmqJHB6USzCozNRkr7kPwUGj8x3OoAP0togzrzYxEHGoO2Pe7F-G4rmj0XoRq-7Y_K8UcTyAsOl-fVtugS3UGfAn6LuO0D57o2qOsCLi_biHmwnaED5Blft7aej_rNmtn-4hljtNEU-DfpdrOG98?encodeFailures=1&width=206&height=206'
        className='w-60 h-60'
        radius='lg'
      />

      <div>
        <h1 className='text-8xl'>
          Hi,{' '}
          <span className='text-3xl'>
            I am Muhammad Fauzul Hanif and am a Full-Stack Web Developer
          </span>
        </h1>
      </div>
    </section>
  )
}

export default Home
