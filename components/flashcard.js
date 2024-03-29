'use client';
import React, {useRef, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: {duration: .35},
    zIndex: 10,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  },
  notSelected: i => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * .15),
    zIndex: 10 - Math.abs(i),
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    transition: {duration: .35}
  })
}
const Flashcards = ({points, numberOfTeam = 6}) => {
  const cards = Array.from(Array(numberOfTeam).keys());
  const [selectedCard, setSelectedCard] = useState(null);
  const [{
    startX,
    startScrollLeft,
    isDragging
  }, setDragStart] = useState({
    startX: undefined,
    startScrollLeft: undefined,
    isDragging: false
  });
  const containerRef = useRef();
  const cardRefs = useRef(new Array());
  useEffect(() => {
    const {scrollWidth, clientWidth} = containerRef.current;
    const halfScroll = (scrollWidth - clientWidth) / 2;
    containerRef.current.scrollLeft = halfScroll;
  }, [containerRef.current]);
  const handleMouseDown = e => {
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
      isDragging: true
    });
  }
  const handleMouseMove = e => {
    if (!isDragging || selectedCard) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - walk;
  }
  const selectCard = card => {
    setSelectedCard(selectedCard ? null : card);

    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }
  const handleCardMouseUp = (e, card) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  }
  return (
    <div
      className="flashcards"
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDragStart(prev => ({...prev, isDragging: false}))}
      onMouseMove={handleMouseMove}
    >
      <div
        className="flashcards__container"
        ref={containerRef}
      >
        {cards.map((card, i) => (

          <div
            className="card"
            key={card}
            ref={el => cardRefs.current.push(el)}
            onMouseUp={e => handleCardMouseUp(e, card)}
            // variants={cardVariants}
            // animate={selectedCard === card ? "selected" : "notSelected"}
            // custom={selectedCard ? selectedCard - card : 0}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div>Đội {i + 1}</div>
              <div className="text-2xl">{points['team'+ (i+1).toString()]}</div>
              <div>điểm</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Flashcards;