import React from "react";
import RImage from "@/public/Rishabh_photo2.jpg";
import classes from "../../styles/contact.module.css";
import Image from "next/image";
const ContactContaint = () => {
  return (
    <>
      <div
        className={`${classes.container} block  m-4 p-6    justify-center items-center`}
      >
        <div className=" flex items-center justify-center">
          <Image
            alt="portfolio-img"
            src={RImage}
            width="380"
            height="250"
            className="object-contain"
          />
        </div>
        <div className={`${classes.text}`}>
          <h1>This is a beautiful picture.</h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro asperiores quo corrupti? Voluptas, minus delectus nihil quam
            corporis amet repellendus earum! Ipsa dignissimos sequi, neque
            expedita voluptatem magnam sunt veniam nisi in? Obcaecati sapiente
            quo hic corrupti veniam, sed porro labore repudiandae nulla impedit
            inventore totam excepturi ratione. Dolorum minus soluta delectus
            exercitationem fugit explicabo perspiciatis rerum, sequi, a
            voluptatibus suscipit, nulla laudantium aperiam in molestiae magnam
            quas minima alias rem. Deleniti aut minima neque iusto consequatur
            eaque asperiores voluptas quia excepturi modi voluptates, eligendi
            nihil, possimus tempora minus labore? Totam id blanditiis natus
            deserunt commodi maiores velit vel?
          </p>
        </div>
      </div>
      <div
        className={`${classes.container} block  m-4 p-6   justify-center items-center`}
      >
        <div className={`${classes.text}`}>
          <h1>This is a beautiful picture.</h1>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            porro asperiores quo corrupti? Voluptas, minus delectus nihil quam
            corporis amet repellendus earum! Ipsa dignissimos sequi, neque
            expedita voluptatem magnam sunt veniam nisi in? Obcaecati sapiente
            quo hic corrupti veniam, sed porro labore repudiandae nulla impedit
            inventore totam excepturi ratione. Dolorum minus soluta delectus
            exercitationem fugit explicabo perspiciatis rerum, sequi, a
            voluptatibus suscipit, nulla laudantium aperiam in molestiae magnam
            quas minima alias rem. Deleniti aut minima neque iusto consequatur
            eaque asperiores voluptas quia excepturi modi voluptates, eligendi
            nihil, possimus tempora minus labore? Totam id blanditiis natus
            deserunt commodi maiores velit vel?
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <Image
            alt="portfolio-img"
            src={RImage}
            width="380"
            height="250"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ContactContaint;
