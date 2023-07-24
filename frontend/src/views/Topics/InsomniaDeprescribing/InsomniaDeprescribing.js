import "./InsomniaDeprescribing.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import SearchBar from "../../searchBar/searchBar";
import Navigation from "../../Navigation/navigation";
// import Data from "../../searchBar/Data.json";

import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Search from "../../Search/Search";

export default function InsomniaDeprescribing() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8887/api/insomniadeprescribing")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedDrugs, setSelectedDrugs] = useState([]);

  const handleDrugClick = (dataObj) => {
    setSelectedDrugs((prevSelectedDrugs) => {
      const isSelected = prevSelectedDrugs.includes(dataObj);
      if (isSelected) {
        return prevSelectedDrugs.filter((drug) => drug !== dataObj);
      } else {
        return [...prevSelectedDrugs, dataObj];
      }
    });
  };

  if (Object.keys(data).length > 0) {
    return (
      <>
        <Navigation />
        <Search onSearch={handleSearch}></Search>
        <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
          <Typography variant="h3" align="center" gutterBottom>
            <div className="subtitle">Deprescribing Sedatives/Hypnotics</div>
          </Typography>

          <div className="grid-container">
            {Object.keys(data).map((id) => {
              const dataObj = data[id];
              const isDrugSelected = selectedDrugs.includes(dataObj);
              return (
                <div className="grid-item" key={id}>
                  <button
                    onClick={() => handleDrugClick(dataObj)}
                    className={`drug-button ${isDrugSelected ? "active" : ""}`}
                  >
                    BZRA {dataObj["Duration of BZRA use (months)"]} weeks
                  </button>

                  {isDrugSelected && (
                    <div className="box">
                      <div className="box-content">
                        <strong>Dose Reduction Schedule Duration (weeks)</strong>
                        <span>{dataObj["Dose Reduction Schedule Duration (weeks)"]}</span>
                      </div>
                      <div className="box-content">
                        <strong>Interval Between Dose Reductions (weeks)</strong>
                        <span>{dataObj["Interval Between Dose Reductions (weeks)"]}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="insomnia-footer">
            <p className="insomnia-notes">
              <b>Key: </b> BZRA: benzodiazepine and z-drugs (benzodiazepine agonists)
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
