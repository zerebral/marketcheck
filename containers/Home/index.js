import MenuContainer from '@/general/Menu'

export default () => (
  <div className='home'>
    <MenuContainer />
    <style jsx>
      {`
      .home {
        min-height: 5000px;
        background-color: orange;
      }
    `}
    </style>
  </div>
)
