import "../styles/DrawingCard.css";

export const DrawingCard = ({ image, title, description, onClick }) => {
  return (
    <div className="drawing-card" onClick={onClick}>
      <div className="drawing-image-container">
        <img 
          src={image} 
          alt={title} 
          className="drawing-image"
          loading="lazy"
        />
        <div className="drawing-overlay">
          <div className="drawing-info">
            <h4 className="drawing-title">{title}</h4>
            {description && (
              <p className="drawing-description">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
