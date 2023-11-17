import Hero from "../../components/Hero";
import Feature from "../../components/Features";
import chatIcon from "../../assets/icon-chat.webp"
import moneyIcon from "../../assets/icon-money.webp"
import securityIcon from "../../assets/icon-security.webp"
import "../../style/features.css"





function Home() {
  
  return (
    <div>
      <Hero />
      <section className="features">
            <h2 className="sr-only">Features</h2>
            
            <Feature
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            icon={chatIcon}
            altText="Chat icon"
          />

          <Feature
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
            icon={moneyIcon}
            alt="Money icon"
          />

          <Feature
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
            icon={securityIcon}
            alt="Security icon"
          />
      </section>
    </div>
  );
}

export default Home;