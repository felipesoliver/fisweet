import servicesCardOne from '~/assets/images/services-card1.png'
import servicesCardTwo from '~/assets/images/services-card2.png'
import servicesCardThree from '~/assets/images/services-card3.png'

const pics = {
  1: servicesCardOne,
  2: servicesCardTwo,
  3: servicesCardThree,
}

export const data = {
  title: 'Latest Blog & News',
  cards: [
    {
      title: 'Why you have to digitalize in 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      image: {
        src: pics[1],
        width: '400',
        height: '242',
        alt: 'img-1',
      },
      cta: {
        url: '/blog/post-example',
      }
    },
    {
      title: 'Our internal process and longerm vision',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      image: {
        src: pics[2],
        width: '400',
        height: '242',
        alt: 'img-2',
      },
      cta: {
        url: '/blog/post-example',
      }
    },
    {
      title: 'Helping the next generation of leaders',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.',
      image: {
        src: pics[3],
        width: '400',
        height: '242',
        alt: 'img-3',
      },
      cta: {
        url: '/blog/post-example',
      }
    },
  ]
}