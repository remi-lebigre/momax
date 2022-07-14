import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import Milestone from '../components/Milestone'
import Subtitle from '../components/Subtitle'
import Timeline from '../components/Timeline'
import Title from '../components/Title'


const CeremoniePage: NextPage = () => (
  <Layout title={'Mariage Morgane & Maxime | Cérémonie'}>
    <div className='w-full h-full'>
      <Title>Cérémonie</Title>
      <Subtitle>16 août 2022 - St Mary&apos;s space</Subtitle>
    </div>
    <section className='pt-8'>
      <Timeline>
        <Milestone ampm={'am'} time={'8.30'}>Coiffure invite 1 + maquillage invite 2</Milestone>
        <Milestone ampm={'am'} time={'9.15'}>Coiffure invité 2 + maquillage invité 1</Milestone>
        <Milestone ampm={'am'} time={'10'}>Coiffure Morgane + maquillage invité 3</Milestone>
        <Milestone ampm={'am'} time={'11'}>Coiffure invité 4 + maquillage Morgane</Milestone>
        <Milestone ampm={'pm'} time={'12'}>Coiffure invité 3 + maquillage invité 4 – Habillage Morgane – Dylan arrive</Milestone>
        <Milestone ampm={'pm'} time={'12.30'}>Coiffure maman – First look</Milestone>
        <Milestone ampm={'pm'} time={'1'}>Départ</Milestone>
        <Milestone ampm={'pm'} time={'1.45'}>Alan et Grant sont au parking</Milestone>
        <Milestone ampm={'pm'} time={'2'}>Cérémonie</Milestone>
        <Milestone ampm={'pm'} time={'2.30'}>Fin de la cérémonie – Photos de groupe</Milestone>
        <Milestone ampm={'pm'} time={'3'}>Photos de couple - les invités repartent à Mary’s Space</Milestone>
        <Milestone ampm={'pm'} time={'4'}>Morgane et Maxime partent de Glencoe vers Mary’s Space - Vin d’honneur avec activité pour les invités</Milestone>
        <Milestone ampm={'pm'} time={'4.45'}>Morgane et Maxime arrivent à St Mary’s space</Milestone>
        <Milestone ampm={'pm'} time={'6'}>Fin du vin d’honneur – assoir les invités</Milestone>
        <Milestone ampm={'pm'} time={'6.15'}>Repas – entrée</Milestone>
        <Milestone ampm={'pm'} time={'7'}>Plat</Milestone>
        <Milestone ampm={'pm'} time={'7.45'}>Dessert</Milestone>
        <Milestone ampm={'pm'} time={'8.15'}>Ouverture de bal – Party time ! Dylan repart.</Milestone>
        <Milestone ampm={'pm'} time={'11'}>Shhhh...</Milestone>
      </Timeline>
    </section>
  </Layout >
)

export default CeremoniePage
