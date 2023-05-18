import React, { Component } from "react";
import { ApiImg } from "./components/fetch";
import { ImageGallery } from "./components/list/listItem";
import { BtnLoadMore } from "./components/btnLoadMore/load";
import css from "./app.module.css";
import { Searchbar } from "./components/search/search";
import { Modal } from "components/modal";
import { Loader } from "components/loader/loader";
class App extends Component {
  state = {
    fetchImg: [],
    countPage: 1,
    loading: false,
    isHidden: false,
    search: "",
    imgModal: "",
  };
  hendlerSearch = (e) => {
    e.preventDefault();
    const { search } = this.state;
    const { value } = e.target[1];
    if (value !== search) {
      this.setState({
        search: value.toLowerCase(),
        fetchImg: [],
        countPage: 1,
      });
    }
  };

  takeImg = async () => {
    try {
      const { countPage, search } = this.state;
      this.setState({ loading: true });
      const data = await ApiImg.fetchImgWithQuery(search, countPage);
      setTimeout(() => {
        this.setState((prevState) => ({
          fetchImg: prevState.fetchImg.concat(data),
        }));
      }, 500);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handlerKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlerKeyDown);
  }
  handlerKeyDown = (event) => {
    if (event.key === "Escape") {
      this.toggleModal();
    }
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.countPage !== this.state.countPage ||
      prevState.search !== this.state.search
    ) {
      this.takeImg();
    }
  }
  toggleModal = (img) => {
    this.setState((prevState) => ({
      imgModal: img,
      isHidden: !prevState.isHidden,
    }));
  };
  hendlerIncrement = () => {
    this.setState((prevState) => ({
      countPage: prevState.countPage + 1,
    }));
  };

  render() {
    const { hendlerIncrement, hendlerSearch, toggleModal } = this;
    const { fetchImg, loading, isHidden, imgModal } = this.state;
    return (
      <div className={css.container}>
        <Searchbar hendlerSearch={hendlerSearch} />
        <ImageGallery fetchImg={fetchImg} toggleModal={toggleModal} />
        {isHidden && (
          <Modal img={imgModal} isHidden={isHidden} toggleModal={toggleModal} />
        )}
        <Loader loading={loading} />
        {fetchImg.length > 0 && !loading && (
          <BtnLoadMore
            hendlerIncrement={hendlerIncrement}
            fetchImg={fetchImg}
          />
        )}
      </div>
    );
  }
}
export { App };
