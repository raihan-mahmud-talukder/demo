import { useEffect, useState } from "react"

export const Carousel = () => {
    const data = ['1', '2', '3', '4', '5']
    const [isPause, setIsPause] = useState(false)
    const [leftHover, setLeftHover] = useState(false)
    const [rightHover, setRightHover] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInitialScroll = () => {
        if (isPause) return
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return (
            setCurrentIndex(currentIndex + 1)
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInitialScroll()
        }, 3000)
        return () => clearInterval(interval)
    })
    return (
        <>
            <div className="carousel-container">
                {data.map((item, index) => {
                    return (
                        <>
                            <h1 className="carousel-item"
                                style={{ transform: `translate(-${currentIndex * 100}%)` }}
                                onMouseEnter={() => setIsPause(true)}
                                onMouseLeave={() => setIsPause(false)}
                                key={index}
                            >
                                {item}
                            </h1>
                        </>
                    )
                })}
            </div>
            <p className="carousel-index">
                <i className={isPause ? "bi-pause-circle-fill" : 'bi-pause-circle'}
                    onClick={() => setIsPause(true)}
                ></i>
                <i className={isPause ? "bi-play-circle" : 'bi-play-circle-fill'}
                    onClick={() => setIsPause(false)}
                ></i>
                <i className={leftHover ? "bi-arrow-left-circle-fill" : 'bi-arrow-left-circle'}
                    onClick={() => `${currentIndex === 0 ? setCurrentIndex(data.length - 1) : setCurrentIndex(currentIndex - 1)}`}
                    onMouseEnter={() => setLeftHover(true)}
                    onMouseLeave={() => setLeftHover(false)}
                ></i>
                {data.map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{ color: item == currentIndex + 1 ? 'red' : 'black' }}
                            onClick={() => setCurrentIndex(index)}
                        >{item}</span>
                    )
                })}
                <i className={rightHover ? "bi-arrow-right-circle-fill" : 'bi-arrow-right-circle'}
                    onClick={() => `${currentIndex === data.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)}`}
                    onMouseEnter={() => setRightHover(true)}
                    onMouseLeave={() => setRightHover(false)}
                ></i>
            </p>
        </>
    )
}