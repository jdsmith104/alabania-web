"use client";

import React, { useState } from "react";
import styles from "./info.module.css";
import Link from 'next/link';

export default function OpeningVideo() {
  const [siteEntered, setSiteEntered] = useState(true);

  const makeCard = (title: string, link: string, key: number, onClick?: () => void) => {
    return (
      <div className={styles["link-card"]} key={key} onClick={onClick} hidden={!siteEntered}>
        <h2><Link href={link.includes("http") ? link : `/${link}`} > {title} </Link></h2>
      </div >
    );
  }

  const cards = [
    {
      title: "Itinerary",
      link: "itinerary",
    },
    {
      title: "Sites",
      link: "https://maps.app.goo.gl/pgrmFAmukCt5KxgZ6",
    },
    {
      title: "FAQs",
      link: "https://docs.google.com/document/d/130Xmkp_qUiL_KkIMj9MogFwS22kcnpVSjkyqOPV-87U/edit?usp=sharing",
    },
    {
      title: "Welcome video",
      link: "about",
      onClick: () => setSiteEntered(false),
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Credits",
      link: "credits",
    }
  ];

  return (
    <div className={styles["centered-container"]}>
      <iframe hidden={siteEntered} width="560" height="315" src="https://www.youtube.com/embed/FwMyLui2nrM?si=0q_h2NtL2kKCNtwC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <button hidden={siteEntered} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setSiteEntered(true)}>Continue to site</button>
      {cards.map((card, index) => (
        makeCard(card.title, card.link, index, card.onClick)
      ))}
    </div>

  );
}