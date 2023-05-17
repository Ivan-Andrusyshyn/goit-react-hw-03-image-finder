import React, { Component } from "react";
import { ApiImg } from "./components/fetch";
import { ImageGallery } from "./components/list/listItem";
import { BtnLoadMore } from "./components/btnLoadMore/load";
import css from "./app.module.css";
import { RotatingLines } from "react-loader-spinner";
import { Searchbar } from "./components/search/search";
import { Modal } from "components/modal";

class App extends Component {
  state = {
    fetchImg: [],
    countPage: 1,
    loading: false,
    error: null,
    search: "",
    isHidden: false,
    imgModal: "",
  };
  hendlerSearch = (e) => {
    e.preventDefault();
    const newSearchd = e.target[1].value;
    if (newSearchd) {
      this.setState({ fetchImg: [] });
      this.takeImg();
      e.currentTarget.reset();
    }
  };

  hendlerChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
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

  componentDidUpdate(_, prevState) {
    if (prevState.countPage !== this.state.countPage) {
      this.takeImg();
    }
  }
  hendlerIncrement = () => {
    this.setState((prevState) => ({
      countPage: prevState.countPage + 1,
    }));
  };
  openModal = (img) => {
    this.setState((prevState) => ({
      imgModal: img,
      isHidden: !prevState.isHidden,
    }));
  };

  render() {
    const { hendlerIncrement, hendlerSearch, hendlerChange, openModal } = this;
    const { fetchImg, loading, isHidden, imgModal } = this.state;
    return (
      <div className={css.container}>
        <Searchbar
          hendlerSearch={hendlerSearch}
          hendlerChange={hendlerChange}
        />
        <ImageGallery fetchImg={fetchImg} openModal={openModal} />
        {isHidden && (
          <Modal img={imgModal} onEsc={this.onEsc} openModal={openModal} />
        )}
        <RotatingLines
          strokeColor="orange"
          strokeWidth="5"
          animationDuration="1"
          width="96"
          visible={loading}
        />
        {!loading && (
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
