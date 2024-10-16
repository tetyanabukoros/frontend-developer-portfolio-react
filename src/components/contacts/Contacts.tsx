const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1>Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2>Location</h2>

            <p>Ukraine | Ready to work remotely</p>
          </li>

          <li className="content-list__item">
            <h2>Telegram / Viber / WhatsApp</h2>

            <p> <a href="tel:+380978780280">+380 97 87 80 280</a></p>
          </li>

          <li className="content-list__item">
            <h2>Email</h2>

            <p><a href="mailto:tetyana.bukoros@gmail.com">tetyana.bukoros@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </main>);
}

export default Contacts;