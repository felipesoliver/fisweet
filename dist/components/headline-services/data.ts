import servicesCardOne from '~/assets/images/services-card1.png'
import servicesCardTwo from '~/assets/images/services-card2.png'
import servicesCardThree from '~/assets/images/services-card3.png'

const pics = {
  1: servicesCardOne,
  2: servicesCardTwo,
  3: servicesCardThree,
}

export const data = {
  title: 'We help more than 1500 companies from all sectors',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
  cards: [
    {
      title: 'Business strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      image: {
        src: pics[1],
        width: '400',
        height: '242',
        alt: 'img-1',
      },
      cta: {
        url: '/services',
      }
    },
    {
      title: 'Digitalization',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      image: {
        src: pics[2],
        width: '400',
        height: '242',
        alt: 'img-2',
      },
      cta: {
        url: '/services',
      }
    },
    {
      title: 'Risk assessment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      image: {
        src: pics[3],
        width: '400',
        height: '242',
        alt: 'img-3',
      },
      cta: {
        url: '/services',
      }
    },
  ]
}