import HomeLink from "../HomeLink";

export default function About() {
    return (
        <div>
            <div className="link-card" >
                <h2>Welcome to Alabania</h2>
                <p>Alabania is a fictional country created by Jacob, a 16-year-old developer. It is a place where creativity and imagination come together to form a unique digital experience.</p>
                <p>Explore the site to learn more about Alabania, its culture, and the projects being developed. From interactive stories to innovative applications, Alabania is a testament to the power of youth creativity.</p>
                <p>Join Jacob on this journey and discover the wonders of Alabania. Whether you're here to learn, explore, or just have fun, there's something for everyone.</p>
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