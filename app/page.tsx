const destinations = [
  ['Chettinad', 'Tamil Nadu', 'Heritage · Food'],
  ['Majuli', 'Assam', 'River · Culture'],
  ['Champaner', 'Gujarat', 'Heritage · Landscape'],
  ['Kutch', 'Gujarat', 'Craft · Desert'],
  ['Gurez', 'Kashmir', 'Mountain · Slow travel'],
  ['Maheshwar', 'Madhya Pradesh', 'Heritage · Craft'],
]

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">Travel Collector</div>
        <div className="navlinks"><span>Explore</span><span>Your Journey</span><span>Passport</span></div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">India, collected differently</div>
          <h1>Travel<br/>with<br/><i>intention.</i></h1>
          <p>Discover places, people, food and heritage through a trusted travel intelligence layer built for curious travellers.</p>
          <a className="cta" href="#explore">Explore India</a>
        </div>
        <div className="hero-card">
          <div className="tag">A considered journey</div>
          <h2>Maheshwar</h2>
          <div>River · Looms · Living heritage</div>
        </div>
      </section>

      <section className="section" id="explore">
        <div className="section-head">
          <h2 className="section-title">Places worth<br/><i>knowing.</i></h2>
          <p className="muted">Not a list of everything. A considered selection of places, experiences, restaurants, makers and heritage that give a destination its character.</p>
        </div>
        <div className="grid">
          {destinations.map(([name, region, tags]) => <article className="card" key={name}><div className="tag">{region}</div><h3>{name}</h3><div>{tags}</div></article>)}
        </div>
      </section>

      <section className="section">
        <div className="identity">
          <div>
            <div className="eyebrow">The traveller comes first</div>
            <h2 className="section-title">Your India<br/><i>isn't generic.</i></h2>
            <p className="muted" style={{marginTop:25}}>Tell us how you like to travel. We combine your preferences with our destination intelligence to create a journey that feels considered, personal and possible.</p>
            <a className="cta" href="#identity">Discover your travel identity</a>
          </div>
          <div className="identity-box" id="identity">
            <div className="eyebrow">Example profile</div>
            <h3>The Curious Slow Traveller</h3>
            <ul><li>Living heritage over monuments</li><li>Local food over tourist menus</li><li>Small places over crowded icons</li><li>2–4 meaningful experiences a day</li><li>Independent, design-conscious stays</li></ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head"><h2 className="section-title">From explorer<br/>to <i>concierge.</i></h2><p className="muted">Start with an intelligent Explorer report. Then let a human concierge refine the journey around your dates, preferences and occasion.</p></div>
        <div className="identity-box"><div className="eyebrow">How it works</div><h3>Explorer → Curated → Personal</h3><p className="muted">The Explorer creates a structured first recommendation. You can then request a more personal journey, where our team edits the route, selects distinctive places, restaurants, heritage and local shops, and delivers a beautifully presented travel report.</p></div>
      </section>

      <footer className="footer"><span>Travel Collector · Fecund Studio</span><span>Bharat Atlas · Destination intelligence</span></footer>
    </main>
  )
}
