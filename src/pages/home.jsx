// Import images
import chatIcon from '../assets/img/icon-chat.png';
import moneyIcon from '../assets/img/icon-money.png';
import securityIcon from '../assets/img/icon-security.png';

// Hero component
const Hero = () => (
    <div className="hero">
        <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
    </div>
);

// Features component
const Features = () => {
    const features = [
        {
            icon: chatIcon,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            icon: moneyIcon,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            icon: securityIcon,
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ];

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) => (
                <div key={index} className="feature-item">
                    <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.text}</p>
                </div>
            ))}
        </section>
    );
};

// Main component combining Hero and Features
const Home = () => (
    <main>
        <Hero />
        <Features />
    </main>
);

export default Home;