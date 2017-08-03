import MenuContainer from '@/general/Menu'
import Hero from '~/home/Hero'

export default () => (
  <main>
    <MenuContainer />
    <Hero
      image='/static/img/home/hero.jpg'
      imageRetina='/static/img/home/hero@2x.jpg'
    />
  </main>
)
