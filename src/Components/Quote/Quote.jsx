// import styling
import "./Quote.css";

// import titletypetwo from UI
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

// import quote data from data.js
import { quoteData } from "../../Data/Data";

export default function Quote() {
  return (
    <section className="Quote">
      <div className="container quote-container">
        <TitleTypeTwo Title={"Quote of the Day"} className='quote-title'/>

        {quoteData.map(({ quote, speaker }, index) => {
          return (
            <article key={index}>
              <p>{quote}</p>
              <h5>{speaker}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}
