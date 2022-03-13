import React from "react";

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img
        src="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F990e5ebb-7c93-497b-a497-e6c4d3ab3993.jpg&w=1920&q=75"
        alt="Foto del curso"
      ></img>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img
                src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/109748623_1408973709289183_7467895209676390470_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHhMPeRzbXn6pBmqWyY1zukYYea9qMF7j5hh5r2owXuPpLj-dUF_cpnDYvvQah3iFmM5GZGMmmgcS0quzaF3wuH&_nc_ohc=2Ut_JXaTbQIAX_U_aa4&_nc_ht=scontent.fpiu2-2.fna&oh=00_AT_s29fBwaVBdAQiBYU9SvuB7pQOfHHuBSMNhxWm0AlATg&oe=625382F1"
                style={{ width: "50px" }}
                alt=""
              ></img>
            </div>
          </div>
          <span className="small">Kebo</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          $ 20USD
        </a>
      </div>
    </div>
  </article>
);


export default Curso;