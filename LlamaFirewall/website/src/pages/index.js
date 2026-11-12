eonDotsBanner />
        <div className="left">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
              className="button button--secondary button--lg"
              to="/docs/documentation/about-llamafirewall">
              Learn More
            </Link>
        </div>tamer
        <div className="right">
          <div className={styles.logoWrapper}>
            <div id="hero-blocker" className={styles.blocker}/>
            <img src="img/llamafirewall_logo.png" alt="llamafirewall" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.separator}></div>
        <HomepageDemo />
        <div className={styles.separator}></div>
        <HomepageTutorial />
      </main>
    </Layout>
  );
}
