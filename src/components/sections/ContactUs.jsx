function ContactUS() {
    return (
        <section className="contact-us" id="contact-us">
      <div className="wrapper contact-us__wrapper ">
        <div className="contact-us__content">
          <h2 className="contact-us__title">
            Напишите нам. <br />Мы будем рады вашему письму!
          </h2>
          <div className="contact-us__form">
            <form >
              <div className="layout-2-columns contact-us__line">
                <input
                  className="input contact-us__input"
                  type="text"
                  name="name"
                  placeholder="Имя"
                />
                <input
                  className="input contact-us__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                name="question"
                placeholder="Текст сообщения"
                className="input contact-us__line"
              ></textarea>
              <div className="contact-us__button ">
                <button type="submit" className="button button_bordered">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      <div className="contact-us__image">
        <img
          src="template/images/backgrounds/contact-us.png"
          alt="Girl phoning"
        />
      </div>
    </section>
    )
}

export default ContactUS;