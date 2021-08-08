import { Component } from "react";
import none from "../../assets/none.jpg";

class Carousel extends Component {
  state = {
    active: 0,
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    if (!images.length) {
      images.push(none);
    }

    const isOne = images.length === 1;

    return (
      <div className="flex ">
        <div className={`my-auto w-3/4 md:w-1/2 px-1 ${isOne && "mx-auto"}`}>
          <img
            src={images[active]}
            alt="animal"
            className={`mx-auto ${
              isOne ? "rounded-lg md:w-6/6 xl:w-5/6" : "rounded-3xl"
            }`}
          />
        </div>
        {!isOne && (
          <div className="ml-5 w-1/2 flex justify-center items-center">
            <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4">
              {images.map((photo, index) => (
                <img
                  key={photo}
                  src={photo}
                  alt="animal thumbnail"
                  className={`self-center h-20 w-20 lg:w-28 lg:h-28 object-cover rounded-full cursor-pointer transition duration-200 ${
                    active === index
                      ? "ring-offset-indigo-400 ring-4 lg:ring-8 "
                      : "hover:opacity-50"
                  }`}
                  data-index={index}
                  onClick={this.handleIndexClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
