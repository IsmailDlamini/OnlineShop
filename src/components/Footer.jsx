import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footerExtra">
        <div className="footerExtraQuality">
          Fast Delivery <FontAwesomeIcon icon={faCar} />
        </div>
        <div className="footerExtraQuality">
          Quick Secure Payments <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <div className="footerExtraQuality">
          Top Quality Products <FontAwesomeIcon icon={faShirt} />
        </div>
        <div className="newsLetter">
          Subscribe to our Newsletter
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </div>

      <footer className="pageFooter">
        <ul className="footerInfo aboutUs">
          <li className="footerInfoHeader">WHO ARE WE?</li>
          <li className="footerInfoBody">
            Ever since our beginning in 2022, we have been bringing affordable
            fashion to style-conscious people like you, with a focus on creating
            the perfect shopping experience. We are still holding true to our
            founders ideals, making sure that both our clothing and our service
            are always of the highest quality. At 888 WORLD, shopping is about
            more than what you buy. It is a complete journey, from browsing to
            choosing your outfit to letting us know what you think of your final
            purchase. We are here to help you enjoy yourself, so please feel
            free to reach out with questions, comments and suggestions.
          </li>
        </ul>

        <ul className="footerInfo">
          <li className="footerInfoHeader">ENQUIRE</li>
          <li className="footerInfoBody">FAQ</li>
          <li className="footerInfoBody">Shipping & Returns</li>
          <li className="footerInfoBody">Store Policy</li>
          <li className="footerInfoBody">Payments</li>
          <li className="footerInfoBody">888 World</li>
          <li className="footerInfoBody">Tel 0781402245</li>
          <li className="footerInfoBody">E-mail: iii409475@gmail.com</li>
        </ul>

        <ul className="footerInfo">
          <li className="footerInfoHeader">SITE NAVIGATION</li>
          <li className="footerInfoBody">clearings</li>
          <li className="footerInfoBody">deals</li>
          <li className="footerInfoBody">gift vouchers</li>
          <li className="footerInfoBody">sale</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
