import { useState, useMemo, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { DrawingCard } from './DrawingCard';
import "../styles/DrawingsMosaic.css";

export const DrawingsMosaic = ({ drawings }) => {
  const [selectedDrawing, setSelectedDrawing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({});

  const loadImageDimensions = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight
        });
      };
      img.onerror = () => {
        resolve({
          width: 1,
          height: 1,
          aspectRatio: 1
        });
      };
      img.src = src;
    });
  };

  const getSizeByAspectRatio = (aspectRatio) => {
    if (aspectRatio > 1.5) {
      return 'wide';
    } else if (aspectRatio < 0.7) {
      return 'tall';
    } else if (aspectRatio > 1.2) {
      return 'medium-wide';
    } else if (aspectRatio < 0.8) {
      return 'medium-tall';
    } else {
      return 'square';
    }
  };

  useEffect(() => {
    const loadAllDimensions = async () => {
      const dimensions = {};
      for (let i = 0; i < drawings.length; i++) {
        const drawing = drawings[i];
        const dims = await loadImageDimensions(drawing.image);
        dimensions[i] = dims;
      }
      setImageDimensions(dimensions);
    };

    if (drawings.length > 0) {
      loadAllDimensions();
    }
  }, [drawings]);

  const drawingsWithSizes = useMemo(() => {
    return drawings.map((drawing, index) => {
      const dimensions = imageDimensions[index];
      let size = 'square'; 
      
      if (dimensions) {
        size = getSizeByAspectRatio(dimensions.aspectRatio);
      }
      
      return {
        ...drawing,
        size: size,
        dimensions: dimensions
      };
    });
  }, [drawings, imageDimensions]);

  const handleDrawingClick = (drawing) => {
    setSelectedDrawing(drawing);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDrawing(null);
  };

  return (
    <div className="drawings-mosaic">
      {Object.keys(imageDimensions).length === 0 && drawings.length > 0 ? (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Analisando dimensões das imagens...</p>
        </div>
      ) : (
        <div className="mosaic-grid">
          {drawingsWithSizes.map((drawing, index) => (
            <div 
              key={drawing.id || index} 
              className={`mosaic-item ${drawing.size}`}
            >
              <DrawingCard
                image={drawing.image}
                title={drawing.title}
                description={drawing.description}
                onClick={() => handleDrawingClick(drawing)}
              />
            </div>
          ))}
        </div>
      )}

      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="lg"
        centered
        className="drawing-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedDrawing?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedDrawing && (
            <>
              <img 
                src={selectedDrawing.image} 
                alt={selectedDrawing.title}
                className="modal-drawing-image"
              />
              {selectedDrawing.description && (
                <p className="modal-description mt-3">
                  {selectedDrawing.description}
                </p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
