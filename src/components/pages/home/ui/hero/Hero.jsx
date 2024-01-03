import './Hero.scss'

function Hero() {
 return (
  <section className="hero" id="hero">
  <div className="wrapper hero__wrapper">
    <div className="glass hero__glass">
      <h1 className="hero__title hero__content">CRAFTSHARE</h1>
      <div className="hero__content">
        <p className="hero__text">
          Cервис для ремесленников и для тех, кто хочет научиться чему-то
          новому
        </p>
        <div className="search-bar_hero">
          <input className="search__input_hero" type="search" placeholder="Поиск" />
          <div className="search__icons_hero">
            <span className="icon search__icon_hero"></span>
          </div>
        </div>
        <div className="hero__tags">
          <div className="layout-2-columns hero__tags_layout">
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
            <div className="tag">
              <h3 className="tag__title">Изготовление мыла</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 )
}

export default Hero;