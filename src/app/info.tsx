"use client";

import React, { useState } from "react";
import styles from "./info.module.css";
import { link } from "fs";
import { on } from "events";

export default function OpeningVideo() {
    const [siteEntered, setSiteEntered] = useState(false);

    const makeCard = (title: string, link: string, key: number, onClick?: () => void) => {
        return (
            <div className={styles["link-card"]} key={key} onClick={onClick} hidden={!siteEntered}>
                <h2>{title}</h2>
            </div>
        );
    }

    const cards = [
        {
            title: "Itinerary",
            link: "/about",
        },
        {
            title: "FAQs",
            link: "/about",
        },
        {
            title: "Welcome video",
            link: "/about",
            onClick: () => setSiteEntered(false),
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Credits",
            link: "/about",
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