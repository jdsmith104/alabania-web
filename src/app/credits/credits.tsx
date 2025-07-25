import HomeLink from "../HomeLink";
import styles from "./credits.module.css"

export default function Credits() {
    return (
        <div>
            <div className={styles["credit-page"]} >
                <div id="scroll-container"></div>
                <div id="scroll-text">
                    This is scrolling text.
                    This is scrolling text.
                    This is scrolling text.
                </div>
            </div >
            <HomeLink />
        </div >

    );
}