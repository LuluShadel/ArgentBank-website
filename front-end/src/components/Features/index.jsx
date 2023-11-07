import "../../style/features.css"
import data from "../../data/features.json"








    export default function Features() {
        const featData = data;
      
        return (
          <section className="features">
            <h2 className="sr-only">Features</h2>
            {featData.map((feature, index) => (
              <div className="feature-item" key={index}>
                <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
                <h3 className="feature-item-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        );
      }
