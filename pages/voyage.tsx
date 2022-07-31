import type { NextPage } from 'next'
import ReactMapboxGl from 'react-mapbox-gl'
import { useState } from 'react'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Marker from '../components/Marker'
import Image from '../components/Image'
import Subtitle from '../components/Subtitle'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicmVtcmVtcmVtIiwiYSI6ImNsNjlycXgybjA2Ymwzam4xb2tyYWd3a24ifQ.4F5tsLQ9Jxs9dC_XWJ8GaA',
})

interface MarkerProp {
  coords: [number, number]
  name: string
  imgSrc: string
}
const markers: Record<string, MarkerProp> = {
  elgol: {
    coords: [-6.098889, 57.149276],
    name: 'Elgol',
    imgSrc: '/photos/map/elgol.png',
  },
  coralBeach: {
    coords: [-6.6371771, 57.5008642],
    name: 'Coral Beach',
    imgSrc: '/photos/map/coral_beach.png',
  },
  lealtFalls: {
    coords: [-6.1557715, 57.5650034],
    name: 'Lealt Falls',
    imgSrc: '/photos/map/lealt_falls.png',
  },
  lochAinort: {
    coords: [-6.0569444, 57.2802684],
    name: 'Loch Ainort',
    imgSrc: '/photos/map/loch_ainort.png',
  },
  glenfinnan: {
    coords: [-5.4533769, 56.8702586],
    name: 'Glenfinnan',
    imgSrc: '/photos/map/glenfinnan.png',
  },
  lochness: {
    coords: [-4.7884006, 57.2738948],
    name: 'Loch Ness',
    imgSrc: '/photos/map/nessie.webp',
  },
  fairyPools: {
    coords: [-6.2604894, 57.250346],
    name: 'Fairy Pools',
    imgSrc: '/photos/map/fairy_pools.png',
  },
  oldManOfStorr: {
    coords: [-6.1830833, 57.5071111],
    name: 'Old Man of Storr',
    imgSrc: '/photos/map/old_man_of_storr.png',
  },
  quiraing: {
    coords: [-6.2009177, 57.4113507],
    name: 'Quiraing',
    imgSrc: '/photos/map/quiraing.png',
  },
  fairyGlen: {
    coords: [-6.3273857, 57.5830434],
    name: 'Fairy Glen',
    imgSrc: '/photos/map/fairy_glen.png',
  },
  neistPoint: {
    coords: [-6.7861143, 57.4221913],
    name: 'Neist Point',
    imgSrc: '/photos/map/neist_point.png',
  },
  cuillingHills: {
    coords: [-6.1999671, 57.1999619],
    name: 'Cuilling Hills',
    imgSrc: '/photos/map/cuilling_hills.png',
  },
  harryPotterStudios: {
    coords: [-0.4171846, 51.6929761],
    name: 'Harry Potter Studios',
    imgSrc: '/photos/map/harry_potter_studios.png',
  },
}
const VoyagePage: NextPage = () => {
  const [place, setPlace] = useState<string>()
  const [imgSrc, setImgSrc] = useState<string>('')
  const setDetails = (markerProp: MarkerProp) => {
    setPlace(markerProp.name)
    setImgSrc(markerProp.imgSrc)
  }
  return (
    <Layout title={'Mariage Morgane & Maxime | Voyage'}>
      <Title>Voyage</Title>
      <Subtitle>Après la cérémonie...</Subtitle>
      <section className='mt-12 relative'>
        {place && (
          <div className='absolute left-0 bottom-0 md:bottom-auto md:top-4 md:left-4 p-4 w-[300px] h-auto border z-10 bg-beige rounded-lg'>
            <div className='text-lg'>{place}</div>
            <div className='w-full h-[150px] md:h-[250px] relative mt-2'>
              <Image src={imgSrc} alt='marker photo' />
            </div>
          </div>
        )}
        <Map
          style='mapbox://styles/remremrem/cl69ru731001314n7qjwokfua'
          containerStyle={{
            height: '75vh',
            width: '100%',
          }}
          center={[-5.1068786, 56.6823902]}
          zoom={[6]}
        >
          {Object.values(markers).map((marker) => (
            <Marker
              key={marker.name}
              coordinates={marker.coords}
              onClick={() => setDetails(marker)}
            />
          ))}
        </Map>
      </section>
    </Layout>
  )
}

export default VoyagePage
