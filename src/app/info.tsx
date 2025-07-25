"use client";

import React, { useState } from "react";
import styles from "./info.module.css";
import Link from 'next/link';

export default function OpeningVideo() {

    const now = new Date();

    const unlockSiteDate = new Date(Date.UTC(2025, 6, 26, 0, 0, 1)); // July is month 6 (0-based), 17:00 UTC = 18:00 BST

    const [siteEntered, setSiteEntered] = useState(now > unlockSiteDate);

    const makeCard = (title: string, link: string, key: number, ready: boolean, onClick?: () => void) => {
        return (
            <div className={styles["link-card"]} key={key} onClick={onClick} hidden={!siteEntered || !ready}>
                <h2><Link href={link.includes("http") ? link : `/${link}`} > {title} </Link></h2>
            </div >
        );
    }

    // 6pm BST (UTC+1) on 25th July 2025
    const itineraryUnlock = new Date(Date.UTC(2025, 6, 25, 17, 0, 0)); // July is month 6 (0-based), 17:00 UTC = 18:00 BST

    const cards = [
        {
            title: "Itinerary 🕒",
            link: "https://docs.google.com/document/d/1flFheVtD2NG1Olt98asraz54ntvPmkJ-0Qu2s2qf9EY/edit?usp=sharing",
            ready: now > itineraryUnlock
        },
        {
            title: "Map 📍",
            link: "https://maps.app.goo.gl/pgrmFAmukCt5KxgZ6",
            ready: true
        },
        {
            title: "FAQs ❓",
            link: "https://docs.google.com/document/d/130Xmkp_qUiL_KkIMj9MogFwS22kcnpVSjkyqOPV-87U/edit?usp=sharing",
            ready: true
        },
        {
            title: "Welcome video 🎬",
            link: "",
            onClick: () => setSiteEntered(false),
            ready: true
        },
        {
            title: "About ℹ️",
            link: "about",
            ready: true
        },
        {
            title: "Upload Pics 📷",
            link: "https://1drv.ms/f/c/812e6d85c470395e/EnQaanmD9cNDshuZk7G0lEIBy2WT7soWXLnyQKt3QZvxsg?e=CM0ncU",
            ready: true
        },
        {
            title: "Credits 🎉",
            link: "credits",
            ready: false
        }
    ];

    return (
        <div className={styles["centered-container"]}>
            <iframe className={styles["iframe"]} hidden={siteEntered} height="315" src="https://www.youtube.com/embed/FwMyLui2nrM?si=0q_h2NtL2kKCNtwC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button hidden={siteEntered} className={styles["home-link"]} onClick={() => setSiteEntered(true)}>Continue to site</button>
            {cards.map((card, index) => (
                makeCard(card.title, card.link, index, card.ready, card.onClick)
            ))}
        </div>

    );
}