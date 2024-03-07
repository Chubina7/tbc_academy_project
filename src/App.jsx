import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <h1 className="logo">LOGO</h1>
          <nav className="navigation">
            <ul>
              <li>Route1</li>
              <li>Route2</li>
              <li>Route3</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="app">
        <section className="section">
          <div className="app_section_wrapper">
            <p>Content</p>
            <p>Content</p>
          </div>
        </section>
        <section className="section">
          <div className="app_section_wrapper">
            <p>Content</p>
            <p>Content</p>
          </div>
        </section>
        <section className="section">
          <div className="app_section_wrapper">
            <p>Content</p>
            <p>Content</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer_wrapper">
          <ul className="footer_links">
            <a href="https://termify.io/terms-and-conditions-generator?gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7gdp81Wckh6diIMSJaxBU6urQxY4uqvkgpQ2f_2MzHGvGxCK3b11axoCTsQQAvD_BwE" target="_blank" rel="noreferrer"><li>Terms and conditions</li></a>
            <a href="https://www.privacypolicies.com" target="_blank" rel="noreferrer"><li>Privacy policy</li></a>
          </ul>
          <input className="newsletter_subscription_input" type="text" placeholder="Leave your email" />
        </div>
      </footer>
    </>
  )
}

export default App;
