import React from "react";
import "../Components/Faqpage.css"
import Footerr from "./Footerr";

function Faqpage(){

    return(
        <div>
            <div className="faq mt-5">
                <img src="../Assets/Faqbanner.png" alt="" />
            </div>
            <div className="container">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faqs">
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What kind of products does we sell?
      </button>
    </h1>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You can buy 7000+ products on this platform – everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics (including Apple products), baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What cities and locations does we operate in?
      </button>
    </h1>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We currently operates in Ahmedabad, Bengaluru, Chandigarh, Chennai, Delhi, Faridabad, Ghaziabad, Gurugram,  Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow, Ludhiana, Meerut, Mohali, Mumbai, Noida, Panchkula, Pune, Vadodara and Zirakpur.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">
      How do we deliver in 10 minutes?
      </button>
    </h1>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Our tech enables our partners staff to pick and pack an order within 2 minutes of the customer placing it. Our network of partner stores are so widely spread across cities that we have a store live almost every 2 kilometers. Read this blogpost to know more.</div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
      What If I want to return something?
      </button>
    </h1>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">The timeline to raise a complaint depends on the category in which the product falls into: Consumable Perishables – meats, seafood, frozen food and FnV, dairy category including milk, eggs and bread, etc. (72 hours); Consumable Non-perishables – groceries, etc. (72 hours); General Merchandise – Electronics, home furnishings, fashion, etc. (24 hours); Freebie missing issue (72 hours); Entire wrong order and MDND (24 hours); boAt products (24 hours); book products (24 hours); and Other issues – insect, fungus or foreign material, expired products, etc. (no restriction).</div>
    </div>
  </div>



  <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
      Does we deliver 24 hours/all night?
      </button>
    </h1>
    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">As of now, this service (delivery between 12 am to 6am) is available in select areas in a few cities.</div>
    </div>
  </div>



  <div class="accordion-item">
    <h1 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">
      Can I reschedule my order?
      </button>
    </h1>
    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Please reach out to us via the mail. Our customer care team is more than happy to help.</div>
    </div>
  </div>




</div>
            </div>
            <Footerr/>
        </div>
    )
}

export default Faqpage