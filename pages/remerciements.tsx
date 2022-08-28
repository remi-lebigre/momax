import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Image from '../components/Image'
import Subtitle from '../components/Subtitle'

const RemerciementsPage: NextPage = () => {
  return (
    <Layout title={'Mariage Morgane & Maxime | Remerciements'}>
      <Title>Remerciements</Title>
      <section className='mt-12 relative'>
        <div className='mx-auto max-w-[600px] mb-12'>
          <p className='mb-4'>
            Chers tous,
            <br />
            Quoi dire.
            <br />
            Merci. Merci pour tout. Merci de nous avoir suivi dans notre folie et dans notre rêve.
            <br />
            Merci pour ces EVJF et EVG incroyables, merci pour toute l&apos;aide que l&apos;on a pu
            avoir pendant ces 2 ans d&apos;organisation, merci d&apos;avoir débloqué un PEL, merci
            d&apos;avoir bravé les grèves de train, merci d&apos;avoir pris un taxis à 7h du matin,
            merci d&apos;avoir supporté le stress de Mo et celui de Skye pendant 3 jours, merci
            avoir tout filmé, tout photographié, merci pour les sourires, merci pour avoir prêté vos
            voitures, merci pour l&apos;entraide, pour la bienveillance, pour les câlins, merci
            d&apos;avoir bravé la tempête pendant la rando et de l&apos;avoir pris avec le sourire,
            merci pour vos yeux émerveillés, pour vos compliments, merci pour TOUTES CES PUTAINS DE
            SURPRISES, pour les meilleurs discours du monde, merci pour la plus belle des
            cérémonies, merci pour les soirées musique, pour les œufs brouillés, pour les pâtes
            carbo, pour cette team de camping qui tue toute les teams de camping, merci pour tous
            ces liens que vous avez créés ensemble, pour ces nouvelles amitiés, merci pour les
            pizzas, les courses, les prises de décisions... Il y aurait encore des milliers
            d&apos;autres merci à dire.
          </p>
          <p className='mb-4'>
            Cette liste d&apos;invités a été la chose la plus naturelle que l&apos;on ai fait pour
            ce mariage, la présence de chacun d&apos;entre vous a été une évidence. Si vous étiez là
            pour en ce jour si particulier, c&apos;est qu&apos;à aucun moment nous n&apos;imaginons
            notre futur sans vous. Les teams weddings ont été elles aussi construites avec amour,
            nous n&apos;aurions pas pu faire de meilleur choix.
          </p>
          <p className='mb-4'>
            De ce voyage, nous ne retiendrons que de choses merveilleuses et nous espérons que vous
            aussi. C&apos;était un paris de mêler 26 personnes aux caractères, rythmes de vies,
            visions du voyage si différents mais vous en avez fait quelque chose de beau. Alors
            malgré les tentes effondrées, les culottes mouillées, les marches un peu trop longues,
            les Pubs pas trouvés assez vite, les repas parfois sautés ou les petits désaccords, nous
            espérons vraiment que vous garderez à ce voyage une place toute particulière dans vos
            cœurs, comme il en a déjà une dans le notre.
          </p>
          <p className='mb-4'>
            C&apos;etait important pour nous que vous voyiez l&apos;Écosse, que vous compreniez
            notre amour pour ce pays. C&apos;est si important pour nous que vous ayez accepté cette
            aventure.
          </p>
          <p className='mb-4'>
            Merci pour tout votre amour. Il est immense, il brillera à jamais dans nos cœurs. Vous
            êtes exceptionnels, vous êtes fous, vous êtes notre famille.
          </p>
          <p className='mb-4'>
            On se revoit tous le 18 septembre, pour partager encore de beaux moments.
          </p>
          <p className='mb-4'>
            On vous aime d&apos;une façon indescriptible.
            <br />
            Momax
          </p>
        </div>

        <div className='relative aspect-[2] w-full'>
          <Image
            src='/photos/cul_de_jr.jpeg'
            alt='Cérémonie de mariage Morgane et Maxime depuis les three sisters'
          />
        </div>
      </section>
    </Layout>
  )
}

export default RemerciementsPage
