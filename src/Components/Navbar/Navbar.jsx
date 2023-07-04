import { useState } from "react";
import Headroom from "react-headroom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isDropdownPerhiasan, setIsDropdownPerhiasan] = useState(false);
  const [isDropdownHadiah, setIsDropdownHadiah] = useState(false);
  const [isDropdownCinta, setIsDropdownCinta] = useState(false);
  const [isDropdownJam, setIsDropdownJam] = useState(false);
  const [isDropdownRumah, setIsDropdownRumah] = useState(false);
  const [isDropdownParfum, setIsDropdownParfum] = useState(false);
  const [isDropdownPria, setIsDropdownPria] = useState(false);
  const [isDropdownCerita, setIsDropdownCerita] = useState(false);

  const handleMouseEnter1 = () => {
    setIsDropdownPerhiasan(true);
  };

  const handleMouseLeave1 = () => {
    setIsDropdownPerhiasan(false);
  };

  const handleMouseEnter2 = () => {
    setIsDropdownHadiah(true);
  };

  const handleMouseLeave2 = () => {
    setIsDropdownHadiah(false);
  };

  const handleMouseEnter3 = () => {
    setIsDropdownCinta(true);
  };

  const handleMouseLeave3 = () => {
    setIsDropdownCinta(false);
  };

  const handleMouseEnter4 = () => {
    setIsDropdownJam(true);
  };

  const handleMouseLeave4 = () => {
    setIsDropdownJam(false);
  };

  const handleMouseEnter5 = () => {
    setIsDropdownRumah(true);
  };

  const handleMouseLeave5 = () => {
    setIsDropdownRumah(false);
  };

  const handleMouseEnter6 = () => {
    setIsDropdownParfum(true);
  };

  const handleMouseLeave6 = () => {
    setIsDropdownParfum(false);
  };

  const handleMouseEnter7 = () => {
    setIsDropdownPria(true);
  };

  const handleMouseLeave7 = () => {
    setIsDropdownPria(false);
  };

  const handleMouseEnter8 = () => {
    setIsDropdownCerita(true);
  };

  const handleMouseLeave8 = () => {
    setIsDropdownCerita(false);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
    console.log("Sukses!!!");
  };

  return (
    <Headroom>
      <div className="header">
        <div className="left">
          <RxHamburgerMenu
            className="hamburger"
            onClick={toggleTextVisibility}
          ></RxHamburgerMenu>
          <button className="button">
            <div
              className="left-icon-search"
              onClick={toggleTextVisibility}
            ></div>
          </button>
          <Link to="*">
            <button className="button">
              <div className="left-icon-map"></div>
            </button>
          </Link>
          <button className="left-contact">
            <Link to="/">
              <div className="left-icon-contact">
                <span className="text-contact">Contact Us</span>
              </div>
            </Link>
          </button>
        </div>
        <div className="middle">
          <Link to="/">
            <span className="judul">MarketPlace</span>
          </Link>
        </div>
        <div className="right">
          <button className="button">
            <div className="icon-account" onClick={toggleTextVisibility}></div>
          </button>
          <button className="right-button" onClick={toggleTextVisibility}>
            <div className="icon-fav" onClick={toggleTextVisibility} />
          </button>
          <button className="right-button" onClick={toggleTextVisibility}>
            <div className="icon-bag" onClick={toggleTextVisibility} />
          </button>
        </div>
        <nav className="navbar">
          <div className="navbar-content">
            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Link className="perhiasan">Perhiasan</Link>
              {isDropdownPerhiasan && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link className="hadiah">Hadiah</Link>
              {isDropdownHadiah && (
                <div className="dropdown-menu">
                  <h3 className="text">Hadiah untuk....</h3>
                  <Link to="/">
                    <p className="link">Hadiah untuk....</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Hadiah untuk....</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Hadiah untuk....</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Hadiah untuk....</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Hadiah untuk....</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Link className="cinta">Cinta & Keterlibatan</Link>
              {isDropdownCinta && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <Link className="jam">Jam Tangan Bagus</Link>
              {isDropdownJam && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <Link className="rumah">Rumah & Aksesoris</Link>
              {isDropdownRumah && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter6}
              onMouseLeave={handleMouseLeave6}
            >
              <Link className="parfum">Parfum</Link>
              {isDropdownParfum && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter7}
              onMouseLeave={handleMouseLeave7}
            >
              <Link className="pria">Pria</Link>
              {isDropdownPria && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter8}
              onMouseLeave={handleMouseLeave8}
            >
              <Link className="cerita">Cerita</Link>
              {isDropdownCerita && (
                <div className="dropdown-menu">
                  <h3 className="text">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Berbelanja Berdasarkan Kategori</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </Headroom>
  );
};

export default Navbar;
