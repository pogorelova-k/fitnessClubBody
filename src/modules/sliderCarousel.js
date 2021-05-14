class SliderCarousel {
    constructor({ main,
        wrap,
        slide,
        next,
        prev,
        infinite = false,
        dots,
        position = 0,
        slidesShow = 4,
        responsive = [],
    }) {
        if (!main || !wrap) {
            console.warn('slider-carousel: необходимо 2 свойства, "main" и "wrap"!');
        }
        this.main = document.querySelector(main); //контейнер
        this.wrap = document.querySelector(wrap); //обёртка для слайдов
        this.slide = document.querySelectorAll(slide); // все слайды
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.dots = document.querySelector(dots); //точки на слайдере
        this.slidesShow = slidesShow;
        this.options = {
            position, //значения увеличивается/уменьшается при клике
            infinite,
            // widthSlide: Math.floor(100 / this.slidesShow),
            widthSlide: Math.floor(this.widthBlock / this.slidesShow),
            maxPosition: this.slide.length - this.slidesShow,
        };
        this.responsive = responsive;
        this.widthBlock = 1125;
    }

    init() {
        this.addHTMLClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArows();
            this.controlSlider();
        }

        this.responseInit();
    }

    responseInit() {
        const slidesShowDefault = this.slidesShow,
            allResponse = this.responsive.map(item => item.breakpoint),
            maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesShow = this.responsive[i].slidesShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesShow = slidesShowDefault;
                this.options.widthSlide = Math.floor(this.widthBlock / this.slidesShow);
                this.addStyle();
            }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);
    }

    prevSlide() {

        if (this.options.infinite || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.marginLeft = `-${this.options.position * this.options.widthSlide}px`;
        }
    }

    nextSlide() {

        if (this.options.infinite || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }

            this.wrap.style.marginLeft = `-${this.options.position * this.options.widthSlide}px`;
        }
    }

    controlSlider() {
        this.main.addEventListener('click', event => {
            event.preventDefault();
        });
        this.prev.addEventListener('click', this.prevSlide.bind(this));
        this.next.addEventListener('click', this.nextSlide.bind(this));
    }

    // метод для добавления классов элементам
    addHTMLClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');

        for (const item of this.slide) {
            item.classList.add('glo-slider__item');
        }
    }

    addArows() {
        this.prev = document.createElement('buton');
        this.next = document.createElement('buton');

        this.prev.classList.add('glo-slider__prev');
        this.next.classList.add('glo-slider__next');

        this.main.append(this.prev);
        this.main.append(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .glo-slider__prev,
            .glo-slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                cursor: pointer;
                z-index: 20;
                position: absolute;
            }
            .glo-slider__next {
                border-left-color: #ffd11a;
                right: 0%;
                top: 36%;
            }
            .glo-slider__prev {
                border-right-color: #ffd11a;
                left: 0%;
                top: 36%;
            }

            .glo-slider__next:focus,
            .glo-slider__prev:focus,
            .glo-slider__next:hover,
            .glo-slider__prev:hover {
                background: transparent;
                outline: transparent;
            }
            `;
        document.head.append(style);
    }

    // добавление стилей - необязательно
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }

        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }
            .glo-slider__wrap {
                position: relative !important;
                overflow: hidden !important;
                will-change: transform !important;
                transition: 250ms;
            }
            .glo-slider__item {

                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}px !important;
                margin: 0 auto !important;
            }`;

        document.head.append(style);
    }
}

export default SliderCarousel;
