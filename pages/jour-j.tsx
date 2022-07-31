import type { NextPage } from 'next'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Milestone from '../components/Milestone'
import Subtitle from '../components/Subtitle'
import Timeline from '../components/Timeline'
import Title from '../components/Title'

const CeremoniePage: NextPage = () => (
  <Layout title={'Mariage Morgane & Maxime | Cérémonie'}>
    <div className='w-full h-full'>
      <Title>Le jour J</Title>
      <Subtitle>16 août 2022 - St Mary&apos;s Space</Subtitle>
    </div>
    <section className='pt-8 flex justify-center'>
      <Timeline>
        <Milestone ampm={'am'} time={'8.30'}>
          On se fait beau (coiffures, maquillage...)
        </Milestone>
        <Milestone ampm={'pm'} time={'12'}>
          Vous êtes tout beau
        </Milestone>
        <Milestone ampm={'pm'} time={'12.30'}>
          First look
        </Milestone>
        <Milestone ampm={'pm'} time={'1'}>
          Départ pour Glencoe
        </Milestone>
        <Milestone ampm={'pm'} time={'1.45'}>
          Arrivée au parking
        </Milestone>
        <Milestone ampm={'pm'} time={'2'}>
          Cérémonie
        </Milestone>
        <Milestone ampm={'pm'} time={'2.30'}>
          Fin de la cérémonie – Photos de groupe
          <br />
          Cérémonie du bouquet
        </Milestone>
        <Milestone ampm={'pm'} time={'3'}>
          Photos de couple - les invités repartent à Mary’s Space
        </Milestone>
        <Milestone ampm={'pm'} time={'4'}>
          Vin d’honneur avec activité pour les invités
        </Milestone>
        <Milestone ampm={'pm'} time={'4.45'}>
          Les mariés arrivent à St Mary’s space
        </Milestone>
        <Milestone ampm={'pm'} time={'6'}>
          Fin du vin d’honneur – assoir les invités
        </Milestone>
        <Milestone ampm={'pm'} time={'6.15'}>
          Repas
        </Milestone>
        <Milestone ampm={'pm'} time={'8'}>
          Fin Repas
        </Milestone>
        <Milestone ampm={'pm'} time={'8.15'}>
          Ouverture de bal – Party time !
        </Milestone>
        <Milestone ampm={'pm'} time={'11'}>
          Les invités dégagent, consommation du mariage
        </Milestone>
      </Timeline>
    </section>

    <div className='w-full h-full pt-24 pb-8'>
      <Title>Le lendemain...</Title>
      <Subtitle>17 août 2022</Subtitle>
    </div>
    <section>
      <p className='text-center'>
        Brunch ensemble, visite de Glennfinnan (train d&apos;Harry Potter). Autres activités à
        déterminer !
      </p>
      <div className='flex justify-center'>
        <div className='relative w-[500px] h-[500px]'>
          <Image src='/photos/glenfinnan.png' alt="Photo d'Écosse" noLoadBg />
        </div>
      </div>
    </section>
  </Layout>
)

export default CeremoniePage
