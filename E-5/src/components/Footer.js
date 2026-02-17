import { LOGO_URL } from "../utils/constants";



const Footer =()=>{
  return (
    <>
    <div className="Footer">
    <div>
        <img src={LOGO_URL} style={{height:100, widows:100}}></img>
        <div>© 2026 InstaFood Limited</div>

    </div>
    <div className="footer-classList">
  <ul className="footerhed">
    InstaFood
    <li>About InstaFood</li>
    <li>Our Story</li>
    <li>Careers</li>
    <li>Press & Media</li>
    <li>Investor Relations</li>
    <li>Blog</li>
  </ul>

  <ul className="footerhed">
    For You
    <li>Order Food Online</li>
    <li>Fast Delivery</li>
    <li>Offers & Deals</li>
    <li>Gift Cards</li>
    <li>Favourites</li>
    <li>Track Orders</li>
  </ul>

  <ul className="footerhed">
    Partner With Us
    <li>Add Your Restaurant</li>
    <li>Business Support</li>
    <li>Advertising</li>
    <li>Merchant App</li>
    <li>Logistics Partner</li>
    <li>Franchise</li>
  </ul>

  <ul className="footerhed">
  Support
    <li>Help Center</li>
    <li>FAQs</li>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
    <li>Refund Policy</li>
    <li>Contact Us</li>
  </ul>
</div>

    </div>

    </>
  )
}
export default Footer;