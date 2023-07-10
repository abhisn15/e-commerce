import { useEffect, useRef, useState } from "react";
import Headroom from "react-headroom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [isDropdownPerhiasan, setIsDropdownPerhiasan] = useState(false);
  const [isDropdownHadiah, setIsDropdownHadiah] = useState(false);
  const [isDropdownCinta, setIsDropdownCinta] = useState(false);
  const [isDropdownJam, setIsDropdownJam] = useState(false);
  const [isDropdownRumah, setIsDropdownRumah] = useState(false);
  const [isDropdownParfum, setIsDropdownParfum] = useState(false);
  const [isDropdownPria, setIsDropdownPria] = useState(false);
  const [isDropdownCerita, setIsDropdownCerita] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleMouseHover = () => {
    setIsDropdown(true);
  };

  const handleMouseOut = () => {
    setIsDropdown(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const left = gsap.timeline({ defaults: { duration: 2 } });
    const middle = gsap.timeline({ defaults: { duration: 2 } });
    const right = gsap.timeline({ defaults: { duration: 2 } });
    const ts = gsap.timeline({ defaults: { duration: 2 } });

    ts.from(".navbar-content", { opacity: 0 });
    left.from(".left-icon-search,.left-icon-map,.left-contact", { x: -80, opacity: 0 });
    middle.from(".middle", { y: -80, opacity: 0 });
    right.from(".icon-account,.icon-fav,.icon-bag", { x: 80, opacity: 0 });
  }, []);

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

  const handleToggle = () => {
    setIsDropdownSearch(!isDropdownSearch);
  };

  const handleToggleHide = () => {
    setIsDropdownSearch(!isDropdownSearch);
  };

  return (
    <Headroom>
      <div className="header">
        <div className="left">
          <RxHamburgerMenu className="hamburger"></RxHamburgerMenu>
          <button className="button" onClick={handleToggle}>
            <div className="left-icon-search"></div>
          </button>
          <Link to="*" className="ml-[40px]">
            <button className="button">
              <div className="left-icon-map"></div>
            </button>
          </Link>
          <div className="inline">
            <button className="left-contact">
              <Link to="/" className="ml-[40px]">
                <div className="left-icon-contact">
                  <span className="text-contact">Contact Us</span>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="middle">
          <Link to="/">
            <span className="judul">Cloufee & Co</span>
          </Link>
        </div>
        <div className="right flex gap-10 justify-end">
          <Link to="/account">
            <div
              className="icon-account"
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseOut}
            ></div>
          </Link>
          <Link to="./favorite-items">
            <div className="icon-fav" onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseOut} />
          </Link>
          <Link to="./bag">
            <div className="icon-bag" onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseOut} />
          </Link>
        </div>
        {isDropdown && (
          <div className="absolute z-10 w-96 top-10 right-0 p-20 bg-cyan-500">
            <h1>HALLO</h1>
          </div>
        )}
        <nav className="navbar">
          <div className="navbar-content">
            <div
              className="perhiasann"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Link className="perhiasan ml-[40px]">Perhiasan</Link>
              {isDropdownPerhiasan && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Kalung & Lionting</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kalung & Lionting</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kalung & Lionting</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kalung & Lionting</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kalung & Lionting</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link className="hadiah ml-[40px]">Hadiah</Link>
              {isDropdownHadiah && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Hadiah untuk....</h3>
                  <Link to="/">
                    <p className="link">Kelulusan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kelulusan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kelulusan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kelulusan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Kelulusan</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Link className="cinta ml-[40px]">Cinta & Keterlibatan</Link>
              {isDropdownCinta && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Pertunangan</h3>
                  <Link to="/">
                    <p className="link">Cincin Pertunangan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Cincin Pertunangan Pria</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <Link className="jam ml-[40px]">Jam Tangan Bagus</Link>
              {isDropdownJam && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Belanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Jam Tangan Wanita</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Jam Tangan Pria</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Patek Philippe</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Semua Jam Tangan Bagus</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <Link className="rumah ml-[40px]">Rumah & Aksesoris</Link>
              {isDropdownRumah && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Untuk Meja</h3>
                  <Link to="/">
                    <p className="link">Peralatan Makanan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Gelas & Barang Bar</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Sendok Garpu & Nampan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Teh Kopi</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter6}
              onMouseLeave={handleMouseLeave6}
            >
              <Link className="parfum ml-[40px]">Parfum</Link>
              {isDropdownParfum && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Belanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Koleksi Tanda Tangan</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Cloufee & Cinta</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Cloufee & Co. Wild Iris Parfum</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter7}
              onMouseLeave={handleMouseLeave7}
            >
              <Link className="pria ml-[40px]">Pria</Link>
              {isDropdownPria && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Berbelanja Berdasarkan Kategori</h3>
                  <Link to="/">
                    <p className="link">Kalung & Liontin</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Gelang</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Dering</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Aksesoris</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Jam Tangan</p>
                  </Link>
                </div>
              )}
            </div>
            <div
              onMouseEnter={handleMouseEnter8}
              onMouseLeave={handleMouseLeave8}
            >
              <Link className="cerita ml-[40px]">Cerita</Link>
              {isDropdownCerita && (
                <div className="dropdown-menu">
                  <h3 className="text mt-4">Sekarang Sedang Tren</h3>
                  <Link to="/">
                    <p className="link">Sekarang Buka: The Landmark</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Ini adalah Cloufee T</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Ini adalah Pakaian Keras Cloufee</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Nike/Cloufee</p>
                  </Link>
                  <Link to="/">
                    <p className="link">Temukan Kunci Cloufee</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div ref={dropdownRef} className="dropdown-container">
          {isDropdownSearch && (
            <div className="absolute flex flex-col bg-white w-[4000px] left-0 top-24 z-0">
              {/* Isi dropdown di sini */}
              <div className="flex flex-col items-end mt-10 w-[1310px] min-[1400px]:w-[1400px]">
                <RxCross1
                  className="cursor-pointer text-3xl"
                  onClick={handleToggleHide}
                />
              </div>
              <div className=""></div>
              <div>
                <form>
                  <input placeholder="" className="border border-black"></input>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
