import HomeLink from "../HomeLink";
import styles from "./about.module.css"

export default function About() {
    return (
        <div>
            <div className={styles["about-page"]}  >
                <h2>Welcome to Halabania</h2>
                <p>Halabania is the slightly wacky brain child of Emily, Ethan, and Jacob - dreamed up to celebrate the inevitable engagement of Ala and Harry after 9 years of top-tier coupledom! (Yes, nine. We checked the calendar twice.)</p>
                <p>Thank you for visiting Halabania. We hope you enjoy your stay!</p>
                <footer className="mt-4">
                    <p>Created by Copilot and powered by AWS (jk)</p>
                    <p>© 2025 Halabania</p>
                </footer>
            </div>
            <HomeLink />
        </div>

    );
}