import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LoginIndex from "./views/Login/LoginIndex";
import Navigation from "./views/Navigation/navigation";

import App from "./App";
import InsomniaManagement from "./views/Topics/InsomniaManagement/InsomniaManagement";
import InsomniaSedatives from "./views/Topics/InsomniaSedatives/InsomniaSedatives";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AntipsychoticsGuide from "./views/Topics/AntipsychoticsGuide/antipsychoticsGuide";

import CognitiveEnhancersGuide from "./views/Topics/CognitiveEnhancersGuide/CognitiveEnhancersGuide";
import CognitiveEnhancersClinical from "./views/Topics/CognitiveEnhancersClinical/CognitiveEnhancersClinical";
import NPSManagement from "./views/Topics/NPSManagement/NPSManagement";
import Neuropsychiatric from "./views/Topics/Neuropsychiatric/Neuropsychiatric";
import Delirium from "./views/Topics/Delirium/Delirium";

import Panel from "./views/AdminPanel/Panel";
import InsomniaDeprescribing from "./views/Topics/InsomniaDeprescribing/InsomniaDeprescribing";
import InsomniaClinical from "./views/Topics/InsomniaClinical/InsomniaClinical";
import InsomniaSafety from "./views/Topics/InsomniaSafety/InsomniaSafety";
import MoodStabilizers from "./views/Topics/MoodStabilizers/MoodStabilizers";
import PsychotropicMonitoringSection from "./views/Topics/PsychotropicMonitoringSection/PsychotropicMonitoringSection";
import SearchResults from "./views/Topics/SearchResults/SearchResults";

import AntidepressantGuide from "./views/Topics/AntidepressantGuide/AntidepressantGuide";
import AntidepressantSafety from "./views/Topics/AntidepressantSafety/AntidepressantSafety";
import AntidepressantsClinical from "./views/Topics/AntidepressantsClinical/AntidepressantsClinical";
import AntipsychoticSafety from "./views/Topics/AntipsychoticSafety/AntipsychoticSafety";
import PolypharmacyCommon from "./views/Topics/PolypharmacyCommon/PolypharmacyCommon";
import PolypharmacyNotable from "./views/Topics/PolypharmacyNotable/PolypharmacyNotable";
import PrinciplesPolypharmacy from "./views/Topics/PrinciplesPolypharmacy/PrinciplesPolypharmacy";
import SearchResultPage from "./views/Search/SearchResultPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginIndex />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/AntipsychoticsGuide" element={<AntipsychoticsGuide />} />
      <Route path="/InsomniaManagement" element={<InsomniaManagement />} />
      <Route path="/MoodStabilizers" element={<MoodStabilizers />} />
      <Route path="/CognitiveEnhancersGuide" element={<CognitiveEnhancersGuide />} />
      <Route path="/CognitiveEnhancersClinical" element={<CognitiveEnhancersClinical />} />
      <Route path="/NPSManagement" element={<NPSManagement />} />
      <Route path="/Neuropsychiatric" element={<Neuropsychiatric />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/InsomniaSedatives" element={<InsomniaSedatives />} />
      <Route path="/InsomniaDeprescribing" element={<InsomniaDeprescribing />} />
      <Route path="/InsomniaClinical" element={<InsomniaClinical />} />
      <Route path="/InsomniaSafety" element={<InsomniaSafety />} />
      <Route path="/PsychotropicMonitoringSection" element={<PsychotropicMonitoringSection />} />
      <Route path="/SearchResults" element={<SearchResults />} />
      <Route path="/AntidepressantGuide" element={<AntidepressantGuide />} />
      <Route path="/AntidepressantSafety" element={<AntidepressantSafety />} />
      <Route path="/AntidepressantsClinical" element={<AntidepressantsClinical />} />
      <Route path="/AntipsychoticSafety" element={<AntipsychoticSafety />} />
      <Route path="/Delirium" element={<Delirium />} />
      <Route path="/PolypharmacyCommon" element={<PolypharmacyCommon />} />
      <Route path="/PolypharmacyNotable" element={<PolypharmacyNotable />} />
      <Route path="/PrinciplesPolypharmacy" element={<PrinciplesPolypharmacy />} />
      <Route path="/SearchResults" element={<SearchResults />} />
      <Route path="/search/:searchTerm" element={<SearchResultPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
