import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/header/header";
import axios from "axios";
import DrawerComponent from "@/components/Drawer/Drawer";

const SearchResults = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchedUser, setSearchedUser] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const router = useRouter();
  const { query } = router.query;
  const searchRef = useRef(null);
  const selectRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fetchdata, setFetchData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchsearchdata = async (search, select, currentPage) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://girman-backend-fcr5.onrender.com/api/user?page=${currentPage}&limit=4&sortQuery=${select}&first_name=${search}`
      );
      console.log(response.data.user);

      setLoading(false);
      setTotalPages(response.data.totalPages);
      setSearchData(response.data.user);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchsearcheduser = async (query) => {
    const response = await axios.get(
      `https://girman-backend-fcr5.onrender.com/api/user/search?first_name=${query}`
    );

    setSearchedUser(response.data);
  };

  useEffect(() => {
    if (query) {
      fetchsearcheduser(query);
    } else {
      fetchsearchdata(
        searchRef.current?.value,
        selectRef.current?.value,
        currentPage
      );
    }
  }, [query, currentPage, searchRef.current?.value, selectRef.current?.value]);

  console.log(searchedUser);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setSearchedUser([]);
      router.push("/search");
      fetchsearchdata(e.target.value, currentPage);
    }
  };

  const handleSelect = () => {
    fetchsearchdata(
      searchRef.current.value,
      selectRef.current.value,
      currentPage
    );
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFetchDetails = async (id) => {
    const response = await axios.get(
      `https://girman-backend-fcr5.onrender.com/api/user/${id}`
    );
    setFetchData(response.data);
    setIsOpen(true);
  };

  return (
    <>
      <Header />
      <div style={styles.searchContainer}>
        <div style={styles.selectTag}>
          <div style={styles.searchBox} className="searchBox">
            <span style={styles.magnifier} className="magnifier">
              <img
                src="/asset/search.svg"
                alt="magnifier"
                style={styles.icon}
              />
            </span>

            <Input
              type="email"
              placeholder="Search"
              style={styles.input}
              ref={searchRef}
              className="input"
              onKeyPress={(e) => handleSearch(e)}
            />
            <div style={styles.drawer}>
              <DrawerComponent
                fetchdata={fetchdata}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
          <div style={styles.selectFlex} className="selectTag">
            <label htmlFor="select" className="selectTag">
              Sort by :
            </label>
            <select
              style={{ padding: "0 10px" }}
              onChange={() => handleSelect()}
              ref={selectRef}
              className="selectTag"
            >
              <option value="">Default</option>
              <option value="name">Name</option>
              <option value="city">City</option>
            </select>
          </div>
        </div>

        <div style={styles.gridcontainer} className="gridcontainer">
          {(query && searchedUser.length === 0) ||
          (!query && searchData.length === 0) ? (
    
            <div style={styles.nothing}>
              <img
                src="/asset/nothing.svg"
                alt="No results"
                style={styles.noResultsImage}
              />
              <p style={{ textAlign: "center" }}>Nothing is in cart</p>
            </div>
          ) : query && searchedUser.length > 0 ? (
       
            searchedUser.map((user) => (
              <Card style={styles.container} key={user._id}>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src={user.imageUrl} style={styles.avatar} />
                  </Avatar>
                  <CardTitle style={styles.name}>
                    {user.first_name} {user.last_name}
                  </CardTitle>
                  <div style={styles.location}>
                    <span>
                      <img
                        src="/asset/loc.svg"
                        alt="location"
                        style={{ width: "15px" }}
                      />
                    </span>
                    <p style={{ marginLeft: "5px" }}>{user.city}</p>
                  </div>
                </CardHeader>
                <CardFooter style={styles.footer}>
                  <div style={styles.phone}>
                    <div style={styles.contect}>
                      <span style={{ color: "red" }}>
                        <img src="/asset/phone.svg" alt="phone-image" />
                      </span>
                      <p>{user.contact_number}</p>
                    </div>
                    <p style={styles.contactpara}>available on phone</p>
                  </div>
                  <Button
                    style={styles.button}
                    onClick={() => handleFetchDetails(user._id)}
                  >
                    Fetch Details
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <>
              {searchData.length === 0 ? (
                <div style={styles.nothing}>
                  <img
                    src="/asset/nothing.svg"
                    alt="No results"
                    style={styles.noResultsImage}
                  />
                  <p style={{ textAlign: "center" }}>Nothing is in cart</p>
                </div>
              ) : (
                searchData.map((search) => (
                  <Card style={styles.container} key={search._id}>
                    <CardHeader>
                      <Avatar>
                        <AvatarImage
                          src={search.imageUrl}
                          style={styles.avatar}
                        />
                      </Avatar>
                      <CardTitle style={styles.name}>
                        {search.first_name} {search.last_name}
                      </CardTitle>
                      <div style={styles.location}>
                        <span>
                          <img
                            src="/asset/loc.svg"
                            alt="location"
                            style={{ width: "15px" }}
                          />
                        </span>
                        <p style={{ marginLeft: "5px" }}>{search.city}</p>
                      </div>
                    </CardHeader>
                    <CardFooter style={styles.footer}>
                      <div style={styles.phone}>
                        <div style={styles.contect}>
                          <span style={{ color: "red" }}>
                            <img src="/asset/phone.svg" alt="phone-image" />
                          </span>
                          <p>{search.contact_number}</p>
                        </div>
                        <p style={styles.contactpara}>available on phone</p>
                      </div>
                      <Button
                        style={styles.button}
                        onClick={() => handleFetchDetails(search._id)}
                      >
                        Fetch Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </>
          )}
        </div>
        {!query && searchData.length !== 0 && (
          <div className="pagination" style={styles.pagination}>
            <Button
              style={currentPage === 1 ? styles.disabledButton : styles.buttonP}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span style={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              style={
                currentPage === totalPages
                  ? styles.disabledButton
                  : styles.buttonP
              }
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;

const styles = {
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    gap: "40px",
  },

  container: {
    borderRadius: "15px",
    padding: "27px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "white",
    width: "100%",
  },
  name: {
    marginTop: "10px",
    fontSize: "30px",
    fontWeight: "bold",
  },
  avatar: {
    borderRadius: "50%",
    height: "50px",
    width: "50px",
  },
  location: {
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
  },
  contect: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    gap: "5px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "52px",
  },
  phone: {
    display: "flex",
    flexDirection: "column",
  },
  contactpara: {
    fontSize: "10px",
    marginLeft: "5px",
    color: "grey",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    borderRadius: "9px",
    fontSize: "17px",
  },
  selectTag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  selectFlex: {
    display: "flex",
    flexDirection: "column",
    marginTop: "34px",
    width: "9%",
  },
  buttonP: {
    padding: "8px 16px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
  disabledButton: {
    padding: "8px 16px",
    backgroundColor: "#e0e0e0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
  },
  pageInfo: {
    margin: "0 10px",
    fontWeight: "bold",
  },

  drawer: {
    position: "absolute",
    top: "10px",
    zIndex: "999",
  },
  nothing: {},
};
