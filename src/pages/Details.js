import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../components/Button.js";

import Carousel from "../components/Carousel";
import ErrorBoundary from "../components/ErrorBoundary.js";
import Modal from "../components/Modal.js";
import Loading from "../components/Loading.js";
import getAnimalDetails from "../api/getAnimalDetails.js";
class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    const [animal, ok] = await getAnimalDetails(this.props.match.params.id);
    if (ok) {
      this.setState(Object.assign({ loading: false }, animal));
    }

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => {
    window.location = this.state.url;
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const {
      type,
      breeds,
      contact,
      description,
      name,
      photos,
      showModal,
    } = this.state;

    return (
      <div className="h-full">
        <div className="bg-gray-200 px-5 py-3 rounded-xl shadow-lg w-11/12 md:w-10/12 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl text-center font-bold mt-1 mb-5">
            {name}
          </h1>
          <h2 className="text-center font-semibold text-xl lg:text-2xl">{`${breeds.primary} ${type}`}</h2>
          <h2 className="text-center font-semibold text-lg lg:text-2xl mb-10">{`${contact.address.city}, ${contact.address.state} - ${contact.address.postcode}`}</h2>
          <Carousel images={photos.map((p) => p.full)} />
          <div className="mt-10">
            <div
              className={`flex justify-center ${
                !showModal && "animate-bounce"
              }`}
            >
              <Button
                onClick={() => {
                  this.toggleModal();
                }}
              >
                Adopt {name}
              </Button>
            </div>
            <p className="mt-6 max-w-xl mx-auto text-md lg:text-lg font-medium mb-8 ">
              {description}
            </p>
            {showModal ? (
              <Modal>
                <div className="bg-gray-300 px-10 py-7 rounded-xl flex flex-col justify-center items-center mx-10">
                  <h1 className="mb-5 text-2xl font-semibold text-center">
                    Would you like to adopt {name}?
                  </h1>
                  <div class="flex flex-col">
                    <Button onClick={this.adopt} className="my-1">
                      Yes
                    </Button>
                    <Button onClick={this.toggleModal} className="my-1">
                      No, I&apos;m a monster
                    </Button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
