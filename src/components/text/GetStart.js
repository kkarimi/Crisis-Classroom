import React from "react";
import crisis from "../../image/crisis.jpg";
import "../../App.css";

const GetStart = () => {
  return (
    <div>
      <img src={crisis} alt="crisis" className="img-responsive crisis-image " />
      <h2>EMPOWERMENT THROUGH EDUCATION FOR ALL REFUGEES</h2>
      <p>
        No matter who you are, how old you are or where in the world you are, we
        believe with all our hearts that education isn’t a privilege but a
        fundamental human right. We uphold this right, we fight for it and we
        enable it. Unconstrained by bricks and mortar, unconcerned by age limits
        our classrooms are open to everyone. More than just algebra and verbs,
        this is relearning life in another language. To ask for a loaf of bread,
        to make new friends, to talk to a doctor about your child. This is
        education that helps you take back control and regain a sense of self so
        that life can begin. BECOME AN INVESTOR, SUPPORTER OR AMPLIFIER OF OUR
        CROWDFUNDER TO SEND EDUCATION BACK ALONG THE REFUGEE ROUTES OF EUROPE
      </p>
      <a href="https://chuffed.org/project/crisis-classroom">
        https://chuffed.org/project/crisis-classroom
      </a>
      <a href="">
        <button type="button" class="btn btn-primary btn-block getstart">
          Get start
        </button>
      </a>
    </div>
  );
};

export default GetStart;
