import HomeLink from "../HomeLink";
import styles from "./about.module.css"

export default function About() {
    return (
        <div>
            <div className={styles["about-page"]} >
                <h2>Welcome to Alabania</h2>
                <p>Alabania is a fictional country created by Jacob, a 16-year-old developer. It is a place where creativity and imagination come together to form a unique digital experience.</p>
                <p>Thank you for visiting Alabania. We hope you enjoy your stay!</p>
                <footer className="mt-4">
                    <p>Created by Copilot</p>
                    <p>© 2023 Alabania</p>
                </footer>
            </div>
            <HomeLink />
        </div>

    );
}