import React from "react";
import Link from "next/link";

const CallToActionThree = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white">Hier geht's zu unserer Speißekarte</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link href="/contact">
              <a className={`common_btn ${buttonClass}`}>
                <span>Download</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionThree;
