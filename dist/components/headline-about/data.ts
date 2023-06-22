import imageOne from '~/assets/images/headline-about-bg.png'
import imageTwo from '~/assets/images/services-tab1.png'
import imageThree from '~/assets/images/services-tab2.png'
import imageFour from '~/assets/images/services-tab3.png'
import ribbon from '~/assets/images/ribbon.png'

export const data = {
  title: 'The energy of a start-up combined with 30 years of experience.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.',
  bigNumbers: [
    {
      number: 15,
      title: 'Awards received',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
    {
      number: 500,
      title: 'Clients served',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
    },
  ],
  featuredImage: {
    src: imageOne,
    width: 638,
    height: 670,
    alt: 'headline-about-bg'
  },
  ribbon: {
    src: ribbon,
    width: 180,
    height: 180,
    alt: 'ribbon-image'
  },
  tabs: [
    {
      tabLabel: 'Business strategy',
      title: 'Helping clients with research and strategy for their business ',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p><p>Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.</p>',
      image: {
        src: imageTwo,
        width: 472,
        height: 466,
        alt: 'tab-image1'
      }
    },
    {
      tabLabel: 'Digitalization',
      title: 'We hired people who are very   about what they do ',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p><p>Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.</p>',
      image: {
        src: imageThree,
        width: 472,
        height: 466,
        alt: 'tab-image2'
      }
    },
    {
      tabLabel: 'Risk assessment',
      title: 'We serve clients with ground breaking solutions',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p><p>Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.</p>',
      image: {
        src: imageFour,
        width: 472,
        height: 466,
        alt: 'tab-image3'
      }
    },
  ],
}