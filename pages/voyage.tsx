import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

const VoyagePage: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime | Voyage'}>
      <div className='w-full h-full'>
        <Title>Voyage</Title>

        <Subtitle>Aller</Subtitle>

        <iframe className='max-w-full' src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d4905939.643016482!2d-5.837750922327502!3d53.32051107557202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!3m2!1d48.856614!2d2.3522219!4m5!1s0x47d94ac50d832c89%3A0x9ef1e5533783f98a!2sCanterbury%2C%20UK!3m2!1d51.280232999999996!2d1.0789089!4m5!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds%2C%20United%20Kingdom!3m2!1d53.8007554!2d-1.5490773999999998!4m5!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2zw4lkaW1ib3VyZywgVUs!3m2!1d55.953252!2d-3.1882669999999997!4m5!1s0x48894779f2ced977%3A0x2624eb26e9a9541c!2sSt%20Mary&#39;s%20Space%2C%20St.%20Mary&#39;s%2C%20Fasnacloich%2C%20Appin%20PA38%204BJ%2C%20UK!3m2!1d56.565719699999995!2d-5.2424202!5e0!3m2!1sen!2sfr!4v1657817629257!5m2!1sen!2sfr" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        <Subtitle>Visite</Subtitle>

        <iframe className='max-w-full' src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d554857.796357454!2d-6.063689271796016!3d57.09579420945616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x48894779f2ced977%3A0x2624eb26e9a9541c!2sSt%20Mary&#39;s%20Space%2C%20St.%20Mary&#39;s%2C%20Fasnacloich%2C%20Appin%20PA38%204BJ%2C%20United%20Kingdom!3m2!1d56.565719699999995!2d-5.2424202!4m5!1s0x488eb3c93538a1b5%3A0xf7b37f55e33e3fe7!2sGlenfinnan%20Viaduct%2C%20A830%20Rd%2C%20Glenfinnan%2C%20UK!3m2!1d56.8762172!2d-5.4317589!4m5!1s0x488f16c34da23729%3A0xd4d749cbf4fe912f!2sLoch%20Ness%2C%20United%20Kingdom!3m2!1d57.3228575!2d-4.4243818!4m5!1s0x488e618b4e88b1f1%3A0x61bb8e8840f4772e!2sTorridon%2C%20Achnasheen%2C%20UK!3m2!1d57.5468767!2d-5.5133569!4m5!1s0x488c312261bdc1ff%3A0x585c356fe9c86218!2sSkye%2C%20United%20Kingdom!3m2!1d57.2736278!2d-6.2155023!4m5!1s0x488dcd47018d8697%3A0x69288a895e431915!2sOld%20Man%20of%20Storr%2C%20Portree%2C%20UK!3m2!1d57.507111099999996!2d-6.1830833!4m5!1s0x488dcf0db7ac6bdb%3A0x81b757292026e587!2sQuiraing%2C%20Portree%2C%20UK!3m2!1d57.643611!2d-6.2652779999999995!4m5!1s0x488dc95be6a52dfb%3A0x10e8d016953c6958!2sThe%20Fairy%20Glen%2C%20Uig%2C%20Portree%2C%20UK!3m2!1d57.5841079!2d-6.332116!4m5!1s0x488c5483bc1702b9%3A0x78f53e09e127bc23!2sNeist%20Point%20Lighthouse%2C%20Isle%20of%20Skye%2C%20UK!3m2!1d57.423460899999995!2d-6.788262!4m5!1s0x488c3c191f4b0fbd%3A0x575237d7e2674d9e!2sCuillin%20Hills%2C%20Isle%20of%20Skye%2C%20UK!3m2!1d57.1999619!2d-6.199967099999999!5e0!3m2!1sen!2sfr!4v1657818042493!5m2!1sen!2sfr" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <Subtitle>Retour</Subtitle>

        <iframe className='max-w-full' src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d4919809.02320618!2d-6.147560753451797!3d52.97989614919166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x488c3c191f4b0fbd%3A0x575237d7e2674d9e!2sCuillin%20Hills%2C%20Isle%20of%20Skye%2C%20UK!3m2!1d57.1999619!2d-6.199967099999999!4m5!1s0x487ce1df3eee6b0f%3A0x5c0a43b6ba15682d!2sCarlisle%2C%20UK!3m2!1d54.892472999999995!2d-2.932931!4m5!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!3m2!1d51.5072178!2d-0.12758619999999998!4m5!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!3m2!1d48.856614!2d2.3522219!5e0!3m2!1sen!2sfr!4v1657818100647!5m2!1sen!2sfr" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </Layout>
  )
}

export default VoyagePage
