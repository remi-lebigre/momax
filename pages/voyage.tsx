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
  desc?: string
}
const markers: Record<string, MarkerProp> = {
  elgol: {
    coords: [-6.098889, 57.149276],
    name: 'Elgol',
    imgSrc: '/photos/map/elgol.png',
    desc: 'Un petit village de pêcheur qui offre la plus belle vue sur les Cuillings. De là, des bateaux partent afin de nous emmener dans un loch caché au cœur des montagnes.',
  },
  coralBeach: {
    coords: [-6.6371771, 57.5008642],
    name: 'Coral Beach',
    imgSrc: '/photos/map/coral_beach.png',
    desc: "L'écosse dites vous ? Le sable est blanc, l'eau est d'un bleu pétillant.. On se croirait presque en Corse ! (bon OK c'est pas la même météo...)",
  },
  lealtFalls: {
    coords: [-6.1557715, 57.5650034],
    name: 'Lealt Falls',
    imgSrc: '/photos/map/lealt_falls.png',
    desc: 'La plus belle cascade de Skye.',
  },
  lochAinort: {
    coords: [-6.0569444, 57.2802684],
    name: 'Loch Ainort',
    imgSrc: '/photos/map/loch_ainort.png',
    desc: "L'écosse dans toute sa splendeur: un grand loch bordé de montagnes.",
  },
  glenfinnan: {
    coords: [-5.4533769, 56.8702586],
    name: 'Glenfinnan',
    imgSrc: '/photos/map/glenfinnan.png',
    desc: 'Faites coucou au Poudlard Express ! 2h de marche avec une super vue sur le viaduc et le Loch pour les courageux ou  15mn depuis le parking pour juste le coucou au viaduc pour les petits marcheurs ! (passage du train à 15h)',
  },
  lochness: {
    coords: [-4.7884006, 57.2738948],
    name: 'Loch Ness',
    imgSrc: '/photos/map/nessie.webp',
    desc: "Le plus grand, le plus noir, le plus profond de toute l'écosse. Le monstre du Loch Ness et.... Beaucoup de canards !",
  },
  fairyPools: {
    coords: [-6.2604894, 57.250346],
    name: 'Fairy Pools',
    imgSrc: '/photos/map/fairy_pools.png',
    desc: "Un enchaînement de petite piscines à l'eau turquoise. Serez vous assez courageux pour y tremper les orteils ?",
  },
  oldManOfStorr: {
    coords: [-6.1830833, 57.5071111],
    name: 'Old Man of Storr',
    imgSrc: '/photos/map/old_man_of_storr.png',
    desc: 'Bienvenus au Mordor. Peut être y croiserez vous orcs et créatures en tout genre...',
  },
  quiraing: {
    coords: [-6.2009177, 57.4113507],
    name: 'Quiraing',
    imgSrc: '/photos/map/quiraing.png',
    desc: "Notre randonnée préférée de toute l'écosse. Après quelques heures de marche au cœur de la montagne, nous nous retrouvons seuls au monde face à un paysage à couper le souffle...",
  },
  fairyGlen: {
    coords: [-6.3273857, 57.5830434],
    name: 'Fairy Glen',
    imgSrc: '/photos/map/fairy_glen.png',
    desc: "Cet endroit représente à lui tout seul l'ambiance mystique de l'écosse. Il est hors du temps et cœur de beaucoup de légendes.",
  },
  neistPoint: {
    coords: [-6.7861143, 57.4221913],
    name: 'Neist Point',
    imgSrc: '/photos/map/neist_point.png',
    desc: "L'Ecosse ne serait pas l'Ecosse sans ses phares jaunes et celui là marque le point le plus à l'ouest du pays. Une balade magnifique le long de la côte.",
  },
  cuillingHills: {
    coords: [-6.1999671, 57.1999619],
    name: 'Cuilling Hills',
    imgSrc: '/photos/map/cuilling_hills.png',
    desc: "La plus belle chaîne de montagne de Skye mais aussi la plus dangereuse (interdit d'y randonner sans guide !)",
  },
  taliskerBay: {
    coords: [-6.4629976, 57.2838819],
    name: 'Talisker Bay',
    imgSrc: '/photos/map/talisker_bay.png',
    desc: "Un petit goût d'Islande avec cette plage où rochers et sables noirs rejoignent la mer...",
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
  const [desc, setDesc] = useState<string>('')
  const setDetails = (markerProp: MarkerProp) => {
    setPlace(markerProp.name)
    setImgSrc(markerProp.imgSrc)
    setDesc(markerProp.desc || '')
  }
  return (
    <Layout title={'Mariage Morgane & Maxime | Voyage'}>
      <Title>Voyage</Title>
      <Subtitle>Après la cérémonie...</Subtitle>
      <section className='mt-12 relative'>
        {place && (
          <div className='absolute left-0 bottom-0 md:bottom-auto md:top-4 md:left-4 p-4 w-[300px] h-auto border z-10 bg-beige rounded-lg'>
            <div className='text-lg'>{place}</div>
            {desc}
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
