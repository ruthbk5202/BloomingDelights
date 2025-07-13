
import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = "Blooming Delights",
    subtitle = "Fresh flowers for every occasion",
    primaryButtonText = "Shop Now",
    secondaryButtonText = "Learn More",
    backgroundImageUrl = "/assets/images/iiiiii.jpg"
}) => {
    const handlePrimaryButtonClick = () => {
        console.log('Primary button clicked - navigate to shop');
       
    };

    const handleSecondaryButtonClick = () => {
        console.log('Secondary button clicked - show more info');
        
    };

    return (
        <section 
            className="hero" 
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                <div className="hero-buttons">
                    <button 
                        className="btn btn-primary"
                        onClick={handlePrimaryButtonClick}
                    >
                        {primaryButtonText}
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={handleSecondaryButtonClick}
                    >
                        {secondaryButtonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;