import "../../style/features.css"









    export default function Feature({icon,title,description,alt}) {
        
      
        return (
          
              <div className="feature-item" >
                <img src={icon} alt={alt} className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
              </div>
         
        );
      }