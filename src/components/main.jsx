import React from "react";

const Home = () => {
  const imageSrc = 'https://images.yourstory.com/cs/2/fb7ee200-7579-11e9-995c-171c030e4eb8/ecom_website-min1560423119958.jpg?fm=png&auto=format&w=800'
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={imageSrc}
            alt="Card"
            height={500}
          />
          {/* <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
