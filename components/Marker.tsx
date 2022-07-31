import { FC, MouseEventHandler } from 'react'
import { Marker as MapboxMarker } from 'react-mapbox-gl'

interface MarkerProps {
  onClick: MouseEventHandler<HTMLDivElement>
  coordinates: [number, number]
}

const Marker: FC<MarkerProps> = ({ onClick, coordinates }) => (
  <MapboxMarker
    onClick={onClick}
    coordinates={coordinates}
    style={{
      cursor: 'pointer',
      background: '#42951e',
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      borderWidth: '1px',
      borderColor: 'white',
    }}
  />
)

export default Marker
