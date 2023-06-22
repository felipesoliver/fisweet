import foldersIcon from '~/assets/icons/folders.png'
import wondIcon from '~/assets/icons/wond.png'
import heartIcon from '~/assets/icons/heart.png'

const icons = {
  1: foldersIcon,
  2: wondIcon,
  3: heartIcon,
}

export const data = {
  title: 'We are building software solution that solves your business challenges',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
  cards: [
    {
      title: 'Invoicing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      icon: {
        src: icons[1],
        width: 30,
        height: 30,
        alt: 'icon-1'
      },
    },
    {
      title: 'Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      icon: {
        src: icons[2],
        width: 30,
        height: 30,
        alt: 'icon-2'
      },
    },
    {
      title: 'Surveying',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
      icon: {
        src: icons[3],
        width: 30,
        height: 30,
        alt: 'icon-3'
      },
    },
  ]
}